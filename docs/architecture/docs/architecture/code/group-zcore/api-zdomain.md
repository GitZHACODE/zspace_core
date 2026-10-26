# zDomain

## zSpace::zDomain

Declared in include/zspace/zCore/base/zDomain.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A struct for storing domain values.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDomain.h#L46)

### Public Attrib

#### min

{% code collapsedlinecount="10" %}
```cpp
T zSpace::zDomain< T >::min
```
{% endcode %}

stores the minimum value of the domain

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDomain.h#L50)

#### max

{% code collapsedlinecount="10" %}
```cpp
T zSpace::zDomain< T >::max
```
{% endcode %}

stores the maximum value of the domain

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDomain.h#L53)

### Public Func

#### zDomain

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zDomain< T >::zDomain()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDomain.h#L62)

#### zDomain

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zDomain< T >::zDomain(T _min, T _max)
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter \_min: - minimum value of the domain.

Parameter \_max: - maximum value of the domain.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDomain.h#L70)

#### \~zDomain

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zDomain< T >::~zDomain()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDomain.h#L79)
