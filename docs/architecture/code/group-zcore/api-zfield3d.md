# zField3D

## zSpace::zField3D

Declared in include/zspace/zCore/field/zField3D.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A template class for 3D fields - scalar and vector.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L47)

### Public Attrib

#### n\_X

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zField3D< T >::n_X
```
{% endcode %}

stores the resolution in X direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L57)

#### n\_Y

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zField3D< T >::n_Y
```
{% endcode %}

stores the resolution in Y direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L60)

#### n\_Z

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zField3D< T >::n_Z
```
{% endcode %}

stores the resolution in Z direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L63)

#### unit\_X

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zField3D< T >::unit_X
```
{% endcode %}

stores the size of one unit in X direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L66)

#### unit\_Y

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zField3D< T >::unit_Y
```
{% endcode %}

stores the size of one unit in Y direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L69)

#### unit\_Z

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zField3D< T >::unit_Z
```
{% endcode %}

stores the size of one unit in Z direction

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L72)

#### minBB

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zField3D< T >::minBB
```
{% endcode %}

stores the minimum bounds of the field

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L75)

#### maxBB

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zField3D< T >::maxBB
```
{% endcode %}

stores the minimum bounds of the field

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L78)

#### fieldValues

{% code collapsedlinecount="10" %}
```cpp
vector<T> zSpace::zField3D< T >::fieldValues
```
{% endcode %}

container for the field values

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L82)

### Public Func

#### zField3D

{% code collapsedlinecount="10" %}
```cpp
zSpace::zField3D< T >::zField3D()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L93)

#### zField3D

{% code collapsedlinecount="10" %}
```cpp
zSpace::zField3D< T >::zField3D(zVector _minBB, zVector _maxBB, int _n_X, int _n_Y, int _n_Z)
```
{% endcode %}

Overloaded constructor.

version 0.0.1

Parameter \_minBB: - minimum bounds of the field.

Parameter \_maxBB: - maximum bounds of the field.

Parameter \_n\_X: - number of voxels in x direction.

Parameter \_n\_Y: - number of voxels in y direction.

Parameter \_n\_Z: - number of voxels in z direction.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L103)

#### zField3D

{% code collapsedlinecount="10" %}
```cpp
zSpace::zField3D< T >::zField3D(double _unit_X, double _unit_Y, double _unit_Z, int _n_X, int _n_Y, int _n_Z, zVector _minBB=zVector())
```
{% endcode %}

Overloaded constructor.

version 0.0.1

Parameter \_unit\_X: - size of each voxel in x direction.

Parameter \_unit\_Y: - size of each voxel in y direction.

Parameter \_unit\_Z: - size of each voxel in yz direction.

Parameter \_n\_X: - number of voxels in x direction.

Parameter \_n\_Y: - number of voxels in y direction.

Parameter \_n\_Z: - number of voxels in z direction.

Parameter \_minBB: - minimum bounds of the field.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L115)

#### \~zField3D

{% code collapsedlinecount="10" %}
```cpp
zSpace::zField3D< T >::~zField3D()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/field/zField3D.h#L125)

### Related types

[zVector](api-zvector.md)
