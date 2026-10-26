# zItMeshEdge

## zSpace::zItMeshEdge

Declared in include/zspace/zInterface/iterators/zItMesh.h. Public class/struct declaration reference.

The mesh edge iterator class.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L441)

[Base: zSpace::zIt](api-zit.md)

### Public Func

#### zItMeshEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshEdge::zItMeshEdge()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L461)

#### zItMeshEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshEdge::zItMeshEdge(zObjectMesh &_meshObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_meshObj: - input mesh object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L468)

#### zItMeshEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItMeshEdge::zItMeshEdge(zObjectMesh &_meshObj, int _index)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_meshObj: - input mesh object.

Parameter \_index: - input index in mesh edge list.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L476)

#### begin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::begin() override
```
{% endcode %}

This method sets the iterator pointing to first element the contatiner.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L482)

#### operator++

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::operator++(int) override
```
{% endcode %}

This method advance to the next element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L484)

#### operator--

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::operator--(int) override
```
{% endcode %}

This method advance to the previous element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L486)

#### end

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshEdge::end() override
```
{% endcode %}

This method indicates if all the elements are tranversed.

bool - true if all the elements are tranversed. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L488)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::reset() override
```
{% endcode %}

This method resets the iterator to the first element.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L490)

#### size

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshEdge::size() override
```
{% endcode %}

This method gets the size f the element container.

int - size of element container. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L492)

#### deactivate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::deactivate() override
```
{% endcode %}

This method deactivates the element attached to the iterator.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L494)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::getVertices(zItMeshVertexArray &verticies)
```
{% endcode %}

This method gets the the vertices attached to the iterator.

version 0.0.3

Parameter verticies: - vector of vertex iterators.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L505)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::getVertices(zIntArray &vertexIndicies)
```
{% endcode %}

This method gets the indicies of the vertices attached to the iterator.

version 0.0.3

Parameter vertexIndicies: - vector of vertex indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L512)

#### getVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::getVertexPositions(vector< zVector > &vertPositions)
```
{% endcode %}

TThis method gets the vertex positions attached to the iterator.

version 0.0.3

Parameter vertPositions: - vector of vertex positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L519)

#### getFaces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::getFaces(zItMeshFaceArray &faces)
```
{% endcode %}

This method gets the faces attached to the iterator.

version 0.0.3

Parameter faces: - vector of face iterators.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L526)

#### getFaces

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::getFaces(zIntArray &faceIndicies)
```
{% endcode %}

This method gets the indicies of faces attached to the iterator and its symmetry.

version 0.0.3

Parameter faceIndicies: - vector of face indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L533)

#### onBoundary

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshEdge::onBoundary()
```
{% endcode %}

This method checks if the edge is on boundary.

bool - true if on boundary else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L540)

#### getCenter

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItMeshEdge::getCenter()
```
{% endcode %}

This method computes the centers of a the edge.

zVector - center. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L547)

#### getVector

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItMeshEdge::getVector()
```
{% endcode %}

This method gets the vector of the edge.

zVector - edge vector. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L554)

#### getLength

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zItMeshEdge::getLength()
```
{% endcode %}

This method gets the edge length of the edge.

double - edge length. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L561)

#### getDihedralAngle

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zItMeshEdge::getDihedralAngle()
```
{% endcode %}

This method computes the dihedral angle of the edge.

double - dihedral angle in degrees. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L568)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItMeshEdge::getId()
```
{% endcode %}

This method gets the index of the iterator.

int - iterator index version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L579)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zItMeshHalfEdge zSpace::zItMeshEdge::getHalfEdge(int _index)
```
{% endcode %}

This method gets the half edge attached to the edge.

zItMeshHalfEdge - half edge iterator version 0.0.3

Parameter \_index: - input index ( 0 or 1).

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L587)

#### getColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zItMeshEdge::getColor()
```
{% endcode %}

This method gets color of the edge.

zColor - edge color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L594)

#### getRawColor

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zItMeshEdge::getRawColor()
```
{% endcode %}

This method gets pointer to the color of the edge.

zColor\* - edge color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L601)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::setId(int _id)
```
{% endcode %}

This method sets the index of the iterator.

version 0.0.3

Parameter \_id: - input index

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L612)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::setHalfEdge(zItMeshHalfEdge &he, int _index)
```
{% endcode %}

This method sets the edge half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

Parameter \_index: - input index ( 0 or 1).

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L620)

#### setColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::setColor(zColor col)
```
{% endcode %}

This method sets color of the edge.

version 0.0.3

Parameter col: - input color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L627)

#### setWeight

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItMeshEdge::setWeight(double wt)
```
{% endcode %}

This method sets display weight of the edge.

version 0.0.3

Parameter wt: - input weight.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L634)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshEdge::isActive()
```
{% endcode %}

This method gets if the vertex is active.

bool - true if active else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L646)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshEdge::operator==(zItMeshEdge &other)
```
{% endcode %}

This operator checks for equality of two edge iterators.

bool - true if equal. version 0.0.3

Parameter other: - input iterator against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L658)

#### operator!=

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItMeshEdge::operator!=(zItMeshEdge &other)
```
{% endcode %}

This operator checks for non equality of two edge iterators.

bool - true if not equal. version 0.0.3

Parameter other: - input iterator against which the non-equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItMesh.h#L666)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zItMeshHalfEdge](api-zitmeshhalfedge.md)

[zObjectMesh](api-zobjectmesh.md)

[zVector](../group-zcore/api-zvector.md)
