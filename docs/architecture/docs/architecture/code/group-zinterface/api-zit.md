# zIt

## zSpace::zIt

Declared in include/zspace/zInterface/iterators/zIt.h. Public class/struct declaration reference.

The base iterator class.

version 0.0.3

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L42)

### Public Func

#### zIt

{% code collapsedlinecount="10" %}
```cpp
zSpace::zIt::zIt()
```
{% endcode %}

Default constructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L59)

#### \~zIt

{% code collapsedlinecount="10" %}
```cpp
virtual zSpace::zIt::~zIt()
```
{% endcode %}

Default destructor.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L69)

#### begin

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zIt::begin()=0
```
{% endcode %}

This method sets the iterator pointing to first element the contatiner.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L79)

#### operator++

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zIt::operator++(int)=0
```
{% endcode %}

This method advance to the next element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L85)

#### operator--

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zIt::operator--(int)=0
```
{% endcode %}

This method advance to the previous element in the iteration.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L91)

#### end

{% code collapsedlinecount="10" %}
```cpp
virtual bool zSpace::zIt::end()=0
```
{% endcode %}

This method indicates if all the elements are tranversed.

bool - true if all the elements are tranversed. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L98)

#### reset

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zIt::reset()
```
{% endcode %}

This method resets the iterator to the first element.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L104)

#### size

{% code collapsedlinecount="10" %}
```cpp
virtual int zSpace::zIt::size()=0
```
{% endcode %}

This method gets the size f the element container.

int - size of element container. version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L111)

#### deactivate

{% code collapsedlinecount="10" %}
```cpp
virtual void zSpace::zIt::deactivate()=0
```
{% endcode %}

This method deactivates the element attached to the iterator.

version 0.0.3

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zInterface/iterators/zIt.h#L117)
