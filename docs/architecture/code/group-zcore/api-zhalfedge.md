# zHalfEdge

## zSpace::zHalfEdge

Declared in include/zspace/zCore/geometry/zHEGeomTypes.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

An half edge class to hold half edge information of a half-edge data structure.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L173)

### Public Func

#### zHalfEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zHalfEdge::zHalfEdge()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L209)

#### \~zHalfEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zHalfEdge::~zHalfEdge()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L219)

#### getId

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zHalfEdge::getId()
```
{% endcode %}

This method returns the index of current half edge.

int - half edge index. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L230)

#### setId

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zHalfEdge::setId(int _halfedgeId)
```
{% endcode %}

This method sets the index of current half edge to the the input value.

version 0.0.1

Parameter \_halfedgeId: - input half edge index

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L237)

#### getSym

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zHalfEdge::getSym()
```
{% endcode %}

This method returns the symmetry half edge of current half edge.

int - symmetry halfedge pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L244)

#### setSym

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zHalfEdge::setSym(int _sym)
```
{% endcode %}

This method sets the symmetry edge of current zEdge to the the input edge.

version 0.0.1

Parameter \_sym: - symmetry half edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L251)

#### getPrev

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zHalfEdge::getPrev()
```
{% endcode %}

This method returns the previous half edge of current zEdge.

int - previous halfedge pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L258)

#### setPrev

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zHalfEdge::setPrev(int _prev)
```
{% endcode %}

This method sets the previous half edge of current half edge to the the input half edge.

version 0.0.1

Parameter \_prev: - previous halfedge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L265)

#### getNext

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zHalfEdge::getNext()
```
{% endcode %}

This method returns the next edge of current halfedge.

int - next halfedge pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L272)

#### setNext

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zHalfEdge::setNext(int _next)
```
{% endcode %}

This method sets the next edge of current half edge to the the input half edge.

version 0.0.1

Parameter \_next: - next half edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L279)

#### getVertex

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zHalfEdge::getVertex()
```
{% endcode %}

This method returns the vertex pointed to by the current zEdge.

int - vertex pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L286)

#### setVertex

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zHalfEdge::setVertex(int _v)
```
{% endcode %}

This method sets the vertex pointed to by the current half edge to the the input vertex.

version 0.0.1

Parameter \_v: - input vertex.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L293)

#### getFace

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zHalfEdge::getFace()
```
{% endcode %}

This method returns the face pointed to by the current half edge.

int - face pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L300)

#### setFace

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zHalfEdge::setFace(int _f)
```
{% endcode %}

This method sets the face pointed to by the current half edge to the the input face.

version 0.0.1

Parameter \_f: - input face.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L307)

#### getEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zHalfEdge::getEdge()
```
{% endcode %}

This method gets the edge pointed to by the current half edge.

int - edge pointed by the half edge. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L314)

#### setEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zHalfEdge::setEdge(int _e)
```
{% endcode %}

This method sets the edge pointed to by the current halfedge to the the input edge.

version 0.0.1

Parameter \_e: - input edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L321)

#### reset

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zHalfEdge::reset()
```
{% endcode %}

This method resets the pointers of the half edge to null.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L327)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zHalfEdge::isActive() const
```
{% endcode %}

This method checks if the current element is active.

bool - true if active else false. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L334)
