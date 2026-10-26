# zItMeshVertex

## zSpace::zItMeshVertex

Declared in include/zspace/zInterface/iterators/zItMesh.h. Public class/struct declaration reference.

The mesh vertex iterator class.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L109)

[Base: zSpace::zIt](api-zit.md)

### Public Func

#### zItMeshVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshVertex::zItMeshVertex()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L128)

#### zItMeshVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshVertex::zItMeshVertex(zObjectMesh &_meshObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_meshObj: - input mesh object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L135)

#### zItMeshVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshVertex::zItMeshVertex(zObjectMesh &_meshObj, int _index)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_meshObj: - input mesh object.

Parameter \_index: - input index in mesh vertex container.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L143)

#### begin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::begin() override
```
{% endcode %}

This method sets the iterator pointing to first element the contatiner.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L149)

#### operator++

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::operator++(int) override
```
{% endcode %}

This method advance to the next element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L151)

#### operator--

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::operator--(int) override
```
{% endcode %}

This method advance to the previous element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L153)

#### end

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshVertex::end() override
```
{% endcode %}

This method indicates if all the elements are tranversed.

bool - true if all the elements are tranversed. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L155)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::reset() override
```
{% endcode %}

This method resets the iterator to the first element.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L157)

#### size

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshVertex::size() override
```
{% endcode %}

This method gets the size f the element container.

int - size of element container. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L159)

#### deactivate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::deactivate() override
```
{% endcode %}

This method deactivates the element attached to the iterator.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L161)

#### getConnectedHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::getConnectedHalfEdges(zItMeshHalfEdgeArray &halfedges)
```
{% endcode %}

This method gets the halfedges connected to the iterator.

version 0.0.3

Parameter halfedges: - vector of halfedge iterator.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L172)

#### getConnectedHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::getConnectedHalfEdges(zIntArray &halfedgeIndicies)
```
{% endcode %}

This method gets the indicies of halfedges connected to the iterator.

version 0.0.3

Parameter halfedgeIndicies: - vector of halfedge indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L180)

#### getConnectedEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::getConnectedEdges(zItMeshEdgeArray &edges)
```
{% endcode %}

This method gets the edges connected to the iterator.

version 0.0.3

Parameter descriptions are absent in the current declaration comments for: edges. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L188)

#### getConnectedEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::getConnectedEdges(zIntArray &edgeIndicies)
```
{% endcode %}

This method gets the indicies of edges connected to the iterator.

version 0.0.3

Parameter edgeIndicies: - vector of edge indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L196)

#### getConnectedVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::getConnectedVertices(zItMeshVertexArray &verticies)
```
{% endcode %}

This method gets the vertices connected to the iterator.

version 0.0.3

Parameter verticies: - vector of verticies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L203)

#### getConnectedVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::getConnectedVertices(zIntArray &vertexIndicies)
```
{% endcode %}

This method gets the indicies of vertices connected to the iterator.

version 0.0.3

Parameter vertexIndicies: - vector of vertex indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L211)

#### getConnectedFaces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::getConnectedFaces(zItMeshFaceArray &faces)
```
{% endcode %}

This method gets the faces connected to the iterator.

version 0.0.3

Parameter faces: - vector of faces.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L218)

#### getConnectedFaces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::getConnectedFaces(zIntArray &faceIndicies)
```
{% endcode %}

This method gets the indicies of faces connected to the iterator.

version 0.0.3

Parameter faceIndicies: - vector of face indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L225)

#### onBoundary

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshVertex::onBoundary()
```
{% endcode %}

This method determines if the element is on the boundary.

bool - true if on boundary else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L232)

#### getValence

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshVertex::getValence()
```
{% endcode %}

This method calculate the valency of the vertex.

int - valency of input vertex input valence. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L240)

#### checkValency

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshVertex::checkValency(int valence=1)
```
{% endcode %}

This method determines if vertex valency is equal to the input valence number.

bool - true if valency is equal to input valence. version 0.0.3

