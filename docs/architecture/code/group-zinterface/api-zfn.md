# zFn

## zSpace::zFn

Declared in include/zspace/zInterface/functionsets/zFn.h. Public class/struct declaration reference.

The base function set class.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L43)

### Public Func

#### zFn

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFn::zFn()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L64)

#### \~zFn

{% code collapsedlinecount="10" %}
```cpp
virtual zSpace::zFn::~zFn()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L74)

#### getType

{% code collapsedlinecount="10" %}
```cpp
virtual zFnType zSpace::zFn::getType()=0
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L85)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zFn::getBounds(zPoint &minBB, zPoint &maxBB)=0
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L93)

#### clear

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zFn::clear()=0
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L99)

#### setTransform

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zFn::setTransform(zTransform &inTransform, bool decompose=true, bool updatePositions=true)=0
```
{% endcode %}

This method sets the object transform to the input transform.

version 0.0.2

Parameter inTransform: - input transform.

Parameter decompose: - decomposes transform to rotation and translation if true.

Parameter updatePositions: - updates the object positions if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L113)

#### setScale

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zFn::setScale(zFloat4 &scale)=0
```
{% endcode %}

This method sets the scale components of the object.

version 0.0.2

Parameter scale: - input scale values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L121)

#### setRotation

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zFn::setRotation(zFloat4 &rotation, bool append=false)=0
```
{% endcode %}

This method sets the rotation components of the object.

version 0.0.2

Parameter rotation: - input rotation values.

Parameter append: - true if the input values are added to the existing rotations.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L130)

#### setTranslation

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zFn::setTranslation(zVector &translation, bool append=false)=0
```
{% endcode %}

This method sets the translation components of the object.

version 0.0.2

Parameter translation: - input translation vector.

Parameter append: - true if the input values are added to the existing translation.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L139)

#### setPivot

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zFn::setPivot(zVector &pivot)=0
```
{% endcode %}

This method sets the pivot of the object.

version 0.0.2

Parameter pivot: - input pivot position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L147)

#### getTransform

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zFn::getTransform(zTransform &transform)=0
```
{% endcode %}

This method gets the object transform.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: transform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFn.h#L157)

### Related types

[zVector](../group-zcore/api-zvector.md)
