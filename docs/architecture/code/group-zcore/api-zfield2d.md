# zField2D

## zSpace::zField2D

Declared in include/zspace/zCore/field/zField2D.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A template class for 2D fields - scalar and vector.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L48)

### Public Attrib

#### n\_X

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zField2D< T >::n_X
```
{% endcode %}

stores the resolution in X direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L58)

#### n\_Y

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zField2D< T >::n_Y
```
{% endcode %}

stores the resolution in Y direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L61)

#### unit\_X

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zField2D< T >::unit_X
```
{% endcode %}

stores the size of one unit in X direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L64)

#### unit\_Y

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zField2D< T >::unit_Y
```
{% endcode %}

stores the size of one unit in Y direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L67)

#### minBB

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zField2D< T >::minBB
```
{% endcode %}

stores the minimum bounds of the scalar field

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L70)

#### maxBB

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zField2D< T >::maxBB
```
{% endcode %}

stores the minimum bounds of the scalar field

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L73)

#### fieldValues

{% code collapsedlinecount="10" %}
```cpp
vector<T> zSpace::zField2D< T >::fieldValues
```
{% endcode %}

container for the field values

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L77)

#### valuesperVertex

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zField2D< T >::valuesperVertex = true
```
{% endcode %}

boolean indicating if the field values size is equal to mesh vertices(true) or equal to mesh faces(false)

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L80)

### Public Func

#### zField2D

{% code collapsedlinecount="10" %}
```cpp
zSpace::zField2D< T >::zField2D()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L90)

#### zField2D

{% code collapsedlinecount="10" %}
```cpp
zSpace::zField2D< T >::zField2D(zVector _minBB, zVector _maxBB, int _n_X, int _n_Y)
```
{% endcode %}

Overloaded constructor.

version 0.0.1

Parameter \_minBB: - minimum bounds of the field.

Parameter \_maxBB: - maximum bounds of the field.

Parameter \_n\_X: - number of pixels in x direction.

Parameter \_n\_Y: - number of pixels in y direction.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L99)

#### zField2D

{% code collapsedlinecount="10" %}
```cpp
zSpace::zField2D< T >::zField2D(double _unit_X, double _unit_Y, int _n_X, int _n_Y, zVector _minBB=zVector())
```
{% endcode %}

Overloaded constructor.

version 0.0.1

Parameter \_unit\_X: - size of each pixel in x direction.

Parameter \_unit\_Y: - size of each pixel in y direction.

Parameter \_n\_X: - number of pixels in x direction.

Parameter \_n\_Y: - number of pixels in y direction.

Parameter \_minBB: - minimum bounds of the field.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L109)

#### \~zField2D

{% code collapsedlinecount="10" %}
```cpp
zSpace::zField2D< T >::~zField2D()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField2D.h#L120)

### Related types

[zVector](api-zvector.md)
