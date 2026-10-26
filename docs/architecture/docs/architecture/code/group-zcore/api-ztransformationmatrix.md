# zTransformationMatrix

## zSpace::zTransformationMatrix

Declared in include/zspace/zCore/base/zTransformationMatrix.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A transformation matrix class.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L48)

### Public Func

#### zTransformationMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zTransformationMatrix::zTransformationMatrix()
```
{% endcode %}

Default Constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L62)

#### zTransformationMatrix

{% code collapsedlinecount="10" %}
```cpp
zSpace::zTransformationMatrix::zTransformationMatrix(const zTransformationMatrix &other)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: other. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L63)

#### zTransformationMatrix

{% code collapsedlinecount="10" %}
```cpp
zSpace::zTransformationMatrix::zTransformationMatrix(zTransformationMatrix &&other) noexcept
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: other. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L64)

#### operator=

{% code collapsedlinecount="10" %}
```cpp
zTransformationMatrix & zSpace::zTransformationMatrix::operator=(const zTransformationMatrix &other)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: other. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L65)

#### operator=

{% code collapsedlinecount="10" %}
```cpp
zTransformationMatrix & zSpace::zTransformationMatrix::operator=(zTransformationMatrix &&other) noexcept
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: other. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L66)

#### \~zTransformationMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zTransformationMatrix::~zTransformationMatrix()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L75)

#### setTransform

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zTransformationMatrix::setTransform(zTransform &inTransform, bool decompose=true)
```
{% endcode %}

This method sets the transform to the input tranform.

zTransform - input transform. version 0.0.2

Parameter decompose: - decoposes the translation and rotation matrix if true.

Parameter descriptions are absent in the current declaration comments for: inTransform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L88)

#### setRotation

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zTransformationMatrix::setRotation(zFloat4 &_rotation, bool addValues=false)
```
{% endcode %}

This method sets the rotation components of the tranform.

version 0.0.2

Parameter \_rotation: - input rotations in x,y and z in degrees.

Parameter addValues: - true if the input values are added to the existing values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L96)

#### setScale

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zTransformationMatrix::setScale(zFloat4 &_scale)
```
{% endcode %}

This method sets the scale components of the tranform.

version 0.0.2

Parameter \_scale: - input scale in x,y and z.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L103)

#### setTranslation

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zTransformationMatrix::setTranslation(zFloat4 &_translation, bool addValues=false)
```
{% endcode %}

This method sets the translation components of the tranform.

version 0.0.2

Parameter \_translation: - input translation in x,y and z.

Parameter addValues: - true if the input values are added to the existing values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L111)

#### setPivot

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zTransformationMatrix::setPivot(zFloat4 &_pivot)
```
{% endcode %}

This method sets the pivot components of the tranform.

version 0.0.2

Parameter \_pivot: - input pivot in x,y and z.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L118)

#### getX

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zTransformationMatrix::getX()
```
{% endcode %}

This method gets the X-Axis of the tranform.

zVector - output x axis vector. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L130)

#### getY

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zTransformationMatrix::getY()
```
{% endcode %}

This method gets the Y-Axis of the tranform.

zVector - output y axis vector. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L137)

#### getZ

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zTransformationMatrix::getZ()
```
{% endcode %}

This method gets the Z-Axis of the tranform.

zVector - output z axis vector. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L144)

#### getO

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zTransformationMatrix::getO()
```
{% endcode %}

This method gets the Origin of the tranform.

zVector - output origin vector. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L151)

#### getTranslation

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zTransformationMatrix::getTranslation()
```
{% endcode %}

This method gets the translation components of the tranform.

zVector - output translation vector. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L158)

#### getPivot

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zVector zSpace::zTransformationMatrix::getPivot()
```
{% endcode %}

This method gets the pivot components of the tranform.

zVector - output pivot vector. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L165)

