import fs from 'node:fs';
const target='../zspace_alice_webviewer/reports/viewer-500k-stress.html';
fs.writeFileSync(target,`<!doctype html><html lang="en"><meta charset="utf-8"><title>Alice 500k responsiveness test</title><body><div id="app"></div><script type="module" src="/src/main.ts"></script><script type="module">
const pause=ms=>new Promise(r=>setTimeout(r,ms)), frames=()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
while(!document.querySelector('#menu-smooth-mesh'))await pause(100);
const panel=document.createElement('section');panel.style.cssText='position:fixed;left:12px;top:105px;z-index:99999;background:#fff;color:#111;padding:10px;width:400px;max-height:65vh;overflow:auto;font:12px monospace;border:1px solid #888';
panel.innerHTML='<b>Actual viewer · 500,000 quad stress test</b><p>Normal import, Smooth Mesh, history and default display are retained. Frame gaps are CPU/browser scheduling observations, not GPU completion times.</p><button id="test-load">Load 125,000 quad grid</button> <button id="test-smooth">Smooth once to 500,000</button> <button id="test-idle">Measure idle 5 seconds</button> <button id="test-interact">Measure camera interaction 8 seconds</button> <button id="test-history">Undo / redo</button><pre id="test-results">Ready</pre>';
document.body.append(panel);const output=panel.querySelector('#test-results');
const report={capturedAt:new Date().toISOString(),userAgent:navigator.userAgent,method:'Actual Alice viewer import/Smooth Mesh/history/display. Action times include UI/history, transfers, WASM, readback and publication; presented time adds two rAF callbacks, not GPU completion. Frame-gap samples include VSync/background scheduling and do not establish GPU throughput.',actions:[],samples:[],longTasks:[]};
try{new PerformanceObserver(list=>{for(const e of list.getEntries())report.longTasks.push({startMs:e.startTime,durationMs:e.duration});}).observe({type:'longtask',buffered:true});}catch{}
const count=id=>Number(document.getElementById(id).textContent.replace(/[^0-9]/g,''));
const show=()=>{report.renderer=document.querySelector('#renderer-status')?.textContent??'loading';report.faces=count('attr-faces');report.vertices=count('attr-vertices');report.status=document.querySelector('#status').textContent;report.jsHeapUsedBytes=performance.memory?.usedJSHeapSize;output.textContent=JSON.stringify(report,null,2);};
const waitFor=async predicate=>{const start=performance.now();while(!predicate()){if(performance.now()-start>120000)throw Error('Viewer action timed out: '+document.querySelector('#status').textContent);await pause(25);}};
const action=async(name,run,predicate)=>{const start=performance.now();run();await waitFor(predicate);const actionMs=performance.now()-start;await frames();report.actions.push({name,faces:count('attr-faces'),vertices:count('attr-vertices'),actionMs,presentedMs:performance.now()-start});show();};
const guarded=fn=>async()=>{try{await fn();}catch(e){report.error=String(e);show();}};
panel.querySelector('#test-load').onclick=guarded(async()=>{
 const width=500,height=250,lines=[];const start=performance.now();
 for(let y=0;y<=height;y++)for(let x=0;x<=width;x++)lines.push('v '+(x/25-10)+' '+(y/25-5)+' '+((x*x+y*y)*.000004));
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){const a=y*(width+1)+x+1;lines.push('f '+a+' '+(a+1)+' '+(a+width+2)+' '+(a+width+1));}
 const file=new File([lines.join('\\n')],'stress-125k.obj',{type:'text/plain'});report.fixtureGenerationMs=performance.now()-start;report.inputBytes=file.size;
 await action('import 125000 quads',()=>{const dt=new DataTransfer();dt.items.add(file);const input=document.querySelector('#geometry-file');input.files=dt.files;input.dispatchEvent(new Event('change',{bubbles:true}));},()=>count('attr-faces')===125000);
});
panel.querySelector('#test-smooth').onclick=guarded(async()=>{
 if(count('attr-faces')!==125000)throw Error('Load the 125000-face grid first.');
 await action('smooth 125000 to 500000',()=>document.querySelector('#menu-smooth-mesh').click(),()=>count('attr-faces')===500000&&document.querySelector('#status').textContent.startsWith('Smoothed current geometry'));
 if(count('attr-faces')!==500000)throw Error('Unexpected face count');
});
async function sample(name,duration){
 if(count('attr-faces')!==500000)throw Error('Expected 500000 faces');
 const gaps=[],start=performance.now();let last=start,events=0;const input=()=>events++;
 window.addEventListener('pointermove',input);window.addEventListener('wheel',input);output.textContent='Sampling '+name+'; orbit/zoom the viewport now if requested.';
 await new Promise(resolve=>{const tick=t=>{gaps.push(t-last);last=t;if(t-start<duration)requestAnimationFrame(tick);else resolve();};requestAnimationFrame(tick);});
 window.removeEventListener('pointermove',input);window.removeEventListener('wheel',input);const sorted=gaps.slice(1).sort((a,b)=>a-b),q=p=>sorted[Math.min(sorted.length-1,Math.floor(sorted.length*p))];
 report.samples.push({name,faces:count('attr-faces'),durationMs:last-start,frames:gaps.length,inputEvents:events,medianGapMs:q(.5),p95GapMs:q(.95),maxGapMs:sorted.at(-1),gapsOver50Ms:sorted.filter(x=>x>50).length,visible:document.visibilityState,viewport:[innerWidth,innerHeight],devicePixelRatio});show();
}
panel.querySelector('#test-idle').onclick=guarded(()=>sample('idle',5000));panel.querySelector('#test-interact').onclick=guarded(()=>sample('camera interaction',8000));
panel.querySelector('#test-history').onclick=guarded(async()=>{await action('undo smooth',()=>document.querySelector('#undo').click(),()=>count('attr-faces')===125000);await action('redo smooth',()=>document.querySelector('#redo').click(),()=>count('attr-faces')===500000);});
show();
</script></body></html>`);
console.log(target);
