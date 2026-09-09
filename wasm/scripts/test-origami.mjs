import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const hostProcess=globalThis.process;
const binary=await readFile(new URL('../out/zspace_core.wasm',import.meta.url));
globalThis.window={};globalThis.process=undefined;
const {default:factory}=await import('../out/zspace_core.js');
const compiled=await WebAssembly.compile(binary);
const m=await factory({instantiateWasm(imports,ready){const i=new WebAssembly.Instance(compiled,imports);ready(i);return i.exports;}});
globalThis.process=hostProcess;delete globalThis.window;
function setup(sign) {
  m.FS.writeFile('/fold.obj','v 0 0 0\nv 1 0 0\nv 0 1 0\nv 1 -1 0\nf 1 2 3\nf 2 1 4\n');
  assert.equal(m.ccall('zspace_mesh_read','number',['string'],['/fold.obj']),1);
  assert.equal(m._zspace_solver_set_mode(2),1);
  assert.equal(m._zspace_solver_create_dynamics(),1);
  m._zspace_solver_begin_config_update();
  m._zspace_solver_clear_supports();m._zspace_solver_add_support(0);m._zspace_solver_add_support(1);
  assert.equal(m._zspace_origami_set_params(100,.7,.7,1,.3,1),1);
  const edges=Array.from(m.HEAPU32.subarray(m._zspace_edges_ptr()/4,m._zspace_edges_ptr()/4+m._zspace_edges_count()));
  let crease=-1,boundary=-1;
  for(let i=0;i<edges.length;i+=2) {if(edges[i]+edges[i+1]===1) crease=i/2;else boundary=i/2;}
  assert.equal(m._zspace_origami_set_crease(boundary,sign,90),0);
  assert.equal(m._zspace_origami_set_crease(crease,sign,90),1);
  assert.equal(m._zspace_solver_set_params(0,0,0,1,0,1,0,1,1,.05,1,1,.5,0,1,0,0,0,0,1),1);
  assert.equal(m._zspace_solver_end_config_update(),1);
}
for(const sign of [1,-1]) {
  setup(sign);
  assert.equal(m._zspace_solver_equilibrium_reached(),0);
  for(let i=0;i<100&&!m._zspace_solver_equilibrium_reached();i++) assert.equal(m._zspace_solver_step(200),1);
  const p=Array.from(m.HEAPF32.subarray(m._zspace_positions_ptr()/4,m._zspace_positions_ptr()/4+12));
  assert(p.every(Number.isFinite));assert.deepEqual(p.slice(0,6),[0,0,0,1,0,0]);
  assert(sign*p[8]>.5&&sign*p[11]>.5,'valley lifts and mountain lowers opposite vertices');
  assert(m._zspace_solver_max_residual()<.5,'target dihedral reached');
  assert(m._zspace_origami_max_strain()<.01,'facets retain edge lengths');
  assert.equal(m._zspace_solver_equilibrium_reached(),1);
  console.log({sign,angleError:m._zspace_solver_max_residual(),strain:m._zspace_origami_max_strain(),frame:m._zspace_solver_frame()});
  assert.equal(m._zspace_mesh_curvature_analysis(1,0,0,0,1,1,1,1,1,0,0),1);
  assert.equal(m._zspace_origami_set_params(100,.7,.7,1,.3,0),1);
  for(let i=0;i<100&&!m._zspace_solver_equilibrium_reached();i++) assert.equal(m._zspace_solver_step(200),1);
  assert(m._zspace_solver_max_residual()<.5,'fold amount zero unfolds without changing rest mesh');
}
console.log('Origami regression passed');

