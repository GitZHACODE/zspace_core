# Architecture and API ownership

zspace\_core is the reusable C++17 geometry kernel. Toolsets build project methods on this kernel; the Web Viewer presents geometry and invokes compiled adapters. Rendering and application state do not belong to the geometry kernel.

{% code collapsedlinecount="10" %}
```
zspace_core (geometry, topology, IO, optional display/interop)
    -> zspace_toolsets (fabrication, statics, architecture)
    -> separate core/toolsets WebAssembly modules
    -> Web Viewer adapters, scene and UI
```
{% endcode %}

### Choose the correct layer

zCore supplies math, containers and storage building blocks. zInterface exposes geometry objects, function sets and iterators. zIO supplies stateless file IO and codecs. zDisplay owns appearance/draw settings. zInterOp contains optional host SDK integration. Compatibility utilities remain available where declared; check the current migration guide before adopting older patterns.

Objects such as zObjectMesh own identity and geometry. A zFnMesh binds to an object and creates, queries or edits its geometry. Iterators traverse components. Mesh storage uses the face-list representation, and graph storage uses the edge list; topology operations may build a lazy half-edge cache. Application code should use object/function-set APIs rather than depending on private storage layouts.

[Geometry objects and function sets](group-zinterface/)

[File IO and codecs](group-zio/)

[Toolsets architecture](https://app.gitbook.com/s/msFQS2BXJST2A9G1WzRj/code/architecture-guide)

[Viewer architecture](https://app.gitbook.com/s/lxNYT4JxjtqJ22h7b4hp/code/architecture-guide)

[API migration and storage boundaries](../api-migration.md)

[agents/querying\_and\_using\_api.md](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/agents/querying_and_using_api.md#L1)

[CMakeLists.txt](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/CMakeLists.txt#L1)
