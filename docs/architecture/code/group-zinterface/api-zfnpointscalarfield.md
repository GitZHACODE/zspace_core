# zFnPointScalarField

## zSpace::zFnPointScalarField

Declared in include/zspace/zInterface/functionsets/zFnPointField.h. Public class/struct declaration reference.

A concrete 3D scalar point field function set.

version 0.0.5

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L48)

### Public Attrib

#### ringNeighbours

{% code collapsedlinecount="10" %}
```cpp
vector<vector<int> > zSpace::zFnPointScalarField::ringNeighbours
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L60)

#### adjacentNeighbours

{% code collapsedlinecount="10" %}
```cpp
vector<vector<int> > zSpace::zFnPointScalarField::adjacentNeighbours
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L63)

#### fnPoints

{% code collapsedlinecount="10" %}
```cpp
zFnPointCloud zSpace::zFnPointScalarField::fnPoints
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L65)

#### fieldColorDomain

{% code collapsedlinecount="10" %}
```cpp
zDomainColor zSpace::zFnPointScalarField::fieldColorDomain = zDomainColor(zColor(), zColor(1, 1, 1, 1))
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L66)

### Public Func

#### zFnPointScalarField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPointScalarField::zFnPointScalarField()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L72)

#### zFnPointScalarField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPointScalarField::zFnPointScalarField(zObjectPointScalarField &_fieldObj)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_fieldObj. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L73)

#### \~zFnPointScalarField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPointScalarField::~zFnPointScalarField()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L74)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnPointScalarField::getType()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L80)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getBounds(zPoint &minBB, zPoint &maxBB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: maxBB, minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L81)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::clear()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L82)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::create(zPoint _minBB, zPoint _maxBB, int _n_X, int _n_Y, int _n_Z, int _NR=1)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_NR, \_maxBB, \_minBB, \_n\_X, \_n\_Y, \_n\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L88)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::create(double _unit_X, double _unit_Y, double _unit_Z, int _n_X, int _n_Y, int _n_Z, zPoint _minBB=zPoint(), int _NR=1)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_NR, \_minBB, \_n\_X, \_n\_Y, \_n\_Z, \_unit\_X, \_unit\_Y, \_unit\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L89)

#### getIndex

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnPointScalarField::getIndex(int index_X, int index_Y, int index_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X, index\_Y, index\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L95)

#### getIndices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getIndices(int index, int &index_X, int &index_Y, int &index_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, index\_X, index\_Y, index\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L96)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnPointScalarField::getPosition(int index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L97)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnPointScalarField::getPosition(int index_X, int index_Y, int index_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X, index\_Y, index\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L98)

#### getNeighbour\_Ring

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getNeighbour_Ring(int index, int numRings, zIntArray &outRingNeighbours) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, numRings, outRingNeighbours. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L99)

#### getNeighbour\_Adjacents

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getNeighbour_Adjacents(int index, zIntArray &outAdjacentNeighbours) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, outAdjacentNeighbours. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L100)

#### getNeighbour\_Contained

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getNeighbour_Contained(zPoint &pos, zIntArray &containedNeighbour)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: containedNeighbour, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L101)

#### getNeighbourPosition\_Contained

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getNeighbourPosition_Contained(zPoint &pos, zPointArray &containedNeighbour)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: containedNeighbour, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L102)

#### numFieldValues

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnPointScalarField::numFieldValues() const
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L108)

#### getResolution

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getResolution(int &_n_X, int &_n_Y, int &_n_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_n\_X, \_n\_Y, \_n\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L109)

#### getUnitDistances

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getUnitDistances(double &_unit_X, double &_unit_Y, double &_unit_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_unit\_X, \_unit\_Y, \_unit\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L110)

#### getBoundingBox

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getBoundingBox(zPoint &_minBB, zPoint &_maxBB) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_maxBB, \_minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L111)

#### getPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getPositions(zPointArray &positions)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L112)

#### getFieldValue

{% code collapsedlinecount="10" %}
```cpp
zScalar zSpace::zFnPointScalarField::getFieldValue(int index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L114)

#### getFieldValue

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointScalarField::getFieldValue(zPoint &samplePos, zFieldValueType type, zScalar &fieldValue)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValue, samplePos, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L115)

#### getFieldValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getFieldValues(zScalarArray &fieldValues)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L116)

#### getRawFieldValues

{% code collapsedlinecount="10" %}
```cpp
zScalar * zSpace::zFnPointScalarField::getRawFieldValues()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L117)

#### getGradient

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnPointScalarField::getGradient(int index, float epsilon=EPS)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: epsilon, index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L119)

#### getGradients

