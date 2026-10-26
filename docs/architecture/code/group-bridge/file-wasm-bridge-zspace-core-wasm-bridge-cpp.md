# zspace\_core\_wasm\_bridge.cpp declarations

## wasm/bridge/zspace\_core\_wasm\_bridge.cpp

[Source file](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1)

Free functions, aliases, enums and constants declared in this file. Class and struct members have separate pages.

#### zspace\_sketch\_set\_param

{% code collapsedlinecount="10" %}
```cpp
int zspace_sketch_set_param(const char *name, double value)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: name, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1844)

#### zspace\_sketch\_build

{% code collapsedlinecount="10" %}
```cpp
int zspace_sketch_build()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1865)

#### zspace\_alloc

{% code collapsedlinecount="10" %}
```cpp
void * zspace_alloc(std::size_t bytes)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: bytes. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1910)

#### zspace\_free

{% code collapsedlinecount="10" %}
```cpp
void zspace_free(void *pointer)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: pointer. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1911)

#### zspace\_mesh\_set\_from\_buffers

{% code collapsedlinecount="10" %}
```cpp
int zspace_mesh_set_from_buffers(const float *positions, int positionCount, const std::uint32_t *counts, int faceCount, const std::uint32_t *connects, int connectCount)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: connectCount, connects, counts, faceCount, positionCount, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1913)

#### zspace\_mesh\_graph\_from\_buffers

{% code collapsedlinecount="10" %}
```cpp
int zspace_mesh_graph_from_buffers(const float *positions, int positionCount, const std::uint32_t *edges, int edgeIndexCount, double offset)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: edgeIndexCount, edges, offset, positionCount, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1945)

#### zspace\_mesh\_read

{% code collapsedlinecount="10" %}
```cpp
int zspace_mesh_read(const char *path)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: path. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1969)

#### zspace\_mesh\_smooth

{% code collapsedlinecount="10" %}
```cpp
int zspace_mesh_smooth(int iterations)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: iterations. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1997)

#### zspace\_mesh\_triangulate

{% code collapsedlinecount="10" %}
```cpp
int zspace_mesh_triangulate()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2025)

#### zspace\_mesh\_planarity\_analysis

{% code collapsedlinecount="10" %}
```cpp
int zspace_mesh_planarity_analysis(int method, double threshold, float planarR, float planarG, float planarB, float nonPlanarR, float nonPlanarG, float nonPlanarB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: method, nonPlanarB, nonPlanarG, nonPlanarR, planarB, planarG, planarR, threshold. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2050)

#### zspace\_mesh\_curvature\_analysis

{% code collapsedlinecount="10" %}
```cpp
int zspace_mesh_curvature_analysis(int kind, double threshold, float negativeR, float negativeG, float negativeB, float zeroR, float zeroG, float zeroB, float positiveR, float positiveG, float positiveB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: kind, negativeB, negativeG, negativeR, positiveB, positiveG, positiveR, threshold, zeroB, zeroG, zeroR. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2127)

#### zspace\_mesh\_principal\_curvature\_directions

{% code collapsedlinecount="10" %}
```cpp
int zspace_mesh_principal_curvature_directions(float scale, float k1R, float k1G, float k1B, float k2R, float k2G, float k2B)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: k1B, k1G, k1R, k2B, k2G, k2R, scale. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2234)

#### zspace\_solver\_create\_dynamics

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_create_dynamics()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2290)

#### zspace\_solver\_set\_mode

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_set_mode(int mode)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: mode. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2319)

#### zspace\_solver\_max\_area\_force\_residual

{% code collapsedlinecount="10" %}
```cpp
double zspace_solver_max_area_force_residual()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2341)

#### zspace\_origami\_set\_params

{% code collapsedlinecount="10" %}
```cpp
int zspace_origami_set_params(double axial, double fold, double facet, double face, double damping, double amount)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: amount, axial, damping, face, facet, fold. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2346)

#### zspace\_origami\_set\_crease

{% code collapsedlinecount="10" %}
```cpp
int zspace_origami_set_crease(int edge, int assignment, double degrees)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: assignment, degrees, edge. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2355)

#### zspace\_origami\_clear\_creases

{% code collapsedlinecount="10" %}
```cpp
int zspace_origami_clear_creases()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2364)

