# zObjectArc

## zSpace::zObjectArc

Declared in include/zspace/zInterOp/objects/zObjectArc.h. Public class/struct declaration reference.

The arc object class using OpenNURBS.

https://github.com/mcneel/opennurbs version 0.0.4

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L48)

[Base: zSpace::zObject](../group-zinterface/api-zobject.md)

### Public Attrib

#### radius

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectArc::radius
```
{% endcode %}

container which stores radius of the arc.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L69)

#### angle

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectArc::angle = Z_TWO_PI
```
{% endcode %}

container which stores Angle Radians of the arc.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L72)

#### isCircle

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zObjectArc::isCircle = true
```
{% endcode %}

container which stores boolean of isCircle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L75)

#### oPlane

{% code collapsedlinecount="10" %}
```cpp
zObjectPlane zSpace::zObjectArc::oPlane
```
{% endcode %}

container which stores positions of arc plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L78)

#### displayPlane

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zObjectArc::displayPlane = false
```
{% endcode %}

boolean for displaying the plane

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L81)

#### controlPoints

{% code collapsedlinecount="10" %}
```cpp
zPointArray zSpace::zObjectArc::controlPoints
```
{% endcode %}

container which stores positions of arc points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L84)

#### displayControlPoints

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zObjectArc::displayControlPoints = false
```
{% endcode %}

boolean for displaying the vertices.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L87)

#### controlPointsColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zObjectArc::controlPointsColor = zColor(0, 0, 0, 0)
```
{% endcode %}

stores color of the arc.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L90)

#### controlPolyColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zObjectArc::controlPolyColor = zColor(0, 0, 1, 0)
```
{% endcode %}

stores color of the arc.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L93)

#### controlPointsWeight

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectArc::controlPointsWeight = 5
```
{% endcode %}

container which stores weights of arc points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L96)

#### controlPolyWeight

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectArc::controlPolyWeight = 1
```
{% endcode %}

container which stores weights of arc points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L99)

#### displayArc

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zObjectArc::displayArc = true
```
{% endcode %}

boolean for displaying the curve

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L102)

#### arcPositions

{% code collapsedlinecount="10" %}
```cpp
zPointArray zSpace::zObjectArc::arcPositions
```
{% endcode %}

container which stores positions of arc for display.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L105)

#### arcDisplayColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zObjectArc::arcDisplayColor = zColor(1, 0, 0, 0)
```
{% endcode %}

stores display color of the arc.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L108)

#### arcDisplayWeight

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectArc::arcDisplayWeight = 3
```
{% endcode %}

stores weight of the arc.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L111)

#### on\_arc

{% code collapsedlinecount="10" %}
```cpp
ON_Arc zSpace::zObjectArc::on_arc
```
{% endcode %}

OpenNURBS arc object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L114)

### Public Func

#### zObjectArc

{% code collapsedlinecount="10" %}
```cpp
zSpace::zObjectArc::zObjectArc()
```
{% endcode %}

Default constructor.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L124)

#### \~zObjectArc

{% code collapsedlinecount="10" %}
```cpp
zSpace::zObjectArc::~zObjectArc()
```
{% endcode %}

Default destructor.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L134)

#### getVBO\_ControlPointId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectArc::getVBO_ControlPointId()
```
{% endcode %}

This method gets the vertex VBO Index .

int - vertex VBO Index. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L145)

#### getVBO\_CurvePointId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectArc::getVBO_CurvePointId()
```
{% endcode %}

This method gets the edge VBO Index .

int - edge VBO Index. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L152)

#### getVBO\_CurveColorId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectArc::getVBO_CurveColorId()
```
{% endcode %}

This method gets the vertex color VBO Index .

int - vertex color VBO Index. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L159)

#### getRawRadius

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectArc::getRawRadius(double _radius)
```
{% endcode %}

This method gets Raw radius vector of the arc.

version 0.0.4

Parameter descriptions are absent in the current declaration comments for: \_radius. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L166)

#### getRawAngleRadian

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectArc::getRawAngleRadian(double _angle)
```
{% endcode %}

This method gets Raw Angle in radian of the arc.

version 0.0.4

Parameter descriptions are absent in the current declaration comments for: \_angle. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L173)

#### getRawPlane

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zObjectArc::getRawPlane(zObjectPlane _oPlane)
```
{% endcode %}

This method gets Raw plane of the arc.

version 0.0.4

Parameter descriptions are absent in the current declaration comments for: \_oPlane. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/objects/zObjectArc.h#L180)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zObjectPlane](api-zobjectplane.md)
