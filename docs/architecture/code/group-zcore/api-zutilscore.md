# zUtilsCore

## zSpace::zUtilsCore

Declared in include/zspace/zCore/utilities/zUtilsCore.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A core utility class.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L126)

### Public Func

#### zUtilsCore

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zUtilsCore::zUtilsCore()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L137)

#### \~zUtilsCore

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zUtilsCore::~zUtilsCore()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L147)

#### getNumfiles

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST int zSpace::zUtilsCore::getNumfiles(string dirPath)
```
{% endcode %}

This method returns the number of files in the input folder path.

int - number of files in the input folder. version 0.0.2

Parameter dirPath: - input directory path.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L159)

#### getNumfiles\_Type

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST int zSpace::zUtilsCore::getNumfiles_Type(string dirPath, zFileTpye type)
```
{% endcode %}

This method returns the number of files in the input directory of the input file type.

int - number of files in the input folder. version 0.0.2

Parameter dirPath: - input directory path.

Parameter type: - input zFileTpye.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L168)

#### getFilesFromDirectory

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST void zSpace::zUtilsCore::getFilesFromDirectory(zStringArray &fpaths, string dirPath, zFileTpye type)
```
{% endcode %}

This method gets all the files on the input file type in the input directory sorted by time of creation.

version 0.0.2

Parameter fpaths: - container of file paths.

Parameter dirPath: - input directory path.

Parameter type: - input zFileTpye.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L178)

#### fileExists

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST bool zSpace::zUtilsCore::fileExists(string &path)
```
{% endcode %}

This method check if the file exists.

int - number of files in the input folder. version 0.0.4

Parameter descriptions are absent in the current declaration comments for: path. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L186)

#### getPaddedIndexString

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST string zSpace::zUtilsCore::getPaddedIndexString(int index, size_t numStride)
```
{% endcode %}

This method returns the padded string of the input index.

string - output padded string. version 0.0.4

Parameter index: - input index to be padded.

Parameter numStride: - input number stride for padding.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L199)

#### splitString

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST vector< string > zSpace::zUtilsCore::splitString(const string &str, const string &delimiter)
```
{% endcode %}

This method splits the input string based on the input delimiter.

vector\<string> - list of elements of split string. version 0.0.1

Parameter str: - input string to be split.

Parameter delimiter: - input delimiter.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L208)

#### zSign

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE T zSpace::zUtilsCore::zSign(T value)
```
{% endcode %}

This method returns the sign of the input value.

T - +1 for positive values, and -1 for negative. version 0.0.1

Parameter value: - input value.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L223)

#### ofMap

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE T zSpace::zUtilsCore::ofMap(T value, T inputMin, T inputMax, T outputMin, T outputMax)
```
{% endcode %}

This method maps the input value from the input domain to output domain.

double - mapped value. version 0.0.1

Parameter value: - input value to be mapped.

Parameter inputMin: - input domain minimum.

Parameter inputMax: - input domain maximum.

Parameter outputMin: - output domain minimum.

Parameter outputMax: - output domain maximum.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L237)

#### ofMap

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE T zSpace::zUtilsCore::ofMap(T value, zDomain< T > inDomain, zDomain< T > outDomain)
```
{% endcode %}

This method maps the input value from the input domain to output domain.

double - mapped value. version 0.0.2

Parameter value: - input value to be mapped.

Parameter inDomain: - input domain.

Parameter outDomain: - output domain.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L249)

#### ofClamp

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE T zSpace::zUtilsCore::ofClamp(T value, T inputMin, T inputMax)
```
{% endcode %}

This method clamps the input value to the input domain.

double - clamped value. version 0.0.1

Parameter value: - input value to be mapped.

Parameter inputMin: - input domain minimum.

Parameter inputMax: - input domain maximum.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L261)

#### zMin

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE T zSpace::zUtilsCore::zMin(T val0, T val1)
```
{% endcode %}

This method returns the minimum of the two input values.

double - minimum value

Parameter val0: - input value 1.

Parameter val1: - input value 2.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L271)

#### zMin

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE_HOST T zSpace::zUtilsCore::zMin(vector< T > &vals)
```
{% endcode %}

This method returns the minimum of the input container values.

double - minimum value

Parameter vals: - container of values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L280)

#### zMax

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE T zSpace::zUtilsCore::zMax(T val0, T val1)
```
{% endcode %}

This method returns the maximum of the two input values.

double - maximum value

Parameter val0: - input value 1.

Parameter val1: - input value 2.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L290)

#### zMax

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE_HOST T zSpace::zUtilsCore::zMax(vector< T > &vals)
```
{% endcode %}

