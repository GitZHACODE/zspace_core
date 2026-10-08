#include <zspace/interface.h>
#include <chrono>
#include <cstdint>
#include <cstring>
#include <iostream>
#include <sstream>

using namespace zSpace;
using Clock = std::chrono::steady_clock;
using Json = nlohmann::json;

std::uint64_t digest = 14695981039346656037ULL;
template<class T> void hashValue(T value) {
	unsigned char bytes[sizeof(T)]; std::memcpy(bytes,&value,sizeof(T));
	for (auto byte : bytes) {digest ^= byte; digest *= 1099511628211ULL;}
}
std::string meshHash(zFnMesh& fn) {
	digest=14695981039346656037ULL;
	zPointArray positions; fn.getVertexPositions(positions);
	zVectorArray vertexNormals,faceNormals; fn.getVertexNormals(vertexNormals); fn.getFaceNormals(faceNormals);
	for (auto* values : {&positions,&vertexNormals,&faceNormals})
		for(auto& v : *values) {hashValue(v.x);hashValue(v.y);hashValue(v.z);}
	zIntArray connects,counts,edges; fn.getPolygonData(connects,counts); fn.getEdgeData(edges);
	for(auto* values : {&counts,&connects,&edges}) for(int i : *values) hashValue(i);
	std::ostringstream stream; stream << std::hex << digest; return stream.str();
}
void cube(zFnMesh& fn) {
	zPointArray p={zPoint(-1,-1,-1),zPoint(1,-1,-1),zPoint(1,1,-1),zPoint(-1,1,-1),
		zPoint(-1,-1,1),zPoint(1,-1,1),zPoint(1,1,1),zPoint(-1,1,1)};
	zIntArray counts(6,4), connects={0,3,2,1,4,5,6,7,0,1,5,4,1,2,6,5,2,3,7,6,3,0,4,7};
	fn.create(p,counts,connects);
}
int main() {
	try {
		Json report; report["method"]="Native Release smoothMesh only; no bridge/export/render. Three trials; exact mesh digest includes positions, normals, face corners/counts and edge endpoints.";
		for(int trial=0;trial<3;++trial) {
			zObjectMesh mesh; zFnMesh fn(mesh); cube(fn);
			for(int step=1;step<=8;++step) {
				auto start=Clock::now(); fn.smoothMesh(1,false);
				double ms=std::chrono::duration<double,std::milli>(Clock::now()-start).count();
				report["steps"].push_back({{"trial",trial},{"step",step},{"faces",fn.numPolygons()},{"ms",ms},{"hash",meshHash(fn)}});
			}
			cube(fn); auto start=Clock::now(); fn.smoothMesh(8,false);
			double ms=std::chrono::duration<double,std::milli>(Clock::now()-start).count();
			report["batch"].push_back({{"trial",trial},{"ms",ms},{"faces",fn.numPolygons()},{"hash",meshHash(fn)}});
		}
		zObjectMesh grid; zFnMesh fn(grid); zPointArray points; zIntArray counts,connects;
		const int size=32;
		for(int y=0;y<=size;++y)for(int x=0;x<=size;++x)points.emplace_back(float(x),float(y),float(x*x+y*y)*.001f);
		for(int y=0;y<size;++y)for(int x=0;x<size;++x){int a=y*(size+1)+x;counts.push_back(4);for(int v:{a,a+1,a+size+2,a+size+1})connects.push_back(v);}
		fn.create(points,counts,connects);
		for(int trial=0;trial<3;++trial){
			zCurvatureArray curves; zVectorArray a,b;
			auto start=Clock::now(); fn.getPrincipalCurvatures(curves,a,b);
			double ms=std::chrono::duration<double,std::milli>(Clock::now()-start).count();
			digest=14695981039346656037ULL;
			for(auto& c:curves){hashValue(c.k1);hashValue(c.k2);}
			for(auto* values:{&a,&b})for(auto& v:*values){hashValue(v.x);hashValue(v.y);hashValue(v.z);}
			std::ostringstream stream;stream<<std::hex<<digest;
			report["curvature"].push_back({{"trial",trial},{"vertices",curves.size()},{"ms",ms},{"hash",stream.str()}});
		}
		// One division of 125,000 quads reaches the user's exact target size.
		points.clear();counts.clear();connects.clear();
		const int width=500,height=250;
		for(int y=0;y<=height;++y)for(int x=0;x<=width;++x)points.emplace_back(float(x),float(y),float(x*x+y*y)*.0001f);
		for(int y=0;y<height;++y)for(int x=0;x<width;++x){int a=y*(width+1)+x;counts.push_back(4);for(int v:{a,a+1,a+width+2,a+width+1})connects.push_back(v);}
		for(int trial=0;trial<3;++trial){
			fn.create(points,counts,connects);auto start=Clock::now();fn.smoothMesh(1,false);
			double ms=std::chrono::duration<double,std::milli>(Clock::now()-start).count();
			report["target500k"].push_back({{"trial",trial},{"inputFaces",125000},{"faces",fn.numPolygons()},{"ms",ms},{"hash",meshHash(fn)}});
		}
		// Small legacy geometry-query fixture, including nonuniform offsets.
		cube(fn); digest=14695981039346656037ULL;
		for(zItMeshEdge edge(grid);!edge.end();edge++) {
			auto v=edge.getVector();hashValue(v.x);hashValue(v.y);hashValue(v.z);
		}
		for(zItMeshFace face(grid);!face.end();face++) {
			auto c=face.getPrincipalCurvature();hashValue(c.k1);hashValue(c.k2);
			auto center=face.getCenter(),normal=face.getNormal();
			std::vector<double> offsets={.1,.2,.3,.4};zPointArray out;
			face.getOffsetFacePositions_Variable(offsets,center,normal,out);
			hashValue(out.size());for(auto& v:out){hashValue(v.x);hashValue(v.y);hashValue(v.z);}
		}
		std::ostringstream queryHash;queryHash<<std::hex<<digest;report["geometryQueriesHash"]=queryHash.str();
		std::cout<<report.dump(2)<<'\n';return 0;
	} catch(const std::exception& error){std::cerr<<error.what()<<'\n';return 1;}
}
