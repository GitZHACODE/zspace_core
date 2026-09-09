import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// Supply browser globals for the browser-only loader; execute the real WASM binary.
const hostProcess = globalThis.process;
const wasmBinary = await readFile(new URL('../out/zspace_core.wasm', import.meta.url));
globalThis.window = {};
globalThis.process = undefined;
const { default: createModule } = await import('../out/zspace_core.js');
const compiled = await WebAssembly.compile(wasmBinary);
const m = await createModule({
  instantiateWasm(imports, ready) {
    const instance = new WebAssembly.Instance(compiled, imports);
    ready(instance);
    return instance.exports;
  }
});
globalThis.process = hostProcess;
delete globalThis.window;

function patch(height, strength = 0.35, timeStep = 0.02, scale = 1, threshold = 0.02, display = 1, showForce = 1, vectorScale = 1) {
  const points = [[-1,-1,0], [1,-1,0], [1,1,0], [-1,1,0], [0,0,height],
    [-1,0,0], [0,-1,0], [1,0,0], [0,1,0]];
  const ring = [1,7,2,8,3,9,4,6];
  const obj = points.map(p => `v ${p.map(x => x * scale).join(' ')}`).join('\n')
    + '\n' + ring.map((v,i) => `f ${v} ${ring[(i+1)%ring.length]} 5`).join('\n') + '\n';
  m.FS.writeFile('/patch.obj', obj);
  assert.equal(m.ccall('zspace_mesh_read', 'number', ['string'], ['/patch.obj']), 1);
  assert.equal(m._zspace_solver_create_dynamics(), 1);
  assert.equal(m._zspace_solver_set_mode(1), 1);
  m._zspace_solver_begin_config_update();
  assert.equal(m._zspace_solver_set_area_force_tolerance(0.001), 1);
  m._zspace_solver_clear_supports();
  for (let i = 0; i < points.length; i++) if (i !== 4) m._zspace_solver_add_support(i);
  assert.equal(m._zspace_solver_set_params(0,0,0,1,0,1,0,0.3,0.3,timeStep,vectorScale,strength,threshold,0,display,0,0,0,0,showForce), 1);
  assert.equal(m._zspace_solver_end_config_update(), 1);
  return m._zspace_solver_max_residual();
}
const initial = patch(1);
assert(initial > 0.02);
assert.equal(m._zspace_solver_equilibrium_reached(), 0);
assert.equal(m._zspace_solver_step(1), 1);
assert.equal(m._zspace_solver_equilibrium_reached(), 0, 'curved patch must not stop at frame 1');
const afterOne = m._zspace_solver_max_residual();
assert(afterOne < initial, 'area descent must reduce curvature');
assert(m.HEAPF32[m._zspace_positions_ptr() / 4 + 14] < 1, 'first step must lower surface area');
for (let i = 0; i < 100 && !m._zspace_solver_equilibrium_reached(); i++) {
  assert.equal(m._zspace_solver_step(100), 1);
}
assert.equal(m._zspace_solver_equilibrium_reached(), 1, 'patch must eventually converge');
assert(m._zspace_solver_max_residual() < 0.02);
const positions = Array.from(m.HEAPF32.subarray(m._zspace_positions_ptr() / 4, m._zspace_positions_ptr() / 4 + 15));
assert(Math.abs(positions[14]) < 0.02, 'center must approach the boundary plane');
assert.deepEqual(positions.slice(0, 12), [-1,-1,0,1,-1,0,1,1,0,-1,1,0]);
const convergedFrame = m._zspace_solver_frame();
assert.equal(m._zspace_mesh_curvature_analysis(1,0.02,0,0,1,1,1,1,1,0,0), 1);
const centerColor = Array.from(m.HEAPF32.subarray(m._zspace_colors_ptr()/4+12, m._zspace_colors_ptr()/4+15));
assert.deepEqual(centerColor, [1,1,1], 'converged free vertex must be white at the same analysis threshold');
assert.equal(patch(0), 0);
assert.equal(m._zspace_solver_equilibrium_reached(), 1, 'flat patch is already minimal');
assert(Math.abs(patch(1, 0, 0.0001) - initial) < 1e-6);
assert.equal(m._zspace_solver_step(1), 1);
assert.equal(m._zspace_solver_equilibrium_reached(), 0, 'zero movement is not equilibrium');
assert(Math.abs(patch(1, 0.35, 0.02, 10) * 10 - initial) < 1e-5, 'mean curvature must scale inversely with model length');
patch(1, 0.35, 0.02, 1, initial * 1.01);
assert.equal(m._zspace_solver_equilibrium_reached(), 0, 'low fitted curvature cannot bypass area-force equilibrium');
assert(m._zspace_solver_max_area_force_residual() > 0.001);
m._zspace_solver_set_area_force_tolerance(10);
m._zspace_solver_update_preview();
assert.equal(m._zspace_solver_equilibrium_reached(), 1, 'both independent tolerances govern convergence');
patch(1, 0.35, 0.02, 1, initial * 0.99);
assert.equal(m._zspace_solver_equilibrium_reached(), 0);

