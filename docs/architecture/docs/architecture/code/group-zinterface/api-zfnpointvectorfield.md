# zFnPointVectorField

## zSpace::zFnPointVectorField

Declared in include/zspace/zInterface/functionsets/zFnPointField.h. Public class/struct declaration reference.

A concrete 3D vector point field function set.

version 0.0.5

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L188)

### Public Attrib

#### ringNeighbours

{% code collapsedlinecount="10" %}
```cpp
vector<vector<int> > zSpace::zFnPointVectorField::ringNeighbours
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L197)

#### adjacentNeighbours

{% code collapsedlinecount="10" %}
```cpp
vector<vector<int> > zSpace::zFnPointVectorField::adjacentNeighbours
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L200)

#### fnPoints

{% code collapsedlinecount="10" %}
```cpp
zFnPointCloud zSpace::zFnPointVectorField::fnPoints
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L202)

#### fieldColorDomain

{% code collapsedlinecount="10" %}
```cpp
zDomainColor zSpace::zFnPointVectorField::fieldColorDomain = zDomainColor(zColor(), zColor(1, 1, 1, 1))
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L203)

### Public Func

#### zFnPointVectorField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPointVectorField::zFnPointVectorField()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L209)

#### zFnPointVectorField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPointVectorField::zFnPointVectorField(zObjectPointVectorField &_fieldObj)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_fieldObj. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L210)

#### \~zFnPointVectorField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnPointVectorField::~zFnPointVectorField()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L211)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnPointVectorField::getType()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L217)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getBounds(zPoint &minBB, zPoint &maxBB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: maxBB, minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L218)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::clear()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L219)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::create(zPoint _minBB, zPoint _maxBB, int _n_X, int _n_Y, int _n_Z, int _NR=1)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_NR, \_maxBB, \_minBB, \_n\_X, \_n\_Y, \_n\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L225)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::create(double _unit_X, double _unit_Y, double _unit_Z, int _n_X, int _n_Y, int _n_Z, zPoint _minBB=zPoint(), int _NR=1)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_NR, \_minBB, \_n\_X, \_n\_Y, \_n\_Z, \_unit\_X, \_unit\_Y, \_unit\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L226)

#### createVectorFromScalarField

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::createVectorFromScalarField(zFnPointScalarField &inFnScalarField)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inFnScalarField. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L227)

#### createVectorFromScalarField

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::createVectorFromScalarField(zObjectPointScalarField &scalarFieldObj)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: scalarFieldObj. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L228)

#### getIndex

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnPointVectorField::getIndex(int index_X, int index_Y, int index_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X, index\_Y, index\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L234)

#### getIndices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getIndices(int index, int &index_X, int &index_Y, int &index_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, index\_X, index\_Y, index\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L235)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnPointVectorField::getPosition(int index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L236)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnPointVectorField::getPosition(int index_X, int index_Y, int index_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X, index\_Y, index\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L237)

#### getNeighbour\_Ring

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getNeighbour_Ring(int index, int numRings, zIntArray &outRingNeighbours) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, numRings, outRingNeighbours. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L238)

#### getNeighbour\_Adjacents

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getNeighbour_Adjacents(int index, zIntArray &outAdjacentNeighbours) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, outAdjacentNeighbours. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L239)

#### getNeighbour\_Contained

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getNeighbour_Contained(zPoint &pos, zIntArray &containedNeighbour)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: containedNeighbour, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L240)

#### getNeighbourPosition\_Contained

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getNeighbourPosition_Contained(zPoint &pos, zPointArray &containedNeighbour)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: containedNeighbour, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L241)

#### numFieldValues

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnPointVectorField::numFieldValues() const
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L247)

#### getResolution

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getResolution(int &_n_X, int &_n_Y, int &_n_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_n\_X, \_n\_Y, \_n\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L248)

