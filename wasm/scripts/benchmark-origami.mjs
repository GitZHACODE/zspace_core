import assert from 'node:assert/strict';
import {readFile, writeFile} from 'node:fs/promises';
import {performance} from 'node:perf_hooks';

const output=process.argv[2];
const hostProcess=globalThis.process;
const binary=await readFile(new URL('../out/zspace_core.wasm',import.meta.url));
globalThis.window={};globalThis.process=undefined;
const {default:factory}=await import('../out/zspace_core.js');
const compiled=await WebAssembly.compile(binary);
const m=await factory({instantiateWasm(imports,ready){const i=new WebAssembly.Instance(compiled,imports);ready(i);return i.exports;}});
globalThis.process=hostProcess;delete globalThis.window;
const check=value=>assert.equal(value,1,m.UTF8ToString(m._zspace_last_error_ptr()));
const results=[];
for(const [segments,rings] of [[48,9],[100,16]]) {
  const lines=[];
  for(let r=0;r<rings;r++) for(let s=0;s<segments;s++) {
    const a=2*Math.PI*s/segments, radius=4+r;
    lines.push(`v ${radius*Math.cos(a)} ${radius*Math.sin(a)} 0`);
  }
  for(let r=0;r<rings-1;r++) for(let s=0;s<segments;s++) {
    const next=(s+1)%segments;
    lines.push(`f ${r*segments+s+1} ${(r+1)*segments+s+1} ${(r+1)*segments+next+1} ${r*segments+next+1}`);
  }
  m.FS.writeFile('/benchmark.obj',lines.join('\n'));
  check(m.ccall('zspace_mesh_read','number',['string'],['/benchmark.obj']));
  check(m._zspace_solver_set_mode(2));check(m._zspace_solver_create_dynamics());
  m._zspace_solver_begin_config_update();
  check(m._zspace_origami_set_params(20,.7,.7,.2,.45,.64));
  check(m._zspace_solver_set_params(0,0,0,1,0,1,0,1,1,.05,.05,1,.5,0,0,0,0,0,0,1));
  const edges=Array.from(m.HEAPU32.subarray(m._zspace_edges_ptr()/4,m._zspace_edges_ptr()/4+m._zspace_edges_count()));
  for(let i=0;i<edges.length;i+=2) {
    const r=Math.floor(edges[i]/segments),other=Math.floor(edges[i+1]/segments);
    if(r===other&&r>0&&r<rings-1) check(m._zspace_origami_set_crease(i/2,r%2?1:-1,179));
  }
  check(m._zspace_solver_end_config_update());
  check(m._zspace_solver_step(3));
  const times=[];
  for(let i=0;i<20;i++) {
    const start=performance.now();check(m._zspace_solver_step(1));times.push(performance.now()-start);
  }
  const positions=Array.from(m.HEAPF32.subarray(m._zspace_positions_ptr()/4,m._zspace_positions_ptr()/4+m._zspace_positions_count()));
  assert(positions.every(Number.isFinite));
  assert.equal(m._zspace_solver_frame(),23);
  const sorted=[...times].sort((a,b)=>a-b);
  const result={vertices:rings*segments,faces:(rings-1)*segments,medianMs:sorted[10],p95Ms:sorted[18],meanMs:times.reduce((a,b)=>a+b)/times.length,creaseError:m._zspace_origami_max_crease_error(),positions};
  results.push(result);
  console.log(JSON.stringify({...result,positions:undefined}));
}
if(output) await writeFile(output,JSON.stringify(results));
