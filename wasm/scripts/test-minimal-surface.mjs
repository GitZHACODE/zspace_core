import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const host=globalThis.process;
const binary=await readFile(new URL('../out/zspace_core.wasm',import.meta.url));
globalThis.window={};globalThis.process=undefined;
const {default:factory}=await import('../out/zspace_core.js');
const compiled=await WebAssembly.compile(binary);
const m=await factory({instantiateWasm(imports,ready){const i=new WebAssembly.Instance(compiled,imports);ready(i);return i.exports;}});
globalThis.process=host;delete globalThis.window;
const check=x=>assert.equal(x,1,m.UTF8ToString(m._zspace_last_error_ptr()));
const positions=()=>Array.from(m.HEAPF32.subarray(m._zspace_positions_ptr()/4,m._zspace_positions_ptr()/4+m._zspace_positions_count()));
const arrows=()=>Array.from(m.HEAPF32.subarray(m._zspace_vector_directions_ptr()/4,m._zspace_vector_directions_ptr()/4+m._zspace_vector_directions_count()));
function configure({area=.35,spring=1,multiplier=1,edges=1,threshold=.02,stepTolerance=.0001,dt=.02,display=1,show=1,integration=61}={}) {
  check(m._zspace_solver_set_surface_params(area,stepTolerance));
  check(m._zspace_solver_set_params(0,0,0,1,0,multiplier,0,.3,.3,dt,1,spring,threshold,integration,display,0,0,edges,0,show));
}
function patch(options={}) {
  m.FS.writeFile('/patch.obj','v -1 -1 0\nv 1 -1 0\nv 1 1 0\nv -1 1 0\nv 0 0 1\nf 1 2 5\nf 2 3 5\nf 3 4 5\nf 4 1 5\n');
  check(m.ccall('zspace_mesh_read','number',['string'],['/patch.obj']));
  check(m._zspace_solver_set_mode(1));check(m._zspace_solver_create_dynamics());
  m._zspace_solver_begin_config_update();m._zspace_solver_clear_supports();
  for(let i=0;i<4;i++) m._zspace_solver_add_support(i);
  configure(options);check(m._zspace_solver_end_config_update());
}
patch({edges:0});const areaForce=arrows();
patch({area:0,spring:5,multiplier:1.3});const edgeForce=arrows();
patch({spring:5,multiplier:1.3});const combined=arrows();
assert.equal(combined.length,3);
for(let i=0;i<3;i++) assert(Math.abs(combined[i]-areaForce[i]-edgeForce[i])<1e-6,'resultant is the vector sum');
assert(areaForce[2]<0&&edgeForce[2]>0&&combined[2]>0);
assert(Math.abs(m._zspace_solver_max_residual()-Math.hypot(...combined))<1e-6);
for(let i=0;i<3;i++) check(m._zspace_solver_update_preview());
assert.deepEqual(arrows(),combined,'preview does not accumulate forces');
const initial=positions();check(m._zspace_solver_step(1));
assert(positions()[14]>1,'combined step may increase area');
assert(Math.abs(m._zspace_solver_max_displacement()-Math.abs(positions()[14]-initial[14]))<1e-6);
const step=m._zspace_solver_max_displacement();assert(step>0);
configure({spring:5,multiplier:1.3,threshold:100,stepTolerance:step/2});check(m._zspace_solver_update_preview());
assert.equal(m._zspace_solver_equilibrium_reached(),0,'movement tolerance must pass too');
configure({spring:5,multiplier:1.3,threshold:100,stepTolerance:step*2});check(m._zspace_solver_update_preview());
assert.equal(m._zspace_solver_equilibrium_reached(),1);
patch({dt:.0001});check(m._zspace_solver_step(1));
assert.equal(m._zspace_solver_equilibrium_reached(),0,'tiny movement cannot bypass force residual');
patch({spring:5,multiplier:1.3});
for(let i=0;i<200&&!m._zspace_solver_equilibrium_reached();i++) check(m._zspace_solver_step(100));
assert.equal(m._zspace_solver_equilibrium_reached(),1,'combined system converges');
assert(m._zspace_solver_max_residual()<.02&&m._zspace_solver_max_displacement()<.0001);
assert(positions()[14]>1,'equilibrium need not be a minimal-area plane');
assert.deepEqual(positions().slice(0,12),initial.slice(0,12));
console.log({frame:m._zspace_solver_frame(),resultant:m._zspace_solver_max_residual(),maxStep:m._zspace_solver_max_displacement(),height:positions()[14]});
check(m._zspace_mesh_curvature_analysis(1,100,0,0,1,1,1,1,1,0,0));
check(m._zspace_solver_update_preview());assert.equal(arrows().length,3);
patch({display:0});assert.equal(arrows().length,0);
patch({show:0});assert.equal(arrows().length,0);
patch({area:0,edges:0});assert.equal(m._zspace_solver_max_residual(),0);
assert.equal(m._zspace_solver_equilibrium_reached(),1);
assert.equal(m._zspace_solver_set_surface_params(-1,.001),0);
assert.equal(m._zspace_solver_set_surface_params(1,0),0);
patch({integration:60,edges:0});check(m._zspace_solver_step(1));
assert(positions()[14]<1,'Euler also advances the area force');

function triangleArea(p) {
  const u=p.slice(3,6).map((x,i)=>x-p[i]),v=p.slice(6,9).map((x,i)=>x-p[i]);
  return Math.hypot(u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0])/2;
}
for(const face of ['f 1 2 3','f 3 2 1']) {
  const p=[0,0,0,2,1,0,0,1,3];
  m.FS.writeFile('/triangle.obj',`v 0 0 0\nv 2 1 0\nv 0 1 3\n${face}\n`);
  check(m.ccall('zspace_mesh_read','number',['string'],['/triangle.obj']));
  check(m._zspace_solver_create_dynamics());m._zspace_solver_clear_supports();configure({area:1,edges:0});
  const forces=arrows();assert.equal(forces.length,9);
  for(let k=0;k<9;k++) {
    const plus=[...p],minus=[...p];plus[k]+=1e-5;minus[k]-=1e-5;
    assert(Math.abs(forces[k]+(triangleArea(plus)-triangleArea(minus))/2e-5)<1e-5,'negative area gradient unchanged');
  }
}
for(const obj of ['v 0 0 0\nv 2 0 0\nv 2 2 .5\nv 0 2 0\nf 1 2 3 4\n','v 0 0 0\nv 2 0 0\nv 3 1 0\nv 1 3 0\nv 0 1 0\nf 1 2 3 4 5\n']) {
  m.FS.writeFile('/polygon.obj',obj);check(m.ccall('zspace_mesh_read','number',['string'],['/polygon.obj']));
  check(m._zspace_solver_create_dynamics());m._zspace_solver_clear_supports();configure({area:1,edges:0});
  const before=arrows();assert.equal(m._zspace_face_counts_count(),1);
  check(m._zspace_mesh_triangulate());check(m._zspace_solver_create_dynamics());m._zspace_solver_clear_supports();configure({area:1,edges:0});
  assert.deepEqual(arrows(),before,'internal triangulation preserves area forces');
}
console.log('Combined forces, convergence, previews, area gradient and polygon triangulation passed.');
