# zMatrix2

## zSpace::zMatrix2

Declared in include/zspace/zCore/base/zMatrix.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A 2x2 matrix math class.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L143)

### Public Func

#### zMatrix2

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zMatrix2::zMatrix2()
```
{% endcode %}

Default Constructor .

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L159)

#### zMatrix2

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zMatrix2::zMatrix2(const float _mat[4])
```
{% endcode %}

Overloaded Constructor for a square matrix.

version 0.0.1

Parameter \_mat: - input values of the matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L167)

#### \~zMatrix2

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zMatrix2::~zMatrix2()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L178)

#### getIndex

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE int zSpace::zMatrix2::getIndex(int rowIndex, int colIndex)
```
{% endcode %}

This method gets the index in the matrix value container given the row and column indicies.

int - index in value container. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: colIndex, rowIndex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L192)

#### getIndices

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::getIndices(int index, int &rowIndex, int &colIndex)
```
{% endcode %}

This method gets the row and column index in the matrix given the input container index.

version 0.0.1

Parameter descriptions are absent in the current declaration comments for: colIndex, index, rowIndex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L201)

#### getRow

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::getRow(int index, zMatrix2Row &row)
```
{% endcode %}

This method gets the row values as container of values at the input row index.

zMatrix2Row - container of row values. version 0.0.1

Parameter index: - input row index.

Parameter descriptions are absent in the current declaration comments for: row. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L209)

#### getCol

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::getCol(int index, zMatrix2Col &col)
```
{% endcode %}

This method gets the column values at the input column index.

zMatrix2Col - container of column values. version 0.0.1

Parameter index: - input column index.

Parameter descriptions are absent in the current declaration comments for: col. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L217)

#### getDiagonal

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::getDiagonal(zMatrix2Diag &diag)
```
{% endcode %}

This method gets the diagonal values.

zMatrix2Diag - container of diagonal values. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: diag. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L224)

#### getMatrixValues

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float * zSpace::zMatrix2::getMatrixValues()
```
{% endcode %}

This method gets the mats values container.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L231)

#### getRawMatrixValues

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float * zSpace::zMatrix2::getRawMatrixValues()
```
{% endcode %}

This method gets pointer to the internal matrix values container.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L238)

#### setRow

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::setRow(int index, float val)
```
{% endcode %}

This method sets the row values at the input row index with the input value.

version 0.0.1

Parameter index: - input row index.

Parameter val: - value of the row.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L250)

#### setRow

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::setRow(int index, zMatrix2Row &row)
```
{% endcode %}

This method sets the row values at the input row index with the container vector of values.

version 0.0.1

Parameter index: - input row index.

Parameter row: - container of values for the row.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L258)

#### setCol

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::setCol(int index, float val)
```
{% endcode %}

This method sets the column values at the input column index with the input value.

version 0.0.1

Parameter index: - input col index.

Parameter val: - value of the col.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L266)

#### setCol

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::setCol(int index, const zMatrix2Col &col)
```
{% endcode %}

This method sets the col values at the input col index with the input container of values.

version 0.0.1

Parameter index: - input col index.

Parameter col: - container of values for the column.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L274)

#### setDiagonal

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::setDiagonal(float val)
```
{% endcode %}

This method sets the diagonal values of a square matrix with the input value.

version 0.0.1

Parameter val: - value of the diagonal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L282)

#### setDiagonal

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::setDiagonal(const zMatrix2Diag &diag)
```
{% endcode %}

This method sets the diagonal values of the matrix with the input container of values.

version 0.0.1

Parameter diag: - container of values for the diagonal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L289)

#### setZero

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::setZero()
```
{% endcode %}

This method sets values of the matrix to zero.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L295)

#### setOne

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::setOne()
```
{% endcode %}

This method sets values of the matrix to one.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L301)

#### setIdentity

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::setIdentity()
```
{% endcode %}

This method sets the matrix to identity.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L307)