function arrows() {
  return Array.from(m.HEAPF32.subarray(m._zspace_vector_directions_ptr()/4,
    (m._zspace_vector_directions_ptr() + m._zspace_vector_directions_count()*4)/4));
}
assert.equal(m._zspace_vector_directions_count(), 3, 'only the free center gets a force arrow');
const force = arrows();
assert(force[2] < 0, 'SoapFilm arrow must point toward the boundary plane');
patch(1, 0.7);
assert(Math.abs(arrows()[2] - 2 * force[2]) < 1e-6, 'arrow must reflect Area Strength');
patch(1, 0.35, 0.02, 1, 0.02, 1, 1, 2);
assert(Math.abs(arrows()[2] - 2 * force[2]) < 1e-6, 'display scale must scale arrows');
patch(1, 0.35, 0.02, 1, 0.02, 0);
assert.equal(m._zspace_vector_directions_count(), 0);
patch(1, 0.35, 0.02, 1, 0.02, 1, 0);
assert.equal(m._zspace_vector_directions_count(), 0);
patch(1);
m._zspace_solver_clear_supports();
const solverMean = m._zspace_solver_max_residual();
assert.equal(m._zspace_mesh_curvature_analysis(1,0,0,0,1,1,1,1,1,0,0), 1);
assert.equal(solverMean, m._zspace_analysis_max_abs_value(), 'solver and analyzer must use identical mean curvature');
assert.equal(m._zspace_mesh_curvature_analysis(1,solverMean,0,0,1,1,1,1,1,0,0), 1);
assert(Array.from(m.HEAPF32.subarray(m._zspace_colors_ptr()/4,
  m._zspace_colors_ptr()/4+m._zspace_colors_count())).every(c => c === 1), 'threshold must not be capped to a fraction of the range');
assert.equal(m._zspace_solver_update_preview(), 1);
assert(m._zspace_vector_directions_count() > 0, 'force preview must rebuild after analysis');
console.log(JSON.stringify({ initial, afterOne, convergedFrame, centerHeight: positions[14], result: 'passed' }));

// Compare actual first-step forces with independent central differences of triangle area.
function triangleArea(p) {
  const ab = p.slice(3, 6).map((x, i) => x - p[i]);
  const ac = p.slice(6, 9).map((x, i) => x - p[i]);
  return Math.hypot(ab[1]*ac[2]-ab[2]*ac[1], ab[2]*ac[0]-ab[0]*ac[2], ab[0]*ac[1]-ab[1]*ac[0]) / 2;
}
let maximumForceError = 0;
for (const face of ['f 1 2 3', 'f 3 2 1']) {
  const p = [0,0,0,2,1,0,0,1,3];
  m.FS.writeFile('/triangle.obj', 'v 0 0 0\nv 2 1 0\nv 0 1 3\n' + face + '\n');
  assert.equal(m.ccall('zspace_mesh_read', 'number', ['string'], ['/triangle.obj']), 1);
  m._zspace_solver_create_dynamics();
  m._zspace_solver_begin_config_update();
  m._zspace_solver_set_mode(1);
  m._zspace_solver_clear_supports();
  m._zspace_solver_set_params(0,0,0,1,0,1,0,1,1,0.01,1,1,0,0,1,0,0,0,0,1);
  m._zspace_solver_end_config_update();
  assert.equal(m._zspace_solver_step(1), 1);
  const next = Array.from(m.HEAPF32.subarray(m._zspace_positions_ptr()/4, m._zspace_positions_ptr()/4+9));
  assert(triangleArea(next) < triangleArea(p));
  for (let k = 0; k < 9; k++) {
    const plus = [...p], minus = [...p];
    plus[k] += 1e-5;
    minus[k] -= 1e-5;
    const negativeGradient = -(triangleArea(plus) - triangleArea(minus)) / 2e-5;
    const measuredForce = (next[k] - p[k]) / 0.01;
    maximumForceError = Math.max(maximumForceError, Math.abs(measuredForce - negativeGradient));
    assert(Math.abs(measuredForce - negativeGradient) < 0.003, 'force must match the negative numerical area gradient');
  }
}
console.log(JSON.stringify({ maximumForceError, windingChecks: 2, forceDerivativeCheck: 'passed' }));

