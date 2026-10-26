# zVector

## zSpace::zVector

Declared in include/zspace/zCore/base/zVector.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A 3 dimensional vector math class.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L45)

### Public Attrib

#### x

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zVector::x
```
{% endcode %}

x component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L51)

#### y

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zVector::y
```
{% endcode %}

y component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L54)

#### z

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zVector::z
```
{% endcode %}

z component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L57)

### Public Func

#### zVector

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zVector::zVector()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L67)

#### zVector

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zVector::zVector(float _x, float _y, float _z, float _w=1.0)
```
{% endcode %}

Overloaded constructor.

version 0.0.1

Parameter \_x: - x component of the zVector.

Parameter \_z: - y component of the zVector.

Parameter \_z: - z component of the zVector.

Parameter \_w: - w component of the zVector.

Parameter descriptions are absent in the current declaration comments for: \_y. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L77)

#### zVector

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zVector::zVector(zFloat3 &_vals)
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: \_vals. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L84)

#### zVector

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zVector::zVector(zFloat4 &_vals)
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: \_vals. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L91)

#### \~zVector

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zVector::~zVector()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L101)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zVector::operator==(zVector &v1)
```
{% endcode %}

This operator checks for equality of two zVectors.

bool - true if vectors are equal. version 0.0.1

Parameter v1: - zVector against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L113)

#### operator!=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zVector::operator!=(zVector &v1)
```
{% endcode %}

This operator checks for equality of two zVectors.

bool - true if vectors are equal. version 0.0.1

Parameter v1: - zVector against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L121)

#### operator\[]

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::operator[](int index)
```
{% endcode %}

This method returns the component value of the current zVector.

float - value of the component. version 0.0.1

Parameter index: - index. ( 0 - x component, 1 - y component, 2 - z component, 3 - w component).

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L129)

#### operator+

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zVector::operator+(const zVector &v1)
```
{% endcode %}

This operator is used for vector addition.

zVector - resultant vector after the addition. version 0.0.1

Parameter v1: - zVector which is added to the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L137)

#### operator-

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zVector::operator-(const zVector &v1)
```
{% endcode %}

This operator is used for vector subtraction.

zVector - resultant vector after the subtraction. version 0.0.1

Parameter v1: - zVector which is subtracted from the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L145)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::operator*(const zVector &v1)
```
{% endcode %}

This operator is used for vector dot product.

float - resultant value after the dot product. version 0.0.1

Parameter v1: - zVector which is used for the dot product with the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L153)

#### operator^

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zVector::operator^(const zVector &v1)
```
{% endcode %}

This operator is used for vector cross procduct.

zVector - resultant vector after the cross product. version 0.0.1

Parameter v1: - zVector which is used for the cross product with the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L161)

#### operator+

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zVector::operator+(float val)
```
{% endcode %}

This operator is used for scalar addition of a vector.

zVector - resultant vector after the scalar addition. version 0.0.1

Parameter val: - scalar value to be added to the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L169)

#### operator-

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zVector::operator-(float val)
```
{% endcode %}

This operator is used for scalar subtraction of a vector.

zVector - resultant vector after the scalar subtraction. version 0.0.1

Parameter val: - scalar value to be subtracted from the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L177)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zVector::operator*(float val)
```
{% endcode %}

This operator is used for scalar muliplication of a vector.

zVector - resultant vector after the scalar multiplication. version 0.0.1

Parameter val: - scalar value to be multiplied with the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L185)

#### operator/

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zVector::operator/(float val)
```
{% endcode %}

This operator is used for 4x4 matrix muliplication of a vector.

zVector - resultant vector after the matrix multiplication. version 0.0.1 / ZSPACE\_CUDA\_CALLABLE zVector operator\*(zMatrix4 \&inMatrix); /\*! This operator is used for 3X3 matrix muliplication of a vector. \param \[in] inMatrix - input 3X3 matrix to be multiplied with the current vector. \return zVector - resultant vector after the matrix multiplication. \since version 0.0.1 \&zwj;/ ZSPACE\_CUDA\_CALLABLE zVector operator\*(zMatrix3 \&inMatrix); /\*! \brief This operator is used for scalar division of a vector. \param \[in] val - scalar value used to divide the current vector. \return zVector - resultant vector after the scalar division. \since version 0.0.1

Parameter descriptions are absent in the current declaration comments for: val. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L209)

#### operator+=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVector::operator+=(const zVector &v1)
```
{% endcode %}

This overloaded operator is used for vector addition and assigment of the result to the current vector.

version 0.0.1

Parameter v1: - zVector which is added to the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L220)

#### operator-=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVector::operator-=(const zVector &v1)
```
{% endcode %}

This overloaded operator is used for vector subtraction and assigment of the result to the current vector.

version 0.0.1

Parameter v1: - zVector which is subtacted from the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L227)

#### operator+=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVector::operator+=(float val)
```
{% endcode %}

This overloaded operator is used for scalar addition and assigment of the result to the current vector.

version 0.0.1

Parameter val: - scalar value to be added to the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L234)

#### operator-=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVector::operator-=(float val)
```
{% endcode %}

This overloaded operator is used for scalar subtraction and assigment of the result to the current vector.

version 0.0.1

Parameter val: - scalar value to be subtracted from the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L241)

#### operator\*=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVector::operator*=(float val)
```
{% endcode %}

This overloaded operator is used for scalar multiplication and assigment of the result to the current vector.

version 0.0.1

Parameter val: - scalar value to be multiplied to the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L248)

#### operator/=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVector::operator/=(float val)
```
{% endcode %}

This overloaded operator is used for scalar division and assigment of the result to the current vector.

version 0.0.1

Parameter val: - scalar value used to divide from the current vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L255)

#### length2

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::length2()
```
{% endcode %}

