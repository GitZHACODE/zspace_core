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
