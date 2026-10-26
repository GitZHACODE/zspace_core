# zFnMeshScalarField

## zSpace::zFnMeshScalarField

Declared in include/zspace/zInterface/functionsets/zFnMeshField.h. Public class/struct declaration reference.

A concrete 2D scalar mesh field function set.

version 0.0.5

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L48)

### Public Attrib

#### fieldObj

{% code collapsedlinecount="10" %}
```cpp
zObjectMeshScalarField* zSpace::zFnMeshScalarField::fieldObj
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L65)

#### fnMesh

{% code collapsedlinecount="10" %}
```cpp
zFnMesh zSpace::zFnMeshScalarField::fnMesh
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L66)

#### ringNeighbours

{% code collapsedlinecount="10" %}
```cpp
vector<zIntArray> zSpace::zFnMeshScalarField::ringNeighbours
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L69)

#### adjacentNeighbours

{% code collapsedlinecount="10" %}
```cpp
vector<zIntArray> zSpace::zFnMeshScalarField::adjacentNeighbours
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L72)

### Public Func

#### zFnMeshScalarField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMeshScalarField::zFnMeshScalarField()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L78)

#### zFnMeshScalarField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMeshScalarField::zFnMeshScalarField(zObjectMeshScalarField &_fieldObj)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_fieldObj. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L79)

#### \~zFnMeshScalarField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMeshScalarField::~zFnMeshScalarField()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L80)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnMeshScalarField::getType()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L86)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getBounds(zPoint &minBB, zPoint &maxBB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: maxBB, minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L87)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::clear()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L88)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::create(zPoint _minBB, zPoint _maxBB, int _n_X, int _n_Y, int _NR=1, bool _setValuesperVertex=true, bool _triMesh=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_NR, \_maxBB, \_minBB, \_n\_X, \_n\_Y, \_setValuesperVertex, \_triMesh. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L94)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::create(double _unit_X, double _unit_Y, int _n_X, int _n_Y, zPoint _minBB=zPoint(), int _NR=1, bool _setValuesperVertex=true, bool _triMesh=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_NR, \_minBB, \_n\_X, \_n\_Y, \_setValuesperVertex, \_triMesh, \_unit\_X, \_unit\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L95)

#### getRawMesh

{% code collapsedlinecount="10" %}
```cpp
zObjectMesh * zSpace::zFnMeshScalarField::getRawMesh()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L101)

#### getIndex

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnMeshScalarField::getIndex(int index_X, int index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X, index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L102)

#### getIndices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getIndices(int index, int &index_X, int &index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, index\_X, index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L103)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnMeshScalarField::getPosition(int index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L104)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnMeshScalarField::getPosition(int index_X, int index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X, index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L105)

#### getNeighbour\_Ring

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getNeighbour_Ring(int index, int numRings, zIntArray &outRingNeighbours) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, numRings, outRingNeighbours. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L106)

#### getNeighbour\_Adjacents

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getNeighbour_Adjacents(int index, zIntArray &outAdjacentNeighbours) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, outAdjacentNeighbours. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L107)

#### getNeighbour\_Contained

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getNeighbour_Contained(zPoint &pos, zIntArray &containedNeighbour)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: containedNeighbour, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L108)

#### getNeighbourPosition\_Contained

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getNeighbourPosition_Contained(zPoint &pos, zPointArray &containedNeighbour)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: containedNeighbour, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L109)

#### numFieldValues

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnMeshScalarField::numFieldValues() const
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L115)

#### getResolution

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getResolution(int &_n_X, int &_n_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_n\_X, \_n\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L116)

#### getUnitDistances

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getUnitDistances(double &_unit_X, double &_unit_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_unit\_X, \_unit\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L117)

#### getBoundingBox

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getBoundingBox(zPoint &_minBB, zPoint &_maxBB) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_maxBB, \_minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L118)

#### getPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getPositions(zPointArray &positions)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L119)

#### getFieldValue

{% code collapsedlinecount="10" %}
```cpp
zScalar zSpace::zFnMeshScalarField::getFieldValue(int index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L121)

#### getFieldValue

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshScalarField::getFieldValue(zPoint &samplePos, zFieldValueType type, zScalar &fieldValue)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValue, samplePos, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L122)

#### getScalarValue

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshScalarField::getScalarValue(zScalarArray &scalars, zPoint &samplePos, zFieldValueType type, zScalar &fieldValue)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValue, samplePos, scalars, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L123)

#### getFieldValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getFieldValues(zScalarArray &fieldValues)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L125)

#### getRawFieldValues