function configureUnconstrainedPreview() {
  m._zspace_solver_create_dynamics();
  m._zspace_solver_begin_config_update();
  m._zspace_solver_set_mode(1);
  m._zspace_solver_clear_supports();
  m._zspace_solver_set_params(0,0,0,1,0,1,0,1,1,0.01,1,1,0,0,1,0,0,0,0,1);
  m._zspace_solver_end_config_update();
}
for (const obj of [
  'v 0 0 0\nv 2 0 0\nv 2 2 0.5\nv 0 2 0\nf 1 2 3 4\n',
  'v 0 0 0\nv 2 0 0\nv 3 1 0\nv 1 3 0\nv 0 1 0\nf 1 2 3 4 5\n'
]) {
  m.FS.writeFile('/polygon.obj', obj);
  assert.equal(m.ccall('zspace_mesh_read', 'number', ['string'], ['/polygon.obj']), 1);
  configureUnconstrainedPreview();
  const polygonForces = arrows();
  const vertexCount = m._zspace_positions_count() / 3;
  assert.equal(m._zspace_face_counts_count(), 1, 'internal triangles must preserve the polygon topology');
  assert.equal(m._zspace_mesh_triangulate(), 1);
  configureUnconstrainedPreview();
  assert.equal(m._zspace_positions_count() / 3, vertexCount);
  assert.deepEqual(arrows(), polygonForces, 'polygon force must match explicitly triangulated mesh force');
  const before = arrows();
  for (let i = 0; i < 5; i++) m._zspace_solver_update_preview();
  assert.deepEqual(arrows(), before, 'preview must not accumulate particle forces');
}
console.log('Mean-curvature thresholds, SoapFilm arrows, and internal quad/n-gon triangulation passed.');

// Stress the stored RK4 setting from existing scenes with a perturbed multi-vertex patch.
const side = 7, grid = [], faces = [], supports = [];
for (let y = 0; y < side; y++) for (let x = 0; x < side; x++) {
  const edge = x === 0 || y === 0 || x === side-1 || y === side-1;
  grid.push([x,y,edge ? 0 : 0.4*Math.sin(x*2.1+y*1.7)]);
  if (edge) supports.push(y*side+x);
  if (x < side-1 && y < side-1) {
    const a=y*side+x+1;
    faces.push(`f ${a} ${a+1} ${a+side+1} ${a+side}`);
  }
}
m.FS.writeFile('/grid.obj', grid.map(p => `v ${p.join(' ')}`).join('\n')+'\n'+faces.join('\n')+'\n');
assert.equal(m.ccall('zspace_mesh_read','number',['string'],['/grid.obj']),1);
configureUnconstrainedPreview();
m._zspace_solver_begin_config_update();
for (const i of supports) m._zspace_solver_add_support(i);
m._zspace_solver_set_params(0,0,0,1,0,1,0,0.3,0.3,0.05,1,10,0,61,1,0,0,0,0,1);
m._zspace_solver_end_config_update();
function meshArea() {
  const p=m.HEAPF32.subarray(m._zspace_positions_ptr()/4,m._zspace_positions_ptr()/4+m._zspace_positions_count());
  const ids=m.HEAPU32.subarray(m._zspace_indices_ptr()/4,m._zspace_indices_ptr()/4+m._zspace_indices_count());
  let area=0;
  for(let i=0;i<ids.length;i+=3) area+=triangleArea([...p.slice(ids[i]*3,ids[i]*3+3),...p.slice(ids[i+1]*3,ids[i+1]*3+3),...p.slice(ids[i+2]*3,ids[i+2]*3+3)]);
  return area;
}
const initialArea=meshArea();
let previousArea=initialArea;
for(let frame=0;frame<80;frame++) {
  assert.equal(m._zspace_solver_step(1),1);
  const nextArea=meshArea();
  assert(nextArea <= previousArea+1e-7, 'every accepted frame must decrease area');
  previousArea=nextArea;
}
assert(previousArea < initialArea-0.1, 'perturbed patch must smooth');
const finalGrid=m.HEAPF32.subarray(m._zspace_positions_ptr()/4,m._zspace_positions_ptr()/4+m._zspace_positions_count());
for(const i of supports) assert.deepEqual(Array.from(finalGrid.slice(i*3,i*3+3)),grid[i]);
assert(Math.max(...grid.map((_,i)=>Math.abs(finalGrid[i*3+2]))) < 0.05, 'interior must approach the boundary plane');
console.log(JSON.stringify({initialArea,finalArea:previousArea,areaDescent:'passed'}));

