# zFnMesh

## zSpace::zFnMesh

Declared in include/zspace/zInterface/functionsets/zFnMesh.h. Public class/struct declaration reference.

A mesh function set.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L45)

[Base: zSpace::zFn](api-zfn.md)

### Public Func

#### zFnMesh

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMesh::zFnMesh()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L63)

#### zFnMesh

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMesh::zFnMesh(zObjectMesh &_meshObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.2

Parameter \_meshObj: - input mesh object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L70)

#### setObject

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setObject(zObjectMesh &_meshObject)
```
{% endcode %}

Attaches this function set to a mesh object.

Parameter descriptions are absent in the current declaration comments for: \_meshObject. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L73)

#### object

{% code collapsedlinecount="10" %}
```cpp
zObjectMesh * zSpace::zFnMesh::object() const
```
{% endcode %}

Returns the attached mesh object, or nullptr when detached.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L76)

#### hasObject

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMesh::hasObject() const
```
{% endcode %}

Returns true when this function set has an attached object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L79)

#### \~zFnMesh

{% code collapsedlinecount="10" %}
```cpp
zSpace::zFnMesh::~zFnMesh()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L89)

#### getType

{% code collapsedlinecount="10" %}
```cpp
zFnType zSpace::zFnMesh::getType() override
```
{% endcode %}

This method return the function set type.

zFnType - type of function set. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L95)

#### getBounds

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getBounds(zPoint &minBB, zPoint &maxBB) override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

Parameter minBB: - output minimum bounding box.

Parameter maxBB: - output maximum bounding box.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L97)

#### clear

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::clear() override
```
{% endcode %}

This method clears the dynamic and array memory the object holds.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L99)

#### graphMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::graphMesh(zObjectGraph &graph, double offset)
```
{% endcode %}

Replace this mesh with a joined quad ribbon around a graph. Offsets are measured on each side in XY; graph elevations are retained. Bends and branches share miter corners. Terminal ends remain open. Throws for nonpositive/nonfinite offsets, vertical/collapsed members, overlapping outgoing directions, or offsets that invert ribbon faces. Isolated vertices are omitted. The graph and this mesh are unchanged on failure.

Parameter descriptions are absent in the current declaration comments for: graph, offset. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L112)

#### reserve

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::reserve(int _n_v, int _n_e, int _n_f)
```
{% endcode %}

This method reserves memorm for the mesh element containers.

version 0.0.2

Parameter \_n\_v: - size of vertices.

Parameter \_n\_e: - size of edges.

Parameter \_n\_f: - size of faces.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L121)

#### create

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::create(zPointArray &_positions, zIntArray &polyCounts, zIntArray &polyConnects)
```
{% endcode %}

This method creates a mesh from the input containers.

version 0.0.2

Parameter \_positions: - container of type zPoint containing position information of vertices.

Parameter polyCounts: - container of type integer with number of vertices per polygon.

Parameter polyConnects: - polygon connection list with vertex ids for each face.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L130)

#### numVertices

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnMesh::numVertices()
```
{% endcode %}

This method returns the number of vertices in the mesh.

int - number of vertices. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L140)

#### numEdges

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnMesh::numEdges()
```
{% endcode %}

This method returns the number of half edges in the mesh.

int - number of edges. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L146)

#### edgeExists

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMesh::edgeExists(int v1, int v2, int &outEdgeId)
```
{% endcode %}

This method determines if an edge already exists between input vertices.

bool - true if edge exists. version 0.0.5

Parameter v1: - vertex id 1.

Parameter v2: - vertex id 2.

Parameter outEdgeId: - edge id if edge exists, else -1.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L156)

#### numPolygons

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zFnMesh::numPolygons()
```
{% endcode %}

This method returns the number of polygons in the mesh.

int - number of polygons version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L163)

#### vertexExists

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMesh::vertexExists(zPoint pos, zItMeshVertex &outVertex, int precisionfactor=6)
```
{% endcode %}

This method detemines if a vertex already exists at the input position.

\[out] bool - true if vertex exists else false. version 0.0.2

Parameter pos: - position to be checked.

Parameter precisionfactor: - input precision factor.

Parameter descriptions are absent in the current declaration comments for: outVertex. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L173)

#### getTopologicalLaplacian