This method returns the maximun of the input container values.

double - maximum value

Parameter vals: - container of values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L299)

#### randomNumber

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zUtilsCore::randomNumber(int min, int max)
```
{% endcode %}

This method returns a random number in the input domain.

int - random number between the 2 input values.

Parameter min: - domain minimum value.

Parameter max: - domain maximum value.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L307)

#### randomNumber\_double

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE double zSpace::zUtilsCore::randomNumber_double(double min, double max)
```
{% endcode %}

This method returns a random number in the input domain.

double - random number between the 2 input values.

Parameter min: - domain minimum value.

Parameter max: - domain maximum value.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L315)

#### factorise

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE T zSpace::zUtilsCore::factorise(T inputValue, int precision=3)
```
{% endcode %}

This method returns the factorised value to the input precision.

T - factorised value. version 0.0.1

Parameter inputValue: - input value.

Parameter precision: - precision or number of digits after the decimal point.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L326)

#### factoriseVector

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zUtilsCore::factoriseVector(zVector inputValue, int precision=3)
```
{% endcode %}

This method returns the factorised vector to the input precision.

zVector - factorised vector. version 0.0.1

Parameter inputValue: - input vector.

Parameter precision: - precision or number of digits after the decimal point.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L335)

#### checkRepeatElement

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
ZSPACE_CUDA_CALLABLE_HOST bool zSpace::zUtilsCore::checkRepeatElement(T &inVal, vector< T > values, int &index, int precision=3)
```
{% endcode %}

This method checks if the input value is repeated in input container.

bool - true if there is a repeat element. version 0.0.1

Parameter inVal: - input value.

Parameter values: - input container of values to be checked against.

Parameter precision: - precision or number of digits after the decimal point.

Parameter index: - index of the first repeat element.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L348)

#### checkRepeatVector

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST bool zSpace::zUtilsCore::checkRepeatVector(zVector &inVec, vector< zVector > values, int &index, int precision=3)
```
{% endcode %}

This method checks if the input vector is repeated in input container.

bool - true if there is a repeat element. version 0.0.1

Parameter values: - input container of vectors to be checked against.

Parameter precision: - precision or number of digits after the decimal point.

Parameter index: - index of the first repeat element.

Parameter descriptions are absent in the current declaration comments for: inVec. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L359)

#### existsInMap

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::existsInMap(string hashKey, unordered_map< string, int > map, int &outVal)
```
{% endcode %}

This method checks if the input hashkey exists in the map.

bool - true if the string exists in the map. version 0.0.1

Parameter hashKey: - input string to check.

Parameter map: - input map.

Parameter outVal: - index of the string in the map if it exists.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L373)

#### vertexExists

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST bool zSpace::zUtilsCore::vertexExists(unordered_map< string, int > &positionVertex, zVector &pos, int precisionFac, int &outVertexId)
```
{% endcode %}

This method checks if the input position exists in the map.

bool - true if the position exists in the map. version 0.0.1

Parameter positionVertex: - input position vertex map.

Parameter pos: - input position.

Parameter precisionFac: - precision factor of the points to check.

Parameter outVertexId: - index of the position in the map if it exists.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L384)

#### addToPositionMap

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST void zSpace::zUtilsCore::addToPositionMap(unordered_map< string, int > &positionVertex, zVector &pos, int index, int precisionFac)
```
{% endcode %}

This method adds the position given by input vector to the positionVertex Map.

version 0.0.1

Parameter positionVertex: - input position vertex map.

Parameter pos: - input position.

Parameter index: - input vertex index in the vertex position container.

Parameter precisionFac: - precision factor of the points to check.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L393)

#### zMin

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST zVector zSpace::zUtilsCore::zMin(vector< zVector > &vals)
```
{% endcode %}

This method returns the minimum of the input container of zVectors.

zVectors - vector with minimum length version 0.0.2

Parameter vals: - container of zVectors.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L405)

#### zMax

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST zVector zSpace::zUtilsCore::zMax(vector< zVector > &vals)
```
{% endcode %}

This method returns the maximum of the input container of zVectors.

zVectors - vector with maximum length version 0.0.2

Parameter vals: - container of zVectors.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L413)

#### ofMap

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zUtilsCore::ofMap(float value, float inputMin, float inputMax, zVector outputMin, zVector outputMax)
```
{% endcode %}

This method maps the input value from the input domain to output domain.

double - mapped vector. version 0.0.2

Parameter value: - input vector to be mapped.

Parameter inputMin: - input domain minimum.

