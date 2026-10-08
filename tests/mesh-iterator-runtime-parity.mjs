import assert from 'node:assert/strict';
import {readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';

// Compare the installed viewer runtime with a rebuilt runtime without modifying either.
const [beforePath,afterPath,reportPath]=process.argv.slice(2);
const trials=Number(process.argv[5] ?? 1);
const extraFixtures=process.argv.includes('--fixtures');
assert(Number.isInteger(trials)&&trials>0&&trials<=10,'Trial count must be 1–10');
assert(beforePath && afterPath && reportPath,'Usage: node tests/mesh-iterator-runtime-parity.mjs before.js after.js report.json');
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const profiles=[];
async function load(path){
 const binary=await readFile(resolve(path.replace(/\.js$/,'.wasm')));
 const compiled=await WebAssembly.compile(binary);
 const {default:factory}=await import(pathToFileURL(resolve(path)));
 const host=globalThis.process;
 globalThis.window={};globalThis.process=undefined;
 try{return {module:await factory({printErr(line){if(line.startsWith('mesh-phase,'))profiles.push({runtime:path,...Object.fromEntries(['phase','faces','ms'].map((k,i)=>[k,i?Number(line.split(',')[i+1]):line.split(',')[1]]))});else console.error(line);},instantiateWasm(imports,ready){const instance=new WebAssembly.Instance(compiled,imports);ready(instance);return instance.exports;}}),wasmSha256:sha(binary)};}
 finally{globalThis.process=host;delete globalThis.window;}
}
const check=(m,result)=>assert.equal(result,1,m.UTF8ToString(m._zspace_last_error_ptr()));
function upload(m,positions,counts,connects){
 const arrays=[positions,counts,connects],pointers=[];
 try{
  for(const a of arrays)pointers.push(m._zspace_alloc(a.byteLength));
  arrays.forEach((a,i)=>new Uint8Array(m.HEAPU32.buffer,pointers[i],a.byteLength).set(new Uint8Array(a.buffer,a.byteOffset,a.byteLength)));
  check(m,m._zspace_mesh_set_from_buffers(pointers[0],positions.length,pointers[1],counts.length,pointers[2],connects.length));
 }finally{for(const p of pointers)m._zspace_free(p);}
}
function snapshot(m){
 const hashes={};
 for(const key of ['positions','normals','colors','face_colors','face_centers','face_normals','edge_centers','edge_weights','indices','edges','face_counts','face_connects']){
  const count=m['_zspace_'+key+'_count'](),ptr=m['_zspace_'+key+'_ptr']();
  hashes[key]={count,sha256:sha(new Uint8Array(m.HEAPU32.buffer,ptr,count*4))};
  if(!['indices','edges','face_counts','face_connects'].includes(key))
   assert(new Float32Array(m.HEAPU32.buffer,ptr,count).every(Number.isFinite),key+' must be finite');
 }
 return hashes;
}
const before=await load(beforePath),after=await load(afterPath),runs=[],fixtures=[];
const cubePositions=new Float32Array([-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,1,1,1,-1,1,1]);
const cubeCounts=new Uint32Array(6).fill(4);
const cubeConnects=new Uint32Array([0,3,2,1,4,5,6,7,0,1,5,4,1,2,6,5,2,3,7,6,3,0,4,7]);
for(let trial=1;trial<=trials;trial++){
for(const {module:m} of [before,after])upload(m,cubePositions,cubeCounts,cubeConnects);
for(let step=0;step<=8;step++){
 const timings={beforeCallMs:0,afterCallMs:0};
 if(step)for(const key of (trial%2?['before','after']:['after','before'])){
  const m=(key==='before'?before:after).module,t=performance.now();
  check(m,m.ccall('zspace_mesh_smooth','number',['number'],[1]));
  timings[key+'CallMs']=performance.now()-t;
 }
 const a=snapshot(before.module),b=snapshot(after.module);
 assert.deepEqual(b,a,'cube division '+step+' output parity');
 assert.equal(a.face_counts.count,6*4**step);
 runs.push({trial,step,faces:a.face_counts.count,...timings,beforeHeapBytes:before.module.HEAPU32.buffer.byteLength,afterHeapBytes:after.module.HEAPU32.buffer.byteLength,buffers:a});
}
}
if(extraFixtures){
 const cases=[
  {name:'colored-mixed-faces-custom-weights',positions:[[0,0,0],[2,0,0],[2,2,.2],[1,1,.1],[0,2,0],[3,0,0]],polygonCounts:[5,3],polygonConnects:[0,1,2,3,4,1,5,2],vertexColors:Array.from({length:6},(_,i)=>[i/6,.4,.7,.5]),faceColors:[[.2,.7,.3,.4],[.9,.1,.5,1]],edgeAttributes:[1,2.5,-2,0,1.0000004,3,1].map(w=>[.2,.3,.4,1,w])},
  {name:'nonmanifold',positions:[[0,0,0],[1,0,0],[.5,1,0],[.5,-1,0],[.5,0,1]],polygonCounts:[3,3,3],polygonConnects:[0,1,2,1,0,3,0,1,4]},
  {name:'repeated-corner-self-edge',positions:[[0,0,0],[1,0,0],[1,1,0],[0,1,0]],polygonCounts:[5],polygonConnects:[0,1,1,2,3]}
 ];
 for(const fixture of cases){
  for(const {module:m} of [before,after]){
   m.FS.writeFile('/export-fixture.json',JSON.stringify({schema:'zspace.mesh.v2',...fixture}));
   check(m,m.ccall('zspace_mesh_read','number',['string'],['/export-fixture.json']));
  }
  const a=snapshot(before.module),b=snapshot(after.module);assert.deepEqual(b,a,fixture.name);
  fixtures.push({name:fixture.name,buffers:a});
  for(const {module:m} of [before,after])check(m,m.ccall('zspace_mesh_smooth','number',['number'],[1]));
  const sa=snapshot(before.module),sb=snapshot(after.module);assert.deepEqual(sb,sa,fixture.name+' smoothing');
  fixtures.push({name:fixture.name+'-smoothed',buffers:sa});
 }
 const width=500,height=250,positions=new Float32Array((width+1)*(height+1)*3),counts=new Uint32Array(width*height).fill(4),connects=new Uint32Array(width*height*4);
 for(let y=0;y<=height;y++)for(let x=0;x<=width;x++)positions.set([x,y,(x*x+y*y)*.0001],(y*(width+1)+x)*3);
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){const a=y*(width+1)+x;connects.set([a,a+1,a+width+2,a+width+1],(y*width+x)*4);}
 for(let trial=1;trial<=trials;trial++){
  for(const {module:m} of [before,after])upload(m,positions,counts,connects);
  const timings={};
  for(const key of (trial%2?['before','after']:['after','before'])){const m=(key==='before'?before:after).module,t=performance.now();check(m,m.ccall('zspace_mesh_smooth','number',['number'],[1]));timings[key+'CallMs']=performance.now()-t;}
  const a=snapshot(before.module),b=snapshot(after.module);assert.deepEqual(b,a,'500k quad grid');assert.equal(a.face_counts.count,500000);
  fixtures.push({name:'500000-quad-grid',trial,faces:500000,...timings,buffers:a});
 }
}
await writeFile(reportPath,JSON.stringify({capturedAt:new Date().toISOString(),method:'Node WASM output equivalence and C++ call durations, not a browser/FPS benchmark. Fresh cube per trial; alternate before/after call order across trials. First trial includes cold heap growth; later trials reuse warm modules. Calls include subdivision, normals and render export; exclude JS upload/readback/renderer/history. Twelve exported buffers are byte-identical at every stage and floating outputs finite.',trials,profiles,beforeWasmSha256:before.wasmSha256,afterWasmSha256:after.wasmSha256,runs,fixtures},null,2));
console.log('PASS: '+trials+' trials, cube stages 0–8, through 393216 quads; 12 buffers byte-identical per stage.');
