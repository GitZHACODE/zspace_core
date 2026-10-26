# Using geometry and IO APIs

### Create geometry through a bound function set

{% code collapsedlinecount="10" %}
```cpp
#include <zspace/interface.h>
#include <zspace/io.h>

using namespace zSpace;
zObjectMesh mesh;
zFnMesh fn(mesh);
zPointArray points;
zIntArray faceCounts, faceConnects;
// Fill points, per-face vertex counts, and flattened vertex indices.
fn.create(points, faceCounts, faceConnects);
zPoint minPoint, maxPoint;
fn.getBounds(minPoint, maxPoint);
```
{% endcode %}

The arrays in this schematic snippet must contain valid geometry before create is called. faceCounts describes polygon sizes; faceConnects contains the corresponding concatenated vertex indices. Consult the overload declarations and smoke examples for topology requirements. Keep the owning object alive while its function set or iterators are in use.

### Load and save through zIO

{% code collapsedlinecount="10" %}
```cpp
zObjectMesh imported;
auto result = zIO::readMesh("input.obj", imported);
if (!result) {
    const auto message = result.message();
    // Report the failure in the calling application.
}
// After a successful read:
// auto written = zIO::writeMesh("output.obj", imported);
```
{% endcode %}

Check IO results before operating on imported data. Prefer the zIO facade over historical file-format methods on function sets. Graph IO follows the same separation. Display settings belong to zDisplay classes rather than the object’s topology data.

[zFnMesh methods and overloads](group-zinterface/api-zfnmesh.md)

[zObjectMesh ownership](group-zinterface/api-zobjectmesh.md)

[zFnGraph methods](group-zinterface/api-zfngraph.md)

[zIO facade](group-zio/api-zio.md)

This reference shows current declarations and preserves their existing comments. Where comments omit parameter descriptions or still use old parameter names, the generated page explicitly identifies the gap. Signatures and linked implementations take precedence over historical prose.

[tests/smoke](https://github.com/GitZHACODE/zspace_core/tree/23361dea9708c0ff28cddb98fc8667baa0b18c06/tests/smoke)

[agents/querying\_and\_using\_api.md](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/agents/querying_and_using_api.md#L1)
