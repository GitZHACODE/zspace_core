# zVolHalfEdge

## zSpace::zVolHalfEdge

Declared in include/zspace/zCore/geometry/zVolGeomTypes.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

An half edge class to hold half edge information of a half-face data structure.

version 0.0.4

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L176)

### Public Func

#### zVolHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zVolHalfEdge::zVolHalfEdge()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L206)

#### \~zVolHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zVolHalfEdge::~zVolHalfEdge()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L216)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zVolHalfEdge::getId()
```
{% endcode %}

This method returns the index of current half edge.

int - half edge index. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L227)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVolHalfEdge::setId(int _edgeId)
```
{% endcode %}

This method sets the index of current half edge to the the input value.

version 0.0.1

Parameter descriptions are absent in the current declaration comments for: \_edgeId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L234)

#### getSym

{% code collapsedlinecount="10" %}
```cpp
zItVolHalfEdge zSpace::zVolHalfEdge::getSym()
```
{% endcode %}

This method returns the symmetry half edge of current half edge.

zHalfEdge - symmetry halfedge pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L241)

#### setSym

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVolHalfEdge::setSym(zItVolHalfEdge &_sym)
```
{% endcode %}

This method sets the symmetry edge of current zEdge to the the input edge.

version 0.0.1

Parameter \_sym: - symmetry half edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L248)

#### getVertex

{% code collapsedlinecount="10" %}
```cpp
zVertex * zSpace::zVolHalfEdge::getVertex()
```
{% endcode %}

This method returns the vertex pointed to by the current zEdge.

zVertex - vertex pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L255)

#### setVertex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVolHalfEdge::setVertex(zVertex *_v)
```
{% endcode %}

This method sets the vertex pointed to by the current half edge to the the input vertex.

version 0.0.1

Parameter \_v: - input vertex.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L262)

#### getFace

{% code collapsedlinecount="10" %}
```cpp
zFace * zSpace::zVolHalfEdge::getFace()
```
{% endcode %}

This method returns the face pointed to by the current half edge.

zEdge - face pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L269)

#### setFace

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVolHalfEdge::setFace(zFace *_f)
```
{% endcode %}

This method sets the face pointed to by the current half edge to the the input face.

version 0.0.1

Parameter \_f: - input face.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L276)

#### getEdge

{% code collapsedlinecount="10" %}
```cpp
zEdge * zSpace::zVolHalfEdge::getEdge()
```
{% endcode %}

This method gets the edge pointed to by the current half edge.

zEdge - edge pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L283)

#### setEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVolHalfEdge::setEdge(zEdge *_e)
```
{% endcode %}

This method sets the edge pointed to by the current halfedge to the the input edge.

version 0.0.1

Parameter \_e: - input edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L290)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVolHalfEdge::reset()
```
{% endcode %}

This method resets the pointers of the half edge to null.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L296)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zVolHalfEdge::isActive() const
```
{% endcode %}

This method checks if the current element is active.

bool - true if active else false. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L303)

### Related types

[zEdge](api-zedge.md)

[zFace](api-zface.md)

[zVertex](api-zvertex.md)
