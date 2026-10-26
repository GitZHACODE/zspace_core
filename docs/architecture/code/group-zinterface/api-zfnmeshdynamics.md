# zFnMeshDynamics

## zSpace::zFnMeshDynamics

Declared in include/zspace/zInterface/functionsets/zFnMeshDynamics.h. Public class/struct declaration reference.

A mesh function set for dynamics.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L61)

[Base: zSpace::zFnMesh](api-zfnmesh.md)

### Public Func

#### zFnMeshDynamics

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMeshDynamics::zFnMeshDynamics()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L89)

#### zFnMeshDynamics

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMeshDynamics::zFnMeshDynamics(zObjectMesh &_meshObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter \_meshObj: - input mesh object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L96)

#### \~zFnMeshDynamics

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMeshDynamics::~zFnMeshDynamics()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L106)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnMeshDynamics::getType() override
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L112)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::getBounds(zPoint &minBB, zPoint &maxBB) override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L114)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::clear() override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L116)

#### makeDynamic

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::makeDynamic(bool fixBoundary=false)
```
{% endcode %}

This method creates the particles object from the mesh object already attached to zFnMeshDynamics.

version 0.0.2

Parameter fixBoundary: - true if the boundary vertices are to be fixed.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L128)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::create(zObjectMesh &_meshObj, bool fixBoundary=false)
```
{% endcode %}

This method creates a particle system from the input mesh object.

version 0.0.2

Parameter \_meshObj: - input mesh object.

Parameter fixBoundary: - true if the boundary vertices are to be fixed.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L136)

#### numParticles

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnMeshDynamics::numParticles()
```
{% endcode %}

This method returns the number of particles in the mesh.

int - number of particles. version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L147)

#### setFixed

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::setFixed(zIntArray &vIDs)
```
{% endcode %}

This method fix the input vertices.

version 0.0.4

Parameter vIDs: - container of vertices which are to be fixed.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L158)

#### setFixed\_boundary

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::setFixed_boundary()
```
{% endcode %}

This method fix the boundary vertices.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L164)

#### addGravityForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addGravityForce(double strength, zVector &gForce)
```
{% endcode %}

This method adds the gravitational force to the input mesh.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter gForce: - gravitational force vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L176)

#### addDragForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addDragForce(double strength, float drag)
```
{% endcode %}

This method adds the drag force to the input mesh.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter drag: - drag constant.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L184)

#### addSpringForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addSpringForce(double strength, zFloatArray &restLength, zSolverForceConstraints constrainType=zConstraintFree)
```
{% endcode %}

This method adds the drag force to the input mesh.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter restLength: - input container of restlengths per edge.

Parameter constrainType: - input constraints for the force directions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L193)

#### addDistanceForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addDistanceForce(double strength, int v0, int v1, float &restDistance)
```
{% endcode %}

This method adds the drag force to snap two vertices to rest distance.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter v0: - input first vertex id.

Parameter v1: - input second vertex id.

Parameter restDistance: - input target distance.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L203)

#### addSmoothnessForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addSmoothnessForce(double strength)
```
{% endcode %}

This method adds the smoothness force to the mesh.

based on https://github.com/Dan-Piker/K2Goals/blob/master/TangentialSmooth.cs version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L210)

#### addPlaneForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addPlaneForce(double strength, zIntArray vIds, zPoint &targetCenter, zVector &targetNormal)
```
{% endcode %}

This method force the input vertices to a target plane.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter vIds: - input planarisation type - zQuadPlanar or zVolumePlanar.

Parameter targetCenter: - input target plane center.

Parameter targetNormal: - input target plane normal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L220)

#### addPlanarityForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addPlanarityForce(double strength, double tolerance, zPlanarSolverType type, zDoubleArray &planarityDeviations, zVectorArray &forceDir, bool &exit, zSolverForceConstraints constrainType=zConstraintFree)
```
{% endcode %}

This method adds the planarisation forces to the input mesh.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter tolerance: - input tolerance value below which the force isnt applied.

