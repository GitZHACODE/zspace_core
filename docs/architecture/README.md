# Geometry Kernel

zspace\_core is the shared geometry kernel. Its C++17 libraries provide geometry data structures, function sets, import/export, and optional display and host interoperability.

### Responsibilities

Geometry objects own data. Function sets such as zFnMesh and zFnGraph own geometry queries and operations. zIO owns geometry file IO; optional zDisplay code owns drawing settings. The maintained public API is under include/zspace, with implementations under src.

The native dependency direction is Core, then Interface, then IO and optional Display/InterOp. The wasm folder owns the browser bridge and generated core JavaScript/WASM runtime; OpenUSD uses a separate enabled runtime.

### Relationship to the other repositories

[Project Toolsets](https://app.gitbook.com/o/0Lv7pgeoKI2MXprc3zOv/s/msFQS2BXJST2A9G1WzRj/) builds project-specific algorithms on the kernel, including C-Tubes, Vault, panelisation, stairs, force polyhedra and 3D-printing tools.

[Web Viewer](https://app.gitbook.com/o/0Lv7pgeoKI2MXprc3zOv/s/lxNYT4JxjtqJ22h7b4hp/) consumes the core runtime for geometry operations, import/export and solver workflows, and presents the results in the browser.

Core and toolsets browser modules use separate WASM heaps. Data crosses through owned numeric buffers rather than native pointers. See [Toolsets WASM transfers](https://app.gitbook.com/s/msFQS2BXJST2A9G1WzRj/typed-wasm-transfers).

### Follow a shared feature

For graph ribbons, start with [Graph ribbon mesh](graph-mesh.md) and continue to the [Graph Mesh viewer operator](https://app.gitbook.com/s/lxNYT4JxjtqJ22h7b4hp/graph-mesh).

[Source repository and review branch](https://github.com/GitZHACODE/zspace_core/tree/docs/gitbook-site-sync)