#### operator()

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float & zSpace::zMatrix2::operator()(int row, int col)
```
{% endcode %}

This operator returns the reference to the coefficient at at the given row and column index.

float - reference to the coefficient. version 0.0.1

Parameter row: - input row index.

Parameter col: - input col index.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L320)

#### operator()

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float & zSpace::zMatrix2::operator()(int index)
```
{% endcode %}

This operator returns the reference to the coefficient at at the given index.

float - reference to the coefficient. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: index. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L328)

#### operator+

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix2 zSpace::zMatrix2::operator+(zMatrix2 &m1)
```
{% endcode %}

This operator is used for matrix addition.

zMatrix2 - resultant matrix after the addition. version 0.0.1

Parameter m1: - zMatrix2 which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L336)

#### operator+

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix2 zSpace::zMatrix2::operator+(float s1)
```
{% endcode %}

This operator is used for scalar addition to a matrix.

zMatrix2 - resultant matrix after the addition. version 0.0.1

Parameter s1: - scalar value which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L344)

#### operator-

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix2 zSpace::zMatrix2::operator-(zMatrix2 &m1)
```
{% endcode %}

This operator is used for matrix subtraction.

zMatrix2 - resultant matrix after the subtraction. version 0.0.1

Parameter m1: - zMatrix2 which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L352)

#### operator-

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix2 zSpace::zMatrix2::operator-(float s1)
```
{% endcode %}

This operator is used for scalar subtraction from a matrix.

zMatrix2 - resultant matrix after the subtraction. version 0.0.1

Parameter s1: - scalar value which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L360)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix2 zSpace::zMatrix2::operator*(zMatrix2 &m1)
```
{% endcode %}

This operator is used for matrix multiplication.

zMatrix2 - resultant matrix after the multiplication. version 0.0.1

Parameter m1: - zMatrix2 which is multiplied with the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L368)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix2 zSpace::zMatrix2::operator*(float s1)
```
{% endcode %}

This operator is used for scalar multiplication with a matrix.

zMatrix2 - resultant matrix after the multiplication. version 0.0.1

Parameter s1: - scalar value which is multiplied with the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L376)

#### operator+=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::operator+=(zMatrix2 &m1)
```
{% endcode %}

This operator is used for matrix addition and assigment of the result to the current matrix.

version 0.0.1

Parameter m1: - zMatrix2 which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L387)

#### operator+=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::operator+=(float s1)
```
{% endcode %}

This operator is used for scalar addition and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which is added to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L394)

#### operator-=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::operator-=(zMatrix2 &m1)
```
{% endcode %}

This operator is used for matrix subtraction and assigment of the result to the current matrix.

version 0.0.1

Parameter m1: - zMatrix2 which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L401)

#### operator-=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::operator-=(float s1)
```
{% endcode %}

This operator is used for scalar subtraction and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which is subtracted from the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L408)

#### operator\*=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::operator*=(float s1)
```
{% endcode %}

This operator is used for scalar multiplication and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which is multiplied to the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L415)

#### operator/=

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::operator/=(float s1)
```
{% endcode %}

This operator is used for scalar division and assigment of the result to the current matrix.

version 0.0.1

Parameter s1: - scalar value which divides the current matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L422)

#### multiply

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zMatrix2::multiply(zMatrix2Col &m1, zMatrix2Col &out)
```
{% endcode %}

This method is used for matrix multiplication with a column matrix.

version 0.0.1

Parameter m1: - column matrix which is multiplied with the current matrix.

Parameter out: - resultant column matrix after the multiplication.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L434)

#### transpose

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zMatrix2 zSpace::zMatrix2::transpose()
```
{% endcode %}

This method returns the transpose of the input matrix.

zMatrix2 - resultant transpose matrix. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L441)

#### det

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float zSpace::zMatrix2::det()
```
{% endcode %}

This method returns the determinant of the input matrix if it is a square matrix.

Based on https://www.geeksforgeeks.org/determinant-of-a-matrix/ float - determinant value. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zMatrix.h#L449)
