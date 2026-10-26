# zItGraphVertex

## zSpace::zItGraphVertex

Declared in include/zspace/zInterface/iterators/zItGraph.h. Public class/struct declaration reference.

The graph vertex iterator class.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L102)

[Base: zSpace::zIt](api-zit.md)

### Public Func

#### zItGraphVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItGraphVertex::zItGraphVertex()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L122)

#### zItGraphVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItGraphVertex::zItGraphVertex(zObjectGraph &_graphObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_graphObj: - input graph object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L129)

#### zItGraphVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItGraphVertex::zItGraphVertex(zObjectGraph &_graphObj, int _index)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_graphObj: - input graph object.

Parameter \_index: - input index in graph vertex list.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L137)

#### begin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::begin() override
```
{% endcode %}

This method sets the iterator pointing to first element the contatiner.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L143)

#### operator++

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::operator++(int) override
```
{% endcode %}

This method advance to the next element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L145)

#### operator--

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::operator--(int) override
```
{% endcode %}

This method advance to the previous element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L147)

#### end

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphVertex::end() override
```
{% endcode %}

This method indicates if all the elements are tranversed.

bool - true if all the elements are tranversed. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L149)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::reset() override
```
{% endcode %}

This method resets the iterator to the first element.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L151)

#### size

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItGraphVertex::size() override
```
{% endcode %}

This method gets the size f the element container.

int - size of element container. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L153)

#### deactivate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::deactivate() override
```
{% endcode %}

This method deactivates the element attached to the iterator.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L155)

#### getConnectedHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::getConnectedHalfEdges(zItGraphHalfEdgeArray &halfedges)
```
{% endcode %}

This method gets the halfedges connected to the iterator.

version 0.0.3

Parameter halfedges: - vector of halfedge iterator.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L166)

#### getConnectedHalfEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::getConnectedHalfEdges(zIntArray &halfedgeIndicies)
```
{% endcode %}

This method gets the indicies of halfedges connected to the iterator.

version 0.0.3

Parameter halfedgeIndicies: - vector of halfedge indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L174)

#### getConnectedEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::getConnectedEdges(zItGraphEdgeArray &edges)
```
{% endcode %}

This method gets the edges connected to the iterator.

version 0.0.3

Parameter descriptions are absent in the current declaration comments for: edges. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L181)

#### getConnectedEdges

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::getConnectedEdges(zIntArray &edgeIndicies)
```
{% endcode %}

This method gets the indicies of edges connected to the iterator.

version 0.0.3

Parameter edgeIndicies: - vector of edge indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L189)

#### getConnectedVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::getConnectedVertices(zItGraphVertexArray &verticies)
```
{% endcode %}

This method gets the vertices connected to the iterator.

version 0.0.3

Parameter verticies: - vector of verticies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L197)

#### getConnectedVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::getConnectedVertices(zIntArray &vertexIndicies)
```
{% endcode %}

This method gets the indicies of vertices connected to the iterator.

version 0.0.3

Parameter vertexIndicies: - vector of vertex indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L205)

#### getValence

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItGraphVertex::getValence()
```
{% endcode %}

This method calculate the valency of the vertex.

int - valency of input vertex input valence. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L212)

#### getBSF

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::getBSF(zItGraphVertexArray &bsf, zIntPairArray &vertexPairs)
```
{% endcode %}

This method returns a container holding the BSF if the input ItGraph.

version 0.0.4

Parameter bsf: - container holding the BSF zItGraphVertex.

Parameter descriptions are absent in the current declaration comments for: vertexPairs. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L220)

#### getBSF

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::getBSF(zIntArray &bsf, zIntPairArray &vertexPairs)
```
{% endcode %}

This method returns a container holding the BSF if the input ItGraph.

version 0.0.4

Parameter bsf: - container holding the BSF IDs.

Parameter descriptions are absent in the current declaration comments for: vertexPairs. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L228)

#### checkValency

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphVertex::checkValency(int valence=1)
```
{% endcode %}

This method determines if vertex valency is equal to the input valence number.

bool - true if valency is equal to input valence. version 0.0.3

Parameter valence: - input valence value.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L236)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItGraphVertex::getId()
```
{% endcode %}

This method gets the index of the iterator.

int - iterator index version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L247)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zItGraphHalfEdge zSpace::zItGraphVertex::getHalfEdge()
```
{% endcode %}

This method gets the half edge attached to the vertex.

zItGraphHalfEdge - half edge iterator version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L254)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zItGraphVertex::getPosition()
```
{% endcode %}

This method gets position of the vertex.

zPoint - vertex position. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L261)

#### getRawPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zItGraphVertex::getRawPosition()
```
{% endcode %}

This method gets pointer to the position of the vertex.

zPoint\* - pointer to internal vertex position. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L268)

#### getColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zItGraphVertex::getColor()
```
{% endcode %}

This method gets color of the vertex.

zColor - vertex color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L275)

#### getRawColor

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zItGraphVertex::getRawColor()
```
{% endcode %}

This method gets pointer to the color of the vertex.

zColor\* - pointer to internal vertex color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L282)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::setId(int _id)
```
{% endcode %}

This method sets the index of the iterator.

version 0.0.3

Parameter \_id: - input index

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L293)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::setHalfEdge(zItGraphHalfEdge &he)
```
{% endcode %}

This method sets the vertex half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L300)

#### setPosition

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::setPosition(zVector &pos)
```
{% endcode %}

This method sets position of the vertex.

version 0.0.3

Parameter pos: - vertex position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L307)

#### setColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphVertex::setColor(zColor col)
```
{% endcode %}

This method sets color of the vertex.

version 0.0.3

Parameter col: - vertex color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L314)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphVertex::isActive()
```
{% endcode %}

This method gets if the vertex is active.

bool - true if active else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L325)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphVertex::operator==(zItGraphVertex &other)
```
{% endcode %}

This operator checks for equality of two vertex iterators.

bool - true if equal. version 0.0.3

Parameter other: - input iterator against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L338)

#### operator!=

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphVertex::operator!=(zItGraphVertex &other)
```
{% endcode %}

This operator checks for non equality of two vertex iterators.

bool - true if not equal. version 0.0.3

Parameter other: - input iterator against which the non-equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L347)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zItGraphHalfEdge](api-zitgraphhalfedge.md)

[zObjectGraph](api-zobjectgraph.md)

[zVector](../group-zcore/api-zvector.md)
