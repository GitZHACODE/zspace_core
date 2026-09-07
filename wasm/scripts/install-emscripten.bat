@echo off
setlocal EnableExtensions EnableDelayedExpansion

set "EMSDK_DIR=%USERPROFILE%\emsdk"

where git >nul 2>nul || (
  echo ERROR: git was not found on PATH.
  exit /b 1
)

if exist "%EMSDK_DIR%\.git" (
  pushd "%EMSDK_DIR%"
  git pull
  if errorlevel 1 exit /b 1
  popd
) else (
  git clone https://github.com/emscripten-core/emsdk.git "%EMSDK_DIR%"
  if errorlevel 1 exit /b 1
)

pushd "%EMSDK_DIR%"
call emsdk.bat install latest
if errorlevel 1 exit /b 1
call emsdk.bat activate latest
if errorlevel 1 exit /b 1
call emsdk_env.bat
if errorlevel 1 exit /b 1
popd

where em++ >nul 2>nul || (
  echo ERROR: em++ was not found after activating Emscripten.
  exit /b 1
)

echo Emscripten is ready.
exit /b 0
