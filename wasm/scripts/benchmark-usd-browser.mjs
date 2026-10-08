import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// Temporary localhost-only diagnostic page. Proxies the running viewer's modules
// to exercise its actual browser loaders, without touching its scene or sources.
const obj = await readFile(resolve(process.argv[2]));
const usd = await readFile(resolve(process.argv[3]));
const upstream = process.argv[4] ?? 'http://127.0.0.1:5192';
const port = Number(process.argv[5] ?? 5193);
const page = `<!doctype html><html><head><meta charset="utf-8"><title>USD import timing audit</title>
<style>body{font:16px system-ui;margin:32px;background:#171b23;color:#eef}button{padding:10px;margin:8px}pre{white-space:pre-wrap;font:14px monospace}</style></head>
<body><h1>Nansha roof: OBJ / USD import audit</h1><p>Uses the viewer's actual browser loaders. No viewer scene changes.</p>
<button id="run" disabled>Run import comparison</button><pre id="results">Loading ordinary viewer runtime...</pre>
<script type="module">
import { loadZSpaceCoreWasmModule } from '/src/kernels/zspaceCoreWasmAdapter.ts';
import { readUSDFile, prewarmUSDRuntime, encodeUSD, usdDocumentFromObjects, retainedUSDPayloadFor } from '/src/usdInterop.ts';
import * as THREE from '/node_modules/.vite/deps/three.js';
import { readGeometryFilePayload } from '/src/wasmGeometryBridge.ts';
const result=document.getElementById('results'), button=document.getElementById('run');
try {
 const primary=await loadZSpaceCoreWasmModule('/wasm/zspace_core');
 const obj=new File([await (await fetch('/fixture.obj')).arrayBuffer()],'nansha_roof.obj');
 const usd=new File([await (await fetch('/fixture.usd')).arrayBuffer()],'nansha_roof.usd');
 const rows=[]; let runs=0;
 const warmStart=performance.now(); await prewarmUSDRuntime(); const startupUSDms=performance.now()-warmStart;
 result.textContent='Ready. OpenUSD startup completed in '+startupUSDms.toFixed(1)+' ms. Imports now use typed buffers.'; button.disabled=false;
 button.addEventListener('click',async()=>{
  button.disabled=true;
  try {
   for(let i=0;i<3;++i) {
    let start=performance.now();
    const a=await readGeometryFilePayload({file:obj,getWasmModule:()=>primary,ensureWasmForGeometryImport:async()=>{},hasMeshPayload:p=>p.indices.length>0});
    rows.push({run:runs,iteration:i,format:'OBJ',durationMs:performance.now()-start,vertices:a.payload.positions.length/3,faces:a.payload.faceCount});
    start=performance.now();
    const b=await readUSDFile(usd,primary);
    rows.push({run:runs,iteration:i,format:'USD',durationMs:performance.now()-start,meshes:b.objects.map(o=>({name:o.name,vertices:o.payload.positions.length/3,faces:o.payload.faceCount})),warnings:b.warnings});
    result.textContent=JSON.stringify({startupUSDms,bytes:{obj:obj.size,usd:usd.size},rows,resources:performance.getEntriesByType('resource').filter(r=>r.name.includes('/wasm/openusd/')).map(r=>({url:r.name.split('?')[0],durationMs:r.duration,transferSize:r.transferSize}))},null,2);
   }
   const imported=await readUSDFile(usd,primary);
   const originalStringify=JSON.stringify, originalParse=JSON.parse;
   const checks={noJSONSerialization:false,typedSourceOwnership:false,formats:[]};
   try {
    JSON.stringify=()=>{throw new Error('Unexpected JSON serialization during USD transfer')};
    JSON.parse=()=>{throw new Error('Unexpected JSON parsing during USD transfer')};
    const typed=await readUSDFile(usd,primary);
    const source=retainedUSDPayloadFor(typed.objects[0].inputPath), x=source.positions[0];
    source.positions[0]+=100;
    checks.typedSourceOwnership=retainedUSDPayloadFor(typed.objects[0].inputPath).positions[0]===x;
    if(!checks.typedSourceOwnership) throw new Error('Retained source aliasing');
    const document=usdDocumentFromObjects(typed.objects.map((object,index)=>({id:'mesh_'+index,name:object.name,mesh:object.payload,object3D:Object.assign(new THREE.Group(),{visible:object.visible})})));
    for(const format of ['usda','usd','usdc','usdz']) {
     const bytes=await encodeUSD(document,format);
     const roundtrip=await readUSDFile(new File([bytes],'roundtrip.'+format),primary);
     if(roundtrip.objects.length!==typed.objects.length) throw new Error('Roundtrip mesh count mismatch');
     for(let index=0;index<typed.objects.length;++index) {
      const before=typed.objects[index], after=roundtrip.objects[index];
      if(before.name!==after.name || before.visible!==after.visible || before.payload.positions.length!==after.payload.positions.length) throw new Error('Roundtrip metadata mismatch');
      for(let i=0;i<before.payload.positions.length;++i) if(Math.abs(before.payload.positions[i]-after.payload.positions[i])>0.001) throw new Error('Roundtrip position mismatch');
     }
     checks.formats.push(format);
    }
    checks.noJSONSerialization=true;
   }finally{JSON.stringify=originalStringify;JSON.parse=originalParse}
   const data=JSON.parse(result.textContent);data.checks=checks;result.textContent=JSON.stringify(data,null,2);
   ++runs;
  }catch(error){result.textContent+='\\nERROR: '+(error.stack??error.message)}
  finally{button.disabled=false}
 });
} catch(error){result.textContent=error.stack??error.message}
</script></body></html>`;

const server=http.createServer(async(req,res)=>{
 res.setHeader('Cross-Origin-Opener-Policy','same-origin');
 res.setHeader('Cross-Origin-Embedder-Policy','require-corp');
 res.setHeader('Cache-Control','no-store');
 try {
  const route=new URL(req.url,'http://127.0.0.1').pathname;
  if(route==='/'){res.setHeader('Content-Type','text/html');res.end(page);return}
  if(route==='/fixture.obj'||route==='/fixture.usd'){res.setHeader('Content-Type','application/octet-stream');res.end(route.endsWith('.obj')?obj:usd);return}
  const response=await fetch(new URL(req.url,upstream));
  res.statusCode=response.status;
  res.setHeader('Content-Type',response.headers.get('Content-Type')??'application/octet-stream');
  res.end(Buffer.from(await response.arrayBuffer()));
 }catch(error){res.statusCode=500;res.end(String(error))}
});
server.listen(port,'127.0.0.1',()=>console.log('USD browser audit: http://127.0.0.1:'+port));
