# zFnGraphDynamics

## zSpace::zFnGraphDynamics

Declared in include/zspace/zInterface/functionsets/zFnGraphDynamics.h. Public class/struct declaration reference.

A graph function set for dynamics.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L43)

[Base: zSpace::zFnGraph](api-zfngraph.md)

### Public Func

#### zFnGraphDynamics

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnGraphDynamics::zFnGraphDynamics()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L66)

#### zFnGraphDynamics

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnGraphDynamics::zFnGraphDynamics(zObjectGraph &_graphObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter \_graphObj: - input graph object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L73)

#### \~zFnGraphDynamics

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnGraphDynamics::~zFnGraphDynamics()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L83)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnGraphDynamics::getType() override
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L89)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::getBounds(zPoint &minBB, zPoint &maxBB) override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L91)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::clear() override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L93)

#### setFixed

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::setFixed(zIntArray &vIDs)
```
{% endcode %}

This method fix the input vertices.

version 0.0.4

Parameter vIDs: - container of vertices which are to be fixed.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L104)

#### makeDynamic

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::makeDynamic(bool fixBoundary=false)
```
{% endcode %}

This method creates the particles object from the graph object already attached to zFnGraphDynamics.

version 0.0.2

Parameter fixBoundary: - true if the boundary vertices are to be fixed.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L115)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::create(zObjectGraph &_graphObj, bool fixBoundary=false)
```
{% endcode %}

This method creates a particle system from the input mesh object.

version 0.0.2

Parameter \_graphObj: - input graph object.

Parameter fixBoundary: - true if the boundary vertices are to be fixed.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L123)

#### addGravityForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addGravityForce(double strength, zVector &gForce)
```
{% endcode %}

This method adds the gravitational force to the input graph.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter gForce: - gravitational force vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L135)

#### addDragForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addDragForce(double strength, float drag)
```
{% endcode %}

This method adds the drag force to the input graph.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter drag: - drag constant.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L143)

#### addSpringForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addSpringForce(double strength, zFloatArray &restLength)
```
{% endcode %}

This method adds the drag force to the input graph.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter restLength: - input container of restlengths per edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L151)

#### addDistanceForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addDistanceForce(double strength, int v0, int v1, float &restDistance)
```
{% endcode %}

This method adds the drag force to snap two vertices to rest distance.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter v0: - input first vertex id.

Parameter v1: - input second vertex id.

Parameter restDistance: - input target distance.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L161)

#### addLoadForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addLoadForce(double strength, int vId, zVector &vec)
```
{% endcode %}

This method adds the drag force to the input mesh.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter vId: - input vertex id.

Parameter vec: - input load direction.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L170)

#### addSpringForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addSpringForce(double strength, int eId, float restLength)
```
{% endcode %}

This method adds the drag force to the input edge.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter eId: - id of edge.

Parameter restLength: - input value of restlength on edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L179)

#### addSpringForces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addSpringForces(double strength, float &restLengths, const zIntArray &eIds=zIntArray())
```
{% endcode %}

This method adds the drag force to all edges.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter eIds: - ids of edges.

Parameter descriptions are absent in the current declaration comments for: restLengths. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L188)

#### addAngleForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addAngleForce(double strength, int vId, float restAngle, bool moveHinge=true)
```
{% endcode %}

This method adds the drag force to the input two edges to a given angle.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter vId: - id of vertex shared by two edges.

Parameter restAngle: - input value of restAngle between two edges.

Parameter moveHinge: - if true add force to the particle at hinge/ false add force to the end particles.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L198)

#### addAngleForces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addAngleForces(double strength, float &restAngle, bool &moveHinge, const zIntArray &vIds=zIntArray())
```
{% endcode %}

This method adds the drag force to the input two edges to a given angle.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter restAngle: - input value of restAngle between two edges.

Parameter moveHinge: - if true add force to the particle at hinge/ false add force to the end particles.

Parameter vIds: - id of vertices shared by two edges.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L208)

#### addVectorForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::addVectorForce(double strength, int vId, zPoint &origin, zVector &alignVector)
```
{% endcode %}

This method adds the drag force to the input vertex to a given vector.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter vId: - id of vertex to drag.

Parameter origin: - input position of align vector start.

Parameter alignVector: - input align vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L218)

#### update

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraphDynamics::update(double dT, zIntergrationType type=zEuler, bool clearForce=true, bool clearVelocity=false, bool clearDerivatives=false)
```
{% endcode %}

This method updates the position and velocity of all the particle.

version 0.0.2

Parameter dT: - timestep.

Parameter type: - integration type - zEuler or zRK4.

Parameter clearForce: - clears the force if true.

Parameter clearVelocity: - clears the velocity if true.

Parameter clearDerivatives: - clears the derivatives if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraphDynamics.h#L233)

### Related types

[zObjectGraph](api-zobjectgraph.md)

[zVector](../group-zcore/api-zvector.md)
