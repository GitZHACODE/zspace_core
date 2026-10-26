# zFnGraph

## zSpace::zFnGraph

Declared in include/zspace/zInterface/functionsets/zFnGraph.h. Public class/struct declaration reference.

A graph function set.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L44)

[Base: zSpace::zFn](api-zfn.md)

### Public Attrib

#### planarGraph

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnGraph::planarGraph
```
{% endcode %}

boolean true is its a planar graph

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L61)

#### graphNormal

{% code collapsedlinecount="10" %}
```cpp
zVector zSpace::zFnGraph::graphNormal
```
{% endcode %}

stores normal of the the graph if planar

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L64)

### Public Func

#### zFnGraph

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnGraph::zFnGraph()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L74)

#### zFnGraph

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnGraph::zFnGraph(zObjectGraph &_graphObj, bool _planarGraph=false, zVector _graphNormal=zVector(0, 0, 1))
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter \_graphObj: - input graph object.

Parameter descriptions are absent in the current declaration comments for: \_graphNormal, \_planarGraph. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L81)

#### setObject

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setObject(zObjectGraph &_graphObject)
```
{% endcode %}

Attaches this function set to a graph object.

Parameter descriptions are absent in the current declaration comments for: \_graphObject. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L84)

#### object

{% code collapsedlinecount="10" %}
```cpp
zObjectGraph * zSpace::zFnGraph::object() const
```
{% endcode %}

Returns the attached graph object, or nullptr when detached.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L87)

#### hasObject

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnGraph::hasObject() const
```
{% endcode %}

Returns true when this function set has an attached object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L90)

#### \~zFnGraph

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnGraph::~zFnGraph()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L101)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnGraph::getType() override
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L107)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getBounds(zPoint &minBB, zPoint &maxBB) override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L109)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::clear() override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L111)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::create(zPointArray(&_positions), zIntArray(&edgeConnects), int precision=PRECISION)
```
{% endcode %}

This method creates a graph from the input containers.

version 0.0.2

Parameter \_positions: - container of type zPoint containing position information of vertices.

Parameter edgeConnects: - container of edge connections with vertex ids for each edge

Parameter descriptions are absent in the current declaration comments for: precision. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L123)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::create(zPointArray(&_positions), zIntArray(&edgeConnects), zVector &graphNormal)
```
{% endcode %}

his method creates a graphfrom the input containers.

version 0.0.2

Parameter \_positions: - container of type zPoint containing position information of vertices.

Parameter edgeConnects: - container of edge connections with vertex ids for each edge

Parameter graphNormal: - normal of the plane of the graph.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L132)

#### createFromMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::createFromMesh(zObjectMesh &meshObj, bool excludeBoundary=false)
```
{% endcode %}

This method creates a graph from a mesh.

version 0.0.4

Parameter excludeBoundary: - excludes the boundary edge of the input mesh.

Parameter descriptions are absent in the current declaration comments for: meshObj. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L140)

#### addVertex

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnGraph::addVertex(zPoint &_pos, bool checkDuplicates, zItGraphVertex &vertex)
```
{% endcode %}

This method adds a vertex to the graph.

bool - true if the vertex container is resized. The vertex pointers will need to be computed/ set. version 0.0.2

Parameter \_pos: - zPoint holding the position information of the vertex.

Parameter checkDuplicates: - checks for duplicates if true.

Parameter vertex: - vertex iterator of the new vertex or existing if it is a duplicate.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L151)

#### numVertices

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnGraph::numVertices()
```
{% endcode %}

This method returns the number of vertices in the graph.

number of vertices. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L161)

#### numEdges

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnGraph::numEdges()
```
{% endcode %}

This method returns the number of edges in the graph.

number of edges. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L167)

#### edgeExists

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnGraph::edgeExists(int v1, int v2, int &outEdgeId)
```
{% endcode %}

This method determines if an edge already exists between input vertices.

bool - true if edge exists. version 0.0.5

Parameter v1: - vertex id 1.

Parameter v2: - vertex id 2.

Parameter outEdgeId: - edge id if edge exists, else -1.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L177)

