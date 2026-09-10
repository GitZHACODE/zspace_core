# zSpace Core WASM

This folder owns the browser/WASM build for `zspace_core`.

```text
bridge/   C++ bridge and compatibility headers exported to JavaScript.
scripts/  Local Emscripten setup and build wrappers.
out/      Generated `zspace_core.js` and `zspace_core.wasm` output.
```

`zspace_alice_webviewer` consumes the generated files from `wasm/out/`; it does
not own the C++ to WASM build.

The current bridge was promoted from the old Alice demo archive. It still
contains the transitional live-sketch entry points used by the viewer, but the
build ownership is now here so core API exports can be managed from the core
repo.

## Build

From this repository root:

```bat
wasm\scripts\build-wasm.bat
```

The script expects Emscripten to be installed at `%USERPROFILE%\emsdk` or
available on `PATH`.

Generated files are written to:

```text
wasm/out/zspace_core.js
wasm/out/zspace_core.wasm
```

## Minimal Surface Convergence

Mode 1 accumulates strength-weighted triangle moves from Dan Piker's
[SoapFilm element](https://github.com/Dan-Piker/K2Goals/blob/master/SoapFilm.cs).
The existing `zFnMeshDynamics::addMinimizeAreaForce` supplies both the particle
forces and yellow force arrows; preview sampling restores the particle forces.
Polygons are internally triangulated for force evaluation without changing the
viewer mesh topology. This uses the element calculation with zSpace particle
updates, not Kangaroo's global goal-weight averaging solver. Minimal-surface
updates use force/mass descent with backtracking: each accepted substep must
not increase triangulated area or reverse an element orientation. They do not
reuse the particle integrator's velocity/derivative history. Euler/RK4 remains
a dynamic-relaxation setting only.

Residual is `abs((k1 + k2) / 2)`, computed by `getPrincipalCurvatures`, exactly
as in the mean-curvature analyzer. Equilibrium requires the maximum over free
vertices to be strictly below the input threshold, in inverse model-length units.
There is no mesh-scale, timestep, mass, or strength normalization. Fixed supports
are excluded; the analyzer includes them. The curvature estimator's limitations
on sparse or degenerate neighborhoods also apply to this stopping criterion.

Equilibrium additionally requires the maximum area-force residual to be below
`areaForceTolerance` (default 0.001), set through
`zspace_solver_set_area_force_tolerance`. Its value, exposed by
`zspace_solver_max_area_force_residual`, is
`|gradient A_i| * referenceEdgeLength / (2 * vertexArea_i)` at free vertices.
It uses unit tension, independent of Area Strength, and is dimensionless.
Invalid or zero-area elements cannot satisfy the check. This prevents a low
fitted curvature value from concealing significant remaining area forces.

Descent uses lumped vertex areas (one third of each incident triangle area)
as a positive mass multiplier, normalized by average vertex area. This balances
motion on nonuniform meshes without adding an edge-spring energy or changing
area stationary points. Backtracking still checks area and element orientation.

Display Forces and SoapFilm Force (the existing residual-force flag) enable the
arrows. Display Length Scale scales them; fixed vertices have no force arrows.

Curvature analysis uses the requested threshold directly as the white band;
it does not clamp that band to a fraction of the current color range. At solver
equilibrium, free vertices are white at an equal analysis threshold. Supports
may remain colored because the solver does not constrain their curvature.

Run the runtime regression after building with `node wasm/scripts/test-minimal-surface.mjs`.

## Solver Performance

The WASM build uses `-O2` for the bridge, sketch, and kernel sources. Do not ship
an `-O0` build for interactive dynamics; no fast-math flags are required.
Run `node wasm/scripts/benchmark-origami.mjs wasm/build/perf.json` from the
repository root to measure 432- and 1600-vertex annular meshes. The output includes
final positions for numerical comparison, as well as median and p95 frame times.
Compare timings on the same machine and compare positions before accepting an
optimization. This benchmark measures solver calls, not browser rendering FPS.

Viewer playback budgets complete updates (including geometry and analysis),
starting at one solver frame per redraw and capping adaptive batches at four.
Physics timesteps and convergence tolerances are independent of this scheduling.