This method returns the squared length of the zVector.

float - value of the squared maginute of the vector. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L266)

#### length

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::length()
```
{% endcode %}

This method returns the magnitude/length of the zVector.

float - value of the maginute of the vector. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L273)

#### normalize

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVector::normalize()
```
{% endcode %}

This method normalizes the vector to unit length.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L278)

#### squareDistanceTo

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::squareDistanceTo(zVector &v1)
```
{% endcode %}

This method returns the squared distance between the current zVector and input zVector.

float - squared value of the distance between the vectors. version 0.0.1

Parameter v1: - input vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L286)

#### distanceTo

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::distanceTo(zVector &v1)
```
{% endcode %}

This method returns the distance between the current zVector and input zVector.

float - value of the distance between the vectors. version 0.0.1

Parameter v1: - input vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L294)

#### angle

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::angle(zVector &v1)
```
{% endcode %}

This method returns the angle between the current zVector and input zVector.

float - value of the angle between the vectors. version 0.0.1

Parameter v1: - input vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L302)

#### angle360

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::angle360(zVector &v1, zVector &normal)
```
{% endcode %}

This method returns the angle between the current zVector and input zVector in the range of 0 to 360 in the plane given by the input normal..

float - value of the angle between the vectors. version 0.0.1

Parameter v1: - input vector.

Parameter normal: - input reference normal or axis of rotation.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L311)

#### dihedralAngle

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::dihedralAngle(zVector &v1, zVector &v2)
```
{% endcode %}

This method returns the dihedral angle between the two input zVectors using current zVector as edge reference.

Based on https://www.cs.cmu.edu/\~kmcrane/Projects/Other/TriangleMeshDerivativesCheatSheet.pdf float - value of the dihedral angle between the vectors. version 0.0.1

Parameter v1: - input vector.

Parameter v2: - input vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L321)

#### cotan

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zVector::cotan(zVector &v)
```
{% endcode %}

This method returns the contangent of the angle between the current and input vector.

Based on http://multires.caltech.edu/pubs/diffGeoOps.pdf and http://rodolphe-vaillant.fr/?e=69 float - cotangent of angle between the vectors. version 0.0.1

Parameter v: - input vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L330)

#### getComponents

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zVector::getComponents(zFloat4 &_vals)
```
{% endcode %}

This method gets the components as a array of doubles of the current zVector.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: \_vals. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L337)

#### rotateAboutAxis

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zVector::rotateAboutAxis(zVector axisVec, float angle=0)
```
{% endcode %}

This method returns the rotated vector of the current vector about an input axis by the the input angle.

zVector - rotated vector. version 0.0.1

Parameter axisVec: - axis of rotation.

Parameter angle: - rotation angle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L347)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zVector::operator*(zRotationMatrix inTrans)
```
{% endcode %}

This method returns the row matrix of the current zVector.

zMatrix4Row - row matrix of the vector. version 0.0.1 / ZSPACE\_CUDA\_CALLABLE void toRowMatrix4(zMatrix4Row \&row); /\*! This method returns the row matrix of the current zVector. \return zMatrix3Row - row matrix of the vector. \since version 0.0.1 \&zwj;/ ZSPACE\_CUDA\_CALLABLE void toRowMatrix3(zMatrix3Row \&row);

/\*! This method returns the column matrix of the current zVector. \param \[in] rows - number of rows in the output vector. \return zMatrix4Col - column matrix of the vector. \since version 0.0.1 \&zwj;/ ZSPACE\_CUDA\_CALLABLE void toColumnMatrix4(zMatrix4Col \&col);

/\*! This method returns the column matrix of the current zVector. \param \[in] rows - number of rows in the output vector. \return zMatrix3Col - column matrix of the vector. \since version 0.0.1 \&zwj;/ ZSPACE\_CUDA\_CALLABLE void toColumnMatrix3(zMatrix3Col \&col);

/\*! This method returns the vector from the input row matrix. \param \[in] zMatrix4Row - input row matrix. \return zVector - zVector of the row matrix. \since version 0.0.1 \&zwj;/ ZSPACE\_CUDA\_CALLABLE zVector fromRowMatrix4(zMatrix4Row \&inMatrix);

/\*! This method returns the vector from the input row matrix. \param \[in] zMatrix3Row - input row matrix. \return zVector - zVector of the row matrix. \since version 0.0.1 \&zwj;/ ZSPACE\_CUDA\_CALLABLE zVector fromRowMatrix3(zMatrix3Row \&inMatrix);

/\*! This method returns the vector from the input column matrix. \param \[in] zMatrix4Col - input column matrix. \return zVector - zVector of the column matrix. \since version 0.0.1 \&zwj;/ ZSPACE\_CUDA\_CALLABLE zVector fromColumnMatrix4(zMatrix4Col \&inMatrix);

/\*! This method returns the vector from the input column matrix. \param \[in] zMatrix3Col - input column matrix. \return zVector - zVector of the column matrix. \since version 0.0.1 \&zwj;/ ZSPACE\_CUDA\_CALLABLE zVector fromColumnMatrix3(zMatrix3Col \&inMatrix);

/\*! \brief This operator is used for 3x3matrix muliplication of a vector. \param \[in] inMatrix - input 4X4 zTransform to be multiplied with the current vector. \return zVector - resultant vector after the matrix multiplication. \since version 0.0.1

Parameter descriptions are absent in the current declaration comments for: inTrans. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L419)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zVector::operator*(zTransform inTrans)
```
{% endcode %}

This operator is used for 4x4 matrix muliplication of a vector.

zVector - resultant vector after the matrix multiplication. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: inTrans. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zVector.h#L427)