{% code collapsedlinecount="10" %}
```cpp
zSparseMatrix zSpace::zFnMesh::getTopologicalLaplacian()
```
{% endcode %}

This method computes the mesh laplcaian operator.

Based on http://www.cs.jhu.edu/\~misha/Fall07/Papers/Nealen06.pdf and http://mgarland.org/files/papers/ssq.pdf MatrixXd - output mesh laplacian matrix. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L181)

#### getEdgeCotangentWeight

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnMesh::getEdgeCotangentWeight(zItMeshHalfEdge &he)
```
{% endcode %}

This method returns the cotangent weight of the indexed half edge.

double - output edge contangent weight. version 0.0.2

Parameter descriptions are absent in the current declaration comments for: he. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L189)

#### checkPointInConvexHull

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMesh::checkPointInConvexHull(zPoint &pt)
```
{% endcode %}

This method returns a boolean if the input point in inside the convex hull.

bool - true if point is inside the convex hull. version 0.0.4

Parameter pt: - point to check for.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L197)

#### computeEdgeColorfromVertexColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::computeEdgeColorfromVertexColor()
```
{% endcode %}

This method computes the Edge colors based on the vertex colors.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L207)

#### computeVertexColorfromEdgeColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::computeVertexColorfromEdgeColor()
```
{% endcode %}

This method computes the vertex colors based on the face colors.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L213)

#### computeFaceColorfromVertexColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::computeFaceColorfromVertexColor()
```
{% endcode %}

This method computes the face colors based on the vertex colors.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L219)

#### computeVertexColorfromFaceColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::computeVertexColorfromFaceColor()
```
{% endcode %}

This method computes the vertex colors based on the face colors.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L225)

#### smoothColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::smoothColors(int smoothVal=1, zHEData type=zVertexData)
```
{% endcode %}

This method smoothens the color attributes.

version 0.0.2

Parameter smoothVal: - number of iterations to run the smooth operation.

Parameter type: - zVertexData or zEdgeData or zFaceData.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L232)

#### computeVertexNormalfromFaceNormal

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::computeVertexNormalfromFaceNormal()
```
{% endcode %}

This method computes the vertex normals based on the face normals.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L238)

#### computeMeshNormals

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::computeMeshNormals()
```
{% endcode %}

This method computes the normals assoicated with vertices and polygon faces .

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L244)

#### averageVertices

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::averageVertices(int numSteps=1)
```
{% endcode %}

This method averages the positions of vertex except for the ones on the boundary.

version 0.0.2

Parameter numSteps: - number of times the averaging is carried out.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L251)

#### makeConvexHull

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::makeConvexHull(zPointArray &pts)
```
{% endcode %}

This method makes a convex hull from the input points.

Based on https://github.com/karimnaaji/3d-quickhull version 0.0.4

Parameter pts: - array of points

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L259)

#### isTriMesh

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMesh::isTriMesh()
```
{% endcode %}

This method checks if the mesh is a triangle mesh.

bool - true if its a triangle mesh . version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L266)

#### isQuadMesh

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zFnMesh::isQuadMesh()
```
{% endcode %}

This method checks if the mesh is a quad mesh.

bool - true if its a quad mesh . version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L273)

#### computeEdgeLoop

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::computeEdgeLoop(zItMeshHalfEdge &heStart, vector< zItMeshHalfEdge > &_heLoop)
```
{% endcode %}

This method computes the splits points on the input edge loop.

version 0.0.4 works only with quad meshes

Parameter heStart: - input start halfedge.

Parameter \_heLoop: - output container of halfedges, which make a continuous loop.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L282)

#### computeEdgeLoop\_Split

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::computeEdgeLoop_Split(vector< zItMeshHalfEdge > &_heLoop, int divs, vector< zPoint > &divPoints)
```
{% endcode %}

This method computes the splits points on the input edge loop.

version 0.0.4

Parameter \_heLoop: - input container of halfedges, which make a continuous loop.

Parameter divs: - input number of divisions.

Parameter divPoints: - output contatiner of split points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L292)

#### computeEdgeLoop\_SplitLength

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::computeEdgeLoop_SplitLength(vector< zItMeshHalfEdge > &_heLoop, float divLength, vector< zPoint > &divPoints)
```
{% endcode %}

This method computes the splits points on the input edge loop.

version 0.0.4

Parameter \_heLoop: - input container of halfedges, which make a continuous loop.

