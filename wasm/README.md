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
integration, not Kangaroo's global goal-weight averaging solver.

Residual is `abs((k1 + k2) / 2)`, computed by `getPrincipalCurvatures`, exactly
as in the mean-curvature analyzer. Equilibrium requires the maximum over free
vertices to be strictly below the input threshold, in inverse model-length units.
There is no mesh-scale, timestep, mass, or strength normalization. Fixed supports
are excluded; the analyzer includes them. The curvature estimator's limitations
on sparse or degenerate neighborhoods also apply to this stopping criterion.

Display Forces and SoapFilm Force (the existing residual-force flag) enable the
arrows. Display Length Scale scales them; fixed vertices have no force arrows.

Run the runtime regression after building with `node wasm/scripts/test-minimal-surface.mjs`.
