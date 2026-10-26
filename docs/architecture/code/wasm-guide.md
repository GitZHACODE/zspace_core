# Core WebAssembly contract

Core owns its C++ to WebAssembly build under wasm/. The Viewer loads a matching JavaScript/WASM pair and calls C bridge exports. The C ABI is a separate integration surface from C++ function sets; its exported signatures are indexed below.

Temporary bulk inputs use zspace\_alloc and zspace\_free when available. Counts describe elements unless the individual declaration explicitly names bytes. The adapter copies validated input into C++ ownership, then releases temporary allocations. Memory growth can replace heap buffers, so callers must reacquire typed heap views after allocation.

The core solver bridge has a single active mesh/solver state. A Viewer SolverWasmSession wraps that state; it does not create independent multi-object native ownership. Dynamic readback is copied into owned JavaScript arrays. Cached static topology is reused only within the documented solver lifecycle.

Toolsets run in a separate module and heap. Pass copied geometry buffers or serialized packets between modules; native pointers and object handles must stay within the module that created them.

[Core bridge exports](group-bridge/)

[Toolsets bridge contract](https://app.gitbook.com/s/msFQS2BXJST2A9G1WzRj/code/wasm-guide)

[Viewer adapters and sessions](https://app.gitbook.com/s/lxNYT4JxjtqJ22h7b4hp/code/kernel-guide)

[wasm/README.md](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/README.md#L1)

[wasm/bridge/zspace\_core\_wasm\_bridge.cpp](https://github.com/GitZHACODE/zspace_core/blob/23361dea9708c0ff28cddb98fc8667baa0b18c06/wasm/bridge/zspace_core_wasm_bridge.cpp#L1)
