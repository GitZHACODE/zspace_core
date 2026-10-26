# zColor

## zSpace::zColor

Declared in include/zspace/zCore/base/zColor.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A color math class.

Currently supports two types of color data structures - RGBA and HSV. version 0.0.1

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L48)

### Public Attrib

#### r

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zColor::r
```
{% endcode %}

red component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L53)

#### g

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zColor::g
```
{% endcode %}

green component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L56)

#### b

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zColor::b
```
{% endcode %}

blue component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L59)

#### a

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zColor::a
```
{% endcode %}

alpha component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L62)

#### h

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zColor::h
```
{% endcode %}

hue component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L65)

#### s

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zColor::s
```
{% endcode %}

saturation component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L68)

#### v

{% code collapsedlinecount="10" %}
```cpp
float zSpace::zColor::v
```
{% endcode %}

value component

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L71)

### Public Func

#### zColor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zColor::zColor()
```
{% endcode %}

Default constructor sets by default r,g,b,h,s,v to 0 and a to 1.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L80)

#### zColor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zColor::zColor(float _r, float _g, float _b, float _a)
```
{% endcode %}

Overloaded constructor sets RGB\_A components of the color and uses it to compute HSV components.

version 0.0.1

Parameter \_r: - red component of zColor.

Parameter \_g: - green component of zColor.

Parameter \_b: - blue component of zColor.

Parameter \_a: - alpha component of zColor.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L90)

#### zColor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zColor::zColor(float _h, float _s, float _v)
```
{% endcode %}

Overloaded constructor using HSV components of the color and uses it to compute RGB\_A components.

version 0.0.1

Parameter \_h: - hue component of zColor.

Parameter \_s: - saturation component of zColor.

Parameter \_v: - value component of zColor.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L101)

#### \~zColor

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zColor::~zColor()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L111)

#### toHSV

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zColor::toHSV()
```
{% endcode %}

This methods calculates the HSV components based on the RGB\_A components of color.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L121)

#### toRGB

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zColor::toRGB()
```
{% endcode %}

This methods calculates the RGB\_A components based on the HSV components of color.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L127)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zColor::operator==(zColor &c1)
```
{% endcode %}

This operator checks for equality of two zColors.

bool - true if colors are the same. version 0.0.1

Parameter c1: - input color.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zColor.h#L140)
