# Desktop slicer in Alice 2

Alice 2 is the native desktop application for the slicer example. The **Slicer End-to-End Test (Harmonic | Topology)** sketch imports tagged USD, displays inputs and intermediate geometry, computes print paths, and exports the input together with print geometry. Slicing and PrintSyn implementations belong to the adjacent `zspace_toolsets` repository.

This guide follows committed source `d8d3bd4a1e03cd19ecd16e4231b9054efde79184`. See [build and dependencies](build.md) to prepare the native application. No new application build or screenshot was produced for this documentation change.

## Load and inspect

Start the slicer-enabled Alice 2 build. In the slicer sketch, press `i` to choose a `.usd`, `.usda` or `.usdc` input. Loading shows the input preview; select **Harmonic** or **Topology** to compute that mode. The **Layer Spacing (mm)** control is shared by both slicers.

Use `k` / `K` to cycle display modes forward/backward. Topology views include tagged input, loops, section meshes, fields/paths, print mesh and a layer inspector. Harmonic views additionally expose tetrahedral geometry, harmonic coordinates and trace diagnostics. In layer-inspector mode, the up/down arrows change the inspected layer. Use status and console messages to distinguish a completed result from partial diagnostic output.

## Input and units

The current tagged input contains `/AG_block`, `/Slicer_bracing`, `/Slicer_slot`, `/Slicer_data` and `/Slicer_setting`. Face tags use Bottom=1, Top=2 and Side=3. Tag tables, width groups and settings are part of the input, not values inferred from display colors. Read the [toolsets input contract](https://github.com/GitZHACODE/zspace_toolsets/blob/feature/zspace-v3-gitbook/docs/gitbook/slicer/input.md) for the complete schema.

The native reader applies transforms and normalizes geometry and dimensional settings to millimetres using the USD stage unit. Angles and dimensionless settings are unchanged. The input's original unit is retained for export.

The repository contains a small complete [slicing-block.usda fixture](https://github.com/GitZHACODE/zspace_alice2/blob/d8d3bd4a1e03cd19ecd16e4231b9054efde79184/alice2/verification/fixtures/slicing-block.usda). This is a source fixture for inspecting the schema, not a newly verified print example. Browser importers from other source versions may expect a different schema; consult the [compatibility register](https://github.com/GitZHACODE/zspace_core/blob/feature/zspace-v3-gitbook/docs/gitbook/slicer/compatibility.md).

## Export

After slicing and PrintSyn have produced a combined path, use the sketch's USD export action. It requires a USD input and a completed result. The exporter preserves the input stage and writes `/TDP_gcode`, `/TDP_printmesh` and `/TDP_printpath`, converting dimensional output to source stage units.

The sketch supplies processed per-layer paths so print-mesh visualization does not loft travel connectors between layers. A print-mesh display is a geometric representation of path width, height and normal; it is not a fabrication test.

## Sources

* [Slicer sketch and UI](https://github.com/GitZHACODE/zspace_alice2/blob/d8d3bd4a1e03cd19ecd16e4231b9054efde79184/alice2/userSrc/zspace/sketch_harmonic_slicer_test.cpp)
* [Desktop slicing settings](https://github.com/GitZHACODE/zspace_alice2/blob/d8d3bd4a1e03cd19ecd16e4231b9054efde79184/alice2/include/zspace/zSlicingSettings.h)
