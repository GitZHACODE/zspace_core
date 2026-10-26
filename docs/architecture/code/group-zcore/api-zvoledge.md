# zVolEdge

## zSpace::zVolEdge

Declared in include/zspace/zCore/geometry/zVolGeomTypes.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

An edge class to hold edge information of a half-face data structure.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L65)

### Public Func

#### zVolEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zVolEdge::zVolEdge()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L86)

#### \~zVolEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zVolEdge::~zVolEdge()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L97)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zVolEdge::getId()
```
{% endcode %}

This method returns the edgeId of current edge.

int - edge index. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L108)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVolEdge::setId(int _edgeId)
```
{% endcode %}

This method sets the edgeId of current edge to the input value.

version 0.0.1

Parameter descriptions are absent in the current declaration comments for: \_edgeId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L115)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zItVolHalfEdge zSpace::zVolEdge::getHalfEdge(int _index)
```
{% endcode %}

This method gets the half edge pointer of current edge at the input index.

version 0.0.1

Parameter \_index: - input index - 0 or 1.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L122)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVolEdge::setHalfEdge(zItVolHalfEdge &_he, int _index)
```
{% endcode %}

This method sets the half edge pointer of current edge at the input index.

version 0.0.1

Parameter \_he: - input half edge pointer.

Parameter \_index: - input index - 0 or 1.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L130)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zVolEdge::isActive() const
```
{% endcode %}

This method checks if the current element is active.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L140)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zVolEdge::reset()
```
{% endcode %}

This method resets the pointers of the current edge to null.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/geometry/zVolGeomTypes.h#L146)
