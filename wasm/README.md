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

Mode 1 minimizes triangulated surface area. Its residual is the maximum of
`|gradient(area)| * referenceEdgeLength / (2 * vertexArea)` over free vertices.
Vertex area is one third of each incident triangle's area; reference edge length
is the average edge length when dynamics are created. This dimensionless discrete
mean-curvature magnitude is independent of timestep, mass, drag, and area strength.
Support vertices are excluded because their constraint reactions can balance
nonzero curvature. Equilibrium means residual below the configured tolerance,
not exactly zero curvature everywhere. Invalid or zero-area geometry cannot
declare equilibrium. The analysis visualizer may use a different curvature estimator.

Run the runtime regression after building with `node wasm/scripts/test-minimal-surface.mjs`.