#### zspace\_origami\_max\_strain

{% code collapsedlinecount="10" %}
```cpp
double zspace_origami_max_strain()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2371)

#### zspace\_origami\_max\_crease\_error

{% code collapsedlinecount="10" %}
```cpp
double zspace_origami_max_crease_error()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2372)

#### zspace\_origami\_max\_panel\_bend

{% code collapsedlinecount="10" %}
```cpp
double zspace_origami_max_panel_bend()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2373)

#### zspace\_origami\_max\_speed

{% code collapsedlinecount="10" %}
```cpp
double zspace_origami_max_speed()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2374)

#### zspace\_origami\_time\_step

{% code collapsedlinecount="10" %}
```cpp
double zspace_origami_time_step()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2375)

#### zspace\_solver\_set\_support\_size

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_set_support_size(double size)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: size. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2377)

#### zspace\_solver\_set\_surface\_params

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_set_surface_params(double areaStrength, double stepTolerance)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: areaStrength, stepTolerance. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2384)

#### zspace\_planarity\_constraints

{% code collapsedlinecount="10" %}
```cpp
int zspace_planarity_constraints(const char *json)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: json. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2393)

#### zspace\_planarity\_constraints\_from\_buffers

{% code collapsedlinecount="10" %}
```cpp
int zspace_planarity_constraints_from_buffers(const std::uint32_t *offsets, int groupCount, const std::uint32_t *vertices, int vertexIdCount, const double *origins, const double *normals, const std::uint32_t *pairs, const double *lengths, int pairCount)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: groupCount, lengths, normals, offsets, origins, pairCount, pairs, vertexIdCount, vertices. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2403)

#### zspace\_planarity\_params

{% code collapsedlinecount="10" %}
```cpp
int zspace_planarity_params(int mask, int quad, double strength, double tolerance, double groupStrength, double groupTolerance, double pairStrength, double pairTolerance)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: groupStrength, groupTolerance, mask, pairStrength, pairTolerance, quad, strength, tolerance. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2444)

#### zspace\_planarity\_deviation

{% code collapsedlinecount="10" %}
```cpp
double zspace_planarity_deviation(int kind)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: kind. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2456)

#### zspace\_solver\_set\_area\_force\_tolerance

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_set_area_force_tolerance(double tolerance)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: tolerance. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2461)

#### zspace\_solver\_set\_params

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_set_params(double gravity, double directionX, double directionY, double directionZ, double value, double edgeLengthMultiplier, int unusedRestLengthMode, double massMin, double massMax, double timeStep, double vectorScale, double springStiffness, double residualThreshold, int integrationType, int displayForceVectors, int gravityEnabled, int vectorForceEnabled, int edgeForceEnabled, int fixXY, int residualForceEnabled)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: directionX, directionY, directionZ, displayForceVectors, edgeForceEnabled, edgeLengthMultiplier, fixXY, gravity, gravityEnabled, integrationType, massMax, massMin, residualForceEnabled, residualThreshold, springStiffness, timeStep, unusedRestLengthMode, value, vectorForceEnabled, vectorScale. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2469)

#### zspace\_solver\_clear\_supports

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_clear_supports()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2531)

#### zspace\_solver\_add\_support

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_add_support(int vertexId)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: vertexId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2554)

#### zspace\_solver\_remove\_support

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_remove_support(int vertexId)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: vertexId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2579)

#### zspace\_solver\_clear\_removed\_edges

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_clear_removed_edges()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2603)

#### zspace\_solver\_remove\_edge

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_remove_edge(int edgeId)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: edgeId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2625)

#### zspace\_solver\_restore\_edge

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_restore_edge(int edgeId)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: edgeId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2651)

#### zspace\_solver\_remove\_tension\_edge

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_remove_tension_edge(int edgeId)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: edgeId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2674)

#### zspace\_solver\_restore\_tension\_edge

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_restore_tension_edge(int edgeId)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: edgeId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2679)

#### zspace\_solver\_begin\_support\_update

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_begin_support_update()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2684)

#### zspace\_solver\_begin\_config\_update

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_begin_config_update()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2691)

#### zspace\_solver\_end\_support\_update

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_end_support_update()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2698)

#### zspace\_solver\_end\_config\_update

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_end_config_update()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2720)

#### zspace\_solver\_support\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_support_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2742)

#### zspace\_solver\_removed\_edge\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_removed_edge_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2747)

#### zspace\_solver\_tension\_edge\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_tension_edge_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2752)

#### zspace\_solver\_is\_edge\_removed

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_is_edge_removed(int edgeId)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: edgeId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2757)

#### zspace\_solver\_step

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_step(int steps)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: steps. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2763)

#### zspace\_solver\_previous\_frame

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_previous_frame()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2874)

#### zspace\_solver\_reset

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_reset()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2900)

#### zspace\_solver\_frame

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_frame()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2925)

#### zspace\_solver\_min\_residual

{% code collapsedlinecount="10" %}
```cpp
double zspace_solver_min_residual()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2930)

