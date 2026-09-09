import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

// CCF_05a's first 13 faces form the inner sheet. Its interface with the next
// strip is the 24-edge peak network shown in the user's reference images.
const path=process.argv[2];
const faces=readFileSync(path,'utf8').split(/\r?\n/).filter(line=>line.startsWith('f '))
  .map(line=>line.trim().split(/\s+/).slice(1).map(token=>Number(token.split('/')[0])-1));
assert.equal(faces.length,61,'This fixture expects CCF_05a.obj');
const edges=new Map();
faces.forEach((face,id)=>face.forEach((a,j)=>{
  const b=face[(j+1)%face.length],key=[a,b].sort((x,y)=>x-y).join(':');
  if(!edges.has(key)) edges.set(key,[]);
  edges.get(key).push(id);
}));
const peaks=[...edges].filter(([,uses])=>uses.length===2&&uses.some(id=>id<13)&&uses.some(id=>id>=13))
  .map(([key])=>[...key.split(':').map(Number),-1]);
assert.equal(peaks.length,24);
const result=spawnSync(process.execPath,[fileURLToPath(new URL('./test-origami-input.mjs',import.meta.url)),path,JSON.stringify(peaks),process.argv[3]??'{"amount":0.62}'],{stdio:'inherit'});
assert.equal(result.status,0);