Parameter inputMax: - input domain maximum.

Parameter outputMin: - output vector domain minimum.

Parameter outputMax: - output vector domain maximum.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L425)

#### ofMap

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zUtilsCore::ofMap(float value, zDomainFloat inputDomain, zDomainVector outDomain)
```
{% endcode %}

This method maps the input value from the input domain to output domain.

double - mapped vector. version 0.0.2

Parameter value: - input vector to be mapped.

Parameter inputDomain: - input domain of double.

Parameter outDomain: - output domain of vectors.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L435)

#### factorise

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zUtilsCore::factorise(zVector &inVector, int precision=3)
```
{% endcode %}

This method returns the factorised vector to the input precision.

zVector - factorised vector. version 0.0.2

Parameter inVector: - input vector.

Parameter precision: - precision or number of digits after the decimal point.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L444)

#### scalePointCloud

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST void zSpace::zUtilsCore::scalePointCloud(vector< zVector > &inPoints, double scaleFac)
```
{% endcode %}

This method scales the input point cloud by the input scale factor.

version 0.0.2

Parameter inPoints: - input point cloud.

Parameter scaleFac: - scale factor.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L452)

#### getCenter\_PointCloud

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST void zSpace::zUtilsCore::getCenter_PointCloud(vector< zVector > &inPoints, zVector &center)
```
{% endcode %}

This method computes the center of the input point cloud.

version 0.0.2

Parameter inPoints: - input point cloud.

Parameter center: - center of point cloud.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L460)

#### getClosest\_PointCloud

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST int zSpace::zUtilsCore::getClosest_PointCloud(zVector &pos, vector< zVector > inPositions)
```
{% endcode %}

This method return index of the closest point in the input container to the input position.

version 0.0.2

Parameter pos: - input position.

Parameter inPositions: - input container of positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L468)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST void zSpace::zUtilsCore::getBounds(vector< zVector > &inPoints, zVector &minBB, zVector &maxBB)
```
{% endcode %}

This method returns the bounds of the input list points.

Parameter inPoints: - input container of positions.

Parameter minBB: - stores zVector of bounding box minimum.

Parameter maxBB: - stores zVector of bounding box maximum.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L476)

#### polyWindingXY

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST bool zSpace::zUtilsCore::polyWindingXY(zPointArray positions)
```
{% endcode %}

This method returns the winding direction of a closed planar polygon to XY plane. true for CCW, false for CW.

based on https://stackoverflow.com/questions/1165647/how-to-determine-if-a-list-of-polygon-points-are-in-clockwise-order

Parameter positions: - input pointer to container of positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L484)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zUtilsCore::getBounds(zVector *inPoints, int numPoints, zVector &minBB, zVector &maxBB)
```
{% endcode %}

This method returns the bounds of the input list points.

Parameter inPoints: - input pointer to container of positions.

Parameter numPoints: - number of points in the container.

Parameter minBB: - stores zVector of bounding box minimum.

Parameter maxBB: - stores zVector of bounding box maximum.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L493)

#### getDimsFromBounds

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zUtilsCore::getDimsFromBounds(zVector &minBB, zVector &maxBB)
```
{% endcode %}

This method computes the distances in X,Y,Z for the input bounds.

version 0.0.2

Parameter minBB: - lower bounds as zVector.

Parameter maxBB: - upper bounds as zVector

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L502)

#### pointInBounds

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::pointInBounds(zVector &inPoint, zVector &minBB, zVector &maxBB)
```
{% endcode %}

This method checks if the input position is inside the input bounds.

bool - true if input position is inside the bounds. version 0.0.2

Parameter inPoint: - input point.

Parameter minBB: - lower bounds as zVector.

Parameter maxBB: - upper bounds as zVector

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L512)

#### getDistanceWeights

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST void zSpace::zUtilsCore::getDistanceWeights(zPoint &inPos, zPointArray positions, double power, zDoubleArray &weights)
```
{% endcode %}

This method computes the inverse distance weights of the input positions container on the input point .

bsaed on http://www.gitta.info/ContiSpatVar/en/html/Interpolatio\_learningObject2.xhtml. version 0.0.2

Parameter inPos: - input position.

Parameter positions: - input container of positions.

Parameter power: - power of the distance.

Parameter weights: - influence Weights between 0 and 1.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L523)

#### plane\_planeIntersection

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::plane_planeIntersection(zVector &nA, zVector &nB, zVector &pA, zVector &pB, zVector &outP1, zVector &outP2)
```
{% endcode %}

