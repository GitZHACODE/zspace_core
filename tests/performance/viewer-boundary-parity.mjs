// Run from the standalone viewer root. Loads the preserved pre-change renderer.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { build } from 'esbuild';
const priorRenderer = await readFile('../zspace_core/wasm/tmp/viewer-layout-before/legacy/viewer-publication-before/renderers.ts', 'utf8');
async function load(before) {
  const result=await build({stdin:{contents:`export * from './src/rendering/renderers'; export * from './src/scene/selection'; export * from './src/scene/objects'; export * from './src/rendering/meshBoundaryEdges'; export * as THREE from 'three';`,resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',plugins:before?[{name:'preserved-renderer',setup(b){b.onLoad({filter:/[\\/]src[\\/]rendering[\\/]renderers\.ts$/},()=>({contents:priorRenderer,loader:'ts'}));}}]:[]});
  return import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
}
const before=await load(true),after=await load(false);
function fixture(faces,triangles=[],vertexCount=12) {
 const p=after.emptyMeshPayload();p.positions=new Float32Array(vertexCount*3);p.normals=new Float32Array(vertexCount*3).fill(.5);p.colors=new Float32Array(vertexCount*3).fill(.3);
 for(let i=0;i<vertexCount;i++) {p.positions[i*3]=i%4;p.positions[i*3+1]=Math.floor(i/4);p.positions[i*3+2]=i*.01;}
 p.faceCounts=new Uint32Array(faces.map(f=>f.length));p.faceConnects=new Uint32Array(faces.flat());p.indices=new Uint32Array(triangles.length?triangles:after.triangulateFaceConnects(p.faceCounts,p.faceConnects));
 p.edgeIndices=after.edgeIndicesFromFaceConnects(p.faceCounts,p.faceConnects);p.edgeWeights=new Float32Array(p.edgeIndices.length/2).fill(1);p.faceCount=faces.length;p.faceColors=new Float32Array(p.indices.length).fill(.7);return p;
}
const legacy=p=>new Set([...before.meshFaceEdgeMap(before.payloadFaces(p))].filter(([,f])=>f.length===1).map(([k])=>k));
let cases=0;
const fixtures=[fixture([]),fixture([[0,1,2]]),fixture([[0,1,2,3],[1,4,5,2]]),fixture([[0,1,2],[1,0,3],[0,1,4]]),fixture([[0,1,0,2],[3,3,4,5]]),fixture([[0],[1,2],[]]),fixture([], [0,1,2,2,1,3])];
// Large uint IDs take the exact string-key fallback without requiring vertex allocation.
fixtures.push({...fixture([]),faceCounts:new Uint32Array([3]),faceConnects:new Uint32Array([4294967295,4294967294,0])});
fixtures.push({...fixture([[0,1,2]]),faceCounts:new Uint32Array([9,2])});
let seed=17; const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed;};
for(let trial=0;trial<100;trial++)fixtures.push(fixture(Array.from({length:1+random()%20},()=>Array.from({length:random()%8},()=>random()%12))));
for(const p of fixtures){
 const expected=legacy(p),result=after.meshBoundaryEdges(p);
 assert.deepEqual([...result.keys],[...expected]);
 for(let a=0;a<14;a++)for(let b=0;b<14;b++)assert.equal(result.has(a,b),expected.has(after.edgeKey(a,b)));
 cases++;
}
function digestObject(api,p,assignments={}) {
 const T=api.THREE,materials=api.createViewerRendererMaterials(2.8);
 const object={object3D:new T.Group(),meshObject:new T.Mesh(),wireObject:new T.Group(),mesh:null,display:{borderThickness:2.8},meshSolver:{activeSolver:null,creaseAssignments:assignments}};
 api.renderMeshPayloadToSceneObject(object,p,{materials,meshColorMode:'face',meshSurfaceStyle:'color',displayMode:'wireShaded',componentSelectionMode:'object',displaySoftEdges:true,displayHardEdges:true,validatePayload(){},clonePayload:api.cloneMeshPayload,payloadFaces:api.payloadFaces,meshFaceEdgeMap:api.meshFaceEdgeMap,edgeKey:api.edgeKey});
 const hash=createHash('sha256');
 object.object3D.traverse(child=>{hash.update(JSON.stringify([child.type,child.visible,child.renderOrder,child.userData.meshVertexPath,child.userData.origamiCrease]));if(child.geometry){for(const [name,attribute] of Object.entries(child.geometry.attributes)){hash.update(name);hash.update(Buffer.from(attribute.array.buffer,attribute.array.byteOffset,attribute.array.byteLength));}if(child.geometry.index)hash.update(Buffer.from(child.geometry.index.array.buffer));}if(child.material?.color)hash.update(JSON.stringify([child.material.color.toArray(),child.material.linewidth]));});
 const digest=hash.digest('hex'); api.disposeObject(object.object3D); return digest;
}
let renderCases=0;
for(const p of fixtures.slice(1,7)){
 if(p.edgeWeights.length)p.edgeWeights[0]=3;
 for(const assignments of [{},{'0:1':-1,'1:2':1},Object.create({'0:1':-1})]){assert.equal(digestObject(after,p,assignments),digestObject(before,p,assignments));renderCases++;}
}
function grid(w,h){const count=w*h,counts=new Uint32Array(count).fill(4),connects=new Uint32Array(count*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const a=y*(w+1)+x,t=(y*w+x)*4;connects.set([a,a+1,a+w+2,a+w+1],t);}return {faceCounts:counts,faceConnects:connects,indices:new Uint32Array()};}
const timings=[];
for(const [w,h] of [[500,250],[1000,500]]) {
 const p=grid(w,h);let oldKeys,newKeys;
 for(let trial=0;trial<3;trial++){
  const runOld=()=>{const t=performance.now();oldKeys=legacy(p);return performance.now()-t;};const runNew=()=>{const t=performance.now();newKeys=after.meshBoundaryEdgeKeys(p);return performance.now()-t;};
  let beforeMs,afterMs;if(trial%2){afterMs=runNew();beforeMs=runOld();}else{beforeMs=runOld();afterMs=runNew();}
  assert.deepEqual([...newKeys],[...oldKeys]);timings.push({faces:w*h,trial,beforeMs,afterMs,boundaryEdges:newKeys.size});
 }
}
const report={method:'Node boundary classification only; three alternating-order trials, excludes GPU/browser/renderer. Full renderer parity hashes geometry arrays, ordered wire paths, visibility, colors and widths on small fixtures.',boundaryParityCases:cases,renderParityCases:renderCases,timings};
await writeFile('../zspace_core/reports/viewer-boundary-parity.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
