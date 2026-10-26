# zObjectNurbsCurve

## zSpace::zObjectNurbsCurve

Declared in include/zspace/zInterOp/objects/zObjectNurbsCurve.h. Public class/struct declaration reference.

The nurbs curve object class using OpenNURBS.

https://github.com/mcneel/opennurbs version 0.0.4

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L46)

[Base: zSpace::zObject](../group-zinterface/api-zobject.md)

### Public Attrib

#### numDisplayPositions

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectNurbsCurve::numDisplayPositions
```
{% endcode %}

number of display positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L67)

#### displayPositions

{% code collapsedlinecount="10" %}
```cpp
zPointArray zSpace::zObjectNurbsCurve::displayPositions
```
{% endcode %}

container which stores positions of curve points for display.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L70)

#### displayControlPointPositions

{% code collapsedlinecount="10" %}
```cpp
zPointArray zSpace::zObjectNurbsCurve::displayControlPointPositions
```
{% endcode %}

container which stores positions of curve control points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L73)

#### displayColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zObjectNurbsCurve::displayColor
```
{% endcode %}

stores color of the curve.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L76)

#### displayWeight

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectNurbsCurve::displayWeight
```
{% endcode %}

stores weight of the curve.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L79)

#### degree

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectNurbsCurve::degree
```
{% endcode %}

stores dimension of the curve.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L82)

#### periodic

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zObjectNurbsCurve::periodic
```
{% endcode %}

stores periodic of the curve.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L85)

#### curve

{% code collapsedlinecount="10" %}
```cpp
ON_NurbsCurve zSpace::zObjectNurbsCurve::curve
```
{% endcode %}

OpenNURBS curve.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L94)

### Public Func

#### zObjectNurbsCurve

{% code collapsedlinecount="10" %}
```cpp
zSpace::zObjectNurbsCurve::zObjectNurbsCurve()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L104)

#### \~zObjectNurbsCurve

{% code collapsedlinecount="10" %}
```cpp
zSpace::zObjectNurbsCurve::~zObjectNurbsCurve()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L114)

#### setDegree

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectNurbsCurve::setDegree(int _degree)
```
{% endcode %}

This method sets curve degree.

version 0.0.2

Parameter \_degree: - input curve degree.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L121)

#### setPeriodic

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectNurbsCurve::setPeriodic(bool _periodic)
```
{% endcode %}

This method sets curve periodic.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: \_periodic. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L128)

#### setControlPointWeights

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectNurbsCurve::setControlPointWeights(zDoubleArray &_controlPointWeights)
```
{% endcode %}

This method sets curve control point weights.

version 0.0.2

Parameter \_controlPointWeights: - input curve control point weights.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L135)

#### getDisplayPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectNurbsCurve::getDisplayPositions(zPointArray &_positions)
```
{% endcode %}

This method gets display vertex positions.

version 0.0.2

Parameter \_positions: - output display on curve positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L146)

#### getNumDisplayPositions

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectNurbsCurve::getNumDisplayPositions()
```
{% endcode %}

This method gets number of display vertex positions.

int - num display positions. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L153)

#### getVBO\_ControlPointId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectNurbsCurve::getVBO_ControlPointId()
```
{% endcode %}

This method gets the vertex VBO Index .

int - vertex VBO Index. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L160)

#### getVBO\_CurvePointId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectNurbsCurve::getVBO_CurvePointId()
```
{% endcode %}

This method gets the edge VBO Index .

int - edge VBO Index. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L167)

#### getVBO\_CurveColorId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectNurbsCurve::getVBO_CurveColorId()
```
{% endcode %}

This method gets the vertex color VBO Index .

int - vertex color VBO Index. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L174)

#### getDegree

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectNurbsCurve::getDegree()
```
{% endcode %}

This method gets curve dimension.

int - curve degree. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L181)

#### isPeriodic

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zObjectNurbsCurve::isPeriodic()
```
{% endcode %}

This method gets curve periodic.

bool - is periodic or not. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectNurbsCurve.h#L188)

### Related types

[zColor](../group-zcore/api-zcolor.md)
