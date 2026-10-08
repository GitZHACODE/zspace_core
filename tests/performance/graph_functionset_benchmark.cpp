#ifdef _WIN32
#define WIN32_LEAN_AND_MEAN
#define NOMINMAX
#include <windows.h>
#include <psapi.h>
#endif
#include <zspace/interface.h>
#include <src/zInterface/objects/zGraphObjectStorage.h>
#include <chrono>
#include <cstdint>
#include <cstring>
#include <iostream>
#include <fstream>
#include <sstream>

using namespace zSpace;
using Json = nlohmann::json;
using Clock = std::chrono::steady_clock;
static std::uint64_t digest;
template<class T> void hashValue(const T& value) {
 unsigned char bytes[sizeof(T)]; std::memcpy(bytes, &value, sizeof(T));
 for (unsigned char byte : bytes) { digest ^= byte; digest *= 1099511628211ULL; }
}
void hashPoint(const zPoint& p) { hashValue(p.x); hashValue(p.y); hashValue(p.z); }
void hashColor(const zColor& c) { hashValue(c.r);hashValue(c.g);hashValue(c.b);hashValue(c.a); }
std::string hexDigest() { std::ostringstream s; s << std::hex << digest; return s.str(); }
std::string flatDigest(zObjectGraph& object) {
 digest=14695981039346656037ULL;const auto& d=zGraphObjectStorage::read(object);
 for(auto& p:d.positions)hashPoint(p);for(int i:d.edgeVertexIndices)hashValue(i);
 for(auto& c:d.vertexColors)hashColor(c);for(auto& c:d.edgeColors)hashColor(c);
 for(double w:d.vertexWeights)hashValue(w);for(double w:d.edgeWeights)hashValue(w);
 return hexDigest();
}
template<class F> Json capture(F operation) {
 try { return operation(); } catch(const std::exception& e) { return Json{{"exception",e.what()}}; }
}
Json backendSnapshot(zGraph& t) {
 Json out;
 out["vertices"]=Json::array();out["edges"]=Json::array();out["halfedges"]=Json::array();
 for(auto& v:t.vertices)out["vertices"].push_back({v.getId(),v.getHalfEdge(),v.isActive()});
 for(auto& e:t.edges)out["edges"].push_back({e.getId(),e.getHalfEdge(0),e.getHalfEdge(1),e.isActive()});
 for(auto& h:t.halfEdges)out["halfedges"].push_back({h.getId(),h.getSym(),h.getNext(),h.getPrev(),h.getVertex(),h.getEdge(),h.getFace(),h.isActive()});
 return out;
}
Json topologySnapshot(zObjectGraph& object) {
 auto t=zGraphObjectStorage::get(static_cast<const zObjectGraph&>(object));return backendSnapshot(t);
}
Json constructionFixtures() {
 Json report;
 // Complete links, map entries and handles for both construction overloads.
 // Equal-angle, nonplanar, duplicate-position, self-edge and high-valence inputs.
 for(int shape=0;shape<5;shape++)for(int planar=0;planar<2;planar++){
  zPointArray p={zPoint(0,0,0),zPoint(1,0,0),zPoint(2,0,0),zPoint(0,1,1),zPoint(-1,0,-1),zPoint(0,0,0)};
  zIntArray c;
  if(shape==1)c={0,1,0,2,3,0,0,4};
  if(shape==2)c={0,1,0,1,1,0,0,0,5,0};
  if(shape==3)c={0,1,1,2,2,0,3,4};
  if(shape==4){for(int i=0;i<64;i++){p.emplace_back(float(i%7),float(i%11),float(i%3));c.push_back(0);c.push_back(int(p.size()-1));}}
  zGraph t;zVector norm(0,1,1),reference(1,0,0);
  if(planar)t.create(p,c,norm,reference,3);else t.create(p,c,false,3);
  auto snapshot=[&](){
   Json out=backendSnapshot(t);out["positionMap"]=t.positionVertex;out["halfedgeMap"]=t.existingHalfEdges;
   out["vertexHandles"]=Json::array();out["edgeHandles"]=Json::array();out["halfedgeHandles"]=Json::array();
   for(auto& v:t.vHandles)out["vertexHandles"].push_back({v.id,v.he});
   for(auto& e:t.eHandles)out["edgeHandles"].push_back({e.id,e.he0,e.he1});
   for(auto& h:t.heHandles)out["halfedgeHandles"].push_back({h.id,h.v,h.e,h.n,h.p});
   digest=14695981039346656037ULL;for(auto& v:t.vertexPositions)hashPoint(v);for(auto& v:t.vertexColors)hashColor(v);for(auto& v:t.edgeColors)hashColor(v);for(double w:t.vertexWeights)hashValue(w);for(double w:t.edgeWeights)hashValue(w);
   out["attributes"]=hexDigest();return out;
  };
  const auto key=std::to_string(shape)+"-"+std::to_string(planar);report[key]=snapshot();
  // Reuse storage, then append through the existing incremental API.
  t.create(p,c,false);zPoint extra(9,8,7);bool vertexResize=t.addVertex(extra);int a=0,b=t.n_v-1;bool edgeResize=t.addEdges(a,b);
  report[key+"-recreate-append"]=snapshot();report[key+"-returns"]={vertexResize,edgeResize};
 }
 return report;
}
Json querySnapshot(zObjectGraph& object, bool rings) {
 zFnGraph fn(object);Json out;out["counts"]={fn.numVertices(),fn.numEdges(),zGraphObjectStorage::read(object).numHalfEdges()};
 out["flat"]=flatDigest(object);out["topology"]=capture([&]{return topologySnapshot(object);});
 digest=14695981039346656037ULL;
 zPointArray centers;zDoubleArray lengths;fn.getCenters(zHalfEdgeData,centers);for(auto& p:centers)hashPoint(p);
 hashValue(fn.getHalfEdgeLengths(lengths));for(double l:lengths)hashValue(l);
 for(zItGraphEdge e(object);!e.end();e++){hashValue(e.getId());hashValue(e.isActive());hashPoint(e.getCenter());hashPoint(e.getVector());hashValue(e.getLength());zIntArray ids={-10};e.getVertices(ids);for(int i:ids)hashValue(i);}
 out["geometry"]=hexDigest();
 out["halfedgeQueries"]=Json::array();
 const int n=zGraphObjectStorage::read(object).numHalfEdges();
 for(int i=0;i<n;i++)out["halfedgeQueries"].push_back(capture([&]()->Json{
  zItGraphHalfEdge h(object,i);digest=14695981039346656037ULL;
  hashPoint(h.getCenter());hashPoint(h.getVector());hashValue(h.getLength());hashColor(h.getColor());
  zPointArray p;h.getVertexPositions(p);for(auto& v:p)hashPoint(v);
  zIntArray ids={-99};h.getVertices(ids);
  return Json{{"id",h.getId()},{"active",h.isActive()},{"boundary",h.onBoundary()},{"sym",h.getSym().getId()},{"next",h.getNext().getId()},{"prev",h.getPrev().getId()},{"start",h.getStartVertex().getId()},{"head",h.getVertex().getId()},{"edge",h.getEdge().getId()},{"vertices",ids},{"geometry",hexDigest()}};
 }));
 if(rings){out["rings"]=Json::array();for(int i=0;i<fn.numVertices();i++)out["rings"].push_back(capture([&]()->Json{
  zItGraphVertex v(object,i);zIntArray he={-33},edges={-33},verts={-33};v.getConnectedHalfEdges(he);v.getConnectedEdges(edges);v.getConnectedVertices(verts);
  zIntArray bsf={-33};zIntPairArray pairs;v.getBSF(bsf,pairs);
  return Json{{"halfedges",he},{"edges",edges},{"vertices",verts},{"valence",v.getValence()},{"bfs",bsf},{"parents",pairs}};
 }));}
 out["flatAfter"]=flatDigest(object);return out;
}
void createShape(zFnGraph& fn,int edges,const std::string& shape,double* inputMs=nullptr,double* installMs=nullptr) {
 auto begin=Clock::now();
 zPointArray p;zIntArray c;const int vertices=shape=="loop"?edges:edges+1;
 p.reserve(vertices);c.reserve(edges*2);
 for(int i=0;i<vertices;i++)p.emplace_back(float(i),float((i*std::int64_t(i))%97),float(i%3)*.125f);
 for(int i=0;i<edges;i++){
  int a=i,b=(i+1)%vertices;
  if(shape=="branch") {a=i/2;b=i+1;}
  if(shape=="disconnected") {a=(i/4)*5+(i%4);b=a+1;}
  if(i%2)std::swap(a,b);c.push_back(a);c.push_back(b);
 }
 if(shape=="disconnected"){p.clear();for(int i=0;i<(edges+3)/4*5;i++)p.emplace_back(float(i),float(i%7),0.0f);}
 auto ready=Clock::now();fn.create(p,c);auto end=Clock::now();
 if(inputMs)*inputMs=std::chrono::duration<double,std::milli>(ready-begin).count();
 if(installMs)*installMs=std::chrono::duration<double,std::milli>(end-ready).count();
}
Json fixtures() {
 Json report; const zPointArray base={zPoint(0,0,0),zPoint(2,1,0),zPoint(3,-1,0),zPoint(4,2,0),zPoint(-1,3,0),zPoint(20,20,1)};
 struct Case {const char* name;zIntArray edges;bool rings;};
 for(const auto& f:std::vector<Case>{{"empty",{},false},{"chain",{0,1,2,1,2,3},true},{"loop",{0,1,1,2,2,3,3,0},true},{"branch",{0,1,2,0,0,3,4,0},true},{"disconnected",{0,1,2,3},true},{"duplicates",{0,1,0,1,1,0},false},{"self",{0,0,1,2},false}}){
  zObjectGraph object;zFnGraph fn(object);zPointArray p=f.name==std::string("empty")?zPointArray{}:base;auto connects=f.edges;fn.create(p,connects);
  if(!p.empty()){zColorArray vc(p.size(),zColor(.3f,.6f,.8f,.2f)),ec(connects.size()/2,zColor(.9f,.1f,.4f,.7f));zDoubleArray ew(connects.size()/2,3.125);fn.setVertexColors(vc,false);fn.setEdgeColors(ec,false);fn.setEdgeWeights(ew);}
  report[f.name]=querySnapshot(object,f.rings);
  zObjectGraph copied(object),assigned;assigned=object;report[std::string(f.name)+"-copy"]=querySnapshot(copied,false);report[std::string(f.name)+"-assignment"]=querySnapshot(assigned,false);
 }
 zObjectGraph object;zFnGraph fn(object);createShape(fn,6,"chain");
 // Each mutation uses legacy mutable topology access; preserve compaction observations.
 zItGraphEdge(object,1).deactivate();report["edge-inactive"]=capture([&]{return querySnapshot(object,false);});
 createShape(fn,6,"chain");zItGraphVertex(object,2).deactivate();report["vertex-inactive"]=capture([&]{return querySnapshot(object,false);});
 createShape(fn,6,"chain");zItGraphHalfEdge(object,2).deactivate();report["halfedge-inactive"]=capture([&]{return querySnapshot(object,false);});
 createShape(fn,4,"chain");auto h=zItGraphHalfEdge(object,0);zColor* raw=h.getRawColor();raw->r=.123f;auto id=h.getId();raw->g=.456f;report["escaped-color"]=querySnapshot(object,true);hashValue(id);
 createShape(fn,4,"chain");auto a=zItGraphHalfEdge(object,0),b=zItGraphHalfEdge(object,2);a.setNext(b);report["edited-links"]=querySnapshot(object,false);
 createShape(fn,4,"chain");auto& t=zGraphObjectStorage::get(object);t.edgeWeights[0]=8.25;h=zItGraphHalfEdge(object,0);h.getId();t.edgeWeights[0]=9.25;report["escaped-topology"]=querySnapshot(object,false);
 createShape(fn,4,"chain");h=zItGraphHalfEdge(object,0);zItGraphVertex head(object,2);h.setVertex(head);report["edited-endpoint"]=querySnapshot(object,false);
 createShape(fn,4,"chain");h=zItGraphHalfEdge(object,0);h.setId(2);report["edited-halfedge-id"]=querySnapshot(object,false);
 for(const std::string shape:{"chain","loop"}){
  createShape(fn,4,shape);zObjectMesh mesh;
  report["ribbon-"+shape]=capture([&]()->Json{fn.getGraphMesh(mesh,.2,zVector(0,0,1));zFnMesh mf(mesh);digest=14695981039346656037ULL;zPointArray p;zVectorArray vn,fnorm;zIntArray counts,connects;mf.getVertexPositions(p);mf.getVertexNormals(vn);mf.getFaceNormals(fnorm);mf.getPolygonData(connects,counts);for(auto& a:p)hashPoint(a);for(auto& a:vn)hashPoint(a);for(auto& a:fnorm)hashPoint(a);for(int i:counts)hashValue(i);for(int i:connects)hashValue(i);return Json(hexDigest());});
 }
 zPointArray p={zPoint(0,0,0),zPoint(0,0,0),zPoint(-0.0f,0,0),zPoint(.00000049f,0,0)};zIntArray c={0,3,1,2};fn.create(p,c);zItGraphVertex found;fn.vertexExists(p[1],found);report["duplicate-position-id"]=found.getId();report["duplicate-position"]=querySnapshot(object,false);
 fn.averageVertices(3);report["average-3"]=flatDigest(object);fn.computeEdgeColorfromVertexColor();fn.computeVertexColorfromEdgeColor();report["colors"]=flatDigest(object);
 for(auto invalid:zIntArray{0,-1,1}) {p=base;c=invalid==0?zIntArray{0}:invalid==-1?zIntArray{0,-1}:zIntArray{0,999};fn.create(p,c);report["invalid-"+std::to_string(invalid)]=capture([&]{zItGraphHalfEdge he(object,0);return Json(he.size());});}
 createShape(fn,4,"chain");zPoint* positions=fn.getRawVertexPositions();fn.getBounds(positions[0],positions[1]);report["bounds-alias"]=flatDigest(object);
 createShape(fn,4,"chain");positions=fn.getRawVertexPositions();positions[0].z=7.75;h=zItGraphHalfEdge(object,0);h.getVector();positions=fn.getRawVertexPositions();positions[1].y=-5.25;report["raw-position-reacquired"]=querySnapshot(object,true);
 createShape(fn,4,"chain");zObjectGraph duplicate=fn.getDuplicate();report["getDuplicate"]=querySnapshot(duplicate,true);zObjectGraph moved(std::move(duplicate));report["move"]=querySnapshot(moved,true);
 return report;
}
// Public API only: this mode can also run beside saved baseline DLLs. Do not
// access Impl/storage here; their private layout can differ between builds.
Json publicFixtures() {
 Json report;
 auto snapshot=[](zObjectGraph& object)->Json{
  zFnGraph fn(object);zPointArray p;zIntArray e;zColorArray vc,ec;zDoubleArray vw,ew;
  fn.getVertexPositions(p);fn.getEdgeData(e);fn.getVertexColors(vc);fn.getEdgeColors(ec);fn.getVertexWeights(vw);fn.getEdgeWeights(ew);
  digest=14695981039346656037ULL;for(auto& v:p)hashPoint(v);for(int i:e)hashValue(i);for(auto& c:vc)hashColor(c);for(auto& c:ec)hashColor(c);for(double w:vw)hashValue(w);for(double w:ew)hashValue(w);
  return Json{{"vertices",fn.numVertices()},{"edges",fn.numEdges()},{"digest",hexDigest()}};
 };
 for(int kind=0;kind<5;kind++){
  zObjectGraph object;zFnGraph fn(object);createShape(fn,4,"chain");
  zPoint* p=nullptr;zColor* c=nullptr;
  if(kind<=2)p=fn.getRawVertexPositions();
  if(kind==3)c=zItGraphVertex(object,0).getRawColor();
  if(kind==4)c=zItGraphEdge(object,0).getRawColor();
  // One query materializes topology but does not yet replace the flat arrays.
  zItGraphHalfEdge h(object);h.getId();
  if(p)p[0].z=9.125f;if(c)c[0].g=.123f;
  if(kind==1){zColorArray colors(5,zColor(.1f,.2f,.3f,1));fn.setVertexColors(colors,false);}
  if(kind==2){zPointArray positions;fn.getVertexPositions(positions);zIntArray edges;fn.getEdgeData(edges);fn.create(positions,edges);}
  report["retained-flat-"+std::to_string(kind)]=snapshot(object);
 }
 for(bool copy:{false,true}){
  zObjectGraph object;zFnGraph fn(object);createShape(fn,4,"chain");
  auto raw=zItGraphHalfEdge(object,0).getRawColor();raw->r=.123f;
  zItGraphHalfEdge(object).getId();raw->g=.456f;
  if(copy){zObjectGraph copied(object),assigned;assigned=object;report["mutable-copy"]=snapshot(copied);report["mutable-assignment"]=snapshot(assigned);}
  else report["mutable-retained"]=snapshot(object);
 }
 return report;
}
int main(int argc,char** argv) {
 try {
  if(argc>1&&std::string(argv[1])=="--construction"){std::cout<<constructionFixtures().dump(2)<<'\n';return 0;}
  if(argc>1&&std::string(argv[1])=="--verify-construction"){std::ifstream input(argv[2]);Json expected;input>>expected;auto actual=constructionFixtures();if(actual!=expected){std::cerr<<Json::diff(expected,actual).dump(2)<<'\n';return 2;}std::cout<<"Exact construction parity passed\n";return 0;}
#ifdef ZSPACE_GRAPH_PROFILE
  if(argc>1&&std::string(argv[1])=="--counts"){
   Json counts;
   for(const std::string shape:{"chain","loop","branch","disconnected"}){
    zObjectGraph object;zFnGraph fn(object);createShape(fn,1000,shape);
    zItGraphHalfEdge(object,0).getVector();for(zItGraphHalfEdge h(object);!h.end();h++){h.getId();h.getVertex();h.getSym();}
    auto measured=zGraphObjectStorage::profileCounts(object);
    if(measured.first!=1||measured.second!=0)throw std::runtime_error("Unexpected read-only graph synchronization");
    counts[shape]={{"topologyBuilds",measured.first},{"edgeListSyncs",measured.second}};
   }
   zObjectGraph object;zFnGraph fn(object);createShape(fn,4,"chain");fn.getRawVertexPositions();zItGraphHalfEdge(object).getId();zPointArray p;fn.getVertexPositions(p);
   auto escaped=zGraphObjectStorage::profileCounts(object);if(escaped.second==0)throw std::runtime_error("Escaped flat view lost legacy synchronization");
   counts["escaped-flat"]={{"topologyBuilds",escaped.first},{"edgeListSyncs",escaped.second}};std::cout<<counts.dump(2)<<'\n';return 0;
  }
#endif
  if(argc>1&&std::string(argv[1])=="--public"){std::cout<<publicFixtures().dump(2)<<'\n';return 0;}
  if(argc>1&&std::string(argv[1])=="--verify-public"){std::ifstream input(argv[2]);Json expected;input>>expected;auto actual=publicFixtures();if(actual!=expected){std::cerr<<Json::diff(expected,actual).dump(2)<<'\n';return 2;}std::cout<<"Exact retained-view public API parity passed\n";return 0;}
  if(argc==1){std::cout<<fixtures().dump(2)<<'\n';return 0;}
  if(std::string(argv[1])=="--verify") {std::ifstream input(argv[2]);Json golden;input>>golden;Json actual=fixtures();if(actual!=golden){std::cerr<<Json::diff(golden,actual).dump(2)<<'\n';return 2;}std::cout<<"Exact graph fixture parity passed\n";return 0;}
  Json report;report["scope"]="Native Release; phase timings exclude JS/WASM/render. Large baseline full halfedge scans bounded to avoid quadratic runtime; one geometry sample at large sizes.";
  const bool full=std::string(argv[1])=="--after";
  for(const std::string shape:{"chain","loop","branch","disconnected"})for(int edges:{1000,10000,100000,500000})for(int trial=0;trial<3;trial++){
   zObjectGraph object;zFnGraph fn(object);double inputMs,installMs;auto start=Clock::now();createShape(fn,edges,shape,&inputMs,&installMs);auto installed=Clock::now();
   zDoubleArray lengths;double total=fn.getEdgeLengths(lengths);auto queried=Clock::now();
   const auto& topology=zGraphObjectStorage::get(static_cast<const zObjectGraph&>(object));auto built=Clock::now();
   auto h=zItGraphHalfEdge(object,0);auto vec=h.getVector();auto sampled=Clock::now();
   double scanMs=-1;std::uint64_t scanHash=0;
   if(full||edges<=1000){digest=14695981039346656037ULL;auto scanStart=Clock::now();for(zItGraphHalfEdge it(object);!it.end();it++){hashValue(it.getId());hashValue(it.getVertex().getId());hashValue(it.getSym().getId());}scanMs=std::chrono::duration<double,std::milli>(Clock::now()-scanStart).count();scanHash=digest;}
   if(full){
    const auto& flat=zGraphObjectStorage::read(object);digest=14695981039346656037ULL;
    for(int id=0;id<edges*2;id++){hashValue(id);hashValue(flat.edgeVertexIndices[id^1]);int sym=id^1;hashValue(sym);}
    if(digest!=scanHash)throw std::runtime_error("Directed ID/head/sym scan differs from original flat edge order");
   }
   const auto ms=[](auto a,auto b){return std::chrono::duration<double,std::milli>(b-a).count();};
   report["samples"].push_back({{"shape",shape},{"vertices",fn.numVertices()},{"edges",fn.numEdges()},{"trial",trial},{"prepareAndInstallMs",ms(start,installed)},{"flatLengthsMs",ms(installed,queried)},{"topologyBuildMs",ms(queried,built)},{"oneHalfedgeVectorMs",ms(built,sampled)},{"fullHalfedgeScanMs",scanMs},{"scanDigest",scanHash},{"flatDigest",flatDigest(object)},{"lengthTotal",total},{"vector",{vec.x,vec.y,vec.z}},{"topologyVertices",topology.vertices.size()}});
   report["samples"].back()["inputPreparationMs"]=inputMs;
   report["samples"].back()["storageInstallationMs"]=installMs;
#ifdef _WIN32
   PROCESS_MEMORY_COUNTERS memory{};memory.cb=sizeof(memory);
   if(GetProcessMemoryInfo(GetCurrentProcess(),&memory,sizeof(memory))){
    report["samples"].back()["workingSetBytes"]=memory.WorkingSetSize;
    report["samples"].back()["processPeakWorkingSetBytes"]=memory.PeakWorkingSetSize;
   }
#endif
#ifdef ZSPACE_GRAPH_PROFILE
   auto counts=zGraphObjectStorage::profileCounts(object);report["samples"].back()["topologyBuilds"]=counts.first;report["samples"].back()["edgeListSyncs"]=counts.second;
#endif
  }
  std::cout<<report.dump(2)<<'\n';
 }catch(const std::exception& e){std::cerr<<e.what()<<'\n';return 1;}
}
