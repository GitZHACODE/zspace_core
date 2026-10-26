# zItMeshHalfEdge

## zSpace::zItMeshHalfEdge

Declared in include/zspace/zInterface/iterators/zItMesh.h. Public class/struct declaration reference.

The mesh half edge iterator class.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1036)

[Base: zSpace::zIt](api-zit.md)

### Public Func

#### zItMeshHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshHalfEdge::zItMeshHalfEdge()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1056)

#### zItMeshHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshHalfEdge::zItMeshHalfEdge(zObjectMesh &_meshObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_meshObj: - input mesh object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1063)

#### zItMeshHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshHalfEdge::zItMeshHalfEdge(zObjectMesh &_meshObj, int _index)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_meshObj: - input mesh object.

Parameter \_index: - input index in mesh halfedge list.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1071)

#### begin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::begin() override
```
{% endcode %}

This method sets the iterator pointing to first element the contatiner.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1077)

#### operator++

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::operator++(int) override
```
{% endcode %}

This method advance to the next element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1079)

#### operator--

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::operator--(int) override
```
{% endcode %}

This method advance to the previous element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1081)

#### end

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshHalfEdge::end() override
```
{% endcode %}

This method indicates if all the elements are tranversed.

bool - true if all the elements are tranversed. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1083)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::reset() override
```
{% endcode %}

This method resets the iterator to the first element.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1085)

#### size

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshHalfEdge::size() override
```
{% endcode %}

This method gets the size f the element container.

int - size of element container. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1087)

#### deactivate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::deactivate() override
```
{% endcode %}

This method deactivates the element attached to the iterator.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1089)

#### getStartVertex

{% code collapsedlinecount="10" %}
```cpp
zItMeshVertex zSpace::zItMeshHalfEdge::getStartVertex()
```
{% endcode %}

This method gets the vertex pointed by the symmetry of input iterator.

zItMeshVertex - iterator to vertex. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1100)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::getVertices(zItMeshVertexArray &verticies)
```
{% endcode %}

This method gets the the vertices attached to the iterator.

version 0.0.3

Parameter descriptions are absent in the current declaration comments for: verticies. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1107)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::getVertices(zIntArray &vertexIndicies)
```
{% endcode %}

This method gets the indicies of the vertices attached to halfedge.

version 0.0.3

Parameter vertexIndicies: - vector of vertex indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1114)

#### getVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::getVertexPositions(vector< zVector > &vertPositions)
```
{% endcode %}

TThis method gets the vertex positions attached to the iterator and its symmetry.

version 0.0.3

Parameter vertPositions: - vector of vertex positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1121)

#### getConnectedHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::getConnectedHalfEdges(zItMeshHalfEdgeArray &edgeIndicies)
```
{% endcode %}

This method gets the halfedges connected to the iterator.

version 0.0.3

Parameter edgeIndicies: - vector of edge indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1128)

#### getConnectedHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::getConnectedHalfEdges(zIntArray &edgeIndicies)
```
{% endcode %}

This method gets the halfedges connected to the iterator.

version 0.0.3

Parameter edgeIndicies: - vector of edge indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1135)

#### getFaces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::getFaces(zItMeshFaceArray &faceIndicies)
```
{% endcode %}

This method gets the faces attached to the iterator and its symmetry.

version 0.0.3

Parameter faceIndicies: - vector of face indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1142)

#### getFaces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::getFaces(zIntArray &faceIndicies)
```
{% endcode %}

This method gets the indicies of faces attached to the iterator and its symmetry.

version 0.0.3

Parameter faceIndicies: - vector of face indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1149)

#### onBoundary

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshHalfEdge::onBoundary()
```
{% endcode %}

This method checks if the half edge is on boundary.

bool - true if on boundary else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1156)

#### getCenter

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItMeshHalfEdge::getCenter()
```
{% endcode %}

This method computes the centers of a the half edge.

zVector - center. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1163)

#### getVector

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItMeshHalfEdge::getVector()
```
{% endcode %}

This method gets the vector of the half edge.

zVector - edge vector. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1170)

#### getLength

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zItMeshHalfEdge::getLength()
```
{% endcode %}

