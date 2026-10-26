# zFnArc

## zSpace::zFnArc

Declared in include/zspace/zInterOp/functionsets/zFnArc.h. Public class/struct declaration reference.

An arc function set.

version 0.0.4

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L45)

[Base: zSpace::zFn](../group-zinterface/api-zfn.md)

### Public Func

#### zFnArc

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnArc::zFnArc()
```
{% endcode %}

Default constructor.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L69)

#### zFnArc

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnArc::zFnArc(zObjectArc &_arcObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.4

Parameter \_arcObj: - input arcObj object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L76)

#### \~zFnArc

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnArc::~zFnArc()
```
{% endcode %}

Default destructor.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L87)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnArc::getType() override
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L93)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::getBounds(zPoint &minBB, zPoint &maxBB) override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L95)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::clear() override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L97)

#### create

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnArc::create(zObjectPlane &_plane, double _radius, double _angle=Z_TWO_PI)
```
{% endcode %}

This method creates a circle from the input plane containers.

bool - boolean of success or not version 0.0.4

Parameter \_plane: - container of zObjectPlane.

Parameter \_radius: - container of radius.

Parameter \_angle: - container of angle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L111)

#### createFromPoints

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnArc::createFromPoints(zPoint p0, zPoint p1, zPoint p2)
```
{% endcode %}

This method creates a circle through three 3d points.

bool - boolean of success or not version 0.0.2

Parameter p0: - container of first point.

Parameter p1: - container of second point.

Parameter p2: - container of third point.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L121)

#### createFromTangent

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnArc::createFromTangent(zPoint p0, zVector t1, zPoint p1)
```
{% endcode %}

This method creates a circle from two 3d points and a tangent at the first point.

bool - boolean of success or not version 0.0.4

Parameter p0: - container of first point.

Parameter t1: - container of tangent vector of first point.

Parameter p1: - container of second point.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L131)

#### numControlVertices

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnArc::numControlVertices()
```
{% endcode %}

This method returns the number of control vertices of the curve.

int - number of control vertices. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L143)

#### intersect

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::intersect(zPlane &plane, zPoint &intersectionPt, double &t)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: intersectionPt, plane, t. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L149)

#### setArcDisplayColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::setArcDisplayColor(zColor _col)
```
{% endcode %}

This method sets curve color to the input color.

version 0.0.4

Parameter \_col: - input color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L160)

#### setArcDisplayWeight

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::setArcDisplayWeight(double _wt)
```
{% endcode %}

This method sets edge weight of the curve to the input weight.

version 0.0.4

Parameter \_wt: - input weight.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L167)

#### setAngle

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::setAngle(double _angle)
```
{% endcode %}

This method sets angle of arc to the input number.

version 0.0.4

Parameter \_angle: - input angle between 0 and two PI.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L174)

#### setRadius

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::setRadius(double _radius)
```
{% endcode %}

This method sets radius of arc to the input number.

version 0.0.4

Parameter \_radius: - input radius.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L181)

#### computeArcPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::computeArcPositions(int numPoints=180)
```
{% endcode %}

This method computes the display points on the arc.

version 0.0.4

Parameter numPoints: - number of display points required, 180 by default.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L192)

#### computeControlPoints

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::computeControlPoints()
```
{% endcode %}

This method computes the control points of the arc.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L198)

#### isCircle

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnArc::isCircle()
```
{% endcode %}

This method checks if this arc is a circle.

bool - boolean of isCircle or not version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L205)

#### getAngle

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnArc::getAngle()
```
{% endcode %}

This method gets the angle of arc.

double - angle of arc version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L216)

#### getRadius

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnArc::getRadius()
```
{% endcode %}

This method gets the Radius of arc.

double - Radius of arc version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L224)

#### getRawControlPoints

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zFnArc::getRawControlPoints()
```
{% endcode %}

This method gets pointer to the internal curve positions container.

zPoint\* - pointer to internal vertex position container. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L231)

#### getRawArcPositions

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zFnArc::getRawArcPositions(int &numPoints)
```
{% endcode %}

This method gets pointer to the internal curve positions container.

zPoint\* - pointer to internal vertex position container. version 0.0.4

Parameter numPoints: - output number of points in container.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L239)

#### getPointAt

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnArc::getPointAt(double t)
```
{% endcode %}

This method gets point at the specified parameter value.

zPoint - point at parameter value. version 0.0.4

Parameter t: - parameter value ( between 0 & 1).

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L247)

#### getTangentAt

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnArc::getTangentAt(double t)
```
{% endcode %}

This method gets tangent at the specified parameter value.

zVector - tangent at parameter value. version 0.0.4

Parameter t: - parameter value ( between 0 & 1).

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L255)

#### getPointTangentAt

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::getPointTangentAt(double t, zPoint &p, zVector &tan)
```
{% endcode %}

This method gets tangent at the specified parameter value.

version 0.0.4

Parameter t: - parameter value between 0 & 1.

Parameter p: - point at parameter value.

Parameter tan: - tangent at parameter value.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L264)

#### getCenter

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnArc::getCenter()
```
{% endcode %}

This method gets the center of the arc curve.

zPoint - the center of the arc curve. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L271)

#### getLength

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnArc::getLength()
```
{% endcode %}

This method gets the length of the curve.

double - length of the arc curve . version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L278)

#### getRawON\_Arc

{% code collapsedlinecount="10" %}
```cpp
ON_Circle * zSpace::zFnArc::getRawON_Arc()
```
{% endcode %}

This method gets the domain of the curve.

zDomainDouble - domain of the curve . version 0.0.4 This method gets the knot of the curve.

zDoubleArray - container of knot vector of the curve . version 0.0.4 This method gets the degree of the curve.

int - degree of the curve. version 0.0.4 This method gets the Raw OpenNurbs Arc object.

ON\_Circle - the Raw OpenNurbs Arc object. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L306)

#### setTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::setTransform(zTransform &inTransform, bool decompose=true, bool updatePositions=true) override
```
{% endcode %}

This method sets the object transform to the input transform.

version 0.0.2

Parameter inTransform: - input transform.

Parameter decompose: - decomposes transform to rotation and translation if true.

Parameter updatePositions: - updates the object positions if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L313)

#### setScale

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::setScale(zFloat4 &scale) override
```
{% endcode %}

This method sets the scale components of the object.

version 0.0.2

Parameter scale: - input scale values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L315)

#### setRotation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::setRotation(zFloat4 &rotation, bool appendRotations=false) override
```
{% endcode %}

This method sets the rotation components of the object.

version 0.0.2

Parameter rotation: - input rotation values.

Parameter append: - true if the input values are added to the existing rotations.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L317)

#### setTranslation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::setTranslation(zVector &translation, bool appendTranslations=false) override
```
{% endcode %}

This method sets the translation components of the object.

version 0.0.2

Parameter translation: - input translation vector.

Parameter append: - true if the input values are added to the existing translation.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L319)

#### setPivot

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::setPivot(zVector &pivot) override
```
{% endcode %}

This method sets the pivot of the object.

version 0.0.2

Parameter pivot: - input pivot position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L321)

#### getTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnArc::getTransform(zTransform &transform) override
```
{% endcode %}

This method gets the object transform.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: transform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnArc.h#L323)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zObjectArc](api-zobjectarc.md)

[zObjectPlane](api-zobjectplane.md)

[zVector](../group-zcore/api-zvector.md)
