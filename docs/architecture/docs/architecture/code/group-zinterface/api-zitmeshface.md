# zItMeshFace

## zSpace::zItMeshFace

Declared in include/zspace/zInterface/iterators/zItMesh.h. Public class/struct declaration reference.

The mesh face iterator class.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L698)

[Base: zSpace::zIt](api-zit.md)

### Public Func

#### zItMeshFace

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshFace::zItMeshFace()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L718)

#### zItMeshFace

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshFace::zItMeshFace(zObjectMesh &_meshObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_meshObj: - input mesh object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L725)

#### zItMeshFace

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshFace::zItMeshFace(zObjectMesh &_meshObj, int _index)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_meshObj: - input mesh object.

Parameter \_index: - input index in mesh face list.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L733)

#### begin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::begin() override
```
{% endcode %}

This method sets the iterator pointing to first element the contatiner.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L739)

#### operator++

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::operator++(int) override
```
{% endcode %}

This method advance to the next element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L741)

#### operator--

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::operator--(int) override
```
{% endcode %}

This method advance to the previous element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L743)

#### end

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshFace::end() override
```
{% endcode %}

This method indicates if all the elements are tranversed.

bool - true if all the elements are tranversed. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L745)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::reset() override
```
{% endcode %}

This method resets the iterator to the first element.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L747)

#### size

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshFace::size() override
```
{% endcode %}

This method gets the size f the element container.

int - size of element container. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L749)

#### deactivate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::deactivate() override
```
{% endcode %}

This method deactivates the element attached to the iterator.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L751)

#### getHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getHalfEdges(zItMeshHalfEdgeArray &halfedges)
```
{% endcode %}

This method gets the half edges of the face.

version 0.0.3

Parameter halfedges: - vector of halfedge interators.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L762)

#### getHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getHalfEdges(zIntArray &halfedgeIndicies)
```
{% endcode %}

This method gets the indicies of half edges of the face.

version 0.0.3

Parameter halfedgeIndicies: - vector of halfedge indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L769)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getVertices(zItMeshVertexArray &verticies)
```
{% endcode %}

This method gets the the vertices of the face.

version 0.0.3

Parameter verticies: - vector of vertex iterators.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L776)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getVertices(zIntArray &vertexIndicies)
```
{% endcode %}

This method gets the indicies of the vertices of the face.

version 0.0.3

Parameter vertexIndicies: - vector of vertex indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L783)

#### getVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getVertexPositions(vector< zVector > &vertPositions)
```
{% endcode %}

TThis method gets the vertex positions of the face.

version 0.0.3

Parameter vertPositions: - vector of vertex positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L790)

#### getConnectedFaces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getConnectedFaces(zItMeshFaceArray &faces)
```
{% endcode %}

This method gets the faces connected to the iterator.

version 0.0.3

Parameter faces: - vector of faces.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L798)

#### getConnectedFaces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getConnectedFaces(zIntArray &faceIndicies)
```
{% endcode %}

This method gets the indicies of faces connected to the iterator.

version 0.0.3

Parameter faceIndicies: - vector of face indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L805)

#### onBoundary

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshFace::onBoundary()
```
{% endcode %}

This method checks if the face is on boundary.

bool - true if on boundary else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L812)

#### getCenter

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItMeshFace::getCenter()
```
{% endcode %}

This method computes the center of a the face.

zVector - center. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L819)

#### getNumVertices

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshFace::getNumVertices()
```
{% endcode %}

This method gets the number of vertices in the face.

int - number of vertices in the face. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L826)

#### getTriangles

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getTriangles(int &numTris, zIntArray &tris)
```
{% endcode %}

This method computes the input face triangulations using ear clipping algorithm.

based on https://www.geometrictools.com/Documentation/TriangulationByEarClipping.pdf & http://abitwise.blogspot.co.uk/2013/09/triangulating-concave-and-convex.html version 0.0.2

Parameter numTris: - number of triangles in the input polygon.

Parameter tris: - index array of each triangle associated with the face.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L835)

#### getVolume

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zItMeshFace::getVolume(zIntArray &faceTris, zVector &fCenter, bool absoluteVolume=true)
```
{% endcode %}

This method computes the volume of the polyhedras formed by the face vertices and the face center of the input indexed face of the mesh.

double - volume of the polyhedras formed by the face vertices and the face center. version 0.0.2

Parameter faceTris: - container of index array of each triangle associated per face. It will be computed if the container is empty.

Parameter descriptions are absent in the current declaration comments for: absoluteVolume, fCenter. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L847)

#### getPlanarFaceArea

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zItMeshFace::getPlanarFaceArea()
```
{% endcode %}

