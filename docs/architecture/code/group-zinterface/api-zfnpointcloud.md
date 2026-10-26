# zFnPointCloud

## zSpace::zFnPointCloud

Declared in include/zspace/zInterface/functionsets/zFnPointCloud.h. Public class/struct declaration reference.

A point cloud function set.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L44)

[Base: zSpace::zFn](api-zfn.md)

### Public Func

#### zFnPointCloud

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPointCloud::zFnPointCloud()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L64)

#### zFnPointCloud

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPointCloud::zFnPointCloud(zObjectPointCloud &_pointsObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter \_pointsObj: - input point cloud object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L71)

#### \~zFnPointCloud

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPointCloud::~zFnPointCloud()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L81)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnPointCloud::getType() override
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L87)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::getBounds(zPoint &minBB, zPoint &maxBB) override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L90)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::clear() override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L92)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::create(zPointArray(&_positions))
```
{% endcode %}

This method creates a mesh from the input containers.

version 0.0.1

Parameter \_positions: - container of type zVector containing position information of vertices.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L103)

#### addPosition

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::addPosition(zPoint &_position)
```
{% endcode %}

This method adds the input point to the point cloud.

version 0.0.2

Parameter \_position: - input position to be added.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L113)

#### addPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::addPositions(zPointArray &_positions)
```
{% endcode %}

This method adds the input point container to the point cloud.

version 0.0.2

Parameter \_positions: - input container positions to be added.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L119)

#### numVertices

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnPointCloud::numVertices()
```
{% endcode %}

This method returns the number of points in the pointcloud.

number of points. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L129)

#### setVertexColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::setVertexColor(zColor col)
```
{% endcode %}

This method sets point color of all the point with the input color.

version 0.0.2

Parameter col: - input color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L140)

#### setVertexColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::setVertexColors(zColorArray &col)
```
{% endcode %}

This method sets point color of all the point with the input color contatiner.

version 0.0.2

Parameter col: - input color contatiner. The size of the contatiner should be equal to number of points in the point cloud.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L147)

#### getVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::getVertexPositions(zPointArray &pos)
```
{% endcode %}

This method gets vertex positions of all the vertices.

version 0.0.2

Parameter pos: - positions contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L158)

#### getRawVertexPositions

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zFnPointCloud::getRawVertexPositions()
```
{% endcode %}

This method gets pointer to the internal vertex positions container.

zVector\* - pointer to internal vertex position container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L165)

#### getVertexColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::getVertexColors(zColorArray &col)
```
{% endcode %}

This method gets vertex color of all the vertices.

version 0.0.2

Parameter col: - color contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L172)

#### getRawVertexColors

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zFnPointCloud::getRawVertexColors()
```
{% endcode %}

This method gets pointer to the internal vertex color container.

zColor\* - pointer to internal vertex color container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L179)

#### setTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::setTransform(zTransform &inTransform, bool decompose=true, bool updatePositions=true) override
```
{% endcode %}

This method sets the object transform to the input transform.

version 0.0.2

Parameter inTransform: - input transform.

Parameter decompose: - decomposes transform to rotation and translation if true.

Parameter updatePositions: - updates the object positions if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L186)

#### setScale

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::setScale(zFloat4 &scale) override
```
{% endcode %}

This method sets the scale components of the object.

version 0.0.2

Parameter scale: - input scale values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L188)

#### setRotation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::setRotation(zFloat4 &rotation, bool appendRotations=false) override
```
{% endcode %}

This method sets the rotation components of the object.

version 0.0.2

Parameter rotation: - input rotation values.

Parameter append: - true if the input values are added to the existing rotations.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L190)

#### setTranslation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::setTranslation(zVector &translation, bool appendTranslations=false) override
```
{% endcode %}

This method sets the translation components of the object.

version 0.0.2

Parameter translation: - input translation vector.

Parameter append: - true if the input values are added to the existing translation.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L192)

#### setPivot

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::setPivot(zVector &pivot) override
```
{% endcode %}

This method sets the pivot of the object.

version 0.0.2

Parameter pivot: - input pivot position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L194)

#### getTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointCloud::getTransform(zTransform &transform) override
```
{% endcode %}

This method gets the object transform.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: transform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointCloud.h#L196)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zObjectPointCloud](api-zobjectpointcloud.md)

[zVector](../group-zcore/api-zvector.md)
