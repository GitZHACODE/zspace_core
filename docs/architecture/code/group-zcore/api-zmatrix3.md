# zMatrix3

## zSpace::zMatrix3

Declared in include/zspace/zCore/base/zMatrix.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A 3x3 matrix math class.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L472)

### Public Func

#### zMatrix3

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zMatrix3::zMatrix3()
```
{% endcode %}

Default Constructor .

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L487)

#### zMatrix3

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zMatrix3::zMatrix3(const float _mat[9])
```
{% endcode %}

Overloaded Constructor.

version 0.0.1

Parameter \_mat: - input values of the matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L494)

#### \~zMatrix3

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zMatrix3::~zMatrix3()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L503)

#### getIndex

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zMatrix3::getIndex(int rowIndex, int colIndex)
```
{% endcode %}

This method gets the index in the matrix value container given the row and column indicies.

int - index in value container. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: colIndex, rowIndex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L516)

#### getIndices

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::getIndices(int index, int &rowIndex, int &colIndex)
```
{% endcode %}

This method gets the row and column index in the matrix given the input container index.

version 0.0.1

Parameter descriptions are absent in the current declaration comments for: colIndex, index, rowIndex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L525)

#### getRow

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::getRow(int index, zMatrix3Row &row)
```
{% endcode %}

This method gets the row values as container of values at the input row index.

zMatrix3Row - container of row values. version 0.0.1

Parameter index: - input row index.

Parameter descriptions are absent in the current declaration comments for: row. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L533)

#### getCol

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::getCol(int index, zMatrix3Col &col)
```
{% endcode %}

This method gets the column values at the input column index.

zMatrix3Col - container of column values. version 0.0.1

Parameter index: - input column index.

Parameter descriptions are absent in the current declaration comments for: col. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L541)

#### getDiagonal

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::getDiagonal(zMatrix3Diag &diag)
```
{% endcode %}

This method gets the diagonal values.

zMatrix3Diag - container of diagonal values. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: diag. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L548)

#### getMatrixValues

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float * zSpace::zMatrix3::getMatrixValues()
```
{% endcode %}

This method gets the mats values container.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L555)

#### getRawMatrixValues

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float * zSpace::zMatrix3::getRawMatrixValues()
```
{% endcode %}

This method gets pointer to the internal matrix values container.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L562)

#### setRow

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::setRow(int index, float val)
```
{% endcode %}

This method sets the row values at the input row index with the input value.

version 0.0.1

Parameter index: - input row index.

Parameter val: - value of the row.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L575)

#### setRow

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::setRow(int index, const zMatrix3Row &row)
```
{% endcode %}

This method sets the row values at the input row index with the container vector of values.

version 0.0.1

Parameter index: - input row index.

Parameter row: - container of values for the row.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L583)

#### setCol

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::setCol(int index, float val)
```
{% endcode %}

This method sets the column values at the input column index with the input value.

version 0.0.1

Parameter index: - input col index.

Parameter val: - value of the col.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L591)

#### setCol

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::setCol(int index, const zMatrix3Col &col)
```
{% endcode %}

This method sets the col values at the input col index with the input container of values.

version 0.0.1

Parameter index: - input col index.

Parameter col: - container of values for the column.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L599)

#### setDiagonal

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::setDiagonal(float val)
```
{% endcode %}

This method sets the diagonal values of a square matrix with the input value.

version 0.0.1

Parameter val: - value of the diagonal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L606)

#### setDiagonal

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::setDiagonal(const zMatrix3Diag &diag)
```
{% endcode %}

This method sets the diagonal values of the matrix with the input container of values.

version 0.0.1

Parameter diag: - container of values for the diagonal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L613)

#### setZero

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::setZero()
```
{% endcode %}

This method sets values of the matrix to zero.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L619)

#### setOne

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::setOne()
```
{% endcode %}

This method sets values of the matrix to one.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L625)

#### setIdentity

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::setIdentity()
```
{% endcode %}

This method sets the matrix to identity.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L631)

#### operator()

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float & zSpace::zMatrix3::operator()(int row, int col)
```
{% endcode %}

This operator returns the reference to the coefficient at at the given row and column index.

float - reference to the coefficient. version 0.0.1

Parameter row: - input row index.

Parameter col: - input col index.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L644)

#### operator()

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float & zSpace::zMatrix3::operator()(int index)
```
{% endcode %}

This operator returns the reference to the coefficient at at the given index.

float - reference to the coefficient. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L652)