#### getUnitDistances

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getUnitDistances(double &_unit_X, double &_unit_Y, double &_unit_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_unit\_X, \_unit\_Y, \_unit\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L249)

#### getBoundingBox

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getBoundingBox(zPoint &_minBB, zPoint &_maxBB) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_maxBB, \_minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L250)

#### getPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getPositions(zPointArray &positions)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L251)

#### getFieldValue

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnPointVectorField::getFieldValue(int index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L253)

#### getFieldValue

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointVectorField::getFieldValue(zPoint &samplePos, zFieldValueType type, zVector &fieldValue)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValue, samplePos, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L254)

#### getFieldValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getFieldValues(zVectorArray &fieldValues)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L255)

#### getRawFieldValues

{% code collapsedlinecount="10" %}
```cpp
zVector * zSpace::zFnPointVectorField::getRawFieldValues()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L256)

#### setFieldColorDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::setFieldColorDomain(zDomainColor &colDomain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colDomain. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L262)

#### setBoundingBox

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::setBoundingBox(zPoint &_minBB, zPoint &_maxBB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_maxBB, \_minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L263)

#### setFieldValue

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::setFieldValue(int index, const zVector &val, bool append=false)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: append, index, val. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L264)

#### setFieldValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::setFieldValues(zVectorArray &fValues)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fValues. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L265)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zObjectMesh &inMeshObj, zVector meshValue, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inMeshObj, influence, meshValue, normalise, power. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L271)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zObjectGraph &inGraphObj, zVector graphValue, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, graphValue, inGraphObj, influence, normalise, power. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L272)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zObjectPointCloud &inPointsObj, zVector value, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPointsObj, influence, normalise, power, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L273)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zObjectPointCloud &inPointsObj, zVectorArray &values, vector< double > &influences, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPointsObj, influences, normalise, power, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L274)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zPointArray &inPositions, zVector value, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPositions, influence, normalise, power, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L275)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zPointArray &inPositions, zVectorArray &values, vector< double > &influences, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPositions, influences, normalise, power, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L276)

#### checkPositionBounds

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointVectorField::checkPositionBounds(zPoint &pos, int &index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L282)

#### checkBounds\_X

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointVectorField::checkBounds_X(int index_X) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L283)

#### checkBounds\_Y

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointVectorField::checkBounds_Y(int index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L284)

#### checkBounds\_Z

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnPointVectorField::checkBounds_Z(int index_Z) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_Z. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L285)

#### computeMinMaxOfScalars

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::computeMinMaxOfScalars(zVectorArray &values, zVector &dMin, zVector &dMax)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: dMax, dMin, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L286)

#### computeDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::computeDomain(zVectorArray &values, zDomain< zVector > &domain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: domain, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L287)

#### normliseValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::normliseValues(zVectorArray &values)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L288)

#### computePositionsInFieldIndex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::computePositionsInFieldIndex(zPointArray &positions, vector< zPointArray > &fieldIndexPositions)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldIndexPositions, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L289)

#### computePositionIndicesInFieldIndex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnPointVectorField::computePositionIndicesInFieldIndex(zPointArray &positions, vector< zIntArray > &fieldIndexPositionIndicies)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldIndexPositionIndicies, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L290)

#### F\_of\_r

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnPointVectorField::F_of_r(double &r, double &a, double &b)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: a, b, r. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnPointField.h#L291)

### Related types

[zDomain](../group-zcore/api-zdomain.md)

[zFnPointCloud](api-zfnpointcloud.md)

[zFnPointScalarField](api-zfnpointscalarfield.md)

[zObjectGraph](api-zobjectgraph.md)

[zObjectMesh](api-zobjectmesh.md)

[zObjectPointCloud](api-zobjectpointcloud.md)

[zObjectPointScalarField](api-zobjectpointscalarfield.md)

[zObjectPointVectorField](api-zobjectpointvectorfield.md)

[zVector](../group-zcore/api-zvector.md)
