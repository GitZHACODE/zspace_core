# zFnParticle

## zSpace::zFnParticle

Declared in include/zspace/zInterface/functionsets/zFnParticle.h. Public class/struct declaration reference.

A particle function set.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L42)

[Base: zSpace::zFn](api-zfn.md)

### Public Func

#### zFnParticle

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnParticle::zFnParticle()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L61)

#### zFnParticle

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnParticle::zFnParticle(zObjectParticle &_particleObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter \_particleObj: - input particle object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L68)

#### \~zFnParticle

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnParticle::~zFnParticle()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L78)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnParticle::getType() override
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L84)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::getBounds(zPoint &minBB, zPoint &maxBB) override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L86)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::clear() override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L88)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::create(zPoint &_p, bool _fixed=false, double _m=1.0, zVector _v=zVector(), zVector _f=zVector())
```
{% endcode %}

This method creates a particle from the input parameters.

version 0.0.2

Parameter \_p: - position of the particle.

Parameter \_fixed: - state of the particle, by deafult true/ active;

Parameter \_m: - mass of the particle.

Parameter \_v: - velocity of the particle.

Parameter \_f: - force of the particle.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L103)

#### setMass

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setMass(double mass)
```
{% endcode %}

This method sets the mass of the particle.

version 0.0.2

Parameter mass: - input mass.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L114)

#### setPosition

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setPosition(zVector *pos)
```
{% endcode %}

This method sets the position of the particle.

version 0.0.2

Parameter pos: - input position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L121)

#### setVelocity

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setVelocity(zVector &vel)
```
{% endcode %}

This method sets the velocity of the particle.

version 0.0.2

Parameter vel: - input velocity.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L128)

#### setState

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setState(zParticleState &state)
```
{% endcode %}

This method sets the state of the particle.

version 0.0.2

Parameter state: - input state.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L135)

#### setForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setForce(zVector &force)
```
{% endcode %}

This method sets the force of the particle.

version 0.0.2

Parameter force: - input force.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L142)

#### setFixed

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setFixed(bool _fixed)
```
{% endcode %}

This method sets the fixed boolean of the particle.

version 0.0.2

Parameter \_fixed: - input fixed boolean.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L149)

#### getMass

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnParticle::getMass()
```
{% endcode %}

This method returns the mass of the particle.

double - mass of the particle. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L160)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnParticle::getPosition()
```
{% endcode %}

This method returns the position of the particle.

zPoint - position of the particle. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L167)

#### getRawPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zFnParticle::getRawPosition()
```
{% endcode %}

This method returns the pointer to the position.

zPoint\* - pointer to the position. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L174)

#### getVelocity

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnParticle::getVelocity()
```
{% endcode %}

This method returns the velocity of the particle.

zVector - velocity of the particle. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L181)

#### getState

{% code collapsedlinecount="10" %}
```cpp
zParticleState zSpace::zFnParticle::getState()
```
{% endcode %}

This method returns the current state of the particle.

zParticleState - current state of the particle. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L188)

#### getForce

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnParticle::getForce()
```
{% endcode %}

This method returns the force of the particle.

zVector - force of the particle. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L195)

#### getFixed

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnParticle::getFixed()
```
{% endcode %}

This method returns the boolean if the article is fixed or not.

bool - true is the particle is fixed. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L202)

#### addForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::addForce(zVector &force)
```
{% endcode %}

This method adds the input force to the force of the particle.

version 0.0.2

Parameter force: - input force.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L213)

#### clearForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::clearForce()
```
{% endcode %}

This method clears the force of the particle.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L219)

#### addForces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::addForces(vector< zVector > &forces)
```
{% endcode %}

This method adds the all input forces to the force of the particle.

version 0.0.2

Parameter forces: - container of input forces.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L226)

#### getDerivatives

{% code collapsedlinecount="10" %}
```cpp
zParticleDerivative zSpace::zFnParticle::getDerivatives(zParticleDerivative &deriv, double dT)
```
{% endcode %}

This method computes the derivatives.

Based on https://gafferongames.com/post/integration\_basics/ and http://paulbourke.net/miscellaneous/particle/particlelib.c version 0.0.2

Parameter deriv: - current derivatives.

Parameter dT: - timestep.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L239)

#### integrateForces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::integrateForces(double dT, zIntergrationType type=zEuler)
```
{% endcode %}

This method intergrates the force and compute the derivatives.

Based on https://gafferongames.com/post/integration\_basics/ and http://paulbourke.net/miscellaneous/particle/particlelib.c version 0.0.2

Parameter dT: - time step.

Parameter type: - integration type.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L248)

#### getUpdatePosition

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnParticle::getUpdatePosition(double dT, zIntergrationType type=zEuler)
```
{% endcode %}

This method intergrates the force, compute the derivatives and returns a zVector of the updated position. Generally used to check if the updated position is in bounds before updating the particle.

version 0.0.2

Parameter dT: - time step.

Parameter type: - integration type.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L256)

#### updateParticle

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::updateParticle(bool clearForce=false, bool clearVelocity=false, bool clearDerivatives=false)
```
{% endcode %}

This method updates the position and velocity of the particle.

Based on https://gafferongames.com/post/integration\_basics/ version 0.0.2

Parameter clearForce: - clears the force if true.

Parameter clearVelocity: - clears the velocity if true.

Parameter clearDerivatives: - clears the derivatives if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L266)

#### setTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setTransform(zTransform &inTransform, bool decompose=true, bool updatePositions=true) override
```
{% endcode %}

This method sets the object transform to the input transform.

version 0.0.2

Parameter inTransform: - input transform.

Parameter decompose: - decomposes transform to rotation and translation if true.

Parameter updatePositions: - updates the object positions if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L272)

#### setScale

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setScale(zFloat4 &scale) override
```
{% endcode %}

This method sets the scale components of the object.

version 0.0.2

Parameter scale: - input scale values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L274)

#### setRotation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setRotation(zFloat4 &rotation, bool appendRotations=false) override
```
{% endcode %}

This method sets the rotation components of the object.

version 0.0.2

Parameter rotation: - input rotation values.

Parameter append: - true if the input values are added to the existing rotations.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L276)

#### setTranslation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setTranslation(zVector &translation, bool appendTranslations=false) override
```
{% endcode %}

This method sets the translation components of the object.

version 0.0.2

Parameter translation: - input translation vector.

Parameter append: - true if the input values are added to the existing translation.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L278)

#### setPivot

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::setPivot(zVector &pivot) override
```
{% endcode %}

This method sets the pivot of the object.

version 0.0.2

Parameter pivot: - input pivot position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L280)

#### getTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnParticle::getTransform(zTransform &transform) override
```
{% endcode %}

This method gets the object transform.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: transform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnParticle.h#L282)

### Related types

[zObjectParticle](api-zobjectparticle.md)

[zParticleDerivative](../group-zcore/api-zparticlederivative.md)

[zParticleState](../group-zcore/api-zparticlestate.md)

[zVector](../group-zcore/api-zvector.md)
