# zFnPlane

## zSpace::zFnPlane

Declared in include/zspace/zInterOp/functionsets/zFnPlane.h. Public class/struct declaration reference.

An arc function set.

version 0.0.4

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L46)

[Base: zSpace::zFn](../group-zinterface/api-zfn.md)

### Public Func

#### zFnPlane

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPlane::zFnPlane()
```
{% endcode %}

Default constructor.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L71)

#### zFnPlane

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPlane::zFnPlane(zObjectPlane &_planeObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.4

Parameter \_planeObj: - input zObjectPlane object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L78)

#### \~zFnPlane

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPlane::~zFnPlane()
```
{% endcode %}

Default destructor.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L89)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnPlane::getType() override
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L95)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::getBounds(zPoint &minBB, zPoint &maxBB) override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L97)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::clear() override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L99)

#### create

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPlane::create(zPoint origin=zPoint(0, 0, 0), zVector xAxis=zVector(1, 0, 0), zVector yAxis=zVector(0, 1, 0))
```
{% endcode %}

This method creates a graph from the input origin, xAxis, yAxis containers.

bool - boolean of success or not version 0.0.4

Parameter origin: - container of input origin, zPoint(0,0,0) by default.

Parameter xAxis: - container of input xAxis, zVector(1,0,0) by default.

Parameter yAxis: - container of input yAxis, zVector(0,1,0) by default.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L113)

#### createFromMatrix

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPlane::createFromMatrix(Eigen::Matrix4f &_plane)
```
{% endcode %}

This method creates a graph from the input origin, xAxis, yAxis containers.

bool - boolean of success or not version 0.0.4

Parameter \_plane: - container of input Eigen::Matrix4f.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L121)

#### createFromNormal

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPlane::createFromNormal(zPoint origin, zVector normal, zVector yUp=zVector(0, 1, 0))
```
{% endcode %}

This method creates a graph from the input origin, xAxis, yAxis containers.

bool - boolean of success or not version 0.0.4

Parameter origin: - container of input origin.

Parameter normal: - container of input normal vector.

Parameter yUp: - container of input yUp vector, zVector(0,1,0) by default.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L131)

#### createFromPoints

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPlane::createFromPoints(zPoint p0, zPoint p1, zPoint p2)
```
{% endcode %}

This method creates a graph from the input 3 points position.

bool - boolean of success or not version 0.0.4

Parameter p0: - container of point 0, used as origin of plane.

Parameter p1: - container of point 1, used as xAxis direction.

Parameter p2: - container of point 2, used as yAxis direction.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L141)

#### intersect

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::intersect()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L151)

#### setDisplayColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::setDisplayColor(zColor xCol=zColor(1.0, 0.0, 0.0, 1.0), zColor yCol=zColor(0.0, 1.0, 0.0, 1.0), zColor zCol=zColor(0.0, 0.0, 1.0, 1.0))
```
{% endcode %}

This method sets curve color to the input color.

version 0.0.4

Parameter xCol: - input color of xAxis, zColor(1.0, 0.0, 0.0, 1.0) by default.

Parameter yCol: - input color of yAxis, zColor(0.0, 1.0, 0.0, 1.0) by default.

Parameter zCol: - input color of zAxis, zColor(0.0, 0.0, 1.0, 1.0) by default.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L164)

#### setDisplayWeight

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::setDisplayWeight(double _wt)
```
{% endcode %}

This method sets Display Weight of plane.

version 0.0.4

Parameter \_wt: - input Display Weight of plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L172)

#### setOrigin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::setOrigin(zPoint origin)
```
{% endcode %}

This method sets origin position of the plane.

version 0.0.4

Parameter origin: - input origin position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L179)

#### setAxis

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::setAxis(zVector xAxis, zVector yAxis, zVector normal)
```
{% endcode %}

This method sets xAxis, yAxis and noral of the plane.

version 0.0.4

Parameter xAxis: - input xAxis vector.

Parameter yAxis: - input yAxis vector.

Parameter normal: - input normal vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L188)

#### getOrigin

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnPlane::getOrigin()
```
{% endcode %}

This method gets the origin the plane.

zPoint - origin of the plane. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L199)

#### getXAxis

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnPlane::getXAxis()
```
{% endcode %}

This method gets the xAxis the plane.

zPoint - xAxis of the plane. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L206)

#### getYAxis

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnPlane::getYAxis()
```
{% endcode %}

This method gets the yAxis the plane.

zPoint - yAxis of the plane. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L213)

#### getNormal

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnPlane::getNormal()
```
{% endcode %}

This method gets the Normal the plane.

zPoint - Normal of the plane. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L220)

#### getRawON\_Plane

{% code collapsedlinecount="10" %}
```cpp
ON_Plane * zSpace::zFnPlane::getRawON_Plane()
```
{% endcode %}

This method gets the Raw OpenNurbs Plane object.

ON\_Plane - Raw OpenNurbs Plane object. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L227)

#### setTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::setTransform(zTransform &inTransform, bool decompose=true, bool updatePositions=true) override
```
{% endcode %}

This method sets the object transform to the input transform.

version 0.0.2

Parameter inTransform: - input transform.

Parameter decompose: - decomposes transform to rotation and translation if true.

Parameter updatePositions: - updates the object positions if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L234)

#### setScale

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::setScale(zFloat4 &scale) override
```
{% endcode %}

This method sets the scale components of the object.

version 0.0.2

Parameter scale: - input scale values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L236)

#### setRotation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::setRotation(zFloat4 &rotation, bool appendRotations=false) override
```
{% endcode %}

This method sets the rotation components of the object.

version 0.0.2

Parameter rotation: - input rotation values.

Parameter append: - true if the input values are added to the existing rotations.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L238)

#### setTranslation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::setTranslation(zVector &translation, bool appendTranslations=false) override
```
{% endcode %}

This method sets the translation components of the object.

version 0.0.2

Parameter translation: - input translation vector.

Parameter append: - true if the input values are added to the existing translation.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L240)

#### setPivot

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::setPivot(zVector &pivot) override
```
{% endcode %}

This method sets the pivot of the object.

version 0.0.2

Parameter pivot: - input pivot position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L242)

#### getTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPlane::getTransform(zTransform &transform) override
```
{% endcode %}

This method gets the object transform.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: transform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnPlane.h#L244)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zObjectPlane](api-zobjectplane.md)

[zVector](../group-zcore/api-zvector.md)
