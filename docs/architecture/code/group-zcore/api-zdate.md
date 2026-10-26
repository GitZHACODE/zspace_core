# zDate

## zSpace::zDate

Declared in include/zspace/zCore/base/zDate.h. Low-level math/storage reference; prefer geometry objects and function sets for application geometry.

A date class which extend the c++ time struct tm .

version 0.0.4

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L46)

### Public Func

#### zDate

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zDate::zDate()
```
{% endcode %}

Default constructor.

version 0.0.4

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L58)

#### zDate

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zDate::zDate(int _month, int _day, int _hour)
```
{% endcode %}

Overloaded constructor.

version 0.0.4

Parameter \_month: - month \[values between 1-12].

Parameter \_day: - day \[values between 1-31].

Parameter \_hour: - hour \[values between 0-23].

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L67)

#### zDate

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zDate::zDate(int _year, int _month, int _day, int _hour, int _minute)
```
{% endcode %}

Overloaded constructor.

version 0.0.4

Parameter \_year: - year.

Parameter \_month: - month \[values between 1-12].

Parameter \_day: - day \[values between 1-31].

Parameter \_hour: - hour \[values between 0-23].

Parameter \_minute: - minute \[values between 0-59].

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L78)

#### \~zDate

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE zSpace::zDate::~zDate()
```
{% endcode %}

Default destructor.

version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L87)

#### operator==

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE bool zSpace::zDate::operator==(const zDate &other) const
```
{% endcode %}

This operator checks for equality of two zDates.

bool - true if vectors are equal. version 0.0.1

Parameter other: - zDates against which the equality is checked.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L99)

#### fromUnix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zDate::fromUnix(time_t unix)
```
{% endcode %}

This method converts unix time to Gregorian date.

zDate - output Gregorian date. version 0.0.1

Parameter unix: - input unix time.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L111)

#### fromJulian

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE void zSpace::zDate::fromJulian(double julian)
```
{% endcode %}

This method converts Julian date to Gregorian date.

https://stackoverflow.com/questions/7136385/calculate-day-number-from-an-unix-timestamp-in-a-math-way zDate - output Gregorian date. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: julian. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L120)

#### toJulian

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE double zSpace::zDate::toJulian()
```
{% endcode %}

This method converts Gregorian date to Julian date.

double - output Julian date. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L128)

#### toJulian

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE double zSpace::zDate::toJulian(time_t unix)
```
{% endcode %}

This method converts unix time to Julian date.

double - output Julian date. version 0.0.1

Parameter unix: - input unix time.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L136)

#### toUnix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE time_t zSpace::zDate::toUnix(double julian)
```
{% endcode %}

This method converts Julian date to unix time.

time\_t - output unix time. version 0.0.1

Parameter descriptions are absent in the current declaration comments for: julian. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L144)

#### toUnix

{% code collapsedlinecount="10" %}
```cpp
ZSPACE_CUDA_CALLABLE time_t zSpace::zDate::toUnix()
```
{% endcode %}

This method converts Gregorian date to unix time.

time\_t - output unix time. version 0.0.1

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zCore/base/zDate.h#L152)
