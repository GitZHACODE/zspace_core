# zBin

## zSpace::zBin

Declared in include/zspace/zCore/field/zBin.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A class to hold vertex indicies inside a bin .

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zBin.h#L44)

### Public Func

#### zBin

{% code collapsedlinecount="10" %}
```cpp
zSpace::zBin::zBin()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zBin.h#L59)

#### \~zBin

{% code collapsedlinecount="10" %}
```cpp
zSpace::zBin::~zBin()
```
{% endcode %}

Default destructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zBin.h#L68)

#### addObject

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zBin::addObject()
```
{% endcode %}

This method adds an object to the bin.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zBin.h#L78)

#### addVertexIndex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zBin::addVertexIndex(int vertexId, int objectId)
```
{% endcode %}

This method adds the input vertex index of the input object to the bin.

version 0.0.3

Parameter vertexId: - input vertexId.

Parameter objectId: - input objectId.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zBin.h#L86)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zBin::clear()
```
{% endcode %}

This method clears the vertex indicies container.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zBin.h#L92)

#### contains

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zBin::contains()
```
{% endcode %}

This method returns if the bin contains any index or not.

bool - true if the bin cntains atleat one vertex index, else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zBin.h#L99)
