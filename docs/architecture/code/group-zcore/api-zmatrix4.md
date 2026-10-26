# zMatrix4

## zSpace::zMatrix4

Declared in include/zspace/zCore/base/zMatrix.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A 4x4 matrix math class.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L830)

### Public Func

#### zMatrix4

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zMatrix4::zMatrix4()
```
{% endcode %}

Default Constructor .

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L848)

#### zMatrix4

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zMatrix4::zMatrix4(const float _mat[16])
```
{% endcode %}

Overloaded Constructor for a square matrix.

version 0.0.1

Parameter \_mat: - input values of the matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L856)

#### \~zMatrix4

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zMatrix4::~zMatrix4()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L866)

#### getIndex

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zMatrix4::getIndex(int rowIndex, int colIndex)
```
{% endcode %}

This method gets the index in the matrix value container given the row and column indicies.

int - index in value container. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: colIndex, rowIndex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L880)

#### getIndices

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::getIndices(int index, int &rowIndex, int &colIndex)
```
{% endcode %}

This method gets the row and column index in the matrix given the input container index.

version 0.0.1

Parameter descriptions are absent in the current declaration comments for: colIndex, index, rowIndex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L889)

#### getRow

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::getRow(int index, zMatrix4Row &row)
```
{% endcode %}

This method gets the row values as container of values at the input row index.

zMatrix4Row - container of row values. version 0.0.1

Parameter index: - input row index.

Parameter descriptions are absent in the current declaration comments for: row. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L897)

#### getCol

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::getCol(int index, zMatrix4Col &col)
```
{% endcode %}

This method gets the column values at the input column index.

zMatrix4Col - container of column values. version 0.0.1

Parameter index: - input column index.

Parameter descriptions are absent in the current declaration comments for: col. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L905)

#### getDiagonal

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::getDiagonal(zMatrix4Diag &diag)
```
{% endcode %}

This method gets the diagonal values.

zMatrix4Diag - container of diagonal values. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: diag. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L912)

#### getMatrixValues

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float * zSpace::zMatrix4::getMatrixValues()
```
{% endcode %}

This method gets the mats values container.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L919)

#### getRawMatrixValues

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float * zSpace::zMatrix4::getRawMatrixValues()
```
{% endcode %}

This method gets pointer to the internal matrix values container.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L926)

#### setRow

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::setRow(int index, float val)
```
{% endcode %}

This method sets the row values at the input row index with the input value.

version 0.0.1

Parameter index: - input row index.

Parameter val: - value of the row.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L938)

#### setRow

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::setRow(int index, const zMatrix4Row row)
```
{% endcode %}

This method sets the row values at the input row index with the input vector of values.

version 0.0.1

Parameter index: - input row index.

Parameter descriptions are absent in the current declaration comments for: row. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L946)

#### setCol

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::setCol(int index, float val)
```
{% endcode %}

This method sets the row values at the input row index with the container vector of values.

version 0.0.1

Parameter index: - input column index.

Parameter descriptions are absent in the current declaration comments for: val. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L954)

#### setCol

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::setCol(int index, const zMatrix4Col col)
```
{% endcode %}

This method sets the col values at the input col index with the input container of values.

version 0.0.1

Parameter index: - input col index.

Parameter col: - container of values for the column.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L962)

#### setDiagonal

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::setDiagonal(float val)
```
{% endcode %}

This method sets the diagonal values of a square matrix with the input value.

version 0.0.1

Parameter val: - value of the diagonal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L969)

#### setDiagonal

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::setDiagonal(const zMatrix4Diag diag)
```
{% endcode %}

This method sets the diagonal values of the matrix with the input container of values.

version 0.0.1

Parameter diag: - vector of values for the diagonal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L976)

#### setZero

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::setZero()
```
{% endcode %}

This method sets values of the matrix to zero.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L982)

#### setOne

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::setOne()
```
{% endcode %}

This method sets values of the matrix to one.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L988)

#### setIdentity

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::setIdentity()
```
{% endcode %}

This method sets the matrix to identity if it is a square matrix.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L994)

#### operator()

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float & zSpace::zMatrix4::operator()(int row, int col)
```
{% endcode %}

This operator returns the reference to the coefficient at at the given row and column index.

float - reference to the coefficient. version 0.0.1

Parameter row: - input row index.

Parameter col: - input col index.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1007)

#### operator()

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float & zSpace::zMatrix4::operator()(int index)
```
{% endcode %}

This operator returns the reference to the coefficient at at the given index.

float - reference to the coefficient. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1015)

