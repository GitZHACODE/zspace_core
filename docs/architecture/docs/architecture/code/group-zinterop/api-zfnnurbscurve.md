# zFnNurbsCUrve

## zSpace::zFnNurbsCurve

Declared in include/zspace/zInterOp/functionsets/zFnNurbsCurve.h. Public class/struct declaration reference.

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L51)

[Base: zSpace::zFn](../group-zinterface/api-zfn.md)

### Public Func

#### zFnNurbsCurve

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnNurbsCurve::zFnNurbsCurve()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L77)

#### zFnNurbsCurve

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnNurbsCurve::zFnNurbsCurve(zObjectNurbsCurve &_nurbsCurveObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter \_nurbsCurveObj: - input nurbscurve object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L84)

#### \~zFnNurbsCurve

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnNurbsCurve::~zFnNurbsCurve()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L95)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnNurbsCurve::getType() override
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L101)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::getBounds(zPoint &minBB, zPoint &maxBB) override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L103)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::clear() override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L105)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::create(zPointArray &positions, int degree, bool periodic, bool interpolate, int displayNumPoints=20)
```
{% endcode %}

This method creates a nurbs curve from the input control points.

version 0.0.2

Parameter positions: - container of type zPoint containing control point positions.

Parameter degree: - desired curve degree.

Parameter periodic: - desired curve periodic.

Parameter interpolate: - if true the method will create nurbs curve by interpolating the input positions.

Parameter displayNumPoints: - approxiamte number of points for displaying the curve.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L120)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::create(zObjectGraph &in_graph, double sampleDist, int degree, bool periodic, bool interpolate, int displayNumPoints)
```
{% endcode %}

This method creates a nurbs curve from the input obj graph.

only works on a continuous polyline graph. version 0.0.2

Parameter in\_graph: - input obj graph.

Parameter sampleDist: - sample distance used to re sample the obj graph. skip resampling if sampleDist = 0

Parameter degree: - desired curve degree.

Parameter periodic: - desired curve periodic.

Parameter interpolate: - if true the method will create nurbs curve by interpolating the input positions.

Parameter displayNumPoints: - approxiamte number of points for displaying the curve.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L133)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::create(zObjectArc &o_arc, int cvNum, int displayNumPoints)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: cvNum, displayNumPoints, o\_arc. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L135)

#### numControlVertices

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnNurbsCurve::numControlVertices()
```
{% endcode %}

This method returns the number of control vertices of the curve.

number of control vertices. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L145)

#### closestPoint

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::closestPoint(zPoint &testPoint, zPoint &closestPoint, double &t)
```
{% endcode %}

This method computes the closest point on curve to the input test point.

version 0.0.2

Parameter testPoint: - input point to test.

Parameter closestPoint: - output point on curve.

Parameter t: - output curve parameter of closest point.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L158)

#### closestPoint

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::closestPoint(zObjectNurbsCurve &curveB, zPoint &closestPoint_A, zPoint &closestPoint_B, double &t_A, double &t_B)
```
{% endcode %}

This method computes the closest point between two curves .

version 0.0.2

Parameter curveB: - input point to test.

Parameter closestPoint\_A: - output point on curve A.

Parameter closestPoint\_B: - output point on curve B.

Parameter t\_A: - output curve parameter on curve A.

Parameter t\_B: - output curve parameter on curve B.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L169)

#### divideByCount

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::divideByCount(int numSegments, zPointArray &positions, zDoubleArray &tParams)
```
{% endcode %}

This method divides the curve by input segment count.

version 0.0.2

Parameter numSegments: - input desired number of curve divisions.

Parameter positions: - output points on curve.

Parameter tParams: - output parameters at divisions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L178)

#### divideByLength

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::divideByLength(double length, zPointArray &positions, zDoubleArray &tParams)
```
{% endcode %}

This method divides the curve by input length.

version 0.0.2

Parameter length: - input desired length of curve divisions.

Parameter positions: - output points on curve.

Parameter tParams: - output parameters at divisions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L187)

#### computeSubCurve

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::computeSubCurve(double t0, double t1, bool normalise, zObjectNurbsCurve &out_SubCurve, int displayNumPoints=100)
```
{% endcode %}