This method returns the intersection of two planes which is line.

Based on http://paulbourke.net/geometry/pointlineplane/ bool - true if the planes intersect. version 0.0.2

Parameter nA: - input normal of plane A.

Parameter nB: - input normal of plane B.

Parameter pA: - input point on plane A.

Parameter pB: - input point on plane B.

Parameter descriptions are absent in the current declaration comments for: outP1, outP2. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L537)

#### line\_lineClosestPoints

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::line_lineClosestPoints(zVector &a0, zVector &a1, zVector &b0, zVector &b1, double &uA, double &uB)
```
{% endcode %}

This method returns the closest points of two lines.

Based on http://paulbourke.net/geometry/pointlineplane/ bool - true if the planes intersect. version 0.0.2

Parameter a0: - first input point on line A.

Parameter a1: - second input point on line A.

Parameter b0: - first input point on line B.

Parameter b1: - second input point on line B.

Parameter uA: - line parameter for closest point on A .

Parameter uB: - line parameter for closest point on B .

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L551)

#### line\_lineClosestPoints

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::line_lineClosestPoints(zVector &p1, zVector &p2, zVector &p3, zVector &p4, double &uA, double &uB, zVector &pA, zVector &pB)
```
{% endcode %}

This method returns the closest points of two lines.

Based on http://paulbourke.net/geometry/pointlineplane/ and http://paulbourke.net/geometry/pointlineplane/lineline.c bool - true if the lines intersect. version 0.0.2

Parameter p1: - first input point on line A.

Parameter p2: - second input point on line A.

Parameter p3: - first input point on line B.

Parameter p4: - second input point on line B.

Parameter uA: - line parameter for closest point on A .

Parameter uB: - line parameter for closest point on B .

Parameter pA: - closest point on A .

Parameter pA: - closest point on B .

Parameter descriptions are absent in the current declaration comments for: pB. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L567)

#### line\_PlaneIntersection

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::line_PlaneIntersection(zVector &p1, zVector &p2, zVector &planeNorm, zVector &p3, zVector &intersectionPt)
```
{% endcode %}

This method returns the intersection of two lines which is point.

Based on http://paulbourke.net/geometry/pointlineplane/ bool - true if the line and plane intersect. version 0.0.2

Parameter p1: - first input point on line A.

Parameter p2: - second input point on line A.

Parameter planeNorm: - plane normal.

Parameter p3: - point in plane.

Parameter intersectionPt: - intersection point .

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L580)

#### ray\_triangleIntersection

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::ray_triangleIntersection(zPoint &a, zPoint &b, zPoint &c, zVector &d, zPoint &o, zPoint &intersectionPt)
```
{% endcode %}

This method returns the intersection of two lines which is point.

Based on https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d/42752998#42752998 bool - true if the line and plane intersect. version 0.0.2

Parameter a: - first point on triangle.

Parameter b: - second point on triangle.

Parameter c: - third point on triangle.

Parameter d: - direction of ray.

Parameter o: - origin of ray.

Parameter intersectionPt: - intersection point, if it exists.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L595)

#### getTriangleArea

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE double zSpace::zUtilsCore::getTriangleArea(zVector &v1, zVector &v2, zVector &v3)
```
{% endcode %}

This method returns the area of triagle defined by the three input zVectors.

double - area of triangle defirned by the vectors. version 0.0.2

Parameter descriptions are absent in the current declaration comments for: v1, v2, v3. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L606)

#### getSignedTriangleVolume

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE double zSpace::zUtilsCore::getSignedTriangleVolume(zVector &v1, zVector &v2, zVector &v3)
```
{% endcode %}

This method returns the signed volume of the tetrahedron formed by the three input zVectors and the origin.

Based on http://chenlab.ece.cornell.edu/Publication/Cha/icip01\_Cha.pdf and http://www.dillonbhuff.com/?p=345 double - volume of tetrahedron formed by the three input vectors and the origin. version 0.0.2

Parameter descriptions are absent in the current declaration comments for: v1, v2, v3. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L617)

#### pointInTriangle

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::pointInTriangle(zVector &pt, zVector &t0, zVector &t1, zVector &t2)
```
{% endcode %}

This method checks if the given input points liess within the input triangle.

based on http://blackpawn.com/texts/pointinpoly/default.html bool - true if point is inside the input triangle.

Parameter pt: - zVector holding the position information of the point to be checked.

Parameter t0: - zVector holding the position information for the 3 points of the triangle.

Parameter t1: - zVector holding the position information for the 3 points of the triangle.

Parameter t2: - zVector holding the position information for the 3 points of the triangle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L626)

#### pointInPlanarPolygon

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::pointInPlanarPolygon(zPoint &pt, zPointArray &points, zVector &planeNormal)
```
{% endcode %}

