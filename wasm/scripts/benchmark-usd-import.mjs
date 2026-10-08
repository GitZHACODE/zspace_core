import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

// Measures the actual viewer runtime pair and its import/readback path in Node.
// Excludes network transfer, browser worker startup, UI creation and rendering.
const viewer = resolve(process.argv[2] ?? '../zspace_alice_webviewer');
const objPath = resolve(process.argv[3]);
const usdPath = resolve(process.argv[4]);
const output = process.argv[5];
const requireViewer = createRequire(pathToFileURL(resolve(viewer, 'package.json')));
const { build } = requireViewer('esbuild');
const bundle = await build({ stdin: { contents: "export { payloadFromWasmBuffers } from './src/objects';", resolveDir: viewer },
  bundle: true, write: false, platform: 'node', format: 'esm' });
const { payloadFromWasmBuffers } = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const timed = (phases, name, operation) => {
  const start = performance.now();
  const result = operation();
  phases[name] = performance.now() - start;
  return result;
};
const check = (module, result) => assert.equal(result, 1, module.UTF8ToString(module._zspace_last_error_ptr()));
const files = { obj: await readFile(objPath), usd: await readFile(usdPath) };
const report = { environment: { node: process.version, viewer, objPath, usdPath },
  bytes: { obj: files.obj.length, usd: files.usd.length }, startup: {}, samples: [] };
