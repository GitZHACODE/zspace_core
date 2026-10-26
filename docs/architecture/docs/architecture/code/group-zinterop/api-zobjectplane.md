# zObjectPlane

## zSpace::zObjectPlane

Declared in include/zspace/zInterOp/objects/zObjectPlane.h. Public class/struct declaration reference.

The plane object class using OpenNURBS.

https://github.com/mcneel/opennurbs version 0.0.4

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L46)

[Base: zSpace::zObject](../group-zinterface/api-zobject.md)

### Public Attrib

#### displayAxis

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zObjectPlane::displayAxis = true
```
{% endcode %}

boolean for displaying the Axis.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L58)

#### displayRectangle

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zObjectPlane::displayRectangle = false
```
{% endcode %}

boolean for displaying the rectangle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L61)

#### displayAxisScale

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectPlane::displayAxisScale = 1
```
{% endcode %}

stores displayAxisScale.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L64)

#### displayRectangleScale

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectPlane::displayRectangleScale = 1
```
{% endcode %}

stores displayRectangleScale.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L67)

#### origin

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zObjectPlane::origin = zPoint(0, 0, 0)
```
{% endcode %}

stores origin of the plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L70)

#### xAxis

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zObjectPlane::xAxis = zVector(1, 0, 0)
```
{% endcode %}

stores xAxis of the plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L73)

#### yAxis

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zObjectPlane::yAxis = zVector(0, 1, 0)
```
{% endcode %}

stores yAxis of the plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L76)

#### normal

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zObjectPlane::normal = zVector(0, 0, 1)
```
{% endcode %}

stores normal of the plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L79)

#### displayColor

{% code collapsedlinecount="10" %}
```cpp
zColorArray zSpace::zObjectPlane::displayColor
```
{% endcode %}

stores color of the axis.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L82)

#### displayWeight

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectPlane::displayWeight = 3
```
{% endcode %}

stores weight of the axis.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L85)

#### on\_plane

{% code collapsedlinecount="10" %}
```cpp
ON_Plane zSpace::zObjectPlane::on_plane
```
{% endcode %}

OpenNURBS plane object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L88)

### Public Func

#### zObjectPlane

{% code collapsedlinecount="10" %}
```cpp
zSpace::zObjectPlane::zObjectPlane()
```
{% endcode %}

Default constructor.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L98)

#### \~zObjectPlane

{% code collapsedlinecount="10" %}
```cpp
zSpace::zObjectPlane::~zObjectPlane()
```
{% endcode %}

Default destructor.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L108)

#### getPlaneMatrix

{% code collapsedlinecount="10" %}
```cpp
zPlane zSpace::zObjectPlane::getPlaneMatrix()
```
{% endcode %}

This method gets a 4x4 Matrix of the plane.

zPlane - a 4x4 Matrix of the plane. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L118)

#### getDoubleArray

{% code collapsedlinecount="10" %}
```cpp
zDoubleArray zSpace::zObjectPlane::getDoubleArray()
```
{% endcode %}

This method gets a Double Array of the plane.

zDoubleArray - a Double Array of the plane. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L124)

#### getRawOrigin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectPlane::getRawOrigin(zPoint &_origin)
```
{% endcode %}

This method stores Raw Origin of the plane.

version 0.0.4

Parameter \_origin: - stores Raw Origin of the plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L132)

#### getRawXAxis

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectPlane::getRawXAxis(zVector &_xAxis)
```
{% endcode %}

This method stores Raw xAxis vector of the plane.

version 0.0.4

Parameter \_xAxis: - stores Raw xAxis vector of the plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L139)

#### getRawYAxis

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectPlane::getRawYAxis(zVector &_yAxis)
```
{% endcode %}

This method stores Raw yAxis vector of the plane.

version 0.0.4

Parameter \_yAxis: - stores Raw yAxis vector of the plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L146)

#### getRawNormal

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectPlane::getRawNormal(zVector &_Normal)
```
{% endcode %}

This method stores Raw Normal vector of the plane.

version 0.0.4

Parameter \_Normal: - stores Raw Normal vector of the plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectPlane.h#L153)

### Related types

[zVector](../group-zcore/api-zvector.md)