This method checks if the point is inside the 3D Planar Polygon. \details http://geomalgorithms.com/a03-\_inclusion.html.

bool - true if the point is inside or on the polygon version 0.0.4

Parameter pt: - input point to test.

Parameter points: - input container of points of polygon.

Parameter planeNormal: - input plane normal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L637)

#### pointInPlanarPolygon

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::pointInPlanarPolygon(zPoint &pt, zPoint &p0, zPoint &p1, zPoint &p2, zPoint &p3, zVector &planeNormal)
```
{% endcode %}

This method checks if the point is inside the 3D Planar Polygon. \details http://geomalgorithms.com/a03-\_inclusion.html.

bool - true if the point is inside or on the polygon version 0.0.4

Parameter pt: - input point to test.

Parameter p0: - input polygon p0.

Parameter p1: - input polygon p1.

Parameter p2: - input polygon p2.

Parameter p3: - input polygon p3.

Parameter planeNormal: - input plane normal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L651)

#### pointOnLine

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zUtilsCore::pointOnLine(zPoint &pt, zPoint &pA, zPoint &pB, float tolerance=distanceTolerance)
```
{% endcode %}

This method checks if the point lies on a line.

bool - true if the point is inside or on the polygon version 0.0.4

Parameter pt: - input point to test.

Parameter pA: - input point A of line.

Parameter pB: - input point B of line.

Parameter descriptions are absent in the current declaration comments for: tolerance. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L661)

#### isLeft

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zUtilsCore::isLeft(zPoint &p0, zPoint &p1, zPoint &p2)
```
{% endcode %}

This method tests if a 2D point is Left|On|Right of an infinite line. \details http://geomalgorithms.com/a03-\_inclusion.html, https://www.engr.colostate.edu/\~dga/documents/papers/point\_in\_polygon.pdf.

int - >0 for P2 left of the line through p0 and p1 =0 for P2 on the line <0 for P2 right of the line version 0.0.4

Parameter p0: - input point0.

Parameter p2: - input point2.

Parameter descriptions are absent in the current declaration comments for: p1. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L675)

#### minDist\_Edge\_Point

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE double zSpace::zUtilsCore::minDist_Edge_Point(zVector &pt, zVector &e0, zVector &e1, zVector &closest_Pt)
```
{% endcode %}

This method computes the minimum distance between a point and edge and the closest Point on the edge.

based on http://paulbourke.net/geometry/pointlineplane/ minDist - distance to closest point. version 0.0.2

Parameter pt: - point

Parameter e0: - start point of edge.

Parameter e1: - end point of edge.

Parameter closest\_Pt: - closest point on edge to the input point.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L687)

#### minDist\_Point\_Plane

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE double zSpace::zUtilsCore::minDist_Point_Plane(zVector &pA, zVector &pB, zVector &norm)
```
{% endcode %}

This method computes the minimum distance between a point and a plane.

based on http://paulbourke.net/geometry/pointlineplane/ minDist - minimum distance to plane. version 0.0.2

Parameter pA: - point

Parameter pB: - point on the plane.

Parameter norm: - normal of the plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L698)

#### getBaryCenter

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE_HOST zVector zSpace::zUtilsCore::getBaryCenter(zPointArray &inPositions, zDoubleArray &weights)
```
{% endcode %}

This method gets the bary-center of the input positions based on the input weights.

zVector - bary-center. version 0.0.2

Parameter inPositions: - input container of positions.

Parameter weights: - input container of weights.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L707)

#### sphericalToCartesian

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zPoint zSpace::zUtilsCore::sphericalToCartesian(double azimuth, double altitude, double radius)
```
{% endcode %}

This method converts spherical coordinates to cartesian coordinates.

zVector - output cartesian point. version 0.0.2

Parameter azimuth: - input azimuth coordinate.

Parameter altitude: - input altitude coordinate.

Parameter radius: - input radius.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L717)

#### cartesianToSpherical

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zUtilsCore::cartesianToSpherical(zPoint &inVec, double &radius, double &azimuth, double &altitude)
```
{% endcode %}

This method converts cartesian coordinates to spherical coordinates.

version 0.0.2

Parameter inVec: - input cartesioan point.

Parameter radius: - input radius.

Parameter azimuth: - output azimuth coordinate.

Parameter altitude: - output altitude coordinate.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L727)

