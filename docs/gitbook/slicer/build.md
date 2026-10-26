# Build and run the desktop slicer

The modern Windows source build combines Alice 2 with sibling `zspace_core` and `zspace_toolsets` checkouts. Install Visual Studio 2022 C++ build tools with the Windows SDK and CMake support. Provide TetGen sources or a matching native library. Native OpenUSD is needed for the tagged USD workflow.

## Build and launch

From the `alice2` subdirectory:

```powershell
.\build_with_zspace.bat
.\run_with_zspace.bat
```

The build wrapper invokes `scripts/build-modern.ps1`. Its defaults expect `zspace_core` and `zspace_toolsets` beside the Alice 2 repository and TetGen sources under toolsets' `wasm/cache/tetgen`. Override those locations explicitly for a different layout, including isolated worktrees:

```powershell
.\build_with_zspace.bat -CoreDir C:/src/zspace_core -ToolsetsDir C:/src/zspace_toolsets -TetgenIncludeDir C:/SDKs/tetgen
```

Supply `-TetgenLibrary` when using a prebuilt native library. The builder enables harmonic slicing and OpenMP, and disables USD only when `-WithoutUSD` is passed. A build without USD cannot run this guide's tagged-input workflow.

The executable and zSpace DLLs are written under `alice2/build_zspace_v3/bin/Release`. The run script launches that executable and keeps slicer diagnostics in the console.

## OpenUSD

On first use the builder resolves the pinned native OpenUSD 26.08 package from the release URL in `alice2/scripts/openusd-sdk.lock.json`, verifies its SHA-256 and caches it under the ignored `alice2/sdk/openusd/` directory. An existing SDK or matching package can be supplied instead:

```powershell
.\build_with_zspace.bat -OpenUSDRoot C:/SDKs/OpenUSD/native-26.08
.\build_with_zspace.bat -OpenUSDPackage C:/Downloads/openusd-native-26.08-windows-x64.zip
```

These are alternative commands. `ZSPACE_OPENUSD_ROOT` and `ALICE2_OPENUSD_PACKAGE` provide environment overrides. A supplied package must match the lock file. The package's availability was not tested for this documentation change.

## Verification

To build with the existing desktop slicing and toolsets integration tests:

```powershell
.\build_with_zspace.bat -Test
```

`-Test` requires native USD and runs CTest after the build. Test fixtures include millimetre and metre source stages. A passing integration run must be recorded against a chosen core/toolsets/application version combination; the GitBook configuration checks alone do not establish runtime compatibility.

## Sources

* [Modern source build](https://github.com/GitZHACODE/zspace_alice2/blob/d8d3bd4a1e03cd19ecd16e4231b9054efde79184/alice2/scripts/build-modern.ps1)
* [Native SDK lock](https://github.com/GitZHACODE/zspace_alice2/blob/d8d3bd4a1e03cd19ecd16e4231b9054efde79184/alice2/scripts/openusd-sdk.lock.json)
* [Desktop test configuration](https://github.com/GitZHACODE/zspace_alice2/blob/d8d3bd4a1e03cd19ecd16e4231b9054efde79184/alice2/CMakeLists.txt)
