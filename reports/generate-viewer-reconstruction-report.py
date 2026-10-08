import json
from pathlib import Path
from html import escape
root=Path(__file__).resolve().parent
read=lambda name:json.loads((root/name).read_text(encoding='utf-8'))
before=read('viewer-reconstruction-before.json');after=read('viewer-reconstruction-after.json');first=read('viewer-reconstruction-after-first.json');parity=read('viewer-reconstruction-parity.json')
median=lambda xs:sorted(xs)[len(xs)//2]
metrics=[]
for faces in (125000,500000):
 rows=[r for r in parity['timings'] if r['faces']==faces]
 metrics.append({'faces':faces,**{k:median([r[k] for r in rows]) for k in ['beforeSurfaceMs','afterSurfaceMs','boundaryRebuildMs','boundaryComparisonHitMs','copyAndBoundaryHitMs','snapshotBytes']}})
files=['../zspace_alice_webviewer/src/renderers.ts','../zspace_alice_webviewer/src/meshSurfaceBuffers.ts','../zspace_alice_webviewer/src/meshBoundaryCache.ts','../zspace_alice_webviewer/tests/meshReconstruction.test.mjs','../zspace_alice_webviewer/reports/Alice-Viewer-Implementation-Roadmap.md','tests/performance/viewer-reconstruction-parity.mjs','reports/generate-viewer-reconstruction-report.py','reports/viewer-reconstruction-parity.json','reports/viewer-reconstruction-before.json','reports/viewer-reconstruction-after-first.json','reports/viewer-reconstruction-after.json','reports/viewer-reconstruction-optimization.json','reports/viewer-reconstruction-optimization.html','reports/viewer-reconstruction-500k.png']
def phases(run,label):
 if label=='smooth':
  start=next(p['startMs'] for p in run['phases'] if p['name']=='history-before');end=next(p['startMs']+p['durationMs'] for p in run['phases'] if p['name']=='history-commit-inclusive')
 else:
  parent=next(p for p in run['phases'] if p['name']=='history-redo-inclusive');start=parent['startMs'];end=start+parent['durationMs']
 return {p['name']:p['durationMs'] for p in run['phases'] if start<=p['startMs']<end}
report={'date':'2026-10-08','scope':'Surface buffer allocation reduction and content-checked boundary reuse',
 'changes':[
 'Extract face-color surface expansion into meshSurfaceBuffers.ts. Replace per-triangle color arrays, triangle arrays, iterator objects and destructured tuples with scalar values and indexed corner loops. Preserve triangle order, floating arithmetic, Float32 assignment, supplied face colors, vertex-average/default fallback and missing-normal behavior.',
 'Add private per-SceneObject boundary caches in a WeakMap. Each cache retains at most two recent topologies for history reuse, with owned Uint32 snapshots and full value comparisons on every lookup. In-place edits, changed counts and polygon/triangle fallback invalidate results without trusting array identity or hashes.',
 'Cache only boundary classification; surface buffers, attributes, edge weights, crease paths and scene publication retain existing behavior. Custom renderer callback paths retain their original behavior.'
 ],'nodeMedians':metrics,'browser':{'before':before,'afterFirst':first,'afterFinal':after},'phases':{label:{'before':phases(before,label),'after':phases(after,label)} for label in ('smooth','redo')},'parity':parity,
 'verification':[
 'Baseline npm run build passed; post-extraction/optimization build passed; final restored optimized source build passed. TypeScript + Vite verified, existing bundle advisory retained.',
 '62 surface-buffer cases are byte-identical to the preserved former implementation, including exactly 500000 grid quads. Includes supplied/partial face colors, averaged/missing vertex colors and supplied/missing normals.',
 '60 full renderer fixtures match ordered geometry attribute/index bytes, wire paths, visibility, line colors/widths and crease behavior. Repeated publication on the same object retains parity.',
 'Focused cache contracts passed: content-equivalent typed copies hit; raw connectivity/count/triangle-index edits miss; two recent states are reused; a third state evicts the least recently used entry. Owned snapshots are not mutated by input edits.',
 'Nearby browser comparison ran optimized, preserved before, then final optimized renderer in fresh page loads. Temporary baseline source was restored byte-exactly (SHA256 CD3CA26CEFB41DBD52A82EBCC3E688541BCFA1C1E2A9E77BF9752B714E357C97) and final build passed. No simultaneous build/Node benchmark during browser captures.',
 'Actual WebGPU viewer imported 125000 quads, smoothed to 500000/501501 vertices, verified undo/redo counts and sampled default face-color/wire-shaded display, idle and brief wheel zoom at 1280x720 CSS, DPR 1.5.',
 'git diff --check passed for modified renderer. Installed core runtime SHA256 remains 27daad481b9c4a5d6b403b2cf15f79f4f2d7bcd066e3bbefb624d30c57799653; this is viewer-only, no C++/ABI changes or native/WASM rebuild needed.',
 'All dirty/untracked source, sketches, OpenUSD/IO and runtime work preserved. No commit or push.'
 ],'limitations':[
 'Three alternating-order Node trials measure surface expansion and boundary classification/lookup only, excluding browser/GPU/history. Before surface timing includes lightweight THREE geometry/attribute wrappers; after buffer timing excludes those wrappers. Both exclude bounding-sphere work.',
 'Browser captures are exploratory single-run samples per state, with two optimized runs around one nearby before run; they do not establish a stable action median or universal speedup. Smooth before 2181.7 ms, optimized 2079.8 and 2346.2 ms: no consistent full Smooth gain established.',
 'Nearby undo 273.9 -> 190.8 ms, redo 1272.3 -> 678.6 ms. Earlier optimized redo 583.4 ms. Cold Smooth cannot reuse the new output topology and still constructs a boundary map.',
 'Cache adds exact topology snapshots: 2.5 MB for 125k quads and 10 MB for 500k quads (12.5 MB combined per object for this two-state history), plus small boundary sets. Two entries bound retention, and the WeakMap does not itself keep a SceneObject alive. No total/peak/GPU memory reduction is claimed.',
 'Final rAF median/p95 idle gaps 16.655/16.69 ms; brief camera gaps 16.655/16.685 ms, max33.325 ms; no >50 ms gaps in these samples. This is browser scheduling evidence, not GPU completion/FPS or continuous orbit verification.',
 'The comparison harness uses the preserved renderer in ignored wasm/tmp/viewer-reconstruction-before. Cold map allocation, remaining surface-buffer allocation/bounds, snapshot cloning, GPU publication and main-thread pauses remain.',
 'The broad responsiveness/history roadmap remains incomplete. Existing solver-only dynamic GPU updates are preserved; this step does not introduce broader renderer reuse or fix selection/display behavior.'
 ],'nextPriority':'Reduce allocation in first-time boundary classification (final Smooth boundary phase about 531 ms) using contiguous scratch buffers while preserving first-seen order and corner-use rules. C++ smooth/export remains about 779 ms in that browser sample; moving computation off the main thread requires a separate ownership/serialization design.',
 'changedFiles':files}
(root/'viewer-reconstruction-optimization.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
def table(headers,rows):return '<table><thead><tr>'+''.join('<th>'+escape(str(h))+'</th>' for h in headers)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+escape(str(v))+'</td>' for v in row)+'</tr>' for row in rows)+'</tbody></table>'
def bullets(items):return '<ul>'+''.join('<li>'+escape(str(v))+'</li>' for v in items)+'</ul>'
html='''<!doctype html><html lang="en"><meta charset="utf-8"><title>Viewer reconstruction optimization</title><style>body{font:16px system-ui;color:#172437;line-height:1.55;max-width:1100px;margin:40px auto;padding:0 24px}h1{font-size:34px}table{border-collapse:collapse;width:100%;margin:20px 0}th,td{padding:10px;text-align:left;border-bottom:1px solid #dbe2e9}th{background:#edf3fa}li{margin:8px 0}.note{background:#fff0d7;padding:18px}img{width:100%}</style><h1>Viewer reconstruction optimization</h1><p>08 October 2026 · exact 500,000 quads · default display and history retained.</p><p class="note"><b>History restoration benefits from boundary reuse.</b> Nearby redo: 1.27 -> 0.68 seconds. Smooth remains around 2.1–2.35 seconds in this session; a consistent full Smooth gain is not established.</p>'''
html+='<h2>Implemented</h2>'+bullets(report['changes'])
html+='<h2>Node phase medians — three alternating trials</h2>'+table(['Quads','Old surface ms','New surface ms','Boundary rebuild ms','Verified cache hit ms','Snapshot bytes'],[(r['faces'],round(r['beforeSurfaceMs'],2),round(r['afterSurfaceMs'],2),round(r['boundaryRebuildMs'],2),round(r['boundaryComparisonHitMs'],2),r['snapshotBytes']) for r in metrics])
html+='<h2>Nearby browser actions — single samples</h2>'+table(['Action','Before ms','First optimized ms','Final optimized ms'],[(b['name'],round(b['actionMs'],1),round(f['actionMs'],1),round(a['actionMs'],1)) for b,f,a in zip(before['actions'],first['actions'],after['actions'])])
for label in ('smooth','redo'):
 data=report['phases'][label];html+='<h2>'+label.capitalize()+' phases</h2><p>Inclusive totals contain child phases; do not sum them together.</p>'+table(['Phase','Before ms','Final after ms'],[(key,round(data['before'][key],2) if key in data['before'] else '-',round(value,2)) for key,value in data['after'].items()])
html+='<h2>Verification</h2>'+bullets(report['verification'])+'<h2>Limits and memory tradeoff</h2>'+bullets(report['limitations'])+'<p><b>Next priority:</b> '+escape(report['nextPriority'])+'</p><h2>Verified 500k scene after redo</h2><img src="viewer-reconstruction-500k.png" alt="Alice viewer after redo at exactly 500000 quads"><h2>Changed files this milestone</h2>'+bullets(files)+'</html>'
(root/'viewer-reconstruction-optimization.html').write_text(html,encoding='utf-8')
print(json.dumps({'node':metrics,'browserActions':after['actions'],'parityCases':[parity['surfaceCases'],parity['rendererCases']]},indent=2))