This method computes the area of the face . It works only for if the faces are planar.

Based on http://geomalgorithms.com/a01-\_area.html. double - area of the face. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L855)

#### getPrincipalCurvature

{% code collapsedlinecount="10" %}
```cpp
zCurvature zSpace::zItMeshFace::getPrincipalCurvature()
```
{% endcode %}

This method computes the principal curvatures of the vertex.

zCurvature - vertex curvature. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L862)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshFace::getId()
```
{% endcode %}

This method gets the index of the iterator.

int - iterator index version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L873)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zItMeshHalfEdge zSpace::zItMeshFace::getHalfEdge()
```
{% endcode %}

This method gets the half edge attached to the face.

zItMeshHalfEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L880)

#### getOffsetFacePositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getOffsetFacePositions(double offset, vector< zVector > &offsetPositions)
```
{% endcode %}

This method gets the offset positions of the face.

beased on http://pyright.blogspot.com/2014/11/polygon-offset-using-vector-math-in.html version 0.0.3

Parameter offset: - offset distance.

Parameter offsetPositions: - container with the offset positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L889)

#### getOffsetFacePositions\_Variable

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::getOffsetFacePositions_Variable(vector< double > &offsets, zVector &faceCenter, zVector &faceNormal, vector< zVector > &intersectionPositions)
```
{% endcode %}

This method returns the vartiable offset positions of the face.

version 0.0.3

Parameter offsets: - offset distance from each edge of the mesh.

Parameter faceCenter: - center of polygon.

Parameter faceNormal: - normal of polygon.

Parameter intersectionPositions: - container with the intersection positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L899)

#### getNormal

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItMeshFace::getNormal()
```
{% endcode %}

This method gets normal of the face.

zVector - face normal. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L906)

#### getRawNormal

{% code collapsedlinecount="10" %}
```cpp
zVector * zSpace::zItMeshFace::getRawNormal()
```
{% endcode %}

This method gets pointer to the normal of the face.

zVector\* - pointer to internal face normal. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L913)

#### getColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zItMeshFace::getColor()
```
{% endcode %}

This method gets color of the face.

zColor - face color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L920)

#### getRawColor

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zItMeshFace::getRawColor()
```
{% endcode %}

This method gets pointer to the color of the face.

zColor\* - pointer to internal face color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L928)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::setId(int _id)
```
{% endcode %}

This method sets the index of the iterator.

version 0.0.3

Parameter \_id: - input index

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L939)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::setHalfEdge(zItMeshHalfEdge &he)
```
{% endcode %}

This method sets the edge half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L946)

#### setColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::setColor(zColor col)
```
{% endcode %}

This method sets color of the face.

version 0.0.3

Parameter col: - input color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L953)

#### setNormal

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::setNormal(zVector norm)
```
{% endcode %}

This method sets normal of the face.

version 0.0.3

Parameter norm: - input normal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L960)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshFace::isActive()
```
{% endcode %}

This method gets if the face is active.

bool - true if active else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L971)

#### checkPointInHalfSpace

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshFace::checkPointInHalfSpace(zPoint &pt)
```
{% endcode %}

This method returns a boolean if the input point is in the half space.

beased on https://www.codeproject.com/Articles/1065730/Point-Inside-Convex-Polygon-in-Cplusplus bool - true if point is in the half space. version 0.0.4

Parameter pt: - point to check for.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L980)

#### updateNormal

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshFace::updateNormal()
```
{% endcode %}

This method gets computes and updates the normal of the face.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L986)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshFace::operator==(zItMeshFace &other)
```
{% endcode %}

This operator checks for equality of two face iterators.

bool - true if equal. version 0.0.3

Parameter other: - input iterator against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L998)

#### operator!=

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshFace::operator!=(zItMeshFace &other)
```
{% endcode %}

This operator checks for non equality of two face iterators.

bool - true if not equal. version 0.0.3

Parameter other: - input iterator against which the non-equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L1006)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zCurvature](../group-zcore/api-zcurvature.md)

[zItMeshHalfEdge](api-zitmeshhalfedge.md)

[zObjectMesh](api-zobjectmesh.md)

[zVector](../group-zcore/api-zvector.md)