#### cyclicalSortPoints

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zUtilsCore::cyclicalSortPoints(zPointArray &inPoints, zVector &refX, zVector &refZ, zPointArray &outSortedPoints)
```
{% endcode %}

This method sorts the input point cyclically based on the 360 Angle to a reference X axis around a reference normal(Z).

version 0.0.4

Parameter inPoints: - input container of points.

Parameter refX: - input reference X axis.

Parameter refZ: - int reference normal.

Parameter outSortedPoints: - output sorted points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L738)

#### getEllipse

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zUtilsCore::getEllipse(double radius, int numPoints, zPointArray &Pts, zMatrix4 localPlane=zMatrix4(), double xFactor=1.0, double yFactor=1.0)
```
{% endcode %}

This method computes the points on a ellipse centered around world origin for input radius, and number of points.

version 0.0.2

Parameter radius: - radius.

Parameter numPoints: - number of points in the the ellipse.

Parameter Pts: - points on circle.

Parameter localPlane: - orientation plane, by default a world plane.

Parameter xFactor: - the factor of scaling in x direction. For a circle both xFactor and yFactor need to be equal.

Parameter yFactor: - the factor of scaling in y direction. For a circle both xFactor and yFactor need to be equal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L754)

#### getRectangle

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zUtilsCore::getRectangle(zVector dims, zPointArray &rectanglePts, zMatrix4 localPlane=zMatrix4())
```
{% endcode %}

This method computes the points on a rectangle for input dimensions centers around the world origin.

version 0.0.2

Parameter dims: - dimensions of rectangle.

Parameter rectanglePts: - points on rectangle.

Parameter localPlane: - orientation plane, by default a world plane.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L763)

#### averageColor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zColor zSpace::zUtilsCore::averageColor(zColor c1, zColor c2, zColorType type)
```
{% endcode %}

This method returns the average color of the two input colors.

version 0.0.1

Parameter c1: - input color 1.

Parameter c2: - input color 2.

Parameter type: - color type - zRGB / zHSV.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L776)

#### averageColor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zColor zSpace::zUtilsCore::averageColor(zColorArray &c1, zColorType type)
```
{% endcode %}

This method returns the average color of the input color container.

version 0.0.1

Parameter c1: - input color container.

Parameter type: - color type - zRGB / zHSV.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L785)

#### blendColor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zColor zSpace::zUtilsCore::blendColor(float inputValue, zDomainFloat inDomain, zDomainColor outDomain, zColorType type)
```
{% endcode %}

This method returns the blend color based on the input value, domain and the color domains.

zColor - output color. version 0.0.1

Parameter inDomain: - input domain scalar.

Parameter outDomain: - output domain color.

Parameter type: - color type - zRGB / zHSV.

Parameter descriptions are absent in the current declaration comments for: inputValue. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L796)

#### json\_read

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zUtilsCore::json_read(string path, json &j)
```
{% endcode %}

This method gets the JSON file from the input path if it exists.

bool - true if file exists, else false. version 0.0.4

Parameter path: - input file path.

Parameter j: - output JSON file if it exists.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L811)

#### json\_write

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zUtilsCore::json_write(string path, json &j)
```
{% endcode %}

This method writes the JSON file to the output path.

bool - true if file exists, else false. version 0.0.4

Parameter path: - output file path.

Parameter j: - output JSON file if it exists.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L820)

#### json\_readAttribute

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
bool zSpace::zUtilsCore::json_readAttribute(json &j, std::string attributeKey, T &outAttribute)
```
{% endcode %}

This method gets the attributes from the input json.

bool - true if file exists, else false. version 0.0.4

Parameter j: - input JSON file if it exists.

Parameter attributeKey: - input JSON attribute name.

Parameter outAttribute: - input JSON attribute values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L831)

#### json\_writeAttribute

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
void zSpace::zUtilsCore::json_writeAttribute(json &j, std::string attributeKey, T &outAttribute)
```
{% endcode %}

This method gets the JSON file from the input path if it exists.

bool - true if file exists, else false. version 0.0.4

Parameter j: - output JSON file if it exists.

Parameter descriptions are absent in the current declaration comments for: attributeKey, outAttribute. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L841)

#### matrixToJPEG

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zUtilsCore::matrixToJPEG(vector< MatrixXf > &matrices, string path)
```
{% endcode %}

This method writes a JPEG from the input matrix.

version 0.0.4

Parameter path: - input path where to write the image to.

Parameter descriptions are absent in the current declaration comments for: matrices. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L891)

#### matrixToPNG

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zUtilsCore::matrixToPNG(vector< MatrixXf > &matrices, string path)
```
{% endcode %}