#### zspace\_solver\_max\_residual

{% code collapsedlinecount="10" %}
```cpp
double zspace_solver_max_residual()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2935)

#### zspace\_solver\_residual\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_residual_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2940)

#### zspace\_solver\_equilibrium\_reached

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_equilibrium_reached()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2945)

#### zspace\_solver\_max\_displacement

{% code collapsedlinecount="10" %}
```cpp
double zspace_solver_max_displacement()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2950)

#### zspace\_solver\_update\_preview

{% code collapsedlinecount="10" %}
```cpp
int zspace_solver_update_preview()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2960)

#### zspace\_mesh\_write

{% code collapsedlinecount="10" %}
```cpp
int zspace_mesh_write(const char *path)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: path. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L2980)

#### zspace\_usd\_initialize

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_initialize()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3018)

#### zspace\_usd\_scene\_clear

{% code collapsedlinecount="10" %}
```cpp
void zspace_usd_scene_clear()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3035)

#### zspace\_usd\_scene\_open

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_open(const char *path)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: path. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3036)

#### zspace\_usd\_scene\_mesh\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_mesh_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3049)

#### zspace\_usd\_scene\_name

{% code collapsedlinecount="10" %}
```cpp
const char * zspace_usd_scene_name(int index)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3050)

#### zspace\_usd\_scene\_path

{% code collapsedlinecount="10" %}
```cpp
const char * zspace_usd_scene_path(int index)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3051)

#### zspace\_usd\_scene\_visible

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_visible(int index)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3052)

#### zspace\_usd\_scene\_warning\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_warning_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3053)

#### zspace\_usd\_scene\_warning

{% code collapsedlinecount="10" %}
```cpp
const char * zspace_usd_scene_warning(int index)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3054)

#### zspace\_usd\_scene\_select

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_select(int index)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3055)

#### zspace\_usd\_buffer\_ptr

{% code collapsedlinecount="10" %}
```cpp
const void * zspace_usd_buffer_ptr(int slot)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: slot. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3074)

#### zspace\_usd\_buffer\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_buffer_count(int slot)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: slot. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3086)

#### zspace\_usd\_scene\_add\_mesh

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_add_mesh(const char *name, const char *path, int visible, const float *positions, int positionCount, const std::uint32_t *counts, int faceCount, const std::uint32_t *connects, int connectCount)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: connectCount, connects, counts, faceCount, name, path, positionCount, positions, visible. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3098)

#### zspace\_usd\_scene\_set\_attribute

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_set_attribute(int index, int slot, const void *pointer, int count)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: count, index, pointer, slot. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3129)

#### zspace\_usd\_scene\_save

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_save(const char *path)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: path. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3158)

#### zspace\_usd\_scene\_read

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_read(const char *path, const char *jsonPath)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: jsonPath, path. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3171)

#### zspace\_usd\_scene\_write

{% code collapsedlinecount="10" %}
```cpp
int zspace_usd_scene_write(const char *jsonPath, const char *path)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: jsonPath, path. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3190)

#### zspace\_object\_set\_transform