Parameter divLength: - input length of divisions.

Parameter divPoints: - output contatiner of split points.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L301)

#### computeEdgeLoop\_Length

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zFnMesh::computeEdgeLoop_Length(vector< zItMeshHalfEdge > &_heLoop)
```
{% endcode %}

This method computes the length on the input edge loop.

float - output length of edge loop. version 0.0.4

Parameter \_heLoop: - input container of halfedges, which make a continuous loop.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L309)

#### setVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setVertexPositions(zPointArray &pos)
```
{% endcode %}

This method sets vertex positions of all the vertices.

version 0.0.2

Parameter pos: - positions contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L320)

#### setVertexColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setVertexColor(zColor col, bool setFaceColor=false)
```
{% endcode %}

This method sets vertex color of all the vertices to the input color.

version 0.0.2

Parameter col: - input color.

Parameter setFaceColor: - face color is computed based on the vertex color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L328)

#### setVertexColorsfromScalars

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setVertexColorsfromScalars(zScalarArray &vertexScalars, bool setFaceColor=false)
```
{% endcode %}

This method sets vertex color of all the vertices with the input color contatiner.

version 0.0.2

Parameter vertexScalars: - input scalar values per vertex of the mesh.

Parameter setFaceColor: - face color is computed based on the vertex color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L336)

#### setVertexColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setVertexColors(zColorArray &col, bool setFaceColor=false)
```
{% endcode %}

This method sets vertex color of all the vertices with the input color contatiner.

version 0.0.2

Parameter col: - input color contatiner. The size of the contatiner should be equal to number of vertices in the mesh.

Parameter setFaceColor: - face color is computed based on the vertex color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L344)

#### setVertexWeight

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setVertexWeight(double wt)
```
{% endcode %}

This method sets vertex weight of all the vertices to the input weight.

version 0.0.2

Parameter wt: - input wight.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L351)

#### setVertexWeights

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setVertexWeights(zDoubleArray &wt)
```
{% endcode %}

This method sets vertex weights of all the vertices with the input weight contatiner.

version 0.0.2

Parameter wt: - input weight contatiner. The size of the contatiner should be equal to number of vertices in the mesh.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L358)

#### setFaceColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setFaceColor(zColor col, bool setVertexColor=false)
```
{% endcode %}

This method sets face color of all the faces to the input color.

version 0.0.2

Parameter col: - input color.

Parameter setVertexColor: - vertex color is computed based on the face color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L366)

#### setFaceColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setFaceColors(zColorArray &col, bool setVertexColor=false)
```
{% endcode %}

This method sets face color of all the faces to the input color contatiner.

version 0.0.2

Parameter col: - input color contatiner. The size of the contatiner should be equal to number of faces in the mesh.

Parameter setVertexColor: - vertex color is computed based on the face color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L374)

#### setFaceColorOcclusion

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setFaceColorOcclusion(zVector &lightVec, bool setVertexColor=false)
```
{% endcode %}

This method sets face color of all the faces based on face normal angle to the input light vector.

version 0.0.2

Parameter lightVec: - input light vector.

Parameter setVertexColor: - vertex color is computed based on the face color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L382)

#### setFaceNormals

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setFaceNormals(zVector &fNormal)
```
{% endcode %}

This method sets face normals of all the faces to the input normal.

version 0.0.2

Parameter fNormal: - input normal.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L389)

#### setFaceNormals

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setFaceNormals(zVectorArray &fNormals)
```
{% endcode %}

This method sets face normals of all the faces to the input normals contatiner.

version 0.0.2

Parameter fNormals: - input normals contatiner. The size of the contatiner should be equal to number of faces in the mesh.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L396)

#### setEdgeColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setEdgeColor(zColor col, bool setVertexColor=false)
```
{% endcode %}

This method sets edge color of all the edges to the input color.

version 0.0.2

Parameter col: - input color.

Parameter setVertexColor: - vertex color is computed based on the edge color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L404)

#### setEdgeColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setEdgeColors(zColorArray &col, bool setVertexColor)
```
{% endcode %}

This method sets edge color of all the edges with the input color contatiner.

version 0.0.2

Parameter col: - input color contatiner. The size of the contatiner should be equal to number of half edges in the mesh.

Parameter setVertexColor: - vertex color is computed based on the edge color if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L412)

