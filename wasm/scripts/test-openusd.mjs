import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const base = new URL('../out/openusd/', import.meta.url);
const { default: factory } = await import(new URL('zspace_core.js', base));
const m = await factory({
  wasmBinary: await readFile(new URL('zspace_core.wasm', base)),
  locateFile: name => fileURLToPath(new URL(name, base))
});
try {
  const check = result => assert.equal(result, 1, m.UTF8ToString(m._zspace_last_error_ptr()));
  m.FS.writeFile('/tmp/input.obj', 'v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3\n');
  check(m.ccall('zspace_mesh_read', 'number', ['string'], ['/tmp/input.obj']));
  const positions = () => [...m.HEAPF32.slice(m._zspace_positions_ptr() / 4,
    m._zspace_positions_ptr() / 4 + m._zspace_positions_count())];
  const expected = positions();
  for (const extension of ['usda', 'usd', 'usdc', 'usdz']) {
    const path = `/tmp/roundtrip.${extension}`;
    check(m.ccall('zspace_mesh_write', 'number', ['string'], [path]));
    assert(m.FS.readFile(path).length > 0);
    check(m.ccall('zspace_mesh_read', 'number', ['string'], [path]));
    assert.deepEqual(positions(), expected, `${extension} positions`);
  }
  m.FS.writeFile('/tmp/maya.usda', `#usda 1.0
(metersPerUnit = 1
 upAxis = "Y")
def Xform "MayaSelection" {
  double3 xformOp:translate = (1,2,3)
  uniform token[] xformOpOrder = ["xformOp:translate"]
  def Mesh "First" {
    point3f[] points = [(0,0,0),(1,0,0),(0,1,0)]
    int[] faceVertexCounts = [3]
    int[] faceVertexIndices = [0,1,2]
    color3f[] primvars:displayColor = [(1,0,0)] (interpolation = "constant")
  }
  def Mesh "Mirrored" {
    double3 xformOp:scale = (-1,1,1)
    uniform token[] xformOpOrder = ["xformOp:scale"]
    token visibility = "invisible"
    point3f[] points = [(0,0,0),(1,0,0),(0,1,0)]
    int[] faceVertexCounts = [3]
    int[] faceVertexIndices = [0,1,2]
  }
}
`);
  const readScene = path => {
    check(m.ccall('zspace_usd_scene_read', 'number', ['string','string'], [path,'/tmp/scene.json']));
    return JSON.parse(m.FS.readFile('/tmp/scene.json', {encoding:'utf8'}));
  };
  const scene = readScene('/tmp/maya.usda');
  assert.equal(scene.objects.length, 2);
  assert.deepEqual(scene.objects[0].mesh.positions[0], [100,-300,200], 'Maya metre/Y-up world transform becomes centimetre/Z-up');
  assert.equal(scene.objects[0].mesh.vertexColors.length, 3);
  assert.deepEqual(scene.objects[1].mesh.polygonConnects, [2,1,0], 'mirror winding');
  assert.equal(scene.objects[1].visible, false);
  assert.deepEqual(positions(), expected, 'document IO leaves active mesh unchanged');
  for (const extension of ['usda','usd','usdc','usdz']) {
    m.FS.writeFile('/tmp/write-scene.json', JSON.stringify(scene));
    const path = `/tmp/scene.${extension}`;
    check(m.ccall('zspace_usd_scene_write','number',['string','string'],['/tmp/write-scene.json',path]));
    const restored = readScene(path);
    assert.equal(restored.objects.length, 2);
    assert.equal(restored.objects[0].name, 'First');
    assert.deepEqual(restored.objects[0].mesh.positions, scene.objects[0].mesh.positions);
    assert.deepEqual(restored.objects[1].mesh.polygonConnects, [2,1,0]);
    assert.equal(restored.objects[1].visible, false);
  }
  m.FS.writeFile('/tmp/missing.usda', '#usda 1.0\ndef Xform "Missing" (prepend references = @does-not-exist.usda@) {}\n');
  assert.equal(m.ccall('zspace_usd_scene_read','number',['string','string'],['/tmp/missing.usda','/tmp/failed.json']), 0, 'unresolved references fail');
  assert.equal(m.FS.analyzePath('/tmp/failed.json').exists, false, 'failed composition publishes no partial document');
  console.log('OpenUSD WASM mesh and scene IO passed (USDA/USD/USDC/USDZ, Maya units/transforms, mirror winding, visibility, missing references).');
} finally {
  // Pthread pool workers otherwise keep Node alive after the assertions.
  m.PThread?.terminateAllThreads();
}
