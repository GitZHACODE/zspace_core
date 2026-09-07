@echo off
setlocal EnableExtensions EnableDelayedExpansion

set "REPO_ROOT=%~dp0..\.."
for %%I in ("%REPO_ROOT%") do set "REPO_ROOT=%%~fI"

set "WASM_ROOT=%REPO_ROOT%\wasm"
set "BRIDGE_DIR=%WASM_ROOT%\bridge"
set "WASM_BUILD=%WASM_ROOT%\build"
set "WASM_TMP=%WASM_ROOT%\tmp"
set "WASM_CACHE=%WASM_ROOT%\cache"
set "WASM_OUT=%WASM_ROOT%\out"
set "EMSDK_DIR=%USERPROFILE%\emsdk"
set "EMSCRIPTEN_DIR=%EMSDK_DIR%\upstream\emscripten"
set "EMSDK_PYTHON_DIR=%EMSDK_DIR%\python\3.13.3_64bit"
set "EMSDK_PYTHON_EXE=%EMSDK_PYTHON_DIR%\python.exe"

if exist "%EMSCRIPTEN_DIR%\em++.exe" set "PATH=%EMSCRIPTEN_DIR%;%PATH%"
if exist "%EMSDK_DIR%\node\24.19.0_64bit\bin" set "PATH=%EMSDK_DIR%\node\24.19.0_64bit\bin;%PATH%"
if exist "%EMSDK_PYTHON_EXE%" set "PATH=%EMSDK_PYTHON_DIR%;%PATH%"

set "EMSDK=%EMSDK_DIR%"
set "EM_CONFIG=%EMSDK_DIR%\.emscripten"
if exist "%EMSDK_PYTHON_EXE%" (
  set "PYTHON=%EMSDK_PYTHON_EXE%"
  set "EMSDK_PYTHON=%EMSDK_PYTHON_EXE%"
)

where em++ >nul 2>nul || (
  echo ERROR: em++ was not found. Install Emscripten or run emsdk_env.bat first.
  exit /b 1
)

if not exist "%WASM_BUILD%" mkdir "%WASM_BUILD%"
if not exist "%WASM_TMP%" mkdir "%WASM_TMP%"
if not exist "%WASM_CACHE%" mkdir "%WASM_CACHE%"
if not exist "%WASM_OUT%" mkdir "%WASM_OUT%"

set "TEMP=%WASM_TMP%"
set "TMP=%WASM_TMP%"
set "EMCC_TEMP_DIR=%WASM_TMP%"
set "EM_CACHE=%WASM_CACHE%"

set "ZSPACE_SOURCES="
for /R "%REPO_ROOT%\src\zCore" %%F in (*.cpp) do (
  set "ZSPACE_SOURCES=!ZSPACE_SOURCES! "%%F""
)
for /R "%REPO_ROOT%\src\zInterface" %%F in (*.cpp) do (
  if /I not "%%~nxF"=="zFnComputeMesh.cpp" if /I not "%%~nxF"=="zObjectComputeMesh.cpp" if /I not "%%~nxF"=="zFnMeshField.cpp" if /I not "%%~nxF"=="zFnPointField.cpp" if /I not "%%~nxF"=="zObjectMeshField.cpp" if /I not "%%~nxF"=="zObjectPointField.cpp" if /I not "%%~nxF"=="zObjectComputeField2D.cpp" (
    set "ZSPACE_SOURCES=!ZSPACE_SOURCES! "%%F""
  )
)
for /R "%REPO_ROOT%\src\zIO" %%F in (*.cpp) do (
  set "ZSPACE_SOURCES=!ZSPACE_SOURCES! "%%F""
)

em++ ^
  "%BRIDGE_DIR%\zspace_core_wasm_bridge.cpp" ^
  -include "%BRIDGE_DIR%\zspace_wasm_compat.h" ^
  -DZSPACE_STATIC_LIBRARY ^
  -I"%BRIDGE_DIR%" ^
  -I"%REPO_ROOT%" ^
  -I"%REPO_ROOT%\include" ^
  -I"%REPO_ROOT%\third_party" ^
  -I"%REPO_ROOT%\third_party\depends" ^
  -std=c++17 ^
  -O0 ^
  -c ^
  -o "%WASM_BUILD%\zspace_core_wasm_bridge.o"
if errorlevel 1 exit /b 1

em++ ^
  "%BRIDGE_DIR%\default_live_sketch.cpp" ^
  -include "%BRIDGE_DIR%\zspace_wasm_compat.h" ^
  -DZSPACE_STATIC_LIBRARY ^
  -I"%BRIDGE_DIR%" ^
  -I"%REPO_ROOT%" ^
  -I"%REPO_ROOT%\include" ^
  -I"%REPO_ROOT%\third_party" ^
  -I"%REPO_ROOT%\third_party\depends" ^
  -std=c++17 ^
  -O0 ^
  -c ^
  -o "%WASM_BUILD%\default_live_sketch.o"
if errorlevel 1 exit /b 1

em++ ^
  !ZSPACE_SOURCES! ^
  "%WASM_BUILD%\zspace_core_wasm_bridge.o" ^
  "%WASM_BUILD%\default_live_sketch.o" ^
  -include "%BRIDGE_DIR%\zspace_wasm_compat.h" ^
  -DZSPACE_STATIC_LIBRARY ^
  -I"%BRIDGE_DIR%" ^
  -I"%REPO_ROOT%" ^
  -I"%REPO_ROOT%\include" ^
  -I"%REPO_ROOT%\third_party" ^
  -I"%REPO_ROOT%\third_party\depends" ^
  -std=c++17 ^
  -O0 ^
  -sMODULARIZE=1 ^
  -sEXPORT_ES6=1 ^
  -sENVIRONMENT=web ^
  -sALLOW_MEMORY_GROWTH=1 ^
  -sFORCE_FILESYSTEM=1 ^
  -sEXPORTED_RUNTIME_METHODS="['HEAPF32','HEAPU32','UTF8ToString','FS','ccall']" ^
  -o "%WASM_OUT%\zspace_core.js"
if errorlevel 1 exit /b 1

exit /b 0