#### setEdgeWeight

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setEdgeWeight(double wt)
```
{% endcode %}

This method sets edge weight of all the edges to the input weight.

version 0.0.2

Parameter wt: - input wight.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L419)

#### setEdgeWeight

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setEdgeWeight(int index, double wt)
```
{% endcode %}

This method sets edge weight of of the input edge and its symmetry edge to the input weight.

version 0.0.2

Parameter index: - input edge index.

Parameter wt: - input wight.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L427)

#### setEdgeWeights

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setEdgeWeights(zDoubleArray &wt)
```
{% endcode %}

This method sets edge weights of all the edges with the input weight contatiner.

version 0.0.2

Parameter wt: - input weight contatiner. The size of the contatiner should be equal to number of half edges in the mesh.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L434)

#### getVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getVertexPositions(zPointArray &pos, bool exludeCornerVertices=false)
```
{% endcode %}

This method gets vertex positions of all the vertices.

version 0.0.4

Parameter pos: - positions contatiner.

Parameter exludeCornerVertices: - boolean to exclude corner vertices. Meaning vertices with valence 2.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L446)

#### getRawVertexPositions

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zFnMesh::getRawVertexPositions()
```
{% endcode %}

This method gets pointer to the internal vertex positions container.

zVector\* - pointer to internal vertex position container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L453)

#### getRawVertexPositions

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getRawVertexPositions(float **points)
```
{% endcode %}

This method gets pointer to the internal vertex positions container.

The points are stored in a single contiguous array of doubles, first by coordinate, then by element (xyzxyz...) There are three coordinate values, so each vertex is stored in 24 bytes of data, and the total array length is 24\*numVertices() bytes. points to be initialised to three times number of vertices, before calling the method. ( points = new float\*\[numVertices \* 3] ) version 0.0.2

Parameter points: - pointer to internal vertex position container.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L462)

#### getVertexNormals

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getVertexNormals(zVectorArray &norm)
```
{% endcode %}

This method gets vertex positions of all the vertices.

version 0.0.2

Parameter norm: - normals contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L469)

#### getRawVertexNormals

{% code collapsedlinecount="10" %}
```cpp
zVector * zSpace::zFnMesh::getRawVertexNormals()
```
{% endcode %}

This method gets pointer to the internal vertex normal container.

zVector\* - pointer to internal vertex normal container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L476)

#### getRawVertexNormals

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getRawVertexNormals(float **normals)
```
{% endcode %}

This method gets pointer to the internal vertex normal container.

The normals are stored in a single contiguous array of doubles, first by coordinate, then by element (xyzxyz...) There are three coordinate values, so each vertex is stored in 24 bytes of data, and the total array length is 24\*numVertices() bytes. normals to be initialised to three times number of vertices, before calling the method. ( normals = new float\*\[numVertices \* 3] ) version 0.0.2

Parameter normals: - pointer to internal vertex normal container.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L485)

#### getVertexColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getVertexColors(zColorArray &col)
```
{% endcode %}

This method gets vertex color of all the vertices.

version 0.0.2

Parameter col: - color contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L492)

#### getVertexWeights

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getVertexWeights(zDoubleArray &weights)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: weights. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L494)

#### getRawVertexColors

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zFnMesh::getRawVertexColors()
```
{% endcode %}

This method gets pointer to the internal vertex color container.

zColor\* - pointer to internal vertex color container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L501)

#### getEdgeColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getEdgeColors(zColorArray &col)
```
{% endcode %}

This method gets edge color of all the edges.

version 0.0.2

Parameter col: - color contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L508)

#### getEdgeWeights

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getEdgeWeights(zDoubleArray &weights)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: weights. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L510)

#### getRawEdgeColors

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zFnMesh::getRawEdgeColors()
```
{% endcode %}

This method gets pointer to the internal edge color container.

zColor\* - pointer to internal edge color container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L517)

#### getFaceNormals

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getFaceNormals(zVectorArray &norm)
```
{% endcode %}

This method gets face normals of all the faces.

version 0.0.2

Parameter norm: - normals contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L524)

#### getRawFaceNormals

{% code collapsedlinecount="10" %}
```cpp
zVector * zSpace::zFnMesh::getRawFaceNormals()
```
{% endcode %}

This method gets pointer to the internal face normal container.

zVector\* - pointer to internal face normal container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L531)

#### getFaceColors

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getFaceColors(zColorArray &col)
```
{% endcode %}

