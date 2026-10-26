# zParticle

## zSpace::zParticle

Declared in include/zspace/zCore/dynamics/zParticle.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A particle class.

version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L133)

### Public Attrib

#### m

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zParticle::m
```
{% endcode %}

stores mass of the particle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L142)

#### s

{% code collapsedlinecount="10" %}
```cpp
zParticleState zSpace::zParticle::s
```
{% endcode %}

stores state of the particle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L145)

#### f

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zParticle::f
```
{% endcode %}

stores force acting on the particle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L148)

#### fixed

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zParticle::fixed
```
{% endcode %}

stores if the particle is fixed or active to move.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L151)

#### derivative

{% code collapsedlinecount="10" %}
```cpp
zParticleDerivative zSpace::zParticle::derivative
```
{% endcode %}

stores the particle derivative.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L154)

### Public Func

#### zParticle

{% code collapsedlinecount="10" %}
```cpp
zSpace::zParticle::zParticle()
```
{% endcode %}

Default constructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L165)

#### zParticle

{% code collapsedlinecount="10" %}
```cpp
zSpace::zParticle::zParticle(zVector &_p, bool _fixed=false, double _m=1.0, zVector _v=zVector(), zVector _f=zVector())
```
{% endcode %}

Overloaded constructor.

version 0.0.1

Parameter \_p: - position of the particle.

Parameter \_fixed: - state of the particle, by deafult true/ active;

Parameter \_m: - mass of the particle.

Parameter \_v: - velocity of the particle.

Parameter \_f: - force of the particle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L176)

#### \~zParticle

{% code collapsedlinecount="10" %}
```cpp
zSpace::zParticle::~zParticle()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/dynamics/zParticle.h#L186)

### Related types

[zParticleDerivative](api-zparticlederivative.md)

[zParticleState](api-zparticlestate.md)

[zVector](api-zvector.md)
