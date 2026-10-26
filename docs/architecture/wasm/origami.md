# Origami Crease Folding

Reference: Ghassaei, Demaine and Gershenfeld, *Fast, Interactive Origami Simulation
using GPU Computation* (2018), equations 1-8; https://origamisimulator.org/.
This implementation runs the compliant bar-and-hinge model on CPU/WASM, not GPU.

## C++

Create `zFnMeshDynamics` particles, then call `prepareOrigami()` once on the rest
mesh. Internal triangles preserve input vertex and edge IDs. Added triangulation
diagonals are flat facet hinges. Unassigned original interior edges are undriven:
neighbouring polygons can bend without being forced coplanar. Use assignment 0
explicitly for original edges that must stay flat. Boundary edges
carry axial stiffness but no hinge. Degenerate or inconsistently wound triangles
are rejected. Do not change topology without preparing a new rest state.

`setOrigamiCrease(edgeId, assignment, angleRadians)` uses original mesh edge IDs:
- `-1`: peak/mountain, negative target angle.
- `1`: valley, positive target angle.
- `0`: flat facet hinge.
- `2`: undriven hinge (axial and triangle-angle constraints remain).

Angles are magnitudes in [0, pi). With an initially +Z-facing sheet, a valley
lifts the two opposite vertices when the crease endpoints are fixed. Reversing
mesh winding reverses the geometric interpretation.

`getOrigamiForces(settings, forces, diagnostics)` evaluates axial springs
(`EA/restLength`), signed dihedral springs (`restLength * fold/facet stiffness`),
triangle corner-angle springs, and relative-velocity damping. Each elastic
term uses the negative gradient of its quadratic energy.
`stepOrigami(settings, dt, diagnostics)` uses semi-implicit Euler with a timestep
limited by local stiffness, particle mass, and damping. Fixed particles do not
move. Settings expose axial, fold, facet, face, damping and foldAmount [-1,1].

## WASM / JavaScript

Load a mesh, set `zspace_solver_set_mode(2)`, then create dynamics. Configure:

```js
module.ccall('zspace_origami_set_params', 'number',
  Array(6).fill('number'), [20, 0.7, 0.7, 0.2, 0.45, 0.5]);
module.ccall('zspace_origami_set_crease', 'number',
  Array(3).fill('number'), [edgeId, -1, 90]); // WASM angles are degrees
```

Both return 1 on success and 0 on failure. `zspace_origami_clear_creases()`
restores original edges to undriven hinges (internal diagonals remain flat).
Existing solver support, step, reset,
force-display and timeline exports apply. `zspace_solver_max_residual()` is the
maximum active hinge-angle error in degrees. Equilibrium requires this below
the configured residual threshold, max relative edge strain < 0.01, and maximum
free-particle speed < 0.001 times reference mesh scale. Incompatible targets may
never satisfy these checks; this is not proof of rigid foldability.
Diagnostics: `zspace_origami_max_strain`, `zspace_origami_max_speed`, and
`zspace_origami_time_step`. `zspace_origami_max_crease_error` reports the largest
peak/valley target error; `zspace_origami_max_panel_bend` reports the largest
internal diagonal bend, both in degrees. Panel bend is diagnostic only; no new
planarity projection or stopping condition is introduced. Creases render red
(mountain) and blue (valley).

A flat sheet at 62% of a 179-degree target has 110.98 degrees initial crease
error. This is a target difference, not initial nonplanarity. Equal target
angles on every segment of a curved crease are not guaranteed compatible.
The default unassigned-edge semantics changed from flat to undriven; callers
requiring the former behavior must explicitly assign 0 to those edges.

Run `node wasm/scripts/test-origami.mjs` against rebuilt outputs. Exception
handling must remain enabled in Emscripten to return validation errors safely.
Do not reload the mesh merely to run analysis during solving: that discards
the rest state. Analysis exports can operate on the currently loaded mesh.

`node wasm/scripts/test-origami-curved-input.mjs path/to/CCF_05a.obj` exercises
the supplied 24-edge peak network at 62% fold; it reports convergence rather
than assuming the target is achievable. The input OBJ is not redistributed.
For faster long-run diagnostics, the native `zspace_smoke CCF_05a.obj [facet]
[axial]` command runs 300,000 substeps. With defaults, the supplied fixture
plateaus at approximately 10.73 degrees crease error, 11.22 degrees panel bend,
and 1.98% maximum strain. It is not solved to the 0.5-degree tolerance. The
finite-difference hinge-force regression passes below 1e-7 absolute error;
changing the force sign is not supported by that evidence. Uniform targets
and finite-stiffness compliance need to be distinguished from a force bug.

No collision/contact handling, plasticity, thickness, or rigid-foldability
guarantee is included. Stiffness ratios control compliance. Start from a valid,
preferably flat sheet and increase fold amount gradually for complex patterns.
