param(
  [string]$EmsdkRoot = (Join-Path $env:USERPROFILE "emsdk"),
  [int]$Jobs = 6,
  [string]$SdkRoot = (Join-Path $env:USERPROFILE "source/sdks/OpenUSD/wasm-26.08"),
  [string]$CacheRoot = (Join-Path $env:USERPROFILE "source/sdks/OpenUSD/cache/wasm-26.08"),
  [switch]$Rebuild
)
$ErrorActionPreference = "Stop"
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "../..")).Path
$sourceRoot = Join-Path $CacheRoot "OpenUSD"
$installRoot = [IO.Path]::GetFullPath($SdkRoot)
if (!$Rebuild -and (Test-Path (Join-Path $installRoot "pxrConfig.cmake")) -and
    (Test-Path (Join-Path $installRoot "include/pxr/pxr.h")) -and
    (Test-Path (Join-Path $installRoot "lib/libusd_usd.a"))) {
  Write-Output "Reusing installed OpenUSD WASM SDK at $installRoot. Use -Rebuild to run the SDK builder."
  exit 0
}
New-Item -ItemType Directory -Path $CacheRoot -Force | Out-Null
$revision = "ee47c679abde5b467a7b6a41f3b2285564a4222e" # v26.08
if (!(Test-Path -LiteralPath $sourceRoot)) {
  & git clone --depth 1 --branch v26.08 https://github.com/PixarAnimationStudios/OpenUSD.git $sourceRoot
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}
$actual = & git -C $sourceRoot rev-parse HEAD
if ($LASTEXITCODE -ne 0 -or $actual -ne $revision) {
  throw "Expected OpenUSD v26.08 ($revision) at $sourceRoot; found $actual"
}
$pythonDir = Get-ChildItem (Join-Path $EmsdkRoot "python") -Directory |
  Where-Object { Test-Path (Join-Path $_.FullName "python.exe") } |
  Sort-Object Name -Descending | Select-Object -First 1
$nodeDir = Get-ChildItem (Join-Path $EmsdkRoot "node") -Directory |
  Where-Object { Test-Path (Join-Path $_.FullName "node.exe") } |
  Sort-Object Name -Descending | Select-Object -First 1
if (!$pythonDir -or !$nodeDir) { throw "Install Emscripten's Python and Node runtimes first." }
$emscripten = Join-Path $EmsdkRoot "upstream/emscripten"
$env:EMSDK = $EmsdkRoot
$env:EM_CONFIG = Join-Path $EmsdkRoot ".emscripten"
$env:PATH = "$emscripten;$($pythonDir.FullName);$($nodeDir.FullName);$env:PATH"
$env:EM_CACHE = Join-Path $repoRoot "wasm/cache"
$env:EMSDK_PYTHON = Join-Path $pythonDir.FullName "python.exe"
# Some Windows SDK releases ship .exe launchers instead of the .bat names
# expected by OpenUSD v26.08. Patch only a generated copy of the build script.
$builder = (& git -C $sourceRoot show HEAD:build_scripts/build_usd.py) -join "`n"
if ($LASTEXITCODE -ne 0) { throw "Could not read the pinned OpenUSD build script." }
foreach ($launcher in @("emcmake", "emmake")) {
  if (!(Test-Path (Join-Path $emscripten "$launcher.bat")) -and
      (Test-Path (Join-Path $emscripten "$launcher.exe"))) {
    $builder = $builder.Replace("$launcher.bat", "$launcher.exe")
  }
}
$generatedBuilder = Join-Path $sourceRoot "build_scripts/build_usd_zspace.py"
Set-Content -LiteralPath $generatedBuilder -Value $builder -Encoding utf8
& $env:EMSDK_PYTHON -u $generatedBuilder $installRoot --build-target wasm --generator Ninja `
  --build (Join-Path $CacheRoot "build") --src (Join-Path $CacheRoot "dependencies") `
  --no-python --no-imaging --no-usdview --no-materialx --no-tools --no-tutorials `
  --no-examples --no-usdValidation --no-tests --onetbb -j $Jobs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
foreach ($licenseName in @("LICENSE.txt", "NOTICE.txt")) {
  Copy-Item -LiteralPath (Join-Path $sourceRoot $licenseName) -Destination (Join-Path $installRoot $licenseName)
}
$tbbLicense = Join-Path $CacheRoot "dependencies/oneTBB-2021.12.0/LICENSE.txt"
if (Test-Path -LiteralPath $tbbLicense) {
  $licenseRoot = Join-Path $installRoot "licenses"
  New-Item -ItemType Directory -Path $licenseRoot -Force | Out-Null
  Copy-Item -LiteralPath $tbbLicense -Destination (Join-Path $licenseRoot "oneTBB-LICENSE.txt")
}
exit 0