{% code collapsedlinecount="10" %}
```cpp
vector< zVector > zSpace::zFnPointScalarField::getGradients(float epsilon=EPS)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: epsilon. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L120)

#### setFieldColorDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::setFieldColorDomain(zDomainColor &colDomain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colDomain. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L126)

#### setBoundingBox

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::setBoundingBox(zPoint &_minBB, zPoint &_maxBB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_maxBB, \_minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L127)

#### setFieldValue

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::setFieldValue(int index, zScalar val, bool append=false)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: append, index, val. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L128)

#### setFieldValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::setFieldValues(zScalarArray &fValues)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fValues. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L129)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zObjectMesh &inMeshObj, zScalar meshValue, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inMeshObj, influence, meshValue, normalise, power. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L135)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zObjectGraph &inGraphObj, zScalar graphValue, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, graphValue, inGraphObj, influence, normalise, power. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L136)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zObjectPointCloud &inPointsObj, zScalar value, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPointsObj, influence, normalise, power, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L137)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zObjectPointCloud &inPointsObj, zScalarArray &values, vector< double > &influences, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPointsObj, influences, normalise, power, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L138)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zPointArray &inPositions, zScalar value, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPositions, influence, normalise, power, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L139)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zPointArray &inPositions, zScalarArray &values, vector< double > &influences, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPositions, influences, normalise, power, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L140)

#### getScalarsAsVertexDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getScalarsAsVertexDistance(zScalarArray &scalars, zObjectPointCloud &inPointsObj, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inPointsObj, normalise, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L146)

#### getScalarsAsVertexDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getScalarsAsVertexDistance(zScalarArray &scalars, zObjectMesh &inMeshObj, double offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inMeshObj, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L147)

#### getScalarsAsVertexDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getScalarsAsVertexDistance(zScalarArray &scalars, zObjectGraph &inGraphObj, double offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inGraphObj, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L148)

#### getScalarsAsEdgeDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getScalarsAsEdgeDistance(zScalarArray &scalars, zObjectMesh &inMeshObj, double offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inMeshObj, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L149)

#### getScalarsAsEdgeDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::getScalarsAsEdgeDistance(zScalarArray &scalars, zObjectGraph &inGraphObj, double offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inGraphObj, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L150)

#### checkPositionBounds

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointScalarField::checkPositionBounds(zPoint &pos, int &index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L156)

#### checkBounds\_X

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointScalarField::checkBounds_X(int index_X) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L157)

#### checkBounds\_Y

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointScalarField::checkBounds_Y(int index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L158)

#### checkBounds\_Z

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointScalarField::checkBounds_Z(int index_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L159)

#### computeMinMaxOfScalars

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::computeMinMaxOfScalars(zScalarArray &values, zScalar &dMin, zScalar &dMax)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: dMax, dMin, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L160)

#### computeDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::computeDomain(zScalarArray &values, zDomain< zScalar > &domain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: domain, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L161)

#### normliseValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::normliseValues(zScalarArray &values)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L162)

#### smoothField

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::smoothField(int numSmooth, double diffuseDamp=1.0, zDiffusionType type=zAverage)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: diffuseDamp, numSmooth, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L163)

#### computePositionsInFieldIndex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::computePositionsInFieldIndex(zPointArray &positions, vector< zPointArray > &fieldIndexPositions)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldIndexPositions, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L164)

#### computePositionIndicesInFieldIndex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::computePositionIndicesInFieldIndex(zPointArray &positions, vector< zIntArray > &fieldIndexPositionIndicies)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldIndexPositionIndicies, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L165)

#### F\_of\_r

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnPointScalarField::F_of_r(double &r, double &a, double &b)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: a, b, r. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L166)

#### boolean\_union

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::boolean_union(zScalarArray &scalars0, zScalarArray &scalars1, zScalarArray &scalarsResult, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: normalise, scalars0, scalars1, scalarsResult. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L172)

#### boolean\_subtract

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::boolean_subtract(zScalarArray &fieldValues_A, zScalarArray &fieldValues_B, zScalarArray &fieldValues_Result, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues\_A, fieldValues\_B, fieldValues\_Result, normalise. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L173)

#### boolean\_intersect

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::boolean_intersect(zScalarArray &fieldValues_A, zScalarArray &fieldValues_B, zScalarArray &fieldValues_Result, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues\_A, fieldValues\_B, fieldValues\_Result, normalise. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L174)

#### boolean\_difference

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::boolean_difference(zScalarArray &fieldValues_A, zScalarArray &fieldValues_B, zScalarArray &fieldValues_Result, bool normalise=false)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues\_A, fieldValues\_B, fieldValues\_Result, normalise. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L175)

#### boolean\_clipwithPlane

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::boolean_clipwithPlane(zScalarArray &scalars, zMatrix4 &clipPlane)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: clipPlane, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L176)

#### updateColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointScalarField::updateColors()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L177)

### Related types

[zDomain](../group-zcore/api-zdomain.md)

[zFnPointCloud](api-zfnpointcloud.md)

[zMatrix4](../group-zcore/api-zmatrix4.md)

[zObjectGraph](api-zobjectgraph.md)

[zObjectMesh](api-zobjectmesh.md)

[zObjectPointCloud](api-zobjectpointcloud.md)

[zObjectPointScalarField](api-zobjectpointscalarfield.md)

[zVector](../group-zcore/api-zvector.md)
