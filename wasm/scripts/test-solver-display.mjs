import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const host=globalThis.process,binary=await readFile(new URL('../out/zspace_core.wasm',import.meta.url));
globalThis.window={};globalThis.process=undefined;
const {default:factory}=await import('../out/zspace_core.js');
const compiled=await WebAssembly.compile(binary);
const m=await factory({instantiateWasm(imports,ready){const i=new WebAssembly.Instance(compiled,imports);ready(i);return i.exports;}});
globalThis.process=host;delete globalThis.window;
const check=x=>assert.equal(x,1,m.UTF8ToString(m._zspace_last_error_ptr()));
const gold=[1,.72,0],red=[1,.08,.02],blue=[.05,.2,1],green=[0,.72,.26],cyan=[0,.75,1];
function vectors(color) {
  const c=m.HEAPF32.subarray(m._zspace_vector_colors_ptr()/4,m._zspace_vector_colors_ptr()/4+m._zspace_vector_colors_count());
  const v=m.HEAPF32.subarray(m._zspace_vector_directions_ptr()/4,m._zspace_vector_directions_ptr()/4+m._zspace_vector_directions_count());
  const result=[];
  for(let i=0;i<c.length;i+=3) if(color.every((x,k)=>Math.abs(x-c[i+k])<1e-6)) result.push(Array.from(v.slice(i,i+3)));
  return result;
}
for(const mode of [0,1]) {
  m.FS.writeFile('/mesh.obj','v -1 -1 0\nv 1 -1 0\nv 1 1 0\nv -1 1 0\nv 0 0 1\nf 1 2 5\nf 2 3 5\nf 3 4 5\nf 4 1 5\n');
  check(m.ccall('zspace_mesh_read','number',['string'],['/mesh.obj']));
  check(m._zspace_solver_set_mode(mode));check(m._zspace_solver_create_dynamics());
  m._zspace_solver_begin_config_update();m._zspace_solver_clear_supports();
  for(let i=0;i<4;i++) m._zspace_solver_add_support(i);
  check(m._zspace_solver_set_support_size(12));
  check(m._zspace_solver_set_surface_params(.35,.0001));
  check(m._zspace_solver_set_params(.2,0,0,1,.1,1.3,0,.3,.3,.02,1,5,.02,60,1,1,1,1,0,1));
  check(m._zspace_solver_end_config_update());
  for(const color of [gold,red,blue,green,...(mode===1?[cyan]:[])]) assert.equal(vectors(color).length,1,`mode ${mode} color ${color}`);
  const sum=[0,0,0];
  for(const color of [red,blue,green,...(mode===1?[cyan]:[])]) vectors(color)[0].forEach((x,k)=>sum[k]+=x);
  vectors(gold)[0].forEach((x,k)=>assert(Math.abs(x-sum[k])<1e-5));
  assert.equal(m._zspace_point_sizes_count(),4);
  assert(Array.from(m.HEAPF32.subarray(m._zspace_point_sizes_ptr()/4,m._zspace_point_sizes_ptr()/4+4)).every(x=>x===12));
}
m.FS.writeFile('/fold.obj','v 0 0 0\nv 1 0 0\nv 0 1 0\nv 1 -1 0\nf 1 2 3\nf 2 1 4\n');
check(m.ccall('zspace_mesh_read','number',['string'],['/fold.obj']));
check(m._zspace_solver_set_mode(2));check(m._zspace_solver_create_dynamics());
m._zspace_solver_begin_config_update();m._zspace_solver_clear_supports();
check(m._zspace_origami_set_params(20,.7,.7,.2,.45,.5));
const edges=m.HEAPU32.subarray(m._zspace_edges_ptr()/4,m._zspace_edges_ptr()/4+m._zspace_edges_count());
for(let i=0;i<edges.length;i+=2) if(edges[i]+edges[i+1]===1) check(m._zspace_origami_set_crease(i/2,1,179));
check(m._zspace_solver_end_config_update());
assert.equal(vectors(gold).length,4,'origami uses the same resultant gold');
assert.equal(vectors([1,0,.65]).length,4,'crease force is separate magenta');
check(m._zspace_solver_add_support(0));check(m._zspace_solver_set_support_size(8));check(m._zspace_solver_update_preview());
assert.equal(m.HEAPF32[m._zspace_point_sizes_ptr()/4],8);
assert.equal(m._zspace_solver_set_support_size(3),0);assert.equal(m._zspace_solver_set_support_size(33),0);
console.log('DR/surface component colours, shared origami resultant and support sizes passed.');
