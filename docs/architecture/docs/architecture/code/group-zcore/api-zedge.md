# zEdge

## zSpace::zEdge

Declared in include/zspace/zCore/geometry/zHEGeomTypes.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

An edge class to hold edge information of a half-edge data structure.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L63)

### Public Func

#### zEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zEdge::zEdge()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L83)

#### \~zEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zEdge::~zEdge()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L94)

#### getId

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zEdge::getId()
```
{% endcode %}

This method returns the edgeId of current edge.

int - edge index. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L105)

#### setId

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zEdge::setId(int _edgeId)
```
{% endcode %}

This method sets the edgeId of current edge to the input value.

version 0.0.1

Parameter descriptions are absent in the current declaration comments for: \_edgeId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L112)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zEdge::getHalfEdge(int _index)
```
{% endcode %}

This method gets the half edge pointer of current edge at the input index.

version 0.0.1

Parameter \_index: - input index - 0 or 1.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L119)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zEdge::setHalfEdge(int _he, int _index)
```
{% endcode %}

This method sets the half edge pointer of current edge at the input index.

version 0.0.1

Parameter \_he: - input half edge index.

Parameter \_index: - input index - 0 or 1.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L127)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zEdge::isActive() const
```
{% endcode %}

This method checks if the current element is active.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L137)

#### reset

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zEdge::reset()
```
{% endcode %}

This method resets the pointers of the current edge to null.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zHEGeomTypes.h#L143)
