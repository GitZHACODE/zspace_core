import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

// Usage: node wasm/scripts/test-origami-input.mjs mesh.obj '[[a,b,assignment],...]'
const inputPath=process.argv[2];
const pairs=JSON.parse(process.argv[3]);
const obj=await readFile(inputPath,'utf8');
const binary=await readFile(new URL('../out/zspace_core.wasm',import.meta.url));
const hostProcess=globalThis.process;
globalThis.window={};globalThis.process=undefined;
const {default:factory}=await import('../out/zspace_core.js');
const compiled=await WebAssembly.compile(binary);
const m=await factory({instantiateWasm(imports,ready){const instance=new WebAssembly.Instance(compiled,imports);ready(instance);return instance.exports;}});
globalThis.process=hostProcess;delete globalThis.window;
const check=result=>assert.equal(result,1,m.UTF8ToString(m._zspace_last_error_ptr()));
m.FS.writeFile('/input.obj',obj);
check(m.ccall('zspace_mesh_read','number',['string'],['/input.obj']));
check(m._zspace_solver_set_mode(2));check(m._zspace_solver_create_dynamics());
m._zspace_solver_begin_config_update();
check(m._zspace_origami_set_params(20,.7,.7,.2,.45,.25));
check(m._zspace_solver_set_params(0,0,0,1,0,1,0,1,1,.05,.05,1,.5,0,1,0,0,0,0,1));
check(m._zspace_solver_end_config_update());
assert.equal(m._zspace_solver_max_residual(),0,'OBJ has no driven crease assignments');
const edges=Array.from(m.HEAPU32.subarray(m._zspace_edges_ptr()/4,m._zspace_edges_ptr()/4+m._zspace_edges_count()));
for(const [a,b,assignment] of pairs) {
  let id=-1;
  for(let i=0;i<edges.length;i+=2) if(edges[i]===a&&edges[i+1]===b||edges[i]===b&&edges[i+1]===a) id=i/2;
  assert(id>=0,`missing edge ${a}:${b}`);
  check(m._zspace_origami_set_crease(id,assignment,179));
}
check(m._zspace_solver_update_preview());
assert(m._zspace_solver_max_residual()>40);
check(m._zspace_solver_step(1));
assert.equal(m._zspace_solver_equilibrium_reached(),0,'driven input cannot stop after one frame');
for(let i=0;i<50&&!m._zspace_solver_equilibrium_reached();i++) check(m._zspace_solver_step(240));
const points=Array.from(m.HEAPF32.subarray(m._zspace_positions_ptr()/4,m._zspace_positions_ptr()/4+m._zspace_positions_count()));
assert(points.every(Number.isFinite));
const z=points.filter((_,i)=>i%3===2);
assert(Math.max(...z)-Math.min(...z)>.1,'input must fold out of its plane');
console.log({vertices:points.length/3,creases:pairs.length,frame:m._zspace_solver_frame(),angleError:m._zspace_solver_max_residual(),strain:m._zspace_origami_max_strain(),height:Math.max(...z)-Math.min(...z),equilibrium:m._zspace_solver_equilibrium_reached()});
