# zFnMeshVectorField

## zSpace::zFnMeshVectorField

Declared in include/zspace/zInterface/functionsets/zFnMeshField.h. Public class/struct declaration reference.

A concrete 2D vector mesh field function set.

version 0.0.5

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L231)

### Public Attrib

#### fieldObj

{% code collapsedlinecount="10" %}
```cpp
zObjectMeshVectorField* zSpace::zFnMeshVectorField::fieldObj
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L243)

#### fnMesh

{% code collapsedlinecount="10" %}
```cpp
zFnMesh zSpace::zFnMeshVectorField::fnMesh
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L244)

#### ringNeighbours

{% code collapsedlinecount="10" %}
```cpp
vector<zIntArray> zSpace::zFnMeshVectorField::ringNeighbours
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L247)

#### adjacentNeighbours

{% code collapsedlinecount="10" %}
```cpp
vector<zIntArray> zSpace::zFnMeshVectorField::adjacentNeighbours
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L250)

### Public Func

#### zFnMeshVectorField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMeshVectorField::zFnMeshVectorField()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L256)

#### zFnMeshVectorField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMeshVectorField::zFnMeshVectorField(zObjectMeshVectorField &_fieldObj)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_fieldObj. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L257)

#### \~zFnMeshVectorField

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMeshVectorField::~zFnMeshVectorField()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L258)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnMeshVectorField::getType()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L264)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getBounds(zPoint &minBB, zPoint &maxBB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: maxBB, minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L265)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::clear()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L266)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::create(zPoint _minBB, zPoint _maxBB, int _n_X, int _n_Y, int _NR=1, bool _setValuesperVertex=true, bool _triMesh=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_NR, \_maxBB, \_minBB, \_n\_X, \_n\_Y, \_setValuesperVertex, \_triMesh. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L272)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::create(double _unit_X, double _unit_Y, int _n_X, int _n_Y, zPoint _minBB=zPoint(), int _NR=1, bool _setValuesperVertex=true, bool _triMesh=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_NR, \_minBB, \_n\_X, \_n\_Y, \_setValuesperVertex, \_triMesh, \_unit\_X, \_unit\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L273)

#### createVectorFromScalarField

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::createVectorFromScalarField(zObjectMeshScalarField &scalarFieldObj)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: scalarFieldObj. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L274)

#### getRawMesh

{% code collapsedlinecount="10" %}
```cpp
zObjectMesh * zSpace::zFnMeshVectorField::getRawMesh()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L280)

#### getIndex

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnMeshVectorField::getIndex(int index_X, int index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X, index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L281)

#### getIndices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getIndices(int index, int &index_X, int &index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, index\_X, index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L282)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnMeshVectorField::getPosition(int index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L283)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnMeshVectorField::getPosition(int index_X, int index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X, index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L284)

#### getNeighbour\_Ring

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getNeighbour_Ring(int index, int numRings, zIntArray &outRingNeighbours) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, numRings, outRingNeighbours. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L285)

#### getNeighbour\_Adjacents

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getNeighbour_Adjacents(int index, zIntArray &outAdjacentNeighbours) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, outAdjacentNeighbours. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L286)

#### getNeighbour\_Contained

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getNeighbour_Contained(zPoint &pos, zIntArray &containedNeighbour)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: containedNeighbour, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L287)

#### getNeighbourPosition\_Contained

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getNeighbourPosition_Contained(zPoint &pos, zPointArray &containedNeighbour)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: containedNeighbour, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L288)

#### numFieldValues

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnMeshVectorField::numFieldValues() const
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L294)

#### getResolution

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getResolution(int &_n_X, int &_n_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_n\_X, \_n\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L295)

#### getUnitDistances

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getUnitDistances(double &_unit_X, double &_unit_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_unit\_X, \_unit\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L296)

#### getBoundingBox

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getBoundingBox(zPoint &_minBB, zPoint &_maxBB) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_maxBB, \_minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L297)

#### getPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getPositions(zPointArray &positions)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L298)

#### getFieldValue

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnMeshVectorField::getFieldValue(int index) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L300)

#### getFieldValue

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshVectorField::getFieldValue(zPoint &samplePos, zFieldValueType type, zVector &fieldValue)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValue, samplePos, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L301)

#### getFieldValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getFieldValues(zVectorArray &fieldValues)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L303)

#### getRawFieldValues

{% code collapsedlinecount="10" %}
```cpp
zVector * zSpace::zFnMeshVectorField::getRawFieldValues()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L304)

