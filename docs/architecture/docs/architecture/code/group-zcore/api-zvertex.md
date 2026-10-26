# zVertex

## zSpace::zVertex

Declared in include/zspace/zCore/geometry/zHEGeomTypes.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A vertex struct to hold vertex information of a half-edge data structure.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L365)

### Public Func

#### zVertex

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zVertex::zVertex()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L385)

#### \~zVertex

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zVertex::~zVertex()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L395)

#### getId

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zVertex::getId()
```
{% endcode %}

This method gets the index of current vertex.

int - vertex index. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L406)

#### setId

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVertex::setId(int _vertexId)
```
{% endcode %}

This method sets the index of current vertex to the the input value.

version 0.0.1

Parameter \_vertexId: - input index.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L413)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zVertex::getHalfEdge()
```
{% endcode %}

This method gets the half edge pointed by the current Vertex.

int - half edge pointed to by the vertex. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L420)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVertex::setHalfEdge(int _he)
```
{% endcode %}

This method sets the half edge of the current vertex to the the input half edge.

version 0.0.1

Parameter \_he: - input half edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L427)

#### reset

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVertex::reset()
```
{% endcode %}

This method makes the pointers of the current zVertex to null.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L433)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zVertex::isActive() const
```
{% endcode %}

This method checks if the current element is active.

bool - true if active else false. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L440)

#### zVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zVertex::zVertex()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L354)

#### \~zVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zVertex::~zVertex()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L364)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zVertex::getId()
```
{% endcode %}

This method gets the index of current vertex.

int - vertex index. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L375)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVertex::setId(int _vertexId)
```
{% endcode %}

This method sets the index of current vertex to the the input value.

version 0.0.1

Parameter \_vertexId: - input index.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L382)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zHalfEdge * zSpace::zVertex::getHalfEdge()
```
{% endcode %}

This method gets the half edge pointed by the current Vertex.

zHalfEdge - half edge pointed to by the vertex. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L389)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVertex::setHalfEdge(zHalfEdge *_he)
```
{% endcode %}

This method sets the half edge of the current vertex to the the input half edge.

version 0.0.1

Parameter \_he: - input half edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L396)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVertex::reset()
```
{% endcode %}

This method makes the pointers of the current zVertex to null.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L402)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zVertex::isActive() const
```
{% endcode %}

This method checks if the current element is active.

bool - true if active else false. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L409)

### Related types

[zHalfEdge](api-zhalfedge.md)
