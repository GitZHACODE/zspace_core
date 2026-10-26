# zItGraphEdge

## zSpace::zItGraphEdge

Declared in include/zspace/zInterface/iterators/zItGraph.h. Public class/struct declaration reference.

The graph edge iterator class.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L377)

[Base: zSpace::zIt](api-zit.md)

### Public Func

#### zItGraphEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItGraphEdge::zItGraphEdge()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L398)

#### zItGraphEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItGraphEdge::zItGraphEdge(zObjectGraph &_graphObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_graphObj: - input graph object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L405)

#### zItGraphEdge

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItGraphEdge::zItGraphEdge(zObjectGraph &_graphObj, int _index)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_graphObj: - input graph object.

Parameter \_index: - input index in graph edge list.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L413)

#### begin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::begin() override
```
{% endcode %}

This method sets the iterator pointing to first element the contatiner.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L419)

#### operator++

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::operator++(int) override
```
{% endcode %}

This method advance to the next element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L421)

#### operator--

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::operator--(int) override
```
{% endcode %}

This method advance to the previous element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L423)

#### end

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphEdge::end() override
```
{% endcode %}

This method indicates if all the elements are tranversed.

bool - true if all the elements are tranversed. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L425)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::reset() override
```
{% endcode %}

This method resets the iterator to the first element.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L427)

#### size

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItGraphEdge::size() override
```
{% endcode %}

This method gets the size f the element container.

int - size of element container. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L429)

#### deactivate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::deactivate() override
```
{% endcode %}

This method deactivates the element attached to the iterator.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L431)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::getVertices(zItGraphVertexArray &verticies)
```
{% endcode %}

This method gets the the vertices attached to the iterator.

version 0.0.3

Parameter verticies: - vector of vertex iterators.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L442)

#### getVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::getVertices(zIntArray &vertexIndicies)
```
{% endcode %}

This method gets the indicies of the vertices attached to the iterator.

version 0.0.3

Parameter vertexIndicies: - vector of vertex indicies.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L449)

#### getVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::getVertexPositions(vector< zVector > &vertPositions)
```
{% endcode %}

This method gets the vertex positions attached to the iterator.

version 0.0.3

Parameter vertPositions: - vector of vertex positions.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L456)

#### getCenter

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItGraphEdge::getCenter()
```
{% endcode %}

This method computes the centers of a the edge.

zVector - center. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L463)

#### getVector

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zItGraphEdge::getVector()
```
{% endcode %}

This method gets the vector of the edge.

zVector - edge vector. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L470)

#### getLength

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zItGraphEdge::getLength()
```
{% endcode %}

This method gets the edge length of the edge.

double - edge length. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L477)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItGraphEdge::getId()
```
{% endcode %}

This method gets the index of the iterator.

int - iterator index version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L488)

#### getHalfEdge

{% code collapsedlinecount="10" %}
```cpp
zItGraphHalfEdge zSpace::zItGraphEdge::getHalfEdge(int _index)
```
{% endcode %}

This method gets the half edge attached to the edge.

zItGraphHalfEdge - half edge iterator version 0.0.3

Parameter \_index: - input index ( 0 or 1).

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L496)

#### getColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zItGraphEdge::getColor()
```
{% endcode %}

This method gets color of the edge.

zColor - edge color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L503)

#### getRawColor

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zItGraphEdge::getRawColor()
```
{% endcode %}

This method gets pointer to the color of the edge.

zColor\* - edge color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L510)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::setId(int _id)
```
{% endcode %}

This method sets the index of the iterator.

version 0.0.3

Parameter \_id: - input index

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L521)

#### setHalfEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::setHalfEdge(zItGraphHalfEdge &he, int _index)
```
{% endcode %}

This method sets the edge half edge to the input half edge.

version 0.0.3

Parameter he: - input half edge iterator

Parameter \_index: - input index ( 0 or 1).

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L529)

#### setColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::setColor(zColor col)
```
{% endcode %}

This method sets color of the edge.

version 0.0.3

Parameter col: - input color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L536)

#### setWeight

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItGraphEdge::setWeight(double wt)
```
{% endcode %}

This method sets display weight of the edge.

version 0.0.3

Parameter wt: - input weight.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L543)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphEdge::isActive()
```
{% endcode %}

This method gets if the vertex is active.

bool - true if active else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L554)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphEdge::operator==(zItGraphEdge &other)
```
{% endcode %}

This operator checks for equality of two edge iterators.

bool - true if equal. version 0.0.3

Parameter other: - input iterator against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L566)

#### operator!=

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItGraphEdge::operator!=(zItGraphEdge &other)
```
{% endcode %}

This operator checks for non equality of two edge iterators.

bool - true if not equal. version 0.0.3

Parameter other: - input iterator against which the non-equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItGraph.h#L574)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zItGraphHalfEdge](api-zitgraphhalfedge.md)

[zObjectGraph](api-zobjectgraph.md)

[zVector](../group-zcore/api-zvector.md)
