# zIOResult

## zSpace::zIOResult

Declared in include/zspace/zIO/zIOResult.h. Public class/struct declaration reference.

[Header source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zIO/zIOResult.h#L12)

### Public Func

#### zIOResult

{% code collapsedlinecount="10" %}
```cpp
zSpace::zIOResult::zIOResult()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zIO/zIOResult.h#L15)

#### zIOResult

{% code collapsedlinecount="10" %}
```cpp
zSpace::zIOResult::zIOResult(bool success, std::string message)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: message, success. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zIO/zIOResult.h#L16)

#### operator bool

{% code collapsedlinecount="10" %}
```cpp
zSpace::zIOResult::operator bool() const noexcept
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zIO/zIOResult.h#L18)

#### success

{% code collapsedlinecount="10" %}
```cpp
bool zSpace::zIOResult::success() const noexcept
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zIO/zIOResult.h#L19)

#### message

{% code collapsedlinecount="10" %}
```cpp
const std::string & zSpace::zIOResult::message() const noexcept
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zIO/zIOResult.h#L20)

### Public Static Func

#### ok

{% code collapsedlinecount="10" %}
```cpp
static zIOResult zSpace::zIOResult::ok()
```
{% endcode %}

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zIO/zIOResult.h#L22)

#### error

{% code collapsedlinecount="10" %}
```cpp
static zIOResult zSpace::zIOResult::error(std::string message)
```
{% endcode %}

Parameter descriptions are absent in the current declaration comments for: message. Use the declaration and implementation source when interpreting these inputs.

[Declaration source](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/include/zspace/zIO/zIOResult.h#L23)
