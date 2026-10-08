#ifndef ZSPACE_DETAIL_MESH_PROFILE_H
#define ZSPACE_DETAIL_MESH_PROFILE_H

// Opt-in benchmark instrumentation; absent from normal builds and public APIs.
#ifdef ZSPACE_MESH_PROFILE
#include <chrono>
#include <cstdio>
#define ZSPACE_MESH_TIMER(name) auto name = std::chrono::steady_clock::now()
#define ZSPACE_MESH_STAGE(name, label, meshCount) do { \
 auto now = std::chrono::steady_clock::now(); \
 std::fprintf(stderr, "mesh-phase,%s,%d,%.6f\n", label, int(meshCount), \
 std::chrono::duration<double, std::milli>(now - name).count()); name = now; \
} while (false)
#else
#define ZSPACE_MESH_TIMER(name)
#define ZSPACE_MESH_STAGE(name, label, meshCount)
#endif

#endif