#### operator+

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix3::operator+(zMatrix3 &m1)
```
{% endcode %}

This operator is used for matrix addition.

zMatrix3 - resultant matrix after the addition. version 0.0.1

Parameter m1: - zMatrix3 which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L660)

#### operator+

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix3::operator+(float s1)
```
{% endcode %}

This operator is used for scalar addition to a matrix.

zMatrix3 - resultant matrix after the addition. version 0.0.1

Parameter s1: - scalar value which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L668)

#### operator-

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix3::operator-(zMatrix3 &m1)
```
{% endcode %}

This operator is used for matrix subtraction.

zMatrix3 - resultant matrix after the subtraction. version 0.0.1

Parameter m1: - zMatrix3 which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L676)

#### operator-

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix3::operator-(float s1)
```
{% endcode %}

This operator is used for scalar subtraction from a matrix.

zMatrix3 - resultant matrix after the subtraction. version 0.0.1

Parameter s1: - scalar value which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L684)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix3::operator*(zMatrix3 &m1)
```
{% endcode %}

This operator is used for matrix multiplication.

zMatrix3 - resultant matrix after the multiplication. version 0.0.1

Parameter m1: - zMatrix3 which is multiplied with the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L692)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix3::operator*(float s1)
```
{% endcode %}

This operator is used for scalar multiplication with a matrix.

zMatrix3 - resultant matrix after the multiplication. version 0.0.1

Parameter s1: - scalar value which is multiplied with the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L701)

#### operator+=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::operator+=(zMatrix3 &m1)
```
{% endcode %}

This operator is used for matrix addition and assigment of the result to the current matrix.

version 0.0.1

Parameter m1: - zMatrix3 which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L712)

#### operator+=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::operator+=(float s1)
```
{% endcode %}

This operator is used for scalar addition and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L719)

#### operator-=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::operator-=(zMatrix3 &m1)
```
{% endcode %}

This operator is used for matrix subtraction and assigment of the result to the current matrix.

version 0.0.1

Parameter m1: - zMatrix3 which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L726)

#### operator-=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::operator-=(float s1)
```
{% endcode %}

This operator is used for scalar subtraction and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L733)

#### operator\*=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::operator*=(float s1)
```
{% endcode %}

This operator is used for scalar multiplication and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which is multiplied to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L740)

#### operator/=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::operator/=(float s1)
```
{% endcode %}

This operator is used for scalar division and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which divides the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L747)

#### multiply

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix3::multiply(zMatrix3Col &m1, zMatrix3Col &out)
```
{% endcode %}

This method is used for matrix multiplication with a column matrix.

version 0.0.1

Parameter m1: - column matrix which is multiplied with the current matrix.

Parameter out: - resultant column matrix after the multiplication.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L759)

#### transpose

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix3::transpose()
```
{% endcode %}

This method returns the transpose of the input matrix.

zMatrix3 - resultant transpose matrix. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L766)

#### minor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix2 zSpace::zMatrix3::minor(int colIndex, int rowIndex=0)
```
{% endcode %}

This method returns the minor/sub matrix of the input matrix removing the row and column values given by the input colindex and rowIndex.

zMatrix2 - resultant leftover matrix. version 0.0.1

Parameter colIndex: - column index to be removed.

Parameter descriptions are absent in the current declaration comments for: rowIndex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L774)

#### cofactor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix3::cofactor()
```
{% endcode %}

This method returns the cofactor matrix of the input matrix.

Based on https://www.geeksforgeeks.org/adjoint-inverse-matrix/ zMatrix3 - resultant cofactor zMatrix. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L782)

#### adjoint

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix3::adjoint()
```
{% endcode %}

This method returns the adjoint matrix of the input matrix.

Based on https://www.geeksforgeeks.org/adjoint-inverse-matrix/ zMatrix3 - resultant adjoint zMatrix. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L790)

#### inverse

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zMatrix3::inverse(zMatrix3 &outMatrix)
```
{% endcode %}

This method returns the inverse matrix of the input matrix, if it exists.

Based on https://www.geeksforgeeks.org/adjoint-inverse-matrix/ bool - true if inverse matrix exists. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: outMatrix. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L799)

#### det

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zMatrix3::det()
```
{% endcode %}

This method returns the determinant of the input matrix.

Based on https://www.geeksforgeeks.org/determinant-of-a-matrix/ float - determinant value. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L807)

### Related types

[zMatrix2](api-zmatrix2.md)