// Independent central differences of dihedral energy on a skew, already folded hinge.
const sub=(a,b)=>a.map((x,i)=>x-b[i]);
const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const unit=a=>a.map(x=>x/Math.hypot(...a));
const points=[0,0,0, 1.3,.2,.1, .3,1.1,.4, .8,-.7,.6];
const rest=Math.hypot(...sub(points.slice(3,6),points.slice(0,3)));
function energy(p) {
  const [a,b,c,d]=[0,3,6,9].map(i=>p.slice(i,i+3));
  const axis=unit(sub(b,a));
  const n1=unit(cross(sub(b,a),sub(c,a))),n2=unit(cross(sub(a,b),sub(d,b)));
  const theta=Math.atan2(dot(axis,cross(n2,n1)),dot(n1,n2));
  return .5*rest*(theta-Math.PI/2)**2;
}
m.FS.writeFile('/gradient.obj',[0,3,6,9].map(i=>'v '+points.slice(i,i+3).join(' ')).join('\n')+'\nf 1 2 3\nf 2 1 4\n');
assert.equal(m.ccall('zspace_mesh_read','number',['string'],['/gradient.obj']),1);
m._zspace_solver_set_mode(2);m._zspace_solver_create_dynamics();
m._zspace_solver_begin_config_update();m._zspace_solver_clear_supports();
m._zspace_origami_set_params(0,1,0,0,0,1);
const edges=m.HEAPU32.subarray(m._zspace_edges_ptr()/4,m._zspace_edges_ptr()/4+m._zspace_edges_count());
for(let i=0;i<edges.length;i+=2) if(edges[i]+edges[i+1]===1) assert.equal(m._zspace_origami_set_crease(i/2,1,90),1);
m._zspace_solver_set_params(0,0,0,1,0,1,0,1,1,.01,1,1,.5,0,1,0,0,0,0,1);
m._zspace_solver_end_config_update();
const force=Array.from(m.HEAPF32.subarray(m._zspace_vector_directions_ptr()/4,m._zspace_vector_directions_ptr()/4+12));
let maxError=0;
for(let i=0;i<12;i++) {
  const plus=[...points],minus=[...points];plus[i]+=1e-5;minus[i]-=1e-5;
  const expected=-(energy(plus)-energy(minus))/2e-5;
  maxError=Math.max(maxError,Math.abs(force[i]-expected));
}
assert(maxError<1e-5,`dihedral negative gradient error ${maxError}`);
for(let j=0;j<3;j++) assert(Math.abs(force[j]+force[j+3]+force[j+6]+force[j+9])<1e-5);
console.log({hingeGradientMaxError:maxError});

// Quad panels use internal flat diagonals without exposing new mesh edges/faces.
m.FS.writeFile('/quads.obj','v -1 -1 0\nv 0 -1 0\nv 1 -1 0\nv -1 1 0\nv 0 1 0\nv 1 1 0\nf 1 2 5 4\nf 2 3 6 5\n');
assert.equal(m.ccall('zspace_mesh_read','number',['string'],['/quads.obj']),1);
assert.equal(m._zspace_solver_set_mode(2),1,m.UTF8ToString(m._zspace_last_error_ptr()));
assert.equal(m._zspace_solver_create_dynamics(),1,m.UTF8ToString(m._zspace_last_error_ptr()));
m._zspace_solver_begin_config_update();m._zspace_solver_clear_supports();
m._zspace_solver_add_support(1);m._zspace_solver_add_support(4);
m._zspace_origami_set_params(100,.7,.7,1,.3,1);
const quadEdges=Array.from(m.HEAPU32.subarray(m._zspace_edges_ptr()/4,m._zspace_edges_ptr()/4+m._zspace_edges_count()));
for(let i=0;i<quadEdges.length;i+=2) if(quadEdges[i]===1&&quadEdges[i+1]===4||quadEdges[i]===4&&quadEdges[i+1]===1)
  assert.equal(m._zspace_origami_set_crease(i/2,1,90),1,m.UTF8ToString(m._zspace_last_error_ptr()));
m._zspace_solver_set_params(0,0,0,1,0,1,0,1,1,.05,1,1,.5,0,1,0,0,0,0,1);
m._zspace_solver_end_config_update();
for(let i=0;i<100&&!m._zspace_solver_equilibrium_reached();i++) assert.equal(m._zspace_solver_step(200),1);
assert.equal(m._zspace_solver_equilibrium_reached(),1,'quad panels converge');
assert.equal(m._zspace_edges_count(),14,'internal diagonals do not alter input edges');
assert(m._zspace_origami_max_strain()<.01);
assert.equal(m._zspace_solver_previous_frame(),1);
assert.equal(m._zspace_solver_reset(),1);
const resetPoints=Array.from(m.HEAPF32.subarray(m._zspace_positions_ptr()/4,m._zspace_positions_ptr()/4+18));
assert.deepEqual(resetPoints,[-1,-1,0,0,-1,0,1,-1,0,-1,1,0,0,1,0,1,1,0]);
assert(m._zspace_solver_max_residual()>89,'reset keeps the assigned target');
console.log('Internal quad triangulation, timeline and reset passed');