This method writes a PNG from the input matrix.

version 0.0.4

Parameter path: - input path where to write the image to.

Parameter descriptions are absent in the current declaration comments for: matrices. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L899)

#### matrixFromPNG

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zUtilsCore::matrixFromPNG(vector< MatrixXf > &matrices, string path)
```
{% endcode %}

This method read a PNG values to the output matrix.

version 0.0.4

Parameter path: - input path where to write the image to.

Parameter descriptions are absent in the current declaration comments for: matrices. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L907)

#### getBestFitPlane

{% code collapsedlinecount="10" %}
```cpp
zPlane zSpace::zUtilsCore::getBestFitPlane(zPointArray &points)
```
{% endcode %}

This method return a 4X4 matrix of the best fit plane for the given points using Principal Component Analysis. Works with Eigen matrix.

zPlane - Best fit plane as a 4X4 matrix, with XYZO stored in columns 0,1,2,3 respectively. version 0.0.2

Parameter points: - input points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L919)

#### getProjectedPoints\_BestFitPlane

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zUtilsCore::getProjectedPoints_BestFitPlane(zPointArray &points, zPointArray &projectPoints)
```
{% endcode %}

This methods computes the projected points on the in input plane.

version 0.0.4

Parameter points: - input points.

Parameter points: - projected points.

Parameter descriptions are absent in the current declaration comments for: projectPoints. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L927)

#### boundingboxPCA

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zUtilsCore::boundingboxPCA(zPointArray points, zVector &minBB, zVector &maxBB, zVector &minBB_local, zVector &maxBB_local)
```
{% endcode %}

This method computes the bounding box for the given points using PCA. Works with Eigen matrix.

version 0.0.2

Parameter points: - input points.

Parameter minBB: - lower bounds as zVector

Parameter maxBB: - upper bounds as zVector

Parameter descriptions are absent in the current declaration comments for: maxBB\_local, minBB\_local. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L936)

#### getEuclideanDistance

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zUtilsCore::getEuclideanDistance(MatrixXf &m1, MatrixXf &m2, double tolerance=0.001)
```
{% endcode %}

This method computes the tranformation to the world space of the input 4x4 matrix.

zTransform - world transformation matrix. version 0.0.2 This method computes the tranformation to the local space of the input 4x4 matrix.

zTransform - world transformation matrix. version 0.0.2 This method computes the tranformation from one 4X4 matrix to another.

zTransform - transformation matrix. version 0.0.2 This method computes the euclidean distance between two input row matricies. The number of columns of m1 and m2 need to be equal.

double - euclidean distance. version 0.0.2

Parameter m1: - input zMatrix 1.

Parameter m2: - input zMatrix 2.

Parameter tolerance: - input tolerance for distance check.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L972)

#### getTransformFromArray

{% code collapsedlinecount="10" %}
```cpp
zTransform zSpace::zUtilsCore::getTransformFromArray(zFloatArray &rowMajorVals)
```
{% endcode %}

This method computes the zTransform from the input row major container of 16 values.

zTransform - transformation matrix. version 0.0.2

Parameter rowMajorVals: - input 1D container of the transform values in row major format.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L980)

#### getTransformFromVectors

{% code collapsedlinecount="10" %}
```cpp
zTransform zSpace::zUtilsCore::getTransformFromVectors(zPoint &O, zVector &X, zVector &Y, zVector &Z)
```
{% endcode %}

This method compute the transform from input Vectors.

zTransform - output transform. version 0.0.4

Parameter O: - input origin point.

Parameter X: - input X axis vector.

Parameter Y: - input Y axis vector.

Parameter Z: - input Z axis vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L991)

#### getTransformFromOrigin\_Normal

{% code collapsedlinecount="10" %}
```cpp
zTransform zSpace::zUtilsCore::getTransformFromOrigin_Normal(zPoint &O, zVector &Z, zVector Basis=zVector(0, 1, 0))
```
{% endcode %}

This method compute the transform from input Vectors.

zTransform - output transform. version 0.0.4

Parameter O: - input origin point.

Parameter Z: - input Z axis vector.

Parameter Basis: - input Basis vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1001)

#### getPlaneFromArray

{% code collapsedlinecount="10" %}
```cpp
zPlane zSpace::zUtilsCore::getPlaneFromArray(zFloatArray &rowMajorVals)
```
{% endcode %}

This method computes the zTransform from the input row major container of 16 values.

zTransform - transformation matrix. version 0.0.2

Parameter rowMajorVals: - input 1D container of the transform values in row major format.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1009)

