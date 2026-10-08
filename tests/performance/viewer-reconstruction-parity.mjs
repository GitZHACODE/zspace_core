// Run from the standalone viewer root; compares with this milestone's snapshot.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { build } from 'esbuild';
const prior=await readFile('../zspace_core/wasm/tmp/viewer-layout-before/legacy/viewer-reconstruction-before/renderers.ts','utf8');
async function load(old){
 const result=await build({stdin:{contents:`export * from './src/rendering/renderers'; export * from './src/scene/objects'; export * from './src/scene/selection'; export * from './src/rendering/meshSurfaceBuffers'; export * from './src/rendering/meshBoundaryCache'; export * from './src/rendering/meshBoundaryEdges'; export * as THREE from 'three';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node',plugins:old?[{name:'prior-renderer',setup(b){b.onLoad({filter:/[\\/]src[\\/]rendering[\\/]renderers\.ts$/},()=>({contents:prior+'\nexport { buildFaceColorGeometry };',loader:'ts'}));}}]:[]});
 return import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
}
const before=await load(true),after=await load(false);
const digest=values=>{const hash=createHash('sha256');for(const a of values)if(a)hash.update(Buffer.from(a.buffer,a.byteOffset,a.byteLength));return hash.digest('hex');};
function mesh(faces,vertices=12){const p=after.emptyMeshPayload();p.positions=new Float32Array(vertices*3);for(let i=0;i<vertices;i++)p.positions.set([i%4,Math.floor(i/4),i*.02],i*3);p.normals=new Float32Array(p.positions.length).fill(.25);p.colors=Float32Array.from(p.positions,(_,i)=>i*.017);p.faceCounts=new Uint32Array(faces.map(f=>f.length));p.faceConnects=new Uint32Array(faces.flat());p.indices=after.triangulateFaceConnects(p.faceCounts,p.faceConnects);p.edgeIndices=after.edgeIndicesFromFaceConnects(p.faceCounts,p.faceConnects);p.edgeWeights=new Float32Array(p.edgeIndices.length/2).fill(1);p.faceCount=faces.length;p.faceColors=Float32Array.from(p.indices,(_,i)=>i*.01);return p;}
let surfaceCases=0,rendererCases=0;
function surface(p){const old=before.buildFaceColorGeometry(p),next=after.faceColorSurfaceBuffers(p);assert.equal(digest([old.getAttribute('position').array,old.getAttribute('color').array,p.normals.length===p.positions.length?old.getAttribute('normal').array:null]),digest([next.positions,next.colors,next.normals]));old.dispose();surfaceCases++;}
function render(api,p){const T=api.THREE,materials=api.createViewerRendererMaterials(2.8),object={object3D:new T.Group(),meshObject:new T.Mesh(),wireObject:new T.Group(),mesh:null,display:{borderThickness:2.8},meshSolver:{activeSolver:null,creaseAssignments:{'0:1':-1,'1:2':1}}};const options={materials,meshColorMode:'face',meshSurfaceStyle:'color',displayMode:'wireShaded',componentSelectionMode:'object',displaySoftEdges:true,displayHardEdges:true,validatePayload(){},clonePayload:api.cloneMeshPayload,payloadFaces:api.payloadFaces,meshFaceEdgeMap:api.meshFaceEdgeMap,edgeKey:api.edgeKey};
 const publish=()=>{api.renderMeshPayloadToSceneObject(object,p,options);const hash=createHash('sha256');object.object3D.traverse(child=>{hash.update(JSON.stringify([child.type,child.visible,child.renderOrder,child.userData.meshVertexPath,child.userData.origamiCrease]));if(child.geometry){for(const [name,a] of Object.entries(child.geometry.attributes)){hash.update(name);hash.update(Buffer.from(a.array.buffer,a.array.byteOffset,a.array.byteLength));}if(child.geometry.index)hash.update(Buffer.from(child.geometry.index.array.buffer));}if(child.material?.color)hash.update(JSON.stringify([child.material.color.toArray(),child.material.linewidth]));});return hash.digest('hex');};
 const first=publish(),repeat=publish();assert.equal(first,repeat);api.disposeObject(object.object3D);return first;
}
const fixtures=[mesh([[0,1,2]]),mesh([[0,1,2,3],[1,4,5,2]]),mesh([[0,1,2],[1,0,3],[0,1,4]]),mesh([[0,1,0,2],[3,3,4,5]]),mesh([])];
for(const p of fixtures)for(const colors of [p.faceColors,new Float32Array(),new Float32Array([.2,.3,.4,.5])])for(const vertexColors of [p.colors,new Float32Array()])for(const normals of [p.normals,new Float32Array()]){const test={...p,faceColors:colors,colors:vertexColors,normals};surface(test);assert.equal(render(after,test),render(before,test));rendererCases++;}
// Snapshot ownership, in-place connectivity/count changes, triangle fallback,
// content-equivalent copies, two-state undo/redo and bounded LRU eviction.
const cache=after.createMeshBoundaryCache(),a=mesh([[0,1,2]]),b=mesh([[0,1,2,3]]),c=mesh([[0,1,3]]);
const first=cache.read(a);assert.equal(cache.read(after.cloneMeshPayload(a)),first);
const second=cache.read(b);assert.equal(cache.read(a),first);assert.equal(cache.read(b),second);
a.faceConnects[1]=3;const edited=cache.read(a);assert.notEqual(edited,first);assert.deepEqual([...edited.keys],[...after.meshBoundaryEdgeKeys(a)]);
const triangles={...a,faceCounts:new Uint32Array(),faceConnects:new Uint32Array(),indices:new Uint32Array([0,1,2])};const triangle=cache.read(triangles);triangles.indices[1]=3;assert.notEqual(cache.read(triangles),triangle);
const countCase=mesh([[0,1,2,3]]);const counts=cache.read(countCase);countCase.faceCounts[0]=3;assert.notEqual(cache.read(countCase),counts);
const lru=after.createMeshBoundaryCache(),old=lru.read(a);lru.read(b);lru.read(c);assert.notEqual(lru.read(a),old);
function grid(w,h){const p=after.emptyMeshPayload();p.positions=new Float32Array((w+1)*(h+1)*3);for(let y=0;y<=h;y++)for(let x=0;x<=w;x++)p.positions.set([x*.01,y*.01,(x*x+y*y)*.000001],(y*(w+1)+x)*3);p.normals=new Float32Array(p.positions.length).fill(.25);p.colors=new Float32Array(p.positions.length).fill(.5);p.faceCounts=new Uint32Array(w*h).fill(4);p.faceConnects=new Uint32Array(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const a=y*(w+1)+x;p.faceConnects.set([a,a+1,a+w+2,a+w+1],(y*w+x)*4);}p.indices=after.triangulateFaceConnects(p.faceCounts,p.faceConnects);p.faceColors=new Float32Array(p.indices.length).fill(.7);p.faceCount=w*h;return p;}
const timings=[];
for(const [w,h] of [[500,250],[1000,500]]){const p=grid(w,h);surface(p);const cached=after.createMeshBoundaryCache();cached.read(p);for(let trial=0;trial<3;trial++){
 const old=()=>{const start=performance.now(),g=before.buildFaceColorGeometry(p);const duration=performance.now()-start;g.dispose();return duration;};
 const next=()=>{const start=performance.now();after.faceColorSurfaceBuffers(p);return performance.now()-start;};
 let beforeMs,afterMs;if(trial%2){afterMs=next();beforeMs=old();}else{beforeMs=old();afterMs=next();}
 const missStart=performance.now();after.meshBoundaryEdges(p);const rebuildMs=performance.now()-missStart;const hitStart=performance.now();cached.read(after.cloneMeshPayload(p));const copyAndHitMs=performance.now()-hitStart;
 const sameStart=performance.now();cached.read(p);const comparisonHitMs=performance.now()-sameStart;
 timings.push({faces:w*h,trial,beforeSurfaceMs:beforeMs,afterSurfaceMs:afterMs,boundaryRebuildMs:rebuildMs,copyAndBoundaryHitMs:copyAndHitMs,boundaryComparisonHitMs:comparisonHitMs,snapshotBytes:p.faceCounts.byteLength+p.faceConnects.byteLength});
}}
const report={surfaceCases,rendererCases,cacheContracts:'owned snapshots, content copies, raw mutations, counts/triangle fallback, two-state history reuse, bounded eviction',method:'Three alternating-order Node surface trials; excludes browser/GPU/history. Cache hit uses full exact connectivity comparison. Copy+hit includes all mesh payload cloning; comparison-only hit is separate.',timings};await writeFile('../zspace_core/reports/viewer-reconstruction-parity.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