Parameter valence: - input valence value.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L249)

#### getPrincipalCurvature

{% code collapsedlinecount="10" %}
```cpp
zCurvature zSpace::zItMeshVertex::getPrincipalCurvature()
```
{% endcode %}

This method computes the principal curvatures of the vertex.

zCurvature - vertex curvature. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L256)

#### getGaussianCurvature

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zItMeshVertex::getGaussianCurvature()
```
{% endcode %}

This method computes the gaussian curvature of the vertex.

double - vertex gaussian curvature. version 0.0.3s

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L263)

#### getGaussianGradient

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItMeshVertex::getGaussianGradient()
```
{% endcode %}

This method computes the gradient at the vertex.

zVector - vertex gradient vector. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L270)

#### getArea

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zItMeshVertex::getArea()
```
{% endcode %}

This method computes the voronoi area of the vertex.

double - vertex area. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L277)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshVertex::getId()
```
{% endcode %}

This method gets the index of the iterator.

int - iterator index version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L289)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zItMeshHalfEdge zSpace::zItMeshVertex::getHalfEdge()
```
{% endcode %}

This method gets the half edge attached to the vertex.

zItMeshHalfEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L296)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItMeshVertex::getPosition()
```
{% endcode %}

This method gets position of the vertex.

zVector - vertex position. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L303)

#### getRawPosition

{% code collapsedlinecount="10" %}
```cpp
zVector * zSpace::zItMeshVertex::getRawPosition()
```
{% endcode %}

This method gets pointer to the position of the vertex.

zVector\* - pointer to internal vertex position. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L311)

#### getNormal

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItMeshVertex::getNormal()
```
{% endcode %}

This method gets normal of the vertex.

zVector - vertex normal. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L318)

#### getRawNormal

{% code collapsedlinecount="10" %}
```cpp
zVector * zSpace::zItMeshVertex::getRawNormal()
```
{% endcode %}

This method gets pointer to the normal of the vertex.

zVector\* - pointer to internal vertex normal. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L325)

#### getNormals

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::getNormals(vector< zVector > &vNormals)
```
{% endcode %}

This method gets normalss of the vertex for all faces.

version 0.0.3

Parameter vNormals: - input vertex index.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L333)

#### getColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zItMeshVertex::getColor()
```
{% endcode %}

This method gets color of the vertex.

zColor - vertex color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L341)

#### getRawColor

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zItMeshVertex::getRawColor()
```
{% endcode %}

This method gets pointer to the color of the vertex.

zColor\* - pointer to internal vertex color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L348)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::setId(int _id)
```
{% endcode %}

This method sets the index of the iterator.

version 0.0.3

Parameter \_id: - input index

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L359)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::setHalfEdge(zItMeshHalfEdge &he)
```
{% endcode %}

This method sets the vertex half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L366)

#### setPosition

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::setPosition(zVector pos)
```
{% endcode %}

This method sets position of the vertex.

version 0.0.3

Parameter pos: - vertex position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L373)

#### setColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshVertex::setColor(zColor col)
```
{% endcode %}

This method sets color of the vertex.

version 0.0.3

Parameter col: - vertex color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L380)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshVertex::isActive()
```
{% endcode %}

This method gets if the vertex is active.

bool - true if active else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L391)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshVertex::operator==(zItMeshVertex &other)
```
{% endcode %}

This operator checks for equality of two vertex iterators.

bool - true if equal. version 0.0.3

Parameter other: - input iterator against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L403)

#### operator!=

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshVertex::operator!=(zItMeshVertex &other)
```
{% endcode %}

This operator checks for non equality of two vertex iterators.

bool - true if not equal. version 0.0.3

Parameter other: - input iterator against which the non-equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L411)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zCurvature](../group-zcore/api-zcurvature.md)

[zItMeshHalfEdge](api-zitmeshhalfedge.md)

[zObjectMesh](api-zobjectmesh.md)

[zVector](../group-zcore/api-zvector.md)