This method computes the sub curve from the input domain d0 to d1.

version 0.0.2

Parameter t0: - input domain start for subtraction.

Parameter t1: - input domain end for subtraction.

Parameter normalise: - normalise sub curve to (0,1) if true.

Parameter out\_SubCurve: - output sub curve.

Parameter displayNumPoints: - output sub curve display num points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L198)

#### reverse

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::reverse()
```
{% endcode %}

This method reverses the curve direction.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L204)

#### intersect

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::intersect(zPlane &plane, zPointArray &intersectionPts, zDoubleArray &tParams)
```
{% endcode %}

This method computes the intersections to the input plane.

version 0.0.2

Parameter plane: - input plane to intersect.

Parameter intersectionPts: - output intersection points if valid.

Parameter tParams: - output on curve parameters where intersections happened.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L217)

#### intersect

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::intersect(zObjectNurbsCurve &curveB, zPointArray &intersectionPts_A, zPointArray &intersectionPts_B, zDoubleArray &tParams_A, zDoubleArray &tParams_B)
```
{% endcode %}

This method computes the intersections to the input curve.

version 0.0.2

Parameter curveB: - input curve to intersect.

Parameter intersectionPts\_A: - output intersection points on this curve if valid.

Parameter tParams\_A: - output on curve parameters on this curve where intersections happened.

Parameter intersectionPts\_B: - output intersection points on curveB if valid.

Parameter tParams\_B: - output on curve parameters on curveB where intersections happened.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L228)

#### intersectSelf

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::intersectSelf(zPointArray &intersectionPts, zDoubleArray &tParams)
```
{% endcode %}

This method computes the intersection on the curve itself.

version 0.0.2

Parameter intersectionPts: - output intersection points if valid.

Parameter tParams: - output on curve parameters where intersections happened.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L236)

#### setDegree

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setDegree(int _degree, int _displayNumPoints)
```
{% endcode %}

This method sets degree of the curve.

version 0.0.2

Parameter \_degree: - input degree.

Parameter descriptions are absent in the current declaration comments for: \_displayNumPoints. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L248)

#### setDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setDomain(double t0=0.0, double t1=1.0)
```
{% endcode %}

This method reparameterise the curve with new domain (t0, t1).

version 0.0.2

Parameter t0: - input domain start.

Parameter t1: - input domain end.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L255)

#### setDisplayColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setDisplayColor(zColor _col)
```
{% endcode %}

This method sets curve color to the input color.

version 0.0.2

Parameter \_col: - input color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L262)

#### setDisplayWeight

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setDisplayWeight(double _wt)
```
{% endcode %}

This method sets edge weight of the curve to the input weight.

version 0.0.2

Parameter \_wt: - input weight.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L270)

#### setDisplayNumPoints

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setDisplayNumPoints(int _numPoints=100)
```
{% endcode %}

This method sets number of sample points of the curve for display.

version 0.0.2

Parameter \_numPoints: - input num points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L277)

#### getCurvePositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::getCurvePositions(int numPoints, zPointArray &positions)
```
{% endcode %}

This method computes the points on the curve.

version 0.0.4

Parameter numPoints: - number of points required.

Parameter positions: - output container of positions

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L289)

#### getControlPoints

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::getControlPoints(zPointArray &positions)
```
{% endcode %}

This method gets the control points of the curve.

version 0.0.4

Parameter positions: - output container of control points positions

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L296)

#### getRawControlPoints

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zFnNurbsCurve::getRawControlPoints()
```
{% endcode %}

This method gets pointer to the internal curve positions container.

zPoint\* - pointer to internal vertex position container. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L303)