{% code collapsedlinecount="10" %}
```cpp
zScalar * zSpace::zFnMeshScalarField::getRawFieldValues()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L126)

#### getGradient

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnMeshScalarField::getGradient(int index, float epsilon=EPS)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: epsilon, index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L128)

#### getGradients

{% code collapsedlinecount="10" %}
```cpp
zVectorArray zSpace::zFnMeshScalarField::getGradients(float epsilon=EPS)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: epsilon. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L129)

#### getValuesPerVertexBoolean

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshScalarField::getValuesPerVertexBoolean() const
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L131)

#### getTriMeshBoolean

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshScalarField::getTriMeshBoolean() const
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L132)

#### getFieldColorDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getFieldColorDomain(zDomainColor &colDomain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colDomain. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L133)

#### setFieldColorDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::setFieldColorDomain(zDomainColor &colDomain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colDomain. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L139)

#### setBoundingBox

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::setBoundingBox(zPoint &_minBB, zPoint &_maxBB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_maxBB, \_minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L140)

#### setFieldValue

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::setFieldValue(int index, zScalar val, bool append=false)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: append, index, val. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L141)

#### setFieldValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::setFieldValues(zScalarArray &fValues, zFieldColorType type=zFieldColorType::zFieldRegular, float sdfWidth=0.1f)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fValues, sdfWidth, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L142)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zObjectMesh &inMeshObj, zScalar meshValue, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inMeshObj, influence, meshValue, normalise, power. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L148)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zObjectGraph &inGraphObj, zScalar graphValue, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, graphValue, inGraphObj, influence, normalise, power. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L149)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zObjectPointCloud &inPointsObj, zScalar value, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPointsObj, influence, normalise, power, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L150)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zObjectPointCloud &inPointsObj, zScalarArray &values, vector< double > &influences, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPointsObj, influences, normalise, power, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L151)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zPointArray &inPositions, zScalar value, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPositions, influence, normalise, power, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L152)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getFieldValuesAsVertexDistance_IDW(zScalarArray &fieldValues, zPointArray &inPositions, zScalarArray &values, vector< double > &influences, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPositions, influences, normalise, power, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L153)

#### getScalarsAsVertexDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalarsAsVertexDistance(zScalarArray &scalars, zPointArray &inPositions, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inPositions, normalise, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L159)

#### getScalarsAsVertexDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalarsAsVertexDistance(zScalarArray &scalars, zPointArray &inPositions, float offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inPositions, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L160)

#### getScalarsAsVertexDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalarsAsVertexDistance(zScalarArray &scalars, zObjectPointCloud &inPointsObj, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inPointsObj, normalise, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L161)

#### getScalarsAsVertexDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalarsAsVertexDistance(zScalarArray &scalars, zObjectPointCloud &inPointsObj, float offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inPointsObj, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L162)

#### getScalarsAsVertexDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalarsAsVertexDistance(zScalarArray &scalars, zObjectMesh &inMeshObj, float offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inMeshObj, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L163)

#### getScalarsAsVertexDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalarsAsVertexDistance(zScalarArray &scalars, zObjectGraph &inGraphObj, float offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inGraphObj, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L164)

#### getScalarsAsEdgeDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalarsAsEdgeDistance(zScalarArray &scalars, zObjectMesh &inMeshObj, float offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inMeshObj, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L165)

#### getScalarsAsEdgeDistance

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalarsAsEdgeDistance(zScalarArray &scalars, zObjectGraph &inGraphObj, float offset, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inGraphObj, normalise, offset, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L166)

#### getScalars\_Polygon

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalars_Polygon(zScalarArray &scalars, zObjectGraph &inGraphObj, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inGraphObj, normalise, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L172)

#### getScalars\_Circle

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalars_Circle(zScalarArray &scalars, zVector &cen, float r, double annularVal=0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: annularVal, cen, normalise, r, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L173)

#### getScalars\_Ellipse

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalars_Ellipse(zScalarArray &scalars, zVector &cen, float a, float b, double annularVal=0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: a, annularVal, b, cen, normalise, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L174)

#### getScalars\_Line

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalars_Line(zScalarArray &scalars, zVector &v0, zVector &v1, double annularVal=0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: annularVal, normalise, scalars, v0, v1. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L175)

#### getScalars\_Triangle

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalars_Triangle(zScalarArray &scalars, zPoint &p0, zPoint &p1, zPoint &p2, double annularVal=0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: annularVal, normalise, p0, p1, p2, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L176)

#### getScalars\_Square

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalars_Square(zScalarArray &scalars, zVector &cen, zVector &dimensions, float annularVal=0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: annularVal, cen, dimensions, normalise, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L177)