#### vertexExists

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnGraph::vertexExists(zPoint pos, zItGraphVertex &outVertex, int precisionfactor=6)
```
{% endcode %}

This method detemines if a vertex already exists at the input position.

\[out] bool - true if vertex exists else false. version 0.0.2

Parameter pos: - position to be checked.

Parameter precisionfactor: - input precision factor.

Parameter descriptions are absent in the current declaration comments for: outVertex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L187)

#### computeEdgeColorfromVertexColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::computeEdgeColorfromVertexColor()
```
{% endcode %}

This method computes the Edge colors based on the vertex colors.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L197)

#### computeVertexColorfromEdgeColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::computeVertexColorfromEdgeColor()
```
{% endcode %}

This method computes the vertex colors based on the face colors.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L203)

#### averageVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::averageVertices(int numSteps=1)
```
{% endcode %}

This method averages the positions of vertex except for the ones on the boundary.

version 0.0.2

Parameter numSteps: - number of times the averaging is carried out.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L210)

#### setVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setVertexPositions(zPointArray &pos)
```
{% endcode %}

This method sets vertex positions of all the vertices.

version 0.0.2

Parameter pos: - positions contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L221)

#### setVertexColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setVertexColor(zColor col, bool setEdgeColor=false)
```
{% endcode %}

This method sets vertex color of all the vertices to the input color.

version 0.0.2

Parameter col: - input color.

Parameter setEdgeColor: - edge color is computed based on the vertex color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L230)

#### setVertexColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setVertexColors(zColorArray &col, bool setEdgeColor=false)
```
{% endcode %}

This method sets vertex color of all the vertices with the input color contatiner.

version 0.0.2

Parameter col: - input color contatiner. The size of the contatiner should be equal to number of vertices in the graph.

Parameter setEdgeColor: - edge color is computed based on the vertex color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L238)

#### setEdgeColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setEdgeColor(zColor col, bool setVertexColor=false)
```
{% endcode %}

This method sets edge color of all the edges to the input color.

version 0.0.2

Parameter col: - input color.

Parameter setVertexColor: - vertex color is computed based on the edge color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L246)

#### setEdgeColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setEdgeColors(zColorArray &col, bool setVertexColor)
```
{% endcode %}

This method sets edge color of all the edges with the input color contatiner.

version 0.0.2

Parameter col: - input color contatiner. The size of the contatiner should be equal to number of half edges in the graph.

Parameter setVertexColor: - vertex color is computed based on the edge color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L254)

#### setEdgeWeight

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setEdgeWeight(double wt)
```
{% endcode %}

This method sets edge weight of all the edges to the input weight.

version 0.0.2

Parameter wt: - input weight.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L261)

#### setEdgeWeights

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setEdgeWeights(zDoubleArray &wt)
```
{% endcode %}

This method sets edge weights of all the edges with the input weight contatiner.

version 0.0.2

Parameter wt: - input weight contatiner. The size of the contatiner should be equal to number of half edges in the mesh.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L268)

#### getVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getVertexPositions(zPointArray &pos)
```
{% endcode %}

This method gets vertex positions of all the vertices.

version 0.0.2

Parameter pos: - positions contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L279)

#### getRawVertexPositions

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zFnGraph::getRawVertexPositions()
```
{% endcode %}

This method gets pointer to the internal vertex positions container.

zPoint\* - pointer to internal vertex position container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L286)

#### getVertexColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getVertexColors(zColorArray &col)
```
{% endcode %}

This method gets vertex color of all the vertices.

version 0.0.2

Parameter col: - color contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L293)

#### getVertexWeights

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getVertexWeights(zDoubleArray &weights)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: weights. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L295)

#### getRawVertexColors

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zFnGraph::getRawVertexColors()
```
{% endcode %}

This method gets pointer to the internal vertex color container.

zColor\* - pointer to internal vertex color container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L302)

#### getEdgeColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getEdgeColors(zColorArray &col)
```
{% endcode %}

This method gets edge color of all the edges.

version 0.0.2

Parameter col: - color contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L309)

#### getEdgeWeights

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getEdgeWeights(zDoubleArray &weights)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: weights. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L311)