This method computes the edge length of the half edge.

double - half edge length. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1177)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshHalfEdge::getId()
```
{% endcode %}

This method gets the index of the iterator.

int - iterator index version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1189)

#### getSym

{% code collapsedlinecount="10" %}
```cpp
zItMeshHalfEdge zSpace::zItMeshHalfEdge::getSym()
```
{% endcode %}

This method gets the symmetry half edge attached to the halfedge.

zItMeshHalfEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1196)

#### getNext

{% code collapsedlinecount="10" %}
```cpp
zItMeshHalfEdge zSpace::zItMeshHalfEdge::getNext()
```
{% endcode %}

This method gets the next half edge attached to the halfedge.

zItMeshHalfEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1203)

#### getPrev

{% code collapsedlinecount="10" %}
```cpp
zItMeshHalfEdge zSpace::zItMeshHalfEdge::getPrev()
```
{% endcode %}

This method gets the prev half edge attached to the halfedge.

zItMeshHalfEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1210)

#### getVertex

{% code collapsedlinecount="10" %}
```cpp
zItMeshVertex zSpace::zItMeshHalfEdge::getVertex()
```
{% endcode %}

This method gets the vertex attached to the halfedge.

zItMeshVertex - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1217)

#### getFace

{% code collapsedlinecount="10" %}
```cpp
zItMeshFace zSpace::zItMeshHalfEdge::getFace()
```
{% endcode %}

This method gets the face attached to the halfedge.

zItMeshFace - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1225)

#### getEdge

{% code collapsedlinecount="10" %}
```cpp
zItMeshEdge zSpace::zItMeshHalfEdge::getEdge()
```
{% endcode %}

This method gets the edge attached to the halfedge.

zItMeshEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1232)

#### getColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zItMeshHalfEdge::getColor()
```
{% endcode %}

This method gets color of the halfedge.

zColor - halfedge color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1239)

#### getRawColor

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zItMeshHalfEdge::getRawColor()
```
{% endcode %}

This method gets pointer to the color of the halfedge.

zColor\* - halfedge color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1246)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::setId(int _id)
```
{% endcode %}

This method sets the index of the iterator.

version 0.0.3

Parameter \_id: - input index

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1257)

#### setSym

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::setSym(zItMeshHalfEdge &he)
```
{% endcode %}

This method sets the symmetry half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1264)

#### setNext

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::setNext(zItMeshHalfEdge &he)
```
{% endcode %}

This method sets the next half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1271)

#### setPrev

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::setPrev(zItMeshHalfEdge &he)
```
{% endcode %}

This method sets the previous half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1278)

#### setVertex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::setVertex(zItMeshVertex &v)
```
{% endcode %}

This method sets the half edge vertex to the input vertex.

version 0.0.3

Parameter v: - input vertex iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1285)

#### setEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::setEdge(zItMeshEdge &e)
```
{% endcode %}

This method sets the halfedge edge to the input edge.

version 0.0.3

Parameter e: - input edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1292)

#### setFace

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshHalfEdge::setFace(zItMeshFace &f)
```
{% endcode %}

This method sets the halfedge face to the input edge.

version 0.0.3

Parameter f: - input face iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1299)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshHalfEdge::isActive()
```
{% endcode %}

This method checks if the half edge is active.

bool - true if active else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1310)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshHalfEdge::operator==(zItMeshHalfEdge &other)
```
{% endcode %}

This operator checks for equality of two halfedge iterators.

bool - true if equal. version 0.0.3

Parameter other: - input iterator against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1322)

#### operator!=

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshHalfEdge::operator!=(zItMeshHalfEdge &other)
```
{% endcode %}

This operator checks for non equality of two halfedge iterators.

bool - true if not equal. version 0.0.3

Parameter other: - input iterator against which the non-equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1330)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zItMeshEdge](api-zitmeshedge.md)

[zItMeshFace](api-zitmeshface.md)

[zItMeshVertex](api-zitmeshvertex.md)

[zObjectMesh](api-zobjectmesh.md)

[zVector](../group-zcore/api-zvector.md)
