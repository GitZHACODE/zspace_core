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

function patch(height, strength = 0.35, timeStep = 0.02, scale = 1) {
  const points = [[-1,-1,0], [1,-1,0], [1,1,0], [-1,1,0], [0,0,height]];
  const obj = points.map(p => `v ${p.map(x => x * scale).join(' ')}`).join('\n')
    + '\nf 1 2 5\nf 2 3 5\nf 3 4 5\nf 4 1 5\n';
  m.FS.writeFile('/patch.obj', obj);
  assert.equal(m.ccall('zspace_mesh_read', 'number', ['string'], ['/patch.obj']), 1);
  assert.equal(m._zspace_solver_create_dynamics(), 1);
  assert.equal(m._zspace_solver_set_mode(1), 1);
  m._zspace_solver_begin_config_update();
  m._zspace_solver_clear_supports();
  for (let i = 0; i < 4; i++) m._zspace_solver_add_support(i);
  assert.equal(m._zspace_solver_set_params(0,0,0,1,0,1,0,0.3,0.3,timeStep,1,strength,0.02,0,1,0,0,0,0,1), 1);
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
assert.equal(patch(0), 0);
assert.equal(m._zspace_solver_equilibrium_reached(), 1, 'flat patch is already minimal');
assert(Math.abs(patch(1, 0, 0.0001) - initial) < 1e-6);
assert.equal(m._zspace_solver_step(1), 1);
assert.equal(m._zspace_solver_equilibrium_reached(), 0, 'zero movement is not equilibrium');
assert(Math.abs(patch(1, 0.35, 0.02, 10) - initial) < 1e-6, 'residual must be scale invariant');
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
    const measuredForce = (next[k] - p[k]) / 0.0001;
    maximumForceError = Math.max(maximumForceError, Math.abs(measuredForce - negativeGradient));
    assert(Math.abs(measuredForce - negativeGradient) < 0.003, 'force must match the negative numerical area gradient');
  }
}
console.log(JSON.stringify({ maximumForceError, windingChecks: 2, forceDerivativeCheck: 'passed' }));
