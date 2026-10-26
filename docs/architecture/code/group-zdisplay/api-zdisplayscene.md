# zDisplayScene

## zSpace::zDisplayScene

Declared in include/zspace/zDisplay/display/zDisplayScene.h. Public class/struct declaration reference.

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L15)

### Public Func

#### zDisplayScene

{% code collapsedlinecount="10" %}
```cpp
zSpace::zDisplayScene::zDisplayScene()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L18)

#### zDisplayScene

{% code collapsedlinecount="10" %}
```cpp
zSpace::zDisplayScene::zDisplayScene(int bufferSize)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: bufferSize. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L19)

#### \~zDisplayScene

{% code collapsedlinecount="10" %}
```cpp
zSpace::zDisplayScene::~zDisplayScene()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L20)

#### zDisplayScene

{% code collapsedlinecount="10" %}
```cpp
zSpace::zDisplayScene::zDisplayScene(const zDisplayScene &)=delete
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L22)

#### operator=

{% code collapsedlinecount="10" %}
```cpp
zDisplayScene & zSpace::zDisplayScene::operator=(const zDisplayScene &)=delete
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L23)

#### zDisplayScene

{% code collapsedlinecount="10" %}
```cpp
zSpace::zDisplayScene::zDisplayScene(zDisplayScene &&) noexcept
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L24)

#### operator=

{% code collapsedlinecount="10" %}
```cpp
zDisplayScene & zSpace::zDisplayScene::operator=(zDisplayScene &&) noexcept
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L25)

#### mesh

{% code collapsedlinecount="10" %}
```cpp
zDisplayMesh & zSpace::zDisplayScene::mesh(zObjectMesh &object)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: object. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L27)

#### graph

{% code collapsedlinecount="10" %}
```cpp
zDisplayGraph & zSpace::zDisplayScene::graph(zObjectGraph &object)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: object. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L28)

#### draw

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::draw(zObjectMesh &object)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: object. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L30)

#### draw

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::draw(zObjectGraph &object)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: object. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L31)

#### draw

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::draw(zObjectMesh &object, const zDisplayMesh &display)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: display, object. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L32)

#### draw

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::draw(zObjectGraph &object, const zDisplayGraph &display)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: display, object. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L33)

#### appendToBuffer

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::appendToBuffer(zObjectMesh &object, const std::vector< double > &dihedralAngles={}, bool dihedralEdgesOnly=false, double angleThreshold=45.0)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: angleThreshold, dihedralAngles, dihedralEdgesOnly, object. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L35)

#### appendToBuffer

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::appendToBuffer(zObjectGraph &object)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: object. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L40)

#### drawBufferedPoints

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawBufferedPoints(bool colors=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colors. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L42)

#### drawBufferedLines

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawBufferedLines(bool colors=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colors. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L43)

#### drawBufferedTriangles

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawBufferedTriangles(bool colors=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colors. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L44)

#### drawBufferedQuads

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawBufferedQuads(bool colors=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colors. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L45)

#### drawPoint

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawPoint(zVector &position, const zColor &color=zColor(1, 0, 0, 1), double weight=1.0)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: color, position, weight. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L47)

#### drawPoints

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawPoints(zVector *positions, zColor *colors, double *weights, int count)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colors, count, positions, weights. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L48)

#### drawPoints

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawPoints(zVector *positions, zColor color, double weight, int count)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: color, count, positions, weight. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L49)

#### drawLine

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawLine(zVector &start, zVector &end, const zColor &color=zColor(1, 0, 0, 1), double weight=1.0)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: color, end, start, weight. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L50)

#### drawCurve

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawCurve(zVector *positions, zColor color, double weight, int count, bool closed)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: closed, color, count, positions, weight. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L51)

#### drawCube

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawCube(zVector &minBounds, zVector &maxBounds, const zColor &color=zColor(1, 0, 0, 1), double weight=1.0)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: color, maxBounds, minBounds, weight. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L52)

#### drawTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zDisplayScene::drawTransform(zTransformationMatrix &transform, float scale=0.1f)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: scale, transform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L53)

#### appendVertexAttributes

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zDisplayScene::appendVertexAttributes(zVector *positions, zVector *normals, int count)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: count, normals, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L55)

#### appendVertexColors

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zDisplayScene::appendVertexColors(zColor *colors, int count)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colors, count. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zDisplay/display/zDisplayScene.h#L56)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zDisplayGraph](api-zdisplaygraph.md)

[zDisplayMesh](api-zdisplaymesh.md)

[zObjectGraph](../group-zinterface/api-zobjectgraph.md)

[zObjectMesh](../group-zinterface/api-zobjectmesh.md)

[zTransformationMatrix](../group-zcore/api-ztransformationmatrix.md)

[zVector](../group-zcore/api-zvector.md)