This method gets face color of all the faces.

version 0.0.2

Parameter col: - color contatiner.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L538)

#### getRawFaceColors

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zFnMesh::getRawFaceColors()
```
{% endcode %}

This method gets pointer to the internal face color container.

zColor\* - pointer to internal face color container. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L545)

#### getCenter

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zFnMesh::getCenter()
```
{% endcode %}

This method computes the center of the mesh.

zPoint - center . version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L552)

#### getCenters

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getCenters(zHEData type, zPointArray &centers)
```
{% endcode %}

This method computes the centers of a all edges or faces of the mesh.

version 0.0.2

Parameter type: - zEdgeData or zFaceData.

Parameter centers: - vector of centers of type zPoint.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L560)

#### getDualMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getDualMesh(zObjectMesh &dualMeshObj, zIntArray &inEdge_dualEdge, zIntArray &dualEdge_inEdge, bool excludeBoundary, bool keepExistingBoundary=false, bool rotate90=false)
```
{% endcode %}

This method returns the dual mesh of the input mesh.

version 0.0.2

Parameter dualMeshObj: - output dual mesh object.

Parameter inEdge\_dualEdge: - container storing the corresponding dual mesh edge per input mesh edge.

Parameter dualEdge\_inEdge: - container storing the corresponding input mesh edge per dual mesh edge.

Parameter excludeBoundary: - true if boundary faces are to be ignored.

Parameter rotate90: - true if dual mesh is to be roatated by 90. Generally used for planar mesh for 2D graphic statics application.

Parameter descriptions are absent in the current declaration comments for: keepExistingBoundary. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L571)

#### getDualGraph

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getDualGraph(zObjectGraph &dualGraphObj, zIntArray &inEdge_dualEdge, zIntArray &dualEdge_inEdge, bool excludeBoundary=false, bool PlanarMesh=false, bool rotate90=false)
```
{% endcode %}

This method returns the dual graph of the input mesh.

version 0.0.2

Parameter dualGraphObj: - output dual graph object.

Parameter inEdge\_dualEdge: - container storing the corresponding dual graph edge per input mesh edge.

Parameter dualEdge\_inEdge: - container storing the corresponding input mesh edge per dual graph edge.

Parameter excludeBoundary: - true if boundary faces are to be ignored.

Parameter PlanarMesh: - true if input mesh is planar.

Parameter rotate90: - true if dual mesh is to be roatated by 90.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L583)

#### getRainflowGraph

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getRainflowGraph(zObjectGraph &rainflowGraphObj, bool excludeBoundary=false)
```
{% endcode %}

This method returns the rainflow graph of the input mesh.

version 0.0.2

Parameter rainflowGraphObj: - output rainflow graph object.

Parameter excludeBoundary: - true if boundary vertices are to be ignored.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L591)

#### getMeshTriangles

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getMeshTriangles(vector< zIntArray > &faceTris)
```
{% endcode %}

This method computes the triangles of each face of the input mesh and stored in 2 dimensional container.

version 0.0.2

Parameter faceTris: - container of index array of each triangle associated per face.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L599)

#### getMeshVolume

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnMesh::getMeshVolume()
```
{% endcode %}

This method computes the volume of the input mesh.

double - volume of input mesh. version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L606)

#### getMeshFaceVolumes

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getMeshFaceVolumes(vector< zIntArray > &faceTris, zPointArray &fCenters, zDoubleArray &faceVolumes, bool absoluteVolumes=true)
```
{% endcode %}

This method computes the volume of the polyhedras formed by the face vertices and the face center for each face of the mesh.

version 0.0.2

Parameter faceTris: - container of index array of each triangle associated per face. It will be computed if the container is empty.

Parameter fCenters: - container of centers associated per face. It will be computed if the container is empty.

Parameter faceVolumes: - container of volumes of the polyhedras formed by the face vertices and the face center per face.

Parameter absoluteVolumes: - will make all the volume values positive if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L616)

#### getPrincipalCurvatures

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getPrincipalCurvatures(zCurvatureArray &vertexCurvatures, zVectorArray &pVector1, zVectorArray &pVector2)
```
{% endcode %}

This method computes the principal curvatures of the mesh vertices.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: pVector1, pVector2, vertexCurvatures. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L623)

