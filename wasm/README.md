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

Mode 1 is a combined relaxation solver, not a pure mathematical minimal surface.
It adds the existing `zFnMeshDynamics::addMinimizeAreaForce` (SoapFilm area
gradient) to the same rest-length spring forces used by DR. Optional gravity
and vector loads participate too. Area forces use internal triangles; springs
use original input edges. The input mesh topology remains unchanged.

`zspace_solver_set_surface_params(areaStrength, stepTolerance)` sets independent
area strength and a positive full-frame displacement tolerance. Spring stiffness,
edge enable, rest-length multiplier, mass, and Euler/RK4 come from the existing
`zspace_solver_set_params` ABI. The guarded DR integrator and damping advance
the combined forces. Area-only descent/backtracking is deliberately not used:
combined relaxation may increase area to balance springs or loads.

Residual is the absolute magnitude of the summed area, spring and enabled load
forces, before integration limiting and excluding damping and support reactions.
Equilibrium requires BOTH maximum free-vertex resultant < residualThreshold AND
maximum free-vertex net displacement over the last frame < stepTolerance.
Defaults in the viewer are Area Strength 0.35, Spring Stiffness 1, Edge Force on,
Resultant Force Threshold 0.02 and Max Step Threshold 0.0001 (model length units).
Unlike the unchanged DR diagnostic, this residual is not a normalized force ratio.

The yellow arrows show this same combined resultant. Display Forces and Resultant
Force enable them, and Display Length Scale scales them. Preview evaluation
restores particle forces and excludes support arrows. Curvature remains an
independent analysis, refreshed by the viewer; equilibrium no longer implies H=0
or a white curvature map. Legacy area-force tolerance exports remain for ABI
compatibility but no longer control mode 1 convergence; their residual is retired.

Run the runtime regression after building with `node wasm/scripts/test-minimal-surface.mjs`.

## Solver Performance

Origami `stepOrigami(settings, timeStep, diagnostics)` advances the complete
requested interval through stability-limited substeps, recomputing the bound
as the mesh moves. Previously it advanced only `min(timeStep, stableTimeStep)`
and discarded the remainder, slowing stiff or small-scale meshes in frame units.
The reported stable step is a numerical integration bound, not a displacement
limit. Origami Max Step is the largest net displacement over one full viewer
solver frame, not just its last substep. Neither quantity replaces the hinge,
strain, and speed convergence checks.

For the supplied nine-ring fixture, run
`node wasm/scripts/test-origami-circular-input.mjs path/to/CCF_06_circular.obj`.
This assigns 192 peak and 144 valley edges at 52% Fold and reports crease error,
panel bend, strain, speed, and the stable step. It tests progress and finite
geometry, not a claim that every soft crease target is simultaneously attainable.

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
