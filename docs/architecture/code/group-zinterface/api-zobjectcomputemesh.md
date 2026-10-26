# zObjectComputeMesh

## zSpace::zObjectComputeMesh

Declared in include/zspace/zInterface/objects/zObjectComputeMesh.h. Public class/struct declaration reference.

The mesh compute object class top breif.

version 0.0.2

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L53)

[Base: zSpace::zObject](api-zobject.md)

### Public Attrib

#### isValid

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zObjectComputeMesh::isValid = false
```
{% endcode %}

check if zObjectCompute is valid

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L59)

#### vertexPositions

{% code collapsedlinecount="10" %}
```cpp
zPoint* zSpace::zObjectComputeMesh::vertexPositions
```
{% endcode %}

container of vertex positions

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L62)

#### polygons

{% code collapsedlinecount="10" %}
```cpp
int** zSpace::zObjectComputeMesh::polygons
```
{% endcode %}

2D container of polygon vertex connectivity

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L65)

#### polyCounts

{% code collapsedlinecount="10" %}
```cpp
int* zSpace::zObjectComputeMesh::polyCounts
```
{% endcode %}

1D container of number of vertices per polygon

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L68)

#### o\_Particles

{% code collapsedlinecount="10" %}
```cpp
zObjectParticle* zSpace::zObjectComputeMesh::o_Particles
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L70)

#### cVertices

{% code collapsedlinecount="10" %}
```cpp
int** zSpace::zObjectComputeMesh::cVertices
```
{% endcode %}

2D container of connected vertice per vertex

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L73)

#### cVerticesCounts

{% code collapsedlinecount="10" %}
```cpp
int* zSpace::zObjectComputeMesh::cVerticesCounts
```
{% endcode %}

1D container of number of connected vertice per vertex

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L76)

#### edges

{% code collapsedlinecount="10" %}
```cpp
int** zSpace::zObjectComputeMesh::edges
```
{% endcode %}

2D container of edge vertex connectivity

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L79)

#### triangles

{% code collapsedlinecount="10" %}
```cpp
int** zSpace::zObjectComputeMesh::triangles
```
{% endcode %}

2D container of triangle vertex connectivity per polygon

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L82)

#### triCounts

{% code collapsedlinecount="10" %}
```cpp
int* zSpace::zObjectComputeMesh::triCounts
```
{% endcode %}

1D container of number of triangles per polygon

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L85)

#### nV

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectComputeMesh::nV
```
{% endcode %}

number of vertices

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L88)

#### nE

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectComputeMesh::nE
```
{% endcode %}

number of edges

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L91)

#### nF

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectComputeMesh::nF
```
{% endcode %}

number of polygons

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L94)

#### nT

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zObjectComputeMesh::nT
```
{% endcode %}

number of triangles

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L97)

#### dT

{% code collapsedlinecount="10" %}
```cpp
double zSpace::zObjectComputeMesh::dT
```
{% endcode %}

time step variable. Should be between 0 & 1.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L100)

#### vFixed

{% code collapsedlinecount="10" %}
```cpp
bool* zSpace::zObjectComputeMesh::vFixed
```
{% endcode %}

A container of booleans to indicate if the vertex is fixed or not.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L103)

### Public Func

#### zObjectComputeMesh

{% code collapsedlinecount="10" %}
```cpp
zSpace::zObjectComputeMesh::zObjectComputeMesh()
```
{% endcode %}

Default constructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L114)

#### \~zObjectComputeMesh

{% code collapsedlinecount="10" %}
```cpp
zSpace::zObjectComputeMesh::~zObjectComputeMesh()
```
{% endcode %}

Default destructor.

version 0.0.2

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/objects/zObjectComputeMesh.h#L124)

### Related types

[zObjectParticle](api-zobjectparticle.md)