let usdModule, primaryModule;
try {
  const base = pathToFileURL(resolve(viewer, 'wasm/openusd') + '/');
  let start = performance.now();
  const { default: factory } = await import(new URL('zspace_core.js', base));
  const usdBinary = await readFile(new URL('zspace_core.wasm', base));
  report.bytes.usdRuntime = usdBinary.length;
  usdModule = await factory({ wasmBinary: usdBinary, locateFile: name => fileURLToPath(new URL(name, base)) });
  report.startup.openUSDImportAndInstantiateMs = performance.now() - start;

  // The ordinary runtime is browser-only; instantiate as in the existing viewer benchmark.
  start = performance.now();
  const binary = await readFile(resolve(viewer, 'wasm/zspace_core.wasm'));
  report.bytes.primaryRuntime = binary.length;
  const compiled = await WebAssembly.compile(binary);
  const hostProcess = globalThis.process;
  const hostWindow = globalThis.window;
  globalThis.window = {}; globalThis.process = undefined;
  try {
    const { default: primaryFactory } = await import(pathToFileURL(resolve(viewer, 'wasm/zspace_core.js')));
    primaryModule = await primaryFactory({ instantiateWasm(imports, ready) {
      const instance = new WebAssembly.Instance(compiled, imports); ready(instance); return instance.exports;
    } });
  } finally { globalThis.process = hostProcess; if (hostWindow === undefined) delete globalThis.window; else globalThis.window = hostWindow; }
  report.startup.primaryImportAndInstantiateMs = performance.now() - start;
  for (const module of [usdModule, primaryModule]) if (!module.FS.analyzePath('/input').exists) module.FS.mkdir('/input');

  if (process.argv.includes('--prewarm')) {
    const phases = {};
    timed(phases,'firstTinySceneMs', () => check(usdModule,usdModule.ccall('zspace_usd_initialize','number',[],[])));
    report.startup.tinySceneWarmupMs = phases.firstTinySceneMs;
  }

  for (let iteration = 0; iteration < 6; ++iteration) {
    for (const [label, module] of [['objPrimary',primaryModule],['objOpenUSDControl',usdModule]]) {
      const phases = {};
      timed(phases, 'fsWriteMs', () => module.FS.writeFile('/input/roof.obj', files.obj));
      timed(phases, 'parseCreateExportBuffersMs', () => check(module, module.ccall('zspace_mesh_read','number',['string'],['/input/roof.obj'])));
      const payload = timed(phases, 'ownedReadbackMs', () => payloadFromWasmBuffers(module, 'file'));
      report.samples.push({ label, iteration, phases, vertices: payload.positions.length/3, faces: payload.faceCounts.length, triangles: payload.indices.length/3 });
    }
    const phases = {};
    if (!process.argv.includes('--legacy-json')) {
      const path = `/input/typed_roof_${iteration}.usd`;
      timed(phases,'fsWriteMs',()=>usdModule.FS.writeFile(path,files.usd));
      timed(phases,'typedSceneOpenMs',()=>check(usdModule,usdModule.ccall('zspace_usd_scene_open','number',['string'],[path])));
      const call=(name,index)=>usdModule.ccall(name,'number',index===undefined?[]:['number'],index===undefined?[]:[index]);
      const meshes=[];
      phases.meshCreateExportBuffersMs=0;phases.ownedReadbackMs=0;phases.retainSourceMs=0;
      for(let index=0;index<call('zspace_usd_scene_mesh_count');++index) {
        const local={};
        const name=usdModule.UTF8ToString(call('zspace_usd_scene_name',index));
        timed(local,'meshCreateExportBuffersMs',()=>check(usdModule,call('zspace_usd_scene_select',index)));
        const buffers=timed(local,'ownedReadbackMs',()=>Array.from({length:12},(_,slot)=>{
          const count=call('zspace_usd_buffer_count',slot),pointer=call('zspace_usd_buffer_ptr',slot)/4;
          return (slot<8?usdModule.HEAPF32:usdModule.HEAPU32).slice(pointer,pointer+count);
        }));
        timed(local,'retainSourceMs',()=>buffers.map(values=>values.slice()));
        for(const [phase,duration] of Object.entries(local)) phases[phase]+=duration;
        meshes.push({name,vertices:buffers[0].length/3,faces:buffers[10].length,triangles:buffers[8].length/3});
      }
      const warnings=[];
      for(let index=0;index<call('zspace_usd_scene_warning_count');++index) warnings.push(usdModule.UTF8ToString(call('zspace_usd_scene_warning',index)));
      report.samples.push({label:'usdScene',iteration,transfer:'typed-buffers',phases,meshes,warnings});
      call('zspace_usd_scene_clear');
      continue;
    }
    // Use a new identifier each time, so warm timing does not reuse the same Sdf layer.
    const stagePath = `/input/roof_${iteration}.usd`;
    timed(phases, 'fsWriteMs', () => usdModule.FS.writeFile(stagePath, files.usd));
    timed(phases, 'openUSDSceneToJSONMs', () => check(usdModule, usdModule.ccall('zspace_usd_scene_read','number',['string','string'],[stagePath,'/input/roof.scene.json'])));
    const json = timed(phases, 'fsReadJSONMs', () => usdModule.FS.readFile('/input/roof.scene.json',{encoding:'utf8'}));
    const document = timed(phases, 'parseJSONMs', () => JSON.parse(json));
    const meshes = [];
    phases.stringifyMeshMs = 0; phases.meshFSWriteMs = 0; phases.meshJSONCreateExportBuffersMs = 0; phases.ownedReadbackMs = 0; phases.retainSourceMs = 0;
    for (const object of document.objects) {
      const meshPhases = {};
      const source = timed(meshPhases,'stringifyMeshMs', () => JSON.stringify(object.mesh));
      timed(meshPhases,'meshFSWriteMs', () => usdModule.FS.writeFile('/input/roof.mesh.json',source));
      timed(meshPhases,'meshJSONCreateExportBuffersMs', () => check(usdModule,usdModule.ccall('zspace_mesh_read','number',['string'],['/input/roof.mesh.json'])));
      const payload = timed(meshPhases,'ownedReadbackMs', () => payloadFromWasmBuffers(usdModule,'file'));
      timed(meshPhases,'retainSourceMs', () => primaryModule.FS.writeFile('/input/roof.retained.json',JSON.stringify(object.mesh)));
      for (const [name, duration] of Object.entries(meshPhases)) phases[name] += duration;
      meshes.push({ name: object.name, vertices: payload.positions.length/3, faces: payload.faceCounts.length, triangles: payload.indices.length/3 });
    }
    report.samples.push({label:'usdScene',iteration,phases,jsonBytes:Buffer.byteLength(json),meshes,warnings:document.warnings});
  }
  const med = values => [...values].sort((a,b)=>a-b)[Math.floor(values.length/2)];
  report.warmMedian = {};
  for (const label of ['objPrimary','objOpenUSDControl','usdScene']) {
    const samples = report.samples.filter(sample => sample.label === label && sample.iteration > 0);
    report.warmMedian[label] = { totalMs: med(samples.map(sample => Object.values(sample.phases).reduce((a,b)=>a+b,0))),
      phases: Object.fromEntries(Object.keys(samples[0].phases).map(name => [name, med(samples.map(sample => sample.phases[name]))])) };
  }
  if (output) await writeFile(resolve(output), JSON.stringify(report,null,2));
  console.log(JSON.stringify({bytes:report.bytes,startup:report.startup,first:report.samples.filter(sample=>sample.iteration===0),warmMedian:report.warmMedian},null,2));
} finally { usdModule?.PThread?.terminateAllThreads(); }
