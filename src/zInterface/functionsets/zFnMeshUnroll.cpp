// Face-list strip unfolding. Geometry operations belong to zFnMesh.
#include <zspace/zInterface/functionsets/zFnMesh.h>
#include <Eigen/Dense>
#include <map>
#include <queue>
#include <stdexcept>

namespace zSpace
{
ZSPACE_INLINE void zFnMesh::unroll(zObjectMesh& output, bool triangulateNonPlanar, double tolerance)
{
    using V=Eigen::Vector3d;
    if(!meshObj || !std::isfinite(tolerance) || tolerance<=0) throw std::invalid_argument("Invalid unroll input or tolerance.");
    zObjectMesh working=*meshObj;
    zFnMesh fn(working); zPointArray points; zIntArray connects,counts;
    fn.getVertexPositions(points); fn.getPolygonData(connects,counts);
    if(points.empty() || counts.empty()) throw std::invalid_argument("Cannot unroll an empty mesh.");
    auto v=[&](int i)->V { const auto& p=points.at(i); return V(p.x,p.y,p.z); };
    double scale=0; V origin=v(0);
    for(int i=0;i<int(points.size());++i) {
        if(!v(i).allFinite()) throw std::invalid_argument("Unroll input has non-finite coordinates.");
        scale=std::max(scale,(v(i)-origin).norm());
    }
    const double eps=tolerance*std::max(scale,1e-6);
    bool nonplanar=false; size_t offset=0;
    for(int count:counts)
    {
        if(count<3) throw std::invalid_argument("Unroll requires polygon faces.");
        V a=v(connects[offset]), normal=V::Zero();
        for(int j=0;j<count;++j) normal+=(v(connects[offset+j])-a).cross(v(connects[offset+(j+1)%count])-a);
        if(normal.norm()<eps*eps) throw std::invalid_argument("Cannot unroll a degenerate face.");
        normal.normalize();
        for(int j=0;j<count;++j) if(std::abs((v(connects[offset+j])-a).dot(normal))>eps) nonplanar=true;
        offset+=count;
    }
    if(nonplanar)
    {
        if(!triangulateNonPlanar) throw std::invalid_argument("Unroll requires planar faces or triangulation.");
        fn.triangulate(); fn.getPolygonData(connects,counts);
    }
    struct Edge { int face,a,b; };
    std::map<std::pair<int,int>,std::vector<Edge>> edges;
    std::vector<std::vector<int>> faces; offset=0;
    for(int i=0;i<int(counts.size());++i)
    {
        faces.emplace_back(connects.begin()+offset,connects.begin()+offset+counts[i]); offset+=counts[i];
        const auto& f=faces.back();
        for(int j=0;j<int(f.size());++j)
        {
            int a=f[j],b=f[(j+1)%f.size()]; auto& group=edges[std::minmax(a,b)];
            if(a==b || (v(b)-v(a)).norm()<eps) throw std::invalid_argument("Collapsed unroll edge.");
            group.push_back({i,a,b});
            if(group.size()>2) throw std::invalid_argument("Unroll requires manifold strips.");
            if(group.size()==2 && group[0].a==a) throw std::invalid_argument("Inconsistent face winding.");
        }
    }
    std::vector<V> flat(points.size(),V::Zero());
    std::vector<bool> assigned(points.size(),false),seen(faces.size(),false);
    std::queue<Edge> pending; pending.push({0,faces[0][0],faces[0][1]});
    flat[faces[0][1]]=V((v(faces[0][1])-v(faces[0][0])).norm(),0,0);
    assigned[faces[0][0]]=assigned[faces[0][1]]=true;
    while(!pending.empty())
    {
        Edge next=pending.front(); pending.pop(); if(seen[next.face]) continue;
        const auto& face=faces[next.face]; V a=v(next.a), x=(v(next.b)-a).normalized(), normal=V::Zero();
        for(size_t j=0;j<face.size();++j) normal+=(v(face[j])-a).cross(v(face[(j+1)%face.size()])-a);
        normal.normalize(); V y=normal.cross(x);
        V fx=(flat[next.b]-flat[next.a]).normalized(), fy(-fx.y(),fx.x(),0);
        for(int id:face)
        {
            V d=v(id)-a, p=flat[next.a]+fx*d.dot(x)+fy*d.dot(y);
            if(assigned[id] && (flat[id]-p).norm()>eps*4)
                throw std::invalid_argument("Mesh cannot unfold without a seam or metric distortion.");
            flat[id]=p; assigned[id]=true;
        }
        seen[next.face]=true;
        for(size_t j=0;j<face.size();++j)
            for(auto edge:edges[std::minmax(face[j],face[(j+1)%face.size()])])
                if(!seen[edge.face]) pending.push(edge);
    }
    for(bool done:seen) if(!done) throw std::invalid_argument("Unroll one connected strip at a time.");
    zPointArray result;
    for(size_t i=0;i<flat.size();++i)
    {
        if(!assigned[i]) throw std::invalid_argument("Unroll input has isolated vertices.");
        result.emplace_back(float(flat[i].x()),float(flat[i].y()),0.0f);
    }
    zObjectMesh candidate; zFnMesh out(candidate); out.create(result,counts,connects); out.computeMeshNormals();
    output=std::move(candidate);
}
}