Parameter type: - input planarisation type - zQuadPlanar or zVolumePlanar.

Parameter planarityDeviations: - output container of planarity deviations per face.

Parameter forceDir: - output container of planarity force direction per vertex.

Parameter exit: - output boolean true if all the planarity deviations are below tolerance.

Parameter constrainType: - input constraints for the force directions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L233)

#### addPlanarityForce\_vertexgroups

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addPlanarityForce_vertexgroups(double strength, double tolerance, vector< zIntArray > &vertexIDs, zPointArray &targetCenters, zVectorArray &targetNormals, zDoubleArray &planarityDeviations, zVectorArray &forceDir, bool &exit)
```
{% endcode %}

This method adds the forces to the keep the input vertex groups to the target planes specified by target centers and normals.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter tolerance: - input tolerance value below which the force isnt applied.

Parameter planarityDeviations: - output container of planarity deviations per face.

Parameter forceDir: - output container of planarity force direction per vertex.

Parameter exit: - output boolean true if all the planarity deviations are below tolerance.

Parameter descriptions are absent in the current declaration comments for: targetCenters, targetNormals, vertexIDs. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L245)

#### addPlanarityForce\_targetPlane

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addPlanarityForce_targetPlane(double strength, double tolerance, zPointArray &targetCenters, zVectorArray &targetNormals, zDoubleArray &planarityDeviations, zVectorArray &forceDir, bool &exit, zSolverForceConstraints constrainType=zConstraintFree)
```
{% endcode %}

This method adds the planarisation forces to the input mesh.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter targetCenters: - container of target origin per face. Used only for zVolumePlanar planarisation type.

Parameter targetNormals: - container of target normals per face. Used only for zVolumePlanar planarisation type.

Parameter tolerance: - input tolerance value below which the force isnt applied.

Parameter planarityDeviations: - output container of planarity deviations per face.

Parameter forceDir: - output container of planarity force direction per vertex.

Parameter exit: - output boolean true if all the planarity deviations are below tolerance.

Parameter constrainType: - input constraints for the force directions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L259)

#### addDevelopabilityForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addDevelopabilityForce(double strength, double tolerance, zDoubleArray &vGaussianCurvatures, zVectorArray &forceDir, bool &exit)
```
{% endcode %}

This method adds the developability forces to the input mesh.

based on Desburn et.al(2002) http://www.geometry.caltech.edu/pubs/DMA02.pdf version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter tolerance: - input tolerance value belwo which the force isnt applied.

Parameter forceDir: - output container of planarity force direction per vertex.

Parameter exit: - output boolean true if all the vertex gaussian deviations are below tolerance.

Parameter descriptions are absent in the current declaration comments for: vGaussianCurvatures. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L270)

#### addMinimizeAreaForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addMinimizeAreaForce(double strength)
```
{% endcode %}

This method adds the minimize area forces (minimal surface) to the input mesh.

based on http://courses.cms.caltech.edu/cs177/hmw/Hmw2.pdf , https://github.com/Dan-Piker/K2Goals/blob/master/SoapFilm.cs version 0.0.4

Parameter strength: - input strength of the force.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L280)

#### prepareOrigami

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::prepareOrigami()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L283)

#### setOrigamiCrease

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::setOrigamiCrease(int edgeId, int assignment, double angleRadians)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: angleRadians, assignment, edgeId. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L285)

#### getOrigamiForces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::getOrigamiForces(const zOrigamiSettings &settings, zVectorArray &forces, zOrigamiDiagnostics &diagnostics, zOrigamiForceComponents *components=nullptr)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: components, diagnostics, forces, settings. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L286)

#### stepOrigami

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::stepOrigami(const zOrigamiSettings &settings, double timeStep, zOrigamiDiagnostics &diagnostics)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: diagnostics, settings, timeStep. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L287)

#### addRigidLineForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addRigidLineForce(double strength, double tolerance, zIntPairArray &vertexIDs, zDoubleArray &vertexDistances, zDoubleArray &deviations, zVectorArray &forceDir, bool &exit)
```
{% endcode %}

This method adds the forces to keep the input vertex pairs aligned to each other.

based on http://courses.cms.caltech.edu/cs177/hmw/Hmw2.pdf , https://github.com/Dan-Piker/K2Goals/blob/master/SoapFilm.cs version 0.0.4

Parameter strength: - input strength of the force.

Parameter vertexDistances: - input distance to be maintained between vertex pairs of the force.

Parameter vertexIDs: - input container of vertex pairs to be kept aligned.

Parameter deviations: - output container of deviations per vertex.

Parameter forceDir: - output container of planarity force direction per vertex.

Parameter exit: - output boolean true if all the vertex gaussian deviations are below tolerance.

Parameter descriptions are absent in the current declaration comments for: tolerance. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L299)

#### addSpringForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addSpringForce(double strength, int eId, float restLength)
```
{% endcode %}

This method adds the drag force to the input edge.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter eId: - id of edge.

Parameter restLength: - input value of restlength on edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L308)

#### addLoadForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addLoadForce(double strength, int vId, zVector &vec)
```
{% endcode %}

This method adds the drag force to the input mesh.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter vId: - input vertex id.

Parameter vec: - input load direction.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L318)

#### addVectorForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addVectorForce(double strength, int vId, zPoint &origin, zVector &alignVector)
```
{% endcode %}

This method adds the drag force to the input vertex to a given vector.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter vId: - id of vertex to drag.

Parameter origin: - input position of align vector start.

Parameter alignVector: - input align vector.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L328)

#### addAngleForce

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addAngleForce(double strength, int vId, int vId_first, int vId_second, float restAngle, bool moveHinge=true)
```
{% endcode %}

This method adds the drag force to the input two edges to a given angle.

version 0.0.4

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter vId: - id of vertex shared by two edges.

Parameter restAngle: - input value of restAngle between two edges.

Parameter moveHinge: - if true add force to the particle at hinge/ false add force to the end particles.

Parameter descriptions are absent in the current declaration comments for: vId\_first, vId\_second. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L338)

#### addFittingForce\_cone

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addFittingForce_cone(double strength, double tolerance, int centerVertexId, bool &exit)
```
{% endcode %}

This method adds the forces to keep the input vertex pairs aligned to each other.

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter tolerance: - input tolerance value below which the force isnt applied.

Parameter centerVertexId: - input panel center vertex which shared by four panel faces.

Parameter exit: - output boolean true if all the planarity deviations are below tolerance. \NOT IMPLEMENT YET

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L347)

#### addFittingForce\_cylinder

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::addFittingForce_cylinder(double strength, double tolerance, int centerVertexId, bool &exit)
```
{% endcode %}

This method adds the forces to keep the input vertex pairs aligned to each other.

Parameter strength: - input strength of the force. Typically between 0 and 1.

Parameter tolerance: - input tolerance value below which the force isnt applied.

Parameter centerVertexId: - input panel center vertex which shared by four panel faces.

Parameter exit: - output boolean true if all the planarity deviations are below tolerance. \NOT IMPLEMENT YET

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L356)

#### update

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMeshDynamics::update(double dT, zIntergrationType type=zEuler, bool clearForce=true, bool clearVelocity=false, bool clearDerivatives=false)
```
{% endcode %}

This method updates the position and velocity of all the particle.

version 0.0.2

Parameter dT: - timestep.

Parameter type: - integration type - zEuler or zRK4.

Parameter clearForce: - clears the force if true.

Parameter clearVelocity: - clears the velocity if true.

Parameter clearDerivatives: - clears the derivatives if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMeshDynamics.h#L371)

### Related types

[zObjectMesh](api-zobjectmesh.md)

[zOrigamiDiagnostics](api-zorigamidiagnostics.md)

[zOrigamiForceComponents](api-zorigamiforcecomponents.md)

[zOrigamiSettings](api-zorigamisettings.md)

[zVector](../group-zcore/api-zvector.md)