#### getValuesPerVertexBoolean

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshVectorField::getValuesPerVertexBoolean() const
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L306)

#### getTriMeshBoolean

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshVectorField::getTriMeshBoolean() const
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L307)

#### getFieldColorDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getFieldColorDomain(zDomainColor &colDomain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colDomain. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L308)

#### setFieldColorDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::setFieldColorDomain(zDomainColor &colDomain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: colDomain. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L314)

#### setBoundingBox

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::setBoundingBox(zPoint &_minBB, zPoint &_maxBB)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: \_maxBB, \_minBB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L315)

#### setFieldValue

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::setFieldValue(int index, const zVector &val, bool append=false)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: append, index, val. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L316)

#### setFieldValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::setFieldValues(zVectorArray &fValues, zFieldColorType type=zFieldColorType::zFieldRegular, float sdfWidth=0.1f)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fValues, sdfWidth, type. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L317)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zObjectMesh &inMeshObj, zVector meshValue, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inMeshObj, influence, meshValue, normalise, power. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L323)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zObjectGraph &inGraphObj, zVector graphValue, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, graphValue, inGraphObj, influence, normalise, power. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L324)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zObjectPointCloud &inPointsObj, zVector value, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPointsObj, influence, normalise, power, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L325)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zObjectPointCloud &inPointsObj, zVectorArray &values, vector< double > &influences, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPointsObj, influences, normalise, power, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L326)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zPointArray &inPositions, zVector value, double influence, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPositions, influence, normalise, power, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L327)

#### getFieldValuesAsVertexDistance\_IDW

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::getFieldValuesAsVertexDistance_IDW(zVectorArray &fieldValues, zPointArray &inPositions, zVectorArray &values, vector< double > &influences, double power=2.0, bool normalise=true)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldValues, inPositions, influences, normalise, power, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L328)

#### checkPositionBounds

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshVectorField::checkPositionBounds(zPoint &pos, int &index)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index, pos. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L334)

#### checkBounds\_X

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshVectorField::checkBounds_X(int index_X) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_X. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L335)

#### checkBounds\_Y

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMeshVectorField::checkBounds_Y(int index_Y) const
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: index\_Y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L336)

#### computeDomain

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::computeDomain(zVectorArray &values, zDomain< zVector > &domain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: domain, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L337)

#### normliseValues

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::normliseValues(zVectorArray &values)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L338)

#### computePositionsInFieldIndex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::computePositionsInFieldIndex(zPointArray &positions, vector< zPointArray > &fieldIndexPositions)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldIndexPositions, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L339)

#### computePositionIndicesInFieldIndex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshVectorField::computePositionIndicesInFieldIndex(zPointArray &positions, vector< zIntArray > &fieldIndexPositionIndicies)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: fieldIndexPositionIndicies, positions. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L340)

#### F\_of\_r

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnMeshVectorField::F_of_r(double &r, double &a, double &b)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: a, b, r. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshField.h#L341)

### Related types

[zDomain](../group-zcore/api-zdomain.md)

[zFnMesh](api-zfnmesh.md)

[zObjectGraph](api-zobjectgraph.md)

[zObjectMesh](api-zobjectmesh.md)

[zObjectMeshScalarField](api-zobjectmeshscalarfield.md)

[zObjectMeshVectorField](api-zobjectmeshvectorfield.md)

[zObjectPointCloud](api-zobjectpointcloud.md)

[zVector](../group-zcore/api-zvector.md)
