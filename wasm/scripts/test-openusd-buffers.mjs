import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const base = new URL('../out/openusd/', import.meta.url);
const { default: factory } = await import(new URL('zspace_core.js', base));
const m = await factory({ locateFile: name => fileURLToPath(new URL(name, base)) });
const call = (name, args = [], types = args.map(() => 'number')) => m.ccall(name, 'number', types, args);
const check = value => assert.equal(value, 1, m.UTF8ToString(m._zspace_last_error_ptr()));
const text = (name, index) => m.UTF8ToString(call(name, [index]));
const buffer = slot => {
  const pointer = call('zspace_usd_buffer_ptr', [slot]) / 4, count = call('zspace_usd_buffer_count', [slot]);
  return (slot < 8 ? m.HEAPF32 : m.HEAPU32).slice(pointer, pointer + count);
};
const activePositions = () => m.HEAPF32.slice(m._zspace_positions_ptr()/4, m._zspace_positions_ptr()/4 + m._zspace_positions_count());
function upload(arrays, operation) {
  const pointers = [];
  try {
    for (const array of arrays) {
      const pointer = array.byteLength ? m._zspace_alloc(array.byteLength) : 0;
      pointers.push(pointer);
      assert(!array.byteLength || pointer);
      new Uint8Array(m.HEAPU32.buffer).set(new Uint8Array(array.buffer,array.byteOffset,array.byteLength),pointer);
    }
    return operation(pointers);
  } finally { for (const pointer of pointers) if(pointer) m._zspace_free(pointer); }
}
try {
  m.FS.writeFile('/tmp/active.obj','v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3\n');
  check(call('zspace_mesh_read',['/tmp/active.obj'],['string']));
  check(call('zspace_solver_create_dynamics'));
  const active = activePositions(), frame = call('zspace_solver_frame');
  check(call('zspace_usd_initialize'));
  assert.deepEqual(activePositions(),active,'initialization preserves active mesh');
  assert.equal(call('zspace_solver_frame'),frame,'initialization preserves solver frame');
  m.FS.writeFile('/tmp/scene.usda',`#usda 1.0
(metersPerUnit = 1
 upAxis = "Y")
def Xform "Maya" {
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
}`);
  check(call('zspace_usd_scene_open',['/tmp/scene.usda'],['string']));
  assert.equal(call('zspace_usd_scene_mesh_count'),2);
  assert.equal(call('zspace_usd_scene_select',[99]),0);
  assert.equal(call('zspace_usd_buffer_count',[0]),0,'invalid selection clears readback');
  const meshes=[];
  for(let i=0;i<2;++i) {
    check(call('zspace_usd_scene_select',[i]));
    meshes.push({name:text('zspace_usd_scene_name',i),path:text('zspace_usd_scene_path',i),visible:call('zspace_usd_scene_visible',[i]),
      buffers:Array.from({length:12},(_,slot)=>buffer(slot))});
    assert.deepEqual(activePositions(),active,'USD selection preserves active mesh');
    assert.equal(call('zspace_solver_frame'),frame,'USD selection preserves solver');
  }
  assert.deepEqual([...meshes[0].buffers[0].slice(0,3)],[100,-300,200]);
  assert.deepEqual([...meshes[0].buffers[2]],[1,0,0,1,0,0,1,0,0]);
  assert.deepEqual([...meshes[1].buffers[11]],[2,1,0]);
  assert.equal(meshes[1].visible,0);
  call('zspace_usd_scene_clear');
  assert.equal(call('zspace_usd_scene_mesh_count'),0);
  assert.deepEqual([...meshes[0].buffers[0].slice(0,3)],[100,-300,200],'owned readback survives scene clear');
  for(const format of ['usda','usd','usdc','usdz']) {
    call('zspace_usd_scene_clear');
    for(const [index, mesh] of meshes.entries()) {
      const [positions,,,,,,,weights,,edges,counts,connects] = mesh.buffers;
      upload([positions,counts,connects],([p,c,f])=>check(call('zspace_usd_scene_add_mesh',
        [mesh.name,mesh.path,mesh.visible,p,positions.length,c,counts.length,f,connects.length],
        ['string','string',...Array(7).fill('number')])));
      upload([edges],([p])=>check(call('zspace_usd_scene_set_attribute',[index,2,p,edges.length])));
      upload([weights],([p])=>check(call('zspace_usd_scene_set_attribute',[index,4,p,weights.length])));
      const rgb=mesh.buffers[2], rgba=new Float32Array(rgb.length/3*4);
      for(let i=0;i<rgb.length/3;++i) rgba.set([rgb[i*3],rgb[i*3+1],rgb[i*3+2],1],i*4);
      upload([rgba],([p])=>check(call('zspace_usd_scene_set_attribute',[index,0,p,rgba.length])));
    }
    const output='/tmp/typed.'+format;
    check(call('zspace_usd_scene_save',[output],['string']));
    assert(m.FS.readFile(output).length>0);
    check(call('zspace_usd_scene_open',[output],['string']));
    for(const [index,mesh] of meshes.entries()) {
      check(call('zspace_usd_scene_select',[index]));
      assert.equal(text('zspace_usd_scene_name',index),mesh.name);
      assert.equal(call('zspace_usd_scene_visible',[index]),mesh.visible);
      for(const slot of [0,2,7,8,9,10,11]) assert.deepEqual(buffer(slot),mesh.buffers[slot],format+' buffer '+slot);
    }
  }
  m.FS.writeFile('/tmp/missing.usda','#usda 1.0\ndef Xform "Missing" (references = @absent.usda@) {}\n');
  assert.equal(call('zspace_usd_scene_open',['/tmp/missing.usda'],['string']),0);
  assert.equal(call('zspace_usd_scene_mesh_count'),0,'failed import publishes no partial scene');
  assert.deepEqual(activePositions(),active,'all typed scene operations preserve active mesh');
  assert.equal(call('zspace_solver_frame'),frame);
  const jsonFiles=m.FS.readdir('/tmp').filter(name=>name.endsWith('.json'));
  assert.deepEqual(jsonFiles,[],'typed scene exchange creates no JSON files');
  console.log('OpenUSD direct buffer read/write passed: all four formats, startup/solver isolation, Maya transforms, visibility, colors, owned buffers, no JSON.');
} finally { m.PThread?.terminateAllThreads(); }