#### getRawEdgeColors

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zFnGraph::getRawEdgeColors()
```
{% endcode %}

This method gets pointer to the internal edge color container.

zColor\* - pointer to internal edge color container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L318)

#### getCenter

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnGraph::getCenter()
```
{% endcode %}

This method computes the center the graph.

zPoint - center . version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L325)

#### getCenters

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getCenters(zHEData type, zPointArray &centers)
```
{% endcode %}

This method computes the centers of a all edges of the graph.

version 0.0.2

Parameter type: - zEdgeData or zHalfEdgeData.

Parameter centers: - vector of centers of type zPoint.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L333)

#### getHalfEdgeLengths

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnGraph::getHalfEdgeLengths(zDoubleArray &halfEdgeLengths)
```
{% endcode %}

This method computes the lengths of all the half edges of a the graph.

double - total edge lengths. version 0.0.2

Parameter halfEdgeLengths: - vector of halfedge lengths.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L341)

#### getEdgeLengths

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnGraph::getEdgeLengths(zDoubleArray &edgeLengths)
```
{% endcode %}

This method computes the lengths of all the edges of a the graph.

double - total edge lengths. version 0.0.2

Parameter descriptions are absent in the current declaration comments for: edgeLengths. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L349)

#### getEdgeData

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getEdgeData(zIntArray &edgeConnects)
```
{% endcode %}

This method stores graph edge connectivity information in the input containers.

version 0.0.2

Parameter edgeConnects: - stores list of esdge connection with vertex ids for each edge.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L356)

#### getDuplicate

{% code collapsedlinecount="10" %}
```cpp
zObjectGraph zSpace::zFnGraph::getDuplicate(bool planarGraph=false, zVector graphNormal=zVector(0, 0, 1))
```
{% endcode %}

This method creates a duplicate of the input graph.

zGraph - duplicate graph. version 0.0.2

Parameter planarGraph: - true if input graph is planar.

Parameter graphNormal: - graph normal if the input graph is planar.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L365)

#### getGraphMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getGraphMesh(zObjectMesh &out, double width=0.5, zVector graphNormal=zVector(0, 0, 1))
```
{% endcode %}

This method returns the mesh created from planar input graph.

version 0.0.2

Parameter width: - offset width from the graph.

Parameter graphNormal: - normal of the plane of the graph.

Parameter descriptions are absent in the current declaration comments for: out. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L375)

#### getGraphEccentricityCenter

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getGraphEccentricityCenter(zItGraphVertexArray &outV)
```
{% endcode %}

This method computes the graph eccentricity.

based on https://codeforces.com/blog/entry/17974 version 0.0.4

Parameter descriptions are absent in the current declaration comments for: outV. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L383)

#### setTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setTransform(zTransform &inTransform, bool decompose=true, bool updatePositions=true) override
```
{% endcode %}

This method sets the object transform to the input transform.

version 0.0.2

Parameter inTransform: - input transform.

Parameter decompose: - decomposes transform to rotation and translation if true.

Parameter updatePositions: - updates the object positions if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L389)

#### setScale

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setScale(zFloat4 &scale) override
```
{% endcode %}

This method sets the scale components of the object.

version 0.0.2

Parameter scale: - input scale values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L391)

#### setRotation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setRotation(zFloat4 &rotation, bool appendRotations=false) override
```
{% endcode %}

This method sets the rotation components of the object.

version 0.0.2

Parameter rotation: - input rotation values.

Parameter append: - true if the input values are added to the existing rotations.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L393)

#### setTranslation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setTranslation(zVector &translation, bool appendTranslations=false) override
```
{% endcode %}

This method sets the translation components of the object.

version 0.0.2

Parameter translation: - input translation vector.

Parameter append: - true if the input values are added to the existing translation.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L395)

#### setPivot

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::setPivot(zVector &pivot) override
```
{% endcode %}

This method sets the pivot of the object.

version 0.0.2

Parameter pivot: - input pivot position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L397)

#### getTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnGraph::getTransform(zTransform &transform) override
```
{% endcode %}

This method gets the object transform.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: transform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnGraph.h#L399)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zItGraphVertex](api-zitgraphvertex.md)

[zObjectGraph](api-zobjectgraph.md)

[zObjectMesh](api-zobjectmesh.md)

[zVector](../group-zcore/api-zvector.md)
