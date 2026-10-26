# zFace

## zSpace::zFace

Declared in include/zspace/zCore/geometry/zHEGeomTypes.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A face struct to hold polygonal information of a half-edge data structure.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L471)

### Public Func

#### zFace

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zFace::zFace()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L490)

#### \~zFace

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zFace::~zFace()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L499)

#### getId

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zFace::getId()
```
{% endcode %}

This method gets the index of current face.

int - face index. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L510)

#### setId

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zFace::setId(int _faceId)
```
{% endcode %}

This method sets the index of current face to the the input value.

version 0.0.1

Parameter \_faceId: - input face index.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L517)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zFace::getHalfEdge()
```
{% endcode %}

This method returns the associated edge of current zFace.

int - half edge pointed to by the face. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L524)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zFace::setHalfEdge(int _he)
```
{% endcode %}

This method sets the associated edge of current zFace to the the input edge.

version 0.0.1

Parameter \_he: - input half edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L531)

#### reset

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zFace::reset()
```
{% endcode %}

This method makes the resets pointers of the current face to null.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L541)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zFace::isActive() const
```
{% endcode %}

This method checks if the current element is active.

bool - true if active else false. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L548)

#### zFace

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFace::zFace()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L459)

#### \~zFace

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFace::~zFace()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L468)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFace::getId()
```
{% endcode %}

This method gets the index of current face.

int - face index. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L479)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFace::setId(int _faceId)
```
{% endcode %}

This method sets the index of current face to the the input value.

version 0.0.1

Parameter \_faceId: - input face index.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L486)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zHalfEdge * zSpace::zFace::getHalfEdge()
```
{% endcode %}

This method returns the associated edge of current zFace.

zHalfEdge - half edge pointed to by the face. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L493)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFace::setHalfEdge(zHalfEdge *_he)
```
{% endcode %}

This method sets the associated edge of current zFace to the the input edge.

version 0.0.1

Parameter \_he: - input half edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L500)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFace::reset()
```
{% endcode %}

This method makes the resets pointers of the current face to null.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L510)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFace::isActive() const
```
{% endcode %}

This method checks if the current element is active.

bool - true if active else false. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L517)

### Related types

[zHalfEdge](api-zhalfedge.md)