#### getGaussianCurvature

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getGaussianCurvature(zDoubleArray &vertexCurvatures)
```
{% endcode %}

This method computes the gaussian curvature of the mesh vertices.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: vertexCurvatures. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L630)

#### getPlanarityDeviationPerFace

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getPlanarityDeviationPerFace(zDoubleArray &planarityDevs, zPlanarSolverType type, bool colorFaces=false, double tolerance=EPS)
```
{% endcode %}

This method computes the planarity deviation of the mesh faces.

version 0.0.4

Parameter planarityDevs: - container of planarity deviations per face.

Parameter type: - input planarity type for tolernace check - zQuadPlanar or zVolumePlanar.

Parameter colorFaces: - input boolean if the faces are to be colored.

Parameter tolerance: - input tolerance for planarity.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L640)

#### getEdgeDihedralAngles

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getEdgeDihedralAngles(zDoubleArray &dihedralAngles)
```
{% endcode %}

This method computes the dihedral angle per edge of mesh.

version 0.0.2

Parameter dihedralAngles: - vector of edge dihedralAngles.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L647)

#### getHalfEdgeLengths

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnMesh::getHalfEdgeLengths(zDoubleArray &halfEdgeLengths)
```
{% endcode %}

This method computes the lengths of all the half edges of a the mesh.

double - total edge lengths. version 0.0.2

Parameter halfEdgeLengths: - vector of halfedge lengths.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L655)

#### getEdgeLengths

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnMesh::getEdgeLengths(zDoubleArray &edgeLengths)
```
{% endcode %}

This method computes the lengths of all the edges of a the mesh.

double - total edge lengths. version 0.0.2

Parameter edgeLengths: - vector of edge lengths.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L663)

#### getVertexAreas

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnMesh::getVertexAreas(zPointArray &faceCenters, zPointArray &edgeCenters, zFloatArray &vertexAreas)
```
{% endcode %}

This method computes the area around every vertex of a mesh based on face centers.

double - total area of the mesh. version 0.0.2

Parameter faceCenters: - vector of face centers of type zVector.

Parameter edgeCenters: - vector of edge centers of type zVector.

Parameter vertexAreas: - vector of vertex Areas.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L674)

#### getPlanarFaceAreas

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zFnMesh::getPlanarFaceAreas(zDoubleArray &faceAreas)
```
{% endcode %}

This method computes the area of every face of the mesh. It works only if the faces are planar.

Based on http://geomalgorithms.com/a01-\_area.html. double - total area of the mesh. version 0.0.2

Parameter faceAreas: - vector of vertex Areas.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L683)

#### getPolygonData

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getPolygonData(zIntArray &polyConnects, zIntArray &polyCounts)
```
{% endcode %}

This method stores mesh face connectivity information in the input containers.

version 0.0.2

Parameter polyConnects: - stores list of polygon connection with vertex ids for each face.

Parameter polyCounts: - stores number of vertices per polygon.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L691)

#### getMatrices\_trimesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getMatrices_trimesh(MatrixXd &V, MatrixXi &F)
```
{% endcode %}

This method stores triangle mesh information in the input matrices.

version 0.0.4

Parameter V: - matrix storing vertex positions.

Parameter F: - matrix storing list of triangle connection with vertex ids for each face.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L699)

#### getMatrices\_quadmesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getMatrices_quadmesh(MatrixXd &V, MatrixXi &F)
```
{% endcode %}

This method stores quad mesh information in the input matrices.

version 0.0.4

Parameter V: - matrix storing vertex positions.

Parameter F: - matrix storing list of quad connection with vertex ids for each face.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L707)

#### getEdgeData

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getEdgeData(zIntArray &edgeConnects, bool excludeBoundary=false)
```
{% endcode %}

This method stores mesh edge connectivity information in the input containers.

version 0.0.4

Parameter edgeConnects: - stores list of esdge connection with vertex ids for each edge.

Parameter excludeBoundary: - excludes the boundary edge of the input mesh.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L715)

#### getDuplicate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getDuplicate(zObjectMesh &out)
```
{% endcode %}

This method creates a duplicate of the mesh.

version 0.0.2

Parameter out: - duplicate mesh object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L722)