#### getScalars\_Trapezoid

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getScalars_Trapezoid(zScalarArray &scalars, float r1, float r2, float he, float annularVal=0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: annularVal, he, normalise, r1, r2, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L178)

#### checkPositionBounds

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshScalarField::checkPositionBounds(zPoint &pos, int &index)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L184)

#### checkBounds\_X

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshScalarField::checkBounds_X(int index_X) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L185)

#### checkBounds\_Y

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshScalarField::checkBounds_Y(int index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L186)

#### computeDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::computeDomain(zScalarArray &values, zDomain< zScalar > &domain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: domain, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L187)

#### normliseValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::normliseValues(zScalarArray &values)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L188)

#### smoothField

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::smoothField(zScalarArray &scalars, int numSmooth, double diffuseDamp=1.0, zDiffusionType type=zAverage)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: diffuseDamp, numSmooth, scalars, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L189)

#### computePositionsInFieldIndex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::computePositionsInFieldIndex(zPointArray &positions, vector< zPointArray > &fieldIndexPositions)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldIndexPositions, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L190)

#### computePositionIndicesInFieldIndex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::computePositionIndicesInFieldIndex(zPointArray &positions, vector< zIntArray > &fieldIndexPositionIndicies)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldIndexPositionIndicies, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L191)

#### F\_of\_r

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnMeshScalarField::F_of_r(double &r, double &a, double &b)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: a, b, r. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L192)

#### blend\_linear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::blend_linear(int currentFrame, int totalFrames, zScalarArray &fieldValues_A, zScalarArray &fieldValues_B, zScalarArray &fieldValues_Result)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: currentFrame, fieldValues\_A, fieldValues\_B, fieldValues\_Result, totalFrames. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L198)

#### boolean\_union

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::boolean_union(zScalarArray &fieldValues_A, zScalarArray &fieldValues_B, zScalarArray &fieldValues_Result, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues\_A, fieldValues\_B, fieldValues\_Result, normalise. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L199)

#### boolean\_subtract

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::boolean_subtract(zScalarArray &fieldValues_A, zScalarArray &fieldValues_B, zScalarArray &fieldValues_Result, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues\_A, fieldValues\_B, fieldValues\_Result, normalise. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L200)

#### boolean\_intersect

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::boolean_intersect(zScalarArray &fieldValues_A, zScalarArray &fieldValues_B, zScalarArray &fieldValues_Result, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues\_A, fieldValues\_B, fieldValues\_Result, normalise. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L201)

#### boolean\_difference

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::boolean_difference(zScalarArray &fieldValues_A, zScalarArray &fieldValues_B, zScalarArray &fieldValues_Result, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues\_A, fieldValues\_B, fieldValues\_Result, normalise. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L202)

#### boolean\_clipwithPlane

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::boolean_clipwithPlane(zScalarArray &scalars, zPlane &clipPlane)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: clipPlane, scalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L203)

#### boolean\_clipwithPlane

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::boolean_clipwithPlane(zScalarArray &fieldValues_A, zScalarArray &fieldValues_Result, zPoint &clipPlane_center, zVector &clipPlane_Norm)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: clipPlane\_Norm, clipPlane\_center, fieldValues\_A, fieldValues\_Result. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L204)

#### updateColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::updateColors(zFieldColorType type=zFieldColorType::zFieldRegular, float sdfWidth=0.1f)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: sdfWidth, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L210)

#### getIsocontour

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getIsocontour(zObjectGraph &coutourGraphObj, float inThreshold, int precision=PRECISION, float distTolerance=distanceTolerance)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: coutourGraphObj, distTolerance, inThreshold, precision. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L211)

#### getIsolineMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getIsolineMesh(zObjectMesh &coutourMeshObj, float inThreshold=0.5f, bool invertMesh=false)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: coutourMeshObj, inThreshold, invertMesh. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L212)

#### getIsobandMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshScalarField::getIsobandMesh(zObjectMesh &coutourMeshObj, float inThresholdLow=0.2f, float inThresholdHigh=0.5f)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: coutourMeshObj, inThresholdHigh, inThresholdLow. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L213)

### Related types

[zDomain](../group-zcore/api-zdomain.md)

[zFnMesh](api-zfnmesh.md)

[zObjectGraph](api-zobjectgraph.md)

[zObjectMesh](api-zobjectmesh.md)

[zObjectMeshScalarField](api-zobjectmeshscalarfield.md)

[zObjectPointCloud](api-zobjectpointcloud.md)

[zVector](../group-zcore/api-zvector.md)