#### getRawPivot

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float * zSpace::zTransformationMatrix::getRawPivot()
```
{% endcode %}

This method gets the pointer to the pivot components.

double\* - pointer to pivot component. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L172)

#### getRotation

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zTransformationMatrix::getRotation(zFloat4 &_rotation)
```
{% endcode %}

This method gets the rotation components of the tranform.

version 0.0.2

Parameter \_rotation: - output rotations in x,y and z in degrees.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L179)

#### getScale

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zTransformationMatrix::getScale(zFloat4 &_scale)
```
{% endcode %}

This method gets the scale components of the tranform.

version 0.0.2

Parameter \_scale: - output scale in x,y and z.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L186)

#### asMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::asMatrix()
```
{% endcode %}

This method returns the 4x4 matrix that describes this transformation;.

zTransform - transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L197)

#### asRawMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE float * zSpace::zTransformationMatrix::asRawMatrix()
```
{% endcode %}

This method returns the pointer to the 4x4 matrix that describes this transformation;.

double\* - pointer to the 4x4 matrix . version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L204)

#### asInverseMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::asInverseMatrix()
```
{% endcode %}

This method returns the inverse of the 4x4 matrix that describes this transformation;.

zTransform - transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L211)

#### asScaleMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::asScaleMatrix()
```
{% endcode %}

This method returns the scale matrix;.

zTransform - transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L218)

#### asRotationMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::asRotationMatrix()
```
{% endcode %}

This method returns the rotation matrix;.

zTransform - transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L225)

#### asPivotMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::asPivotMatrix()
```
{% endcode %}

This method returns the rotation matrix;.

zTransform - transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L232)

#### asPivotTranslationMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::asPivotTranslationMatrix()
```
{% endcode %}

This method returns the pivot translation matrix.

zTransform - transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L239)

#### asInversePivotTranslationMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::asInversePivotTranslationMatrix()
```
{% endcode %}

This method returns the inverse of the pivot translation matrix.

zTransform - transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L246)

#### asScaleTransformMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::asScaleTransformMatrix()
```
{% endcode %}

This method returns the scaling matrix;.

based on https://studylib.net/doc/5892312/scaling-relative-to-a-fixed-point-using-matrix-using-the zTransform - transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L254)

#### asInverseScaleTransformMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::asInverseScaleTransformMatrix()
```
{% endcode %}

This method returns the scaling matrix;.

based on https://studylib.net/doc/5892312/scaling-relative-to-a-fixed-point-using-matrix-using-the zTransform - transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L262)

#### getWorldMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::getWorldMatrix()
```
{% endcode %}

This method get the tranformation to the world space.

zTransform - world transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L273)

#### getLocalMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::getLocalMatrix()
```
{% endcode %}

This method gets the tranformation to the local space.

zTransform - local transformation matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L280)

#### getToMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::getToMatrix(zTransformationMatrix &to)
```
{% endcode %}

This method gets the tranformation from current tranformation matrix to input tranformation matrix.

zTransform - transformation matrix. version 0.0.2

Parameter to: - input transform.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L288)

#### getToTransform

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::getToTransform(zTransformationMatrix &to)
```
{% endcode %}

This method gets the row major transform from current tranformation matrix to input transformatrion matrix.

zTransform - transform. version 0.0.2

Parameter to: - input transform.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L296)

#### getBasisChangeMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::getBasisChangeMatrix(zTransformationMatrix &to)
```
{% endcode %}

This method gets the tranformation to change the basis to another.

zTransform - transformation matrix. version 0.0.2

Parameter to: - input transformation matrix.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L304)

#### getTargetMatrix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zTransform zSpace::zTransformationMatrix::getTargetMatrix(zTransform &target)
```
{% endcode %}

This method gets the input target as per the current transform as the basis.

zTransform - new target transform. version 0.0.2

Parameter target: - input target transform.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zTransformationMatrix.h#L312)

### Related types

[zVector](api-zvector.md)
