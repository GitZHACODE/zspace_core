# zParticleDerivative

## zSpace::zParticleDerivative

Declared in include/zspace/zCore/dynamics/zParticle.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A strcut to store the postion and velocity derivatives of the particle.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L71)

### Public Attrib

#### dP

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zParticleDerivative::dP
```
{% endcode %}

stores the position derivative.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L74)

#### dV

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zParticleDerivative::dV
```
{% endcode %}

stores the velocity derivative.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L77)

### Public Func

#### operator+

{% code collapsedlinecount="10" %}
```cpp
zParticleDerivative zSpace::zParticleDerivative::operator+(zParticleDerivative d1)
```
{% endcode %}

This operator is used for derivative addition.

zParticleDerivative - resultant derivative. version 0.0.1

Parameter d1: - derivative to be added.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L85)

#### operator\*

{% code collapsedlinecount="10" %}
```cpp
zParticleDerivative zSpace::zParticleDerivative::operator*(double val)
```
{% endcode %}

This operator is used for derivative scalar multiplication.

version 0.0.1

Parameter val: - scalar value.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L100)

### Related types

[zVector](api-zvector.md)
