import fs from 'node:fs';
import path from 'node:path';
let source=fs.readFileSync('wasm/scripts/build-wasm.bat','utf8');
source=source.replace('set "REPO_ROOT=%~dp0..\\.."','set "REPO_ROOT='+path.resolve('.').replaceAll('/','\\')+'"')
 .replace('set "WASM_BUILD=%WASM_ROOT%\\build"','set "WASM_BUILD=%WASM_ROOT%\\tmp\\subdivision-profile\\build"')
 .replace('set "WASM_OUT=%WASM_ROOT%\\out"','set "WASM_OUT=%WASM_ROOT%\\tmp\\subdivision-profile\\out"')
 .replaceAll('-DZSPACE_STATIC_LIBRARY ^','-DZSPACE_STATIC_LIBRARY -DZSPACE_MESH_PROFILE ^');
fs.writeFileSync('wasm/tmp/build-subdivision-profile.bat',source);
console.log('wasm/tmp/build-subdivision-profile.bat');
