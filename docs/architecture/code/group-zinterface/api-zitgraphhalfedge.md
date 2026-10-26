# zItGraphHalfEdge

## zSpace::zItGraphHalfEdge

Declared in include/zspace/zInterface/iterators/zItGraph.h. Public class/struct declaration reference.

The graph half edge iterator class.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L605)

[Base: zSpace::zIt](api-zit.md)

### Public Func

#### zItGraphHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItGraphHalfEdge::zItGraphHalfEdge()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L625)

#### zItGraphHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItGraphHalfEdge::zItGraphHalfEdge(zObjectGraph &_graphObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_graphObj: - input graph object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L632)

#### zItGraphHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItGraphHalfEdge::zItGraphHalfEdge(zObjectGraph &_graphObj, int _index)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_graphObj: - input graph object.

Parameter \_index: - input index in graph halfedge list.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L640)

#### begin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::begin() override
```
{% endcode %}

This method sets the iterator pointing to first element the contatiner.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L646)

#### operator++

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::operator++(int) override
```
{% endcode %}

This method advance to the next element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L648)

#### operator--

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::operator--(int) override
```
{% endcode %}

This method advance to the previous element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L650)

#### end

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphHalfEdge::end() override
```
{% endcode %}

This method indicates if all the elements are tranversed.

bool - true if all the elements are tranversed. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L652)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::reset() override
```
{% endcode %}

This method resets the iterator to the first element.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L654)

#### size

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItGraphHalfEdge::size() override
```
{% endcode %}

This method gets the size f the element container.

int - size of element container. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L656)

#### deactivate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::deactivate() override
```
{% endcode %}

This method deactivates the element attached to the iterator.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L658)

#### getStartVertex

{% code collapsedlinecount="10" %}
```cpp
zItGraphVertex zSpace::zItGraphHalfEdge::getStartVertex()
```
{% endcode %}

This method gets the vertex pointed by the symmetry of input iterator.

zItGraphVertex - iterator to vertex. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L669)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::getVertices(zItGraphVertexArray &verticies)
```
{% endcode %}

This method gets the the vertices attached to the iterator.

version 0.0.3

Parameter descriptions are absent in the current declaration comments for: verticies. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L676)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::getVertices(zIntArray &vertexIndicies)
```
{% endcode %}

This method gets the indicies of the vertices attached to halfedge.

version 0.0.3

Parameter vertexIndicies: - vector of vertex indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L683)

#### getVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::getVertexPositions(vector< zVector > &vertPositions)
```
{% endcode %}

TThis method gets the vertex positions attached to the iterator and its symmetry.

version 0.0.3

Parameter vertPositions: - vector of vertex positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L690)

#### getConnectedHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::getConnectedHalfEdges(zItGraphHalfEdgeArray &edgeIndicies)
```
{% endcode %}

This method gets the halfedges connected to the iterator.

version 0.0.3

Parameter edgeIndicies: - vector of edge indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L697)

#### getConnectedHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::getConnectedHalfEdges(zIntArray &edgeIndicies)
```
{% endcode %}

This method gets the halfedges connected to the iterator.

version 0.0.3

Parameter edgeIndicies: - vector of edge indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L704)

#### onBoundary

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphHalfEdge::onBoundary()
```
{% endcode %}

This method checks if the half edge is on boundary.

bool - true if on boundary else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L711)

#### getCenter

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItGraphHalfEdge::getCenter()
```
{% endcode %}

This method computes the centers of a the half edge.

zVector - center. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L718)

#### getVector

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItGraphHalfEdge::getVector()
```
{% endcode %}

This method gets the vector of the half edge.

zVector - edge vector. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L725)

#### getLength

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zItGraphHalfEdge::getLength()
```
{% endcode %}

This method computes the edge length of the half edge.

double - half edge length. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L732)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItGraphHalfEdge::getId()
```
{% endcode %}

This method gets the index of the iterator.

int - iterator index version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L743)

#### getSym

{% code collapsedlinecount="10" %}
```cpp
zItGraphHalfEdge zSpace::zItGraphHalfEdge::getSym()
```
{% endcode %}

This method gets the symmetry half edge attached to the halfedge.

zItGraphHalfEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L750)

#### getNext

{% code collapsedlinecount="10" %}
```cpp
zItGraphHalfEdge zSpace::zItGraphHalfEdge::getNext()
```
{% endcode %}

This method gets the next half edge attached to the halfedge.

zItGraphHalfEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L757)

#### getPrev

{% code collapsedlinecount="10" %}
```cpp
zItGraphHalfEdge zSpace::zItGraphHalfEdge::getPrev()
```
{% endcode %}

This method gets the prev half edge attached to the halfedge.

zItGraphHalfEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L764)

#### getVertex

{% code collapsedlinecount="10" %}
```cpp
zItGraphVertex zSpace::zItGraphHalfEdge::getVertex()
```
{% endcode %}

This method gets the vertex attached to the halfedge.

zItGraphVertex - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L771)

#### getEdge

{% code collapsedlinecount="10" %}
```cpp
zItGraphEdge zSpace::zItGraphHalfEdge::getEdge()
```
{% endcode %}

This method gets the edge attached to the halfedge.

zItGraphEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L778)

#### getColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zItGraphHalfEdge::getColor()
```
{% endcode %}

This method gets color of the halfedge.

zColor - halfedge color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L785)

#### getRawColor

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zItGraphHalfEdge::getRawColor()
```
{% endcode %}

This method gets pointer to the color of the halfedge.

zColor\* - halfedge color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L792)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::setId(int _id)
```
{% endcode %}

This method sets the index of the iterator.

version 0.0.3

Parameter \_id: - input index

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L803)

#### setSym

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::setSym(zItGraphHalfEdge &he)
```
{% endcode %}

This method sets the symmetry half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L810)

#### setNext

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::setNext(zItGraphHalfEdge &he)
```
{% endcode %}

This method sets the next half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L817)

#### setPrev

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::setPrev(zItGraphHalfEdge &he)
```
{% endcode %}

This method sets the previous half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L824)

#### setVertex

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::setVertex(zItGraphVertex &v)
```
{% endcode %}

This method sets the half edge vertex to the input vertex.

version 0.0.3

Parameter v: - input vertex iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L831)

#### setEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphHalfEdge::setEdge(zItGraphEdge &e)
```
{% endcode %}

This method sets the halfedge edge to the input edge.

version 0.0.3

Parameter e: - input edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L838)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphHalfEdge::isActive()
```
{% endcode %}

This method checks if the half edge is active.

bool - true if active else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L849)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphHalfEdge::operator==(zItGraphHalfEdge &other)
```
{% endcode %}

This operator checks for equality of two halfedge iterators.

bool - true if equal. version 0.0.3

Parameter other: - input iterator against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L861)

#### operator!=

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphHalfEdge::operator!=(zItGraphHalfEdge &other)
```
{% endcode %}

This operator checks for non equality of two halfedge iterators.

bool - true if not equal. version 0.0.3

Parameter other: - input iterator against which the non-equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L869)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zItGraphEdge](api-zitgraphedge.md)

[zItGraphVertex](api-zitgraphvertex.md)

[zObjectGraph](api-zobjectgraph.md)

[zVector](../group-zcore/api-zvector.md)
