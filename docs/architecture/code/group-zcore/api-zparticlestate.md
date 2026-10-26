# zParticleState

## zSpace::zParticleState

Declared in include/zspace/zCore/dynamics/zParticle.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A struct to store the postion and velocity of the particle.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L43)

### Public Attrib

#### p

{% code collapsedlinecount="10" %}
```cpp
zVector* zSpace::zParticleState::p = nullptr
```
{% endcode %}

stores pointer to position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L46)

#### v

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zParticleState::v
```
{% endcode %}

stores the velocity.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L49)

### Related types

[zVector](api-zvector.md)