{% code collapsedlinecount="10" %}
```cpp
int zspace_object_set_transform(float tx, float ty, float tz, float rx, float ry, float rz, float sx, float sy, float sz)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: rx, ry, rz, sx, sy, sz, tx, ty, tz. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3208)

#### zspace\_positions\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_positions_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3235)

#### zspace\_positions\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_positions_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3236)

#### zspace\_normals\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_normals_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3237)

#### zspace\_normals\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_normals_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3238)

#### zspace\_colors\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_colors_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3239)

#### zspace\_colors\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_colors_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3240)

#### zspace\_face\_colors\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_face_colors_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3241)

#### zspace\_face\_colors\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_face_colors_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3242)

#### zspace\_face\_centers\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_face_centers_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3243)

#### zspace\_face\_centers\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_face_centers_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3244)

#### zspace\_face\_normals\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_face_normals_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3245)

#### zspace\_face\_normals\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_face_normals_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3246)

#### zspace\_edge\_centers\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_edge_centers_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3247)

#### zspace\_edge\_centers\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_edge_centers_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3248)

#### zspace\_edge\_weights\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_edge_weights_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3249)

#### zspace\_edge\_weights\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_edge_weights_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3250)

#### zspace\_point\_positions\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_point_positions_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3251)

#### zspace\_point\_positions\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_point_positions_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3252)

#### zspace\_point\_colors\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_point_colors_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3253)

#### zspace\_point\_colors\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_point_colors_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3254)

#### zspace\_point\_sizes\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_point_sizes_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3255)

#### zspace\_point\_sizes\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_point_sizes_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3256)

#### zspace\_line\_positions\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_line_positions_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3257)

#### zspace\_line\_positions\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_line_positions_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3258)

#### zspace\_line\_colors\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_line_colors_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3259)

#### zspace\_line\_colors\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_line_colors_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3260)

#### zspace\_line\_weights\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_line_weights_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3261)

#### zspace\_line\_weights\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_line_weights_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3262)

#### zspace\_vector\_origins\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_vector_origins_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3263)

#### zspace\_vector\_origins\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_vector_origins_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3264)

#### zspace\_vector\_directions\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_vector_directions_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3265)

#### zspace\_vector\_directions\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_vector_directions_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3266)

#### zspace\_vector\_colors\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_vector_colors_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3267)

#### zspace\_vector\_colors\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_vector_colors_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3268)

#### zspace\_vector\_weights\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_vector_weights_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3269)

#### zspace\_vector\_weights\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_vector_weights_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3270)

#### zspace\_polygon\_positions\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_polygon_positions_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3271)

#### zspace\_polygon\_positions\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_polygon_positions_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3272)

#### zspace\_polygon\_colors\_ptr

{% code collapsedlinecount="10" %}
```cpp
const float * zspace_polygon_colors_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3273)

#### zspace\_polygon\_colors\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_polygon_colors_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3274)

#### zspace\_polygon\_indices\_ptr

{% code collapsedlinecount="10" %}
```cpp
const std::uint32_t * zspace_polygon_indices_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3275)

#### zspace\_polygon\_indices\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_polygon_indices_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3276)

#### zspace\_indices\_ptr

{% code collapsedlinecount="10" %}
```cpp
const std::uint32_t * zspace_indices_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3277)

#### zspace\_indices\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_indices_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3278)

#### zspace\_edges\_ptr

{% code collapsedlinecount="10" %}
```cpp
const std::uint32_t * zspace_edges_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3279)

#### zspace\_edges\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_edges_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3280)

#### zspace\_face\_counts\_ptr

{% code collapsedlinecount="10" %}
```cpp
const std::uint32_t * zspace_face_counts_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3281)

#### zspace\_face\_counts\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_face_counts_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3282)

#### zspace\_face\_connects\_ptr

{% code collapsedlinecount="10" %}
```cpp
const std::uint32_t * zspace_face_connects_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3283)

#### zspace\_face\_connects\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_face_connects_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3284)

#### zspace\_faces\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_faces_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3285)

#### zspace\_analysis\_count

{% code collapsedlinecount="10" %}
```cpp
int zspace_analysis_count()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3286)

#### zspace\_analysis\_min\_value

{% code collapsedlinecount="10" %}
```cpp
double zspace_analysis_min_value()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3287)

#### zspace\_analysis\_max\_value

{% code collapsedlinecount="10" %}
```cpp
double zspace_analysis_max_value()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3288)

#### zspace\_analysis\_max\_abs\_value

{% code collapsedlinecount="10" %}
```cpp
double zspace_analysis_max_abs_value()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3289)

#### zspace\_last\_error\_ptr

{% code collapsedlinecount="10" %}
```cpp
const char * zspace_last_error_ptr()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L3290)