#### splitMesh\_Mixed

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::splitMesh_Mixed(zPointArray &splitPlanes_origins, zVectorArray &splitPlanes_normals, zObjectMesh &resultMesh)
```
{% endcode %}

This method splits the triangle-Quad mixed mesh with the input planes.

version 0.0.4 doensn't work with ngon meshes

Parameter resultMesh: - output split mesh.

Parameter descriptions are absent in the current declaration comments for: splitPlanes\_normals, splitPlanes\_origins. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L735)

#### splitMesh\_Quad

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::splitMesh_Quad(vector< zPlane > &splitPlanes, bool invertMesh, zObjectMesh &resultMesh)
```
{% endcode %}

This method splits the quad mesh with the input planes.

version 0.0.4 works only with quad meshes.

Parameter splitPlanes: - input split planes.

Parameter invertMesh: - true if inverted mesh is required.

Parameter resultMesh: - output split mesh.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L745)

#### getIsoContour

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getIsoContour(zScalarArray &vertexScalars, float threshold, zPointArray &positions, zIntArray &edgeConnects, zColorArray &cVertexColor, int precision=PRECISION, float distTolerance=distanceTolerance, bool selectedFaces=false, zColor selectedFaceColor=zColor())
```
{% endcode %}

This method creates a isocontour graph from the input field mesh at the given field threshold.

Clips polygon edges directly from the face-list representation. version 0.0.4 Works with triangles, quads, and simple polygons.

Parameter vertexScalars: - scalar values per vertex of the mesh.

Parameter threshold: - input contour threshold value.

Parameter descriptions are absent in the current declaration comments for: cVertexColor, distTolerance, edgeConnects, positions, precision, selectedFaceColor, selectedFaces. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L756)

#### getIsoMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getIsoMesh(zScalarArray &vertexScalars, float threshold, bool invertMesh, zObjectMesh &coutourMeshObj)
```
{% endcode %}

This method creates a isomesh from the input field mesh at the given field threshold.

Clips each face against the scalar threshold using the face-list representation. version 0.0.4 Works with triangles, quads, and simple polygons.

Parameter vertexScalars: - scalar values per vertex of the mesh.

Parameter threshold: - input contour threshold value.

Parameter invertMesh: - true if inverted mesh is required.

Parameter coutourMeshObj: - isosurface mesh.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L768)

#### getIsoMesh\_mixed

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getIsoMesh_mixed(zScalarArray &vertexScalars, float threshold, bool invertMesh, zObjectMesh &coutourMeshObj)
```
{% endcode %}

This method creates a isoband mesh from the input field mesh at the given field threshold.

based on https://en.wikipedia.org/wiki/Marching\_squares. version 0.0.4 Works with triangles, quads, and simple polygons.

Parameter vertexScalars: - scalar values per vertex of the mesh.

Parameter threshold: - input contour threshold value.

Parameter invertMesh: - true if inverted mesh is required.

Parameter coutourMeshObj: - isosurface mesh.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L780)

#### getIsobandMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getIsobandMesh(zScalarArray &vertexScalars, float inThresholdLow, float inThresholdHigh, zObjectMesh &coutourMeshObj)
```
{% endcode %}

This method creates a isoband mesh from the input field mesh at the given field threshold.

based on https://en.wikipedia.org/wiki/Marching\_squares. version 0.0.2 Preserves interpolated vertex colors when available.

Parameter coutourMeshObj: - isoband mesh.

Parameter inThresholdLow: - field threshold domain minimum.

Parameter inThresholdHigh: - field threshold domain maximum.

Parameter descriptions are absent in the current declaration comments for: vertexScalars. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L793)

#### faceTriangulate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::faceTriangulate(zItMeshFace &face)
```
{% endcode %}

This method triangulates the input face of the mesh.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: face. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L804)

#### triangulate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::triangulate()
```
{% endcode %}

This method triangulates the input mesh.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L810)

#### unroll

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::unroll(zObjectMesh &output, bool triangulateNonPlanar=true, double tolerance=1e-5)
```
{% endcode %}

Unfold a connected developable strip into XY, preserving edge lengths. Nonplanar faces are triangulated when requested. Throws on incompatible cycles.

Parameter descriptions are absent in the current declaration comments for: output, tolerance, triangulateNonPlanar. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L814)

#### subdivide

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::subdivide(int numDivisions)
```
{% endcode %}

This method subdivides all the faces and edges of the mesh.

version 0.0.2

Parameter numDivisions: - number of subdivision to be done on the mesh.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L821)

#### smoothMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::smoothMesh(int numDivisions=1, bool smoothCorner=false)
```
{% endcode %}

This method applies Catmull-Clark subdivision to the mesh.

Based on https://en.wikipedia.org/wiki/Catmull%E2%80%93Clark\_subdivision\_surface and https://rosettacode.org/wiki/Catmull%E2%80%93Clark\_subdivision\_surface. https://graphics.pixar.com/library/Geri/paper.pdf., http://www.multires.caltech.edu/pubs/fastsubd.pdf version 0.0.2

Parameter numDivisions: - number of subdivision to be done on the mesh.

Parameter smoothCorner: - corner vertex( only 2 Connected Edges) is also smothed if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L831)

#### extrudeMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::extrudeMesh(float extrudeThickness, zObjectMesh &outMesh, bool thicknessTris=false)
```
{% endcode %}

This method returns an extruded mesh from the input mesh.

version 0.0.2

Parameter extrudeThickness: - extrusion thickness.

Parameter thicknessTris: - true if the cap needs to be triangulated. \retrun zMesh - extruded mesh.

Parameter descriptions are absent in the current declaration comments for: outMesh. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L840)

#### extrudeVariableMesh

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::extrudeVariableMesh(zFloatArray extrudeThickness, zObjectMesh &outMesh, bool bothSides, bool thicknessTris=false)
```
{% endcode %}

This method returns an extruded mesh from the input mesh.

version 0.0.2

Parameter extrudeThickness: - input contatiner of extrusion thickness per vertex.

Parameter thicknessTris: - true if the cap needs to be triangulated. \retrun zMesh - extruded mesh.

Parameter descriptions are absent in the current declaration comments for: bothSides, outMesh. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L849)

#### extrudeBoundaryEdge

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::extrudeBoundaryEdge(float extrudeThickness, zObjectMesh &outMesh, bool thicknessTris=false)
```
{% endcode %}

This method returns an extruded mesh of the boundary edgesd of the input mesh.

version 0.0.2

Parameter extrudeThickness: - extrusion thickness.

Parameter thicknessTris: - true if the cap needs to be triangulated. \retrun zMesh - extruded mesh.

Parameter descriptions are absent in the current declaration comments for: outMesh. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L858)

#### extrude

{% code collapsedlinecount="10" %}
```cpp
zObjectMesh zSpace::zFnMesh::extrude(float extrudeThickness, bool thicknessTris=false)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: extrudeThickness, thicknessTris. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L860)

#### setTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setTransform(zTransform &inTransform, bool decompose=true, bool updatePositions=true) override
```
{% endcode %}

This method sets the object transform to the input transform.

version 0.0.2

Parameter inTransform: - input transform.

Parameter decompose: - decomposes transform to rotation and translation if true.

Parameter updatePositions: - updates the object positions if true.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L867)

#### setScale

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setScale(zFloat4 &scale) override
```
{% endcode %}

This method sets the scale components of the object.

version 0.0.2

Parameter scale: - input scale values.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L869)

#### setRotation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setRotation(zFloat4 &rotation, bool appendRotations=false) override
```
{% endcode %}

This method sets the rotation components of the object.

version 0.0.2

Parameter rotation: - input rotation values.

Parameter append: - true if the input values are added to the existing rotations.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L871)

#### setTranslation

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setTranslation(zVector &translation, bool appendTranslations=false) override
```
{% endcode %}

This method sets the translation components of the object.

version 0.0.2

Parameter translation: - input translation vector.

Parameter append: - true if the input values are added to the existing translation.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L873)

#### setPivot

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::setPivot(zVector &pivot) override
```
{% endcode %}

This method sets the pivot of the object.

version 0.0.2

Parameter pivot: - input pivot position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L875)

#### getTransform

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zFnMesh::getTransform(zTransform &transform) override
```
{% endcode %}

This method gets the object transform.

version 0.0.2

Parameter descriptions are absent in the current declaration comments for: transform. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/functionsets/zFnMesh.h#L877)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zItMeshFace](api-zitmeshface.md)

[zItMeshHalfEdge](api-zitmeshhalfedge.md)

[zItMeshVertex](api-zitmeshvertex.md)

[zObjectGraph](api-zobjectgraph.md)

[zObjectMesh](api-zobjectmesh.md)

[zVector](../group-zcore/api-zvector.md)
