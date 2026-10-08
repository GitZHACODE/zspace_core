import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFile,writeFile} from 'node:fs/promises';
import {build} from 'esbuild';
const priorObjects=await readFile('../zspace_core/wasm/tmp/viewer-layout-before/legacy/sketch-typed-audit-before/objects.ts','utf8');
const priorJs=await readFile('../zspace_core/wasm/tmp/viewer-layout-before/legacy/sketch-typed-audit-before/zspaceJsKernel.ts','utf8');
async function api(old){const bundle=await build({stdin:{contents:"export * from './src/scene/objects';export * from './src/kernels/zspaceJsKernel';export * from './src/kernels/wasmBufferTransfers';",resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm',plugins:old?[{name:'prior',setup(b){b.onLoad({filter:/[\\/]src[\\/]scene[\\/]objects\.ts$/},()=>({contents:priorObjects,loader:'ts'}));b.onLoad({filter:/[\\/]src[\\/]kernels[\\/]zspaceJsKernel\.ts$/},()=>({contents:priorJs,loader:'ts'}));}}]:[]});return import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));}
const before=await api(true),after=await api(false);
const bytes=a=>Buffer.from(a.buffer,a.byteOffset,a.byteLength);
const same=(a,b)=>{for(const key of Object.keys(a)){if(ArrayBuffer.isView(a[key]))assert.deepEqual(bytes(a[key]),bytes(b[key]),key);else if(key!=='id')assert.deepEqual(a[key],b[key],key);}};
const inputs={positions:new Float32Array(501501*3).fill(.125),connects:Uint32Array.from({length:500000*4},(_,i)=>i%501501)};
const timings=[];
for(let trial=0;trial<3;trial++)for(const [name,p] of Object.entries(inputs)){
 const fn=name==='positions'?'floatArray':'uintArray';let a,b;
 const old=()=>{const t=performance.now();a=before[fn](p);return performance.now()-t;};
 const next=()=>{const t=performance.now();b=after[fn](p);return performance.now()-t;};
 let beforeMs,afterMs;if(trial%2){afterMs=next();beforeMs=old();}else{beforeMs=old();afterMs=next();}
 assert.deepEqual(bytes(a),bytes(b));timings.push({name,elements:p.length,trial,beforeMs,afterMs});
}
const report={method:'Three alternating-order Node conversion trials only; 500k-grid-sized typed inputs; excludes JS triangulation, normals, edge derivation, browser/WASM/history/GPU.',timings};
await writeFile('../zspace_core/reports/sketch-typed-buffer-timings.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