#### operator+

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix4 zSpace::zMatrix4::operator+(zMatrix4 &m1)
```
{% endcode %}

This operator is used for matrix addition.

zMatrix4 - resultant matrix after the addition. version 0.0.1

Parameter m1: - zMatrix4 which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1023)

#### operator+

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix4 zSpace::zMatrix4::operator+(float s1)
```
{% endcode %}

This operator is used for scalar addition to a matrix.

zMatrix4 - resultant matrix after the addition. version 0.0.1

Parameter s1: - scalar value which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1031)

#### operator-

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix4 zSpace::zMatrix4::operator-(zMatrix4 &m1)
```
{% endcode %}

This operator is used for matrix subtraction.

zMatrix4 - resultant matrix after the subtraction. version 0.0.1

Parameter m1: - zMatrix4 which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1039)

#### operator-

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix4 zSpace::zMatrix4::operator-(float s1)
```
{% endcode %}

This operator is used for scalar subtraction from a matrix.

zMatrix4 - resultant matrix after the subtraction. version 0.0.1

Parameter s1: - scalar value which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1047)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix4 zSpace::zMatrix4::operator*(zMatrix4 &m1)
```
{% endcode %}

This operator is used for matrix multiplication.

zMatrix4 - resultant matrix after the multiplication. version 0.0.1

Parameter m1: - zMatrix2 which is multiplied with the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1055)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix4 zSpace::zMatrix4::operator*(float s1)
```
{% endcode %}

This operator is used for scalar multiplication with a matrix.

zMatrix2 - resultant matrix after the multiplication. version 0.0.1

Parameter s1: - scalar value which is multiplied with the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1063)

#### operator+=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::operator+=(zMatrix4 &m1)
```
{% endcode %}

This operator is used for matrix addition and assigment of the result to the current matrix.

version 0.0.1

Parameter m1: - zMatrix4 which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1074)

#### operator+=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::operator+=(float s1)
```
{% endcode %}

This operator is used for scalar addition and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1081)

#### operator-=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::operator-=(zMatrix4 &m1)
```
{% endcode %}

This operator is used for matrix subtraction and assigment of the result to the current matrix.

version 0.0.1

Parameter m1: - zMatrix4 which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1088)

#### operator-=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::operator-=(float s1)
```
{% endcode %}

This operator is used for scalar subtraction and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1095)

#### operator\*=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::operator*=(float s1)
```
{% endcode %}

This operator is used for scalar multiplication and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which is multiplied to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1102)

#### operator/=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::operator/=(float s1)
```
{% endcode %}

This operator is used for scalar division and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which divides the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1109)

#### multiply

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix4::multiply(zMatrix4Col &m1, zMatrix4Col &out)
```
{% endcode %}

This method is used for matrix multiplication with a column matrix.

version 0.0.1

Parameter m1: - column matrix which is multiplied with the current matrix.

Parameter out: - resultant column matrix after the multiplication.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1121)

#### transpose

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix4 zSpace::zMatrix4::transpose()
```
{% endcode %}

This method returns the transpose of the input matrix.

zMatrix4 - resultant transpose matrix. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1128)

#### minor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix3 zSpace::zMatrix4::minor(int colIndex, int rowIndex=0)
```
{% endcode %}

This method returns the minor/sub matrix of the input matrix removing the row and column values given by the input colindex and rowIndex.

zMatrix4 - resultant leftover matrix. version 0.0.1

Parameter colIndex: - column index to be removed.

Parameter descriptions are absent in the current declaration comments for: rowIndex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1136)

#### cofactor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix4 zSpace::zMatrix4::cofactor()
```
{% endcode %}

This method returns the cofactor matrix of the input matrix.

Based on https://www.geeksforgeeks.org/adjoint-inverse-matrix/ zMatrix3 - resultant cofactor zMatrix. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1144)

#### adjoint

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix4 zSpace::zMatrix4::adjoint()
```
{% endcode %}

This method returns the adjoint matrix of the input matrix.

Based on https://www.geeksforgeeks.org/adjoint-inverse-matrix/ zMatrix - resultant adjoint zMatrix. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1152)

#### inverse

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zMatrix4::inverse(zMatrix4 &outMatrix)
```
{% endcode %}

This method returns the inverse matrix of the input matrix, if it exists.

Based on https://www.geeksforgeeks.org/adjoint-inverse-matrix/ bool - true if inverse matrix exists. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: outMatrix. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1161)

#### det

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zMatrix4::det()
```
{% endcode %}

This method returns the determinant of the input matrix if it is a square matrix.

Based on https://www.geeksforgeeks.org/determinant-of-a-matrix/ float - determinant value. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L1169)

### Related types

[zMatrix3](api-zmatrix3.md)
