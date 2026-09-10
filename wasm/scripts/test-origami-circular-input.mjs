import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

// CCF_06_circular: nine concentric 48-vertex rings, alternating peak/valley.
const path=process.argv[2];
const rows=readFileSync(path,'utf8').split(/\r?\n/).map(line=>line.trim().split(/\s+/));
const points=rows.filter(row=>row[0]==='v').map(row=>row.slice(1).map(Number));
assert.equal(points.length,432);
const sorted=points.map((p,id)=>({id,r:Math.hypot(p[0],p[1])})).sort((a,b)=>a.r-b.r);
const rings=new Map(sorted.map((p,i)=>[p.id,Math.floor(i/48)]));
for(let ring=1;ring<9;ring++) assert(sorted[ring*48].r-sorted[ring*48-1].r>.05);
const edges=new Map();
for(const row of rows.filter(row=>row[0]==='f')) {
  const face=row.slice(1).map(token=>Number(token.split('/')[0])-1);
  face.forEach((a,i)=>{
    const b=face[(i+1)%face.length],r=rings.get(a);
    if(r===rings.get(b)&&r>0&&r<8) edges.set([a,b].sort((x,y)=>x-y).join(':'),[a,b,r%2?-1:1]);
  });
}
assert.equal(edges.size,336);
const result=spawnSync(process.execPath,[fileURLToPath(new URL('./test-origami-input.mjs',import.meta.url)),path,JSON.stringify([...edges.values()]),process.argv[3]??'{"amount":0.52,"batches":10}'],{stdio:'inherit'});
assert.equal(result.status,0);