#### getPlaneFromVectors

{% code collapsedlinecount="10" %}
```cpp
zPlane zSpace::zUtilsCore::getPlaneFromVectors(zPoint &O, zVector &X, zVector &Y, zVector &Z)
```
{% endcode %}

This method compute the transform from input Vectors.

zTransform - output transform. version 0.0.4

Parameter O: - input origin point.

Parameter X: - input X axis vector.

Parameter Y: - input Y axis vector.

Parameter Z: - input Z axis vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1020)

#### getPlaneFromOrigin\_Normal

{% code collapsedlinecount="10" %}
```cpp
zPlane zSpace::zUtilsCore::getPlaneFromOrigin_Normal(zPoint &O, zVector &Z, zVector Basis=zVector(0, 1, 0))
```
{% endcode %}

This method compute the transform from input Vectors.

zTransform - output transform. version 0.0.4

Parameter O: - input origin point.

Parameter Z: - input Z axis vector.

Parameter Basis: - input Basis vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1030)

#### planeToQuaternion

{% code collapsedlinecount="10" %}
```cpp
zQuaternion zSpace::zUtilsCore::planeToQuaternion(zPlane &plane)
```
{% endcode %}

This method compute the quaternion from input plane (row major).

zQuaternion - output quaternion. version 0.0.4

Parameter plane: - input plane matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1041)

#### quaternionToPlane

{% code collapsedlinecount="10" %}
```cpp
zPlane zSpace::zUtilsCore::quaternionToPlane(zQuaternion &q, zPoint origin)
```
{% endcode %}

This method compute the plane from input quaternion and origin.

zPlane - output plane (row major). version 0.0.4

Parameter q: - input quaternion.

Parameter origin: - input plane origin.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1050)

#### interpolatePlanes\_slerp

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zUtilsCore::interpolatePlanes_slerp(zPlane &p1, zPlane &p2, int numPlanes, zPointArray &origins, vector< zPlane > &outPlanes)
```
{% endcode %}

This method compute the interpolated planes between the two input planes.

version 0.0.4

Parameter p1: - input plane 1.

Parameter p2: - input plane 2.

Parameter origins: - input container of orin points for the interpolated planes.

Parameter outPlanes: - output contatiner of interpolated planes.

Parameter descriptions are absent in the current declaration comments for: numPlanes. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1061)

#### dihedralAngleBetweenPlanes

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zUtilsCore::dihedralAngleBetweenPlanes(zPlane &p1, zPlane &p2)
```
{% endcode %}

This method compute the dihedral angle between two planes.

float - dihedral angle in degrees. version 0.0.4

Parameter p1: - input plane 1.

Parameter p2: - input plane 2.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1070)

#### zSign

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
T zSpace::zUtilsCore::zSign(T value)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1216)

#### ofMap

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
T zSpace::zUtilsCore::ofMap(T value, T inputMin, T inputMax, T outputMin, T outputMax)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inputMax, inputMin, outputMax, outputMin, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1223)

#### ofMap

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
T zSpace::zUtilsCore::ofMap(T value, zDomain< T > inDomain, zDomain< T > outDomain)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inDomain, outDomain, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1229)

#### ofClamp

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
T zSpace::zUtilsCore::ofClamp(T value, T inputMin, T inputMax)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inputMax, inputMin, value. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1235)

#### zMin

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
T zSpace::zUtilsCore::zMin(T val0, T val1)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: val0, val1. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1243)

#### zMin

{% code collapsedlinecount="10" %}
```cpp
template <>
zVector zSpace::zUtilsCore::zMin(zVector val0, zVector val1)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: val0, val1. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1249)

#### zMin

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
T zSpace::zUtilsCore::zMin(vector< T > &vals)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: vals. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1260)

#### zMax

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
T zSpace::zUtilsCore::zMax(T val0, T val1)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: val0, val1. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1271)

#### zMax

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
T zSpace::zUtilsCore::zMax(vector< T > &vals)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: vals. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1277)

#### factorise

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
T zSpace::zUtilsCore::factorise(T inputValue, int precision)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inputValue, precision. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1288)

#### checkRepeatElement

{% code collapsedlinecount="10" %}
```cpp
template <typename T >
bool zSpace::zUtilsCore::checkRepeatElement(T &inVal, vector< T > values, int &index, int precision)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: inVal, index, precision, values. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/utilities/zUtilsCore.h#L1295)

### Related types

[zColor](api-zcolor.md)

[zDomain](api-zdomain.md)

[zMatrix4](api-zmatrix4.md)

[zVector](api-zvector.md)
