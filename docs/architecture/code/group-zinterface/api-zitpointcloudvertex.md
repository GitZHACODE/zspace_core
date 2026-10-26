# zItPointCloudVertex

## zSpace::zItPointCloudVertex

Declared in include/zspace/zInterface/iterators/zItPointCloud.h. Public class/struct declaration reference.

The point cloud vertex iterator class.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L50)

[Base: zSpace::zIt](api-zit.md)

### Public Func

#### zItPointCloudVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItPointCloudVertex::zItPointCloudVertex()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L69)

#### zItPointCloudVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItPointCloudVertex::zItPointCloudVertex(zObjectPointCloud &_pointsObj)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_pointsObj: - input point cloud object.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L76)

#### zItPointCloudVertex

{% code collapsedlinecount="10" %}
```cpp
zSpace::zItPointCloudVertex::zItPointCloudVertex(zObjectPointCloud &_pointsObj, int _index)
```
{% endcode %}

Overloaded constructor.

version 0.0.3

Parameter \_pointsObj: - input point cloud object.

Parameter \_index: - input index in mesh vertex list.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L84)

#### begin

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItPointCloudVertex::begin() override
```
{% endcode %}

This method sets the iterator pointing to first element the contatiner.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L90)

#### operator++

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItPointCloudVertex::operator++(int) override
```
{% endcode %}

This method advance to the next element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L92)

#### operator--

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItPointCloudVertex::operator--(int) override
```
{% endcode %}

This method advance to the previous element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L94)

#### end

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItPointCloudVertex::end() override
```
{% endcode %}

This method indicates if all the elements are tranversed.

bool - true if all the elements are tranversed. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L96)

#### reset

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItPointCloudVertex::reset() override
```
{% endcode %}

This method resets the iterator to the first element.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L98)

#### size

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItPointCloudVertex::size() override
```
{% endcode %}

This method gets the size f the element container.

int - size of element container. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L100)

#### deactivate

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItPointCloudVertex::deactivate() override
```
{% endcode %}

This method deactivates the element attached to the iterator.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L102)

#### getId

{% code collapsedlinecount="10" %}
```cpp
int zSpace::zItPointCloudVertex::getId()
```
{% endcode %}

This method gets the index of the iterator.

int - iterator index version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L113)

#### getPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint zSpace::zItPointCloudVertex::getPosition()
```
{% endcode %}

This method gets position of the vertex.

zPoint - vertex position. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L120)

#### getRawPosition

{% code collapsedlinecount="10" %}
```cpp
zPoint * zSpace::zItPointCloudVertex::getRawPosition()
```
{% endcode %}

This method gets pointer to the position of the vertex.

zPoint\* - pointer to internal vertex position. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L127)

#### getColor

{% code collapsedlinecount="10" %}
```cpp
zColor zSpace::zItPointCloudVertex::getColor()
```
{% endcode %}

This method gets color of the vertex.

zColor - vertex color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L134)

#### getRawColor

{% code collapsedlinecount="10" %}
```cpp
zColor * zSpace::zItPointCloudVertex::getRawColor()
```
{% endcode %}

This method gets pointer to the color of the vertex.

zColor\* - pointer to internal vertex color. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L141)

#### setId

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItPointCloudVertex::setId(int _id)
```
{% endcode %}

This method sets the index of the iterator.

version 0.0.3

Parameter \_id: - input index

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L152)

#### setPosition

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItPointCloudVertex::setPosition(zPoint &pos)
```
{% endcode %}

This method sets position of the vertex.

version 0.0.3

Parameter pos: - vertex position.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L159)

#### setColor

{% code collapsedlinecount="10" %}
```cpp
void zSpace::zItPointCloudVertex::setColor(zColor col)
```
{% endcode %}

This method sets color of the vertex.

version 0.0.3

Parameter col: - vertex color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L166)

#### isActive

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItPointCloudVertex::isActive()
```
{% endcode %}

This method gets if the vertex is active.

bool - true if active else false. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L177)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItPointCloudVertex::operator==(zItPointCloudVertex &other)
```
{% endcode %}

This operator checks for equality of two vertex iterators.

bool - true if equal. version 0.0.3

Parameter other: - input iterator against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L190)

#### operator!=

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zItPointCloudVertex::operator!=(zItPointCloudVertex &other)
```
{% endcode %}

This operator checks for non equality of two vertex iterators.

bool - true if not equal. version 0.0.3

Parameter other: - input iterator against which the non-equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zItPointCloud.h#L198)

### Related types

[zColor](../group-zcore/api-zcolor.md)

[zObjectPointCloud](api-zobjectpointcloud.md)