#### getPointAt

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnNurbsCurve::getPointAt(double t)
```
{% endcode %}

This method gets point at the specified parameter value.

zPoint - point at parameter value. version 0.0.4

Parameter t: - parameter value ( between 0 & 1).

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L311)

#### getTangentAt

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnNurbsCurve::getTangentAt(double t)
```
{% endcode %}

This method gets tangent at the specified parameter value.

zVector - tangent at parameter value. version 0.0.4

Parameter t: - parameter value ( between 0 & 1).

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L319)

#### getPointTangentAt

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::getPointTangentAt(double t, zPoint &p, zVector &tan)
```
{% endcode %}

This method gets tangent at the specified parameter value.

version 0.0.4

Parameter t: - parameter value ( between 0 & 1).

Parameter p: - point at parameter value.

Parameter tan: - tangent at parameter value.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L328)

#### getRawDisplayPositions

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zFnNurbsCurve::getRawDisplayPositions()
```
{% endcode %}

This method gets pointer to the internal curve positions container.

zPoint\* - pointer to internal vertex position container. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L335)

#### getCenter

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnNurbsCurve::getCenter()
```
{% endcode %}

This method gets the center the curve.

zPoint - center . version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L342)

#### getLength

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnNurbsCurve::getLength()
```
{% endcode %}

This method gets the length of the curve.

double - length of the curve . version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L349)

#### getDomain

{% code collapsedlinecount="10" %}
```cpp
zDomainDouble zSpace::zFnNurbsCurve::getDomain()
```
{% endcode %}

This method gets the domain of the curve.

zDomainDouble - domain of the curve . version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L356)

#### getKnotVector

{% code collapsedlinecount="10" %}
```cpp
zDoubleArray zSpace::zFnNurbsCurve::getKnotVector()
```
{% endcode %}

This method gets the knot of the curve.

zDoubleArray - container of knot vector of the curve . version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L363)

#### getDegree

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnNurbsCurve::getDegree()
```
{% endcode %}

This method gets the degree of the curve.

int - degree of the curve . version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L370)

#### getRawON\_Curve

{% code collapsedlinecount="10" %}
```cpp
ON_NurbsCurve * zSpace::zFnNurbsCurve::getRawON_Curve()
```
{% endcode %}

This method computes the lengths of all the half edges of a the graph.

double - total edge lengths. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L378)

#### setTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setTransform(zTransform &inTransform, bool decompose=true, bool updatePositions=true) override
```
{% endcode %}

This method sets the object transform to the input transform.

version 0.0.2

Parameter inTransform: - input transform.

Parameter decompose: - decomposes transform to rotation and translation if true.

Parameter updatePositions: - updates the object positions if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L385)

#### setScale

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setScale(zFloat4 &scale) override
```
{% endcode %}

This method sets the scale components of the object.

version 0.0.2

Parameter scale: - input scale values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L387)

#### setRotation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setRotation(zFloat4 &rotation, bool appendRotations=false) override
```
{% endcode %}

This method sets the rotation components of the object.

version 0.0.2

Parameter rotation: - input rotation values.

Parameter append: - true if the input values are added to the existing rotations.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L389)

#### setTranslation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setTranslation(zVector &translation, bool appendTranslations=false) override
```
{% endcode %}

This method sets the translation components of the object.

version 0.0.2

Parameter translation: - input translation vector.

Parameter append: - true if the input values are added to the existing translation.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L391)

#### setPivot

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::setPivot(zVector &pivot) override
```
{% endcode %}

This method sets the pivot of the object.

version 0.0.2

Parameter pivot: - input pivot position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L393)

#### getTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnNurbsCurve::getTransform(zTransform &transform) override
```
{% endcode %}

This method gets the object transform.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: transform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterOp/functionsets/zFnNurbsCurve.h#L395)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zObjectArc](api-zobjectarc.md)

[zObjectGraph](../group-zinterface/api-zobjectgraph.md)

[zObjectNurbsCurve](api-zobjectnurbscurve.md)

[zVector](../group-zcore/api-zvector.md)