const spacing = [-1,-0.8,-0.55,-0.3,0,0.2,0.45,0.7,1];
// Scherk's graph has H=0 analytically; evaluate it at final x/y as vertices can move tangentially.
const scherk = (x,y) => Math.log(Math.cos(0.3*y)/Math.cos(0.3*x))/0.3;
const saddle = [], saddleFaces = [], saddleSupports = [];
for (let y=0;y<9;y++) for(let x=0;x<9;x++) {
  const u=spacing[x],v=spacing[y],boundary=x===0||y===0||x===8||y===8;
  saddle.push([u,v,scherk(u,v)+(boundary?0:0.12*Math.sin(x*1.7+y*2.3))]);
  if(boundary) saddleSupports.push(y*9+x);
  if(x<8&&y<8) {const a=y*9+x+1;saddleFaces.push(`f ${a} ${a+1} ${a+10} ${a+9}`);}
}
m.FS.writeFile('/saddle.obj',saddle.map(p=>`v ${p.join(' ')}`).join('\n')+'\n'+saddleFaces.join('\n')+'\n');
assert.equal(m.ccall('zspace_mesh_read','number',['string'],['/saddle.obj']),1);
configureUnconstrainedPreview();
m._zspace_solver_begin_config_update();
for(const i of saddleSupports) m._zspace_solver_add_support(i);
m._zspace_solver_set_area_force_tolerance(0.001);
m._zspace_solver_set_params(0,0,0,1,0,1,0,0.3,0.3,0.05,1,0.35,0.02,61,1,0,0,0,0,1);
m._zspace_solver_end_config_update();
const saddleStart=meshArea();
let saddlePrevious=saddleStart;
for(let i=0;i<3000&&!m._zspace_solver_equilibrium_reached();i++) {
  assert.equal(m._zspace_solver_step(1),1);
  const next=meshArea();
  assert(next<=saddlePrevious+1e-6);
  saddlePrevious=next;
}
assert.equal(m._zspace_solver_equilibrium_reached(),1,'non-planar boundary must converge under both criteria');
assert(m._zspace_solver_max_area_force_residual()<0.001);
assert(m._zspace_solver_max_residual()<0.02);
const saddleFinal=m.HEAPF32.subarray(m._zspace_positions_ptr()/4,m._zspace_positions_ptr()/4+m._zspace_positions_count());
for(const i of saddleSupports) for(let k=0;k<3;k++) assert(Math.abs(saddleFinal[i*3+k]-saddle[i][k])<1e-7);
let maxScherkError=0;
for(let i=0;i<saddle.length;i++) maxScherkError=Math.max(maxScherkError,Math.abs(saddleFinal[i*3+2]-scherk(saddleFinal[i*3],saddleFinal[i*3+1])));
assert(maxScherkError<0.01,'discrete solution must approximate the analytic minimal surface');
assert(saddlePrevious<saddleStart-0.01);
console.log(JSON.stringify({saddleStart,saddleFinalArea:saddlePrevious,forceResidual:m._zspace_solver_max_area_force_residual(),meanCurvature:m._zspace_solver_max_residual(),saddleFrame:m._zspace_solver_frame(),maxScherkError}));

// A sparse fit can return zero H even on a raised patch; it must not bypass the force check.
m.FS.writeFile('/sparse.obj','v -1 -1 0\nv 1 -1 0\nv 1 1 0\nv -1 1 0\nv 0 0 1\nf 1 2 5\nf 2 3 5\nf 3 4 5\nf 4 1 5\n');
assert.equal(m.ccall('zspace_mesh_read','number',['string'],['/sparse.obj']),1);
configureUnconstrainedPreview();
m._zspace_solver_begin_config_update();
for(let i=0;i<4;i++) m._zspace_solver_add_support(i);
m._zspace_solver_set_params(0,0,0,1,0,1,0,0.3,0.3,0.05,1,0,0.02,61,1,0,0,0,0,1);
m._zspace_solver_end_config_update();
assert.equal(m._zspace_solver_max_residual(),0);
assert(m._zspace_solver_max_area_force_residual()>0.001);
assert.equal(m._zspace_solver_equilibrium_reached(),0);
console.log('Sparse curvature fit and zero strength cannot fake equilibrium.');
