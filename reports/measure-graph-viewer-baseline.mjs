import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {performance} from 'node:perf_hooks';
import {createHash} from 'node:crypto';
const viewer=path.resolve('../zspace_alice_webviewer');
const require=createRequire(path.join(viewer,'package.json'));
const esbuild=require('esbuild');
// Compile the actual current conversion functions in memory; write no viewer files.
const compiled=await esbuild.build({entryPoints:[path.join(viewer,'src/objects.ts')],bundle:true,platform:'node',format:'cjs',write:false,logLevel:'silent'});
const compiledModule={exports:{}};new Function('exports','require','module',compiled.outputFiles[0].text)(compiledModule.exports,require,compiledModule);
const {primitivePayloadFromGraphPayload,clonePrimitivePayload}=compiledModule.exports;
const median=a=>[...a].sort((a,b)=>a-b)[Math.floor(a.length/2)];
const report={date:'2026-10-08',scope:'Node actual viewer graph conversion and primitive clone only. No browser, WASM transfer, C++, renderer, GPU or full history action. Five sequential measured trials after one warm-up per case; GC before each trial. Heap/RSS are sampled deltas, not peak or total memory.',node:process.version,sourceSHA256:createHash('sha256').update(fs.readFileSync(path.join(viewer,'src/objects.ts'))).digest('hex'),cases:[]};
for(const edges of [1000,10000,100000,500000]){
 const vertices=edges+1,vertexPositions=new Float32Array(vertices*3),edgeConnects=new Uint32Array(edges*2);
 for(let i=0;i<vertices;i++){vertexPositions[i*3]=i;vertexPositions[i*3+1]=i%7;}
 for(let i=0;i<edges;i++){edgeConnects[2*i]=i;edgeConnects[2*i+1]=i+1;}
 const input={vertexPositions,edgeConnects};
 primitivePayloadFromGraphPayload(input);
 const trials=[];
 for(let trial=0;trial<5;trial++){
  global.gc?.();const before=process.memoryUsage();const start=performance.now();
  const primitives=primitivePayloadFromGraphPayload(input);const converted=performance.now();
  const clone=clonePrimitivePayload(primitives);const cloned=performance.now();const after=process.memoryUsage();
  if(primitives.linePositions.length!==edges*6||clone.linePositions.length!==edges*6)throw Error('Wrong edge count');
  for(let i=0;i<edges;i++)for(let k=0;k<3;k++){
   if(primitives.linePositions[i*6+k]!==vertexPositions[i*3+k]||primitives.linePositions[i*6+3+k]!==vertexPositions[(i+1)*3+k])throw Error('Endpoint order mismatch');
  }
  trials.push({trial,conversionMs:converted-start,onePrimitiveCloneMs:cloned-converted,heapUsedDelta:after.heapUsed-before.heapUsed,arrayBuffersDelta:after.arrayBuffers-before.arrayBuffers,rssDelta:after.rss-before.rss,outputBytes:Object.values(primitives).reduce((n,a)=>n+a.byteLength,0)});
 }
 report.cases.push({shape:'open chain',vertices,edges,inputBytes:vertexPositions.byteLength+edgeConnects.byteLength,trials,medianConversionMs:median(trials.map(t=>t.conversionMs)),medianOnePrimitiveCloneMs:median(trials.map(t=>t.onePrimitiveCloneMs)),endpointChecks:'All endpoints exactly equal in original edge order across five trials; conversion float32 input. This is baseline sanity, not before/after parity.'});
}
fs.writeFileSync('reports/graph-viewer-baseline.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report.cases.map(({vertices,edges,medianConversionMs,medianOnePrimitiveCloneMs})=>({vertices,edges,medianConversionMs,medianOnePrimitiveCloneMs})),null,2));
