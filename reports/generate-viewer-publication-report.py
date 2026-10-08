import json
from pathlib import Path
from html import escape

root=Path(__file__).resolve().parent
before=json.loads((root/'viewer-publication-before.json').read_text())
after=json.loads((root/'viewer-publication-after.json').read_text())
parity=json.loads((root/'viewer-boundary-parity.json').read_text())
median=lambda xs: sorted(xs)[len(xs)//2]
boundary=[]
for faces in (125000,500000):
 rows=[r for r in parity['timings'] if r['faces']==faces]
 boundary.append(dict(faces=faces,beforeMs=median([r['beforeMs'] for r in rows]),afterMs=median([r['afterMs'] for r in rows])))
def smooth_phases(run):
 start=next(p['startMs'] for p in run['phases'] if p['name']=='history-before')
 end=next(p['startMs']+p['durationMs'] for p in run['phases'] if p['name']=='history-commit-inclusive')
 return {p['name']:p['durationMs'] for p in run['phases'] if start<=p['startMs']<end}
files=['../zspace_alice_webviewer/src/meshBoundaryEdges.ts','../zspace_alice_webviewer/src/meshPerformance.ts','../zspace_alice_webviewer/src/renderers.ts','../zspace_alice_webviewer/src/app.ts','../zspace_alice_webviewer/src/meshOperatorActions.ts','../zspace_alice_webviewer/src/historyController.ts','../zspace_alice_webviewer/src/wasmBufferTransfers.ts','../zspace_alice_webviewer/tests/meshBoundaryEdges.test.mjs','../zspace_alice_webviewer/reports/viewer-500k-stress.html','../zspace_alice_webviewer/reports/Alice-Viewer-Implementation-Roadmap.md','tests/performance/viewer-boundary-parity.mjs','reports/generate-viewer-publication-report.py','reports/viewer-boundary-parity.json','reports/viewer-publication-before.json','reports/viewer-publication-after.json','reports/viewer-publication-optimization.json','reports/viewer-publication-optimization.html','reports/viewer-publication-500k.png']
report=dict(date='2026-10-08',scope='Viewer Smooth Mesh publication profiling and boundary classification optimization',changes=[
 'Replace per-face arrays, string edge keys and per-edge adjacent-face arrays with a flat saturated corner-use counter. Numeric packed endpoints are used only within exact safe-integer limits, with string fallback for large IDs.',
 'Retain first-seen boundary order, repeated-corner use counts, self-edge and nonmanifold classification, weighted wire paths/crease direction/colors/widths and exported custom renderer callbacks.',
 'Reuse packed boundary membership to avoid string keys for interior render edges; skip empty crease lookup work while retaining own/inherited custom assignment objects.',
 'Add opt-in synchronous phase recorder at typed upload, native input installation/export, smooth/export, owned readback, geometry reconstruction, publication, camera fit, snapshot capture/commit and undo/redo. Ordinary viewer use records no timings.'
 ],boundaryNodeMedians=boundary,browserSmoothPhases={'before':smooth_phases(before),'after':smooth_phases(after)},browser={'before':before,'after':after},parity=parity,verification=[
 'npm run build passed before changes, after profiling, after boundary extraction, after membership refinement and after final transfer instrumentation (TypeScript + Vite). Existing bundle-size advisory remains.',
 '109 ordered boundary fixtures and exhaustive small-ID membership queries match the former adjacency algorithm. Includes random/repeated corners, open/shared/nonmanifold edges, self edges, triangle fallback, truncated connectivity and uint32 IDs requiring exact string fallback.',
 '18 full renderer parity hashes match the preserved pre-change renderer, including geometry attribute/index bytes, ordered wire paths, visibility, line colors/widths and inherited crease assignments.',
 'Existing typed transfer tests passed 3/3: heap growth, allocation failure cleanup, legacy runtime fallback and ID validation.',
 'Actual viewer imported 125000 quads, smoothed to exactly 500000 quads and 501501 vertices, exercised default face-color/wire-shaded display, idle scheduling, brief wheel zoom, undo to 125000 and redo to 500000.',
 'Installed runtime SHA256 remains 27daad481b9c4a5d6b403b2cf15f79f4f2d7bcd066e3bbefb624d30c57799653. No C++/ABI/runtime changes in this milestone; native/WASM rebuild not required.',
 'Before snapshots retained in ignored wasm/tmp/viewer-publication-before. All unrelated dirty/untracked source, sketches, OpenUSD work and runtime changes preserved. No commit or push.'
 ],limitations=[
 'Node boundary medians exclude renderer construction, browser action, GPU and history. Browser before/final-after captures are single exploratory runs, not paired medians. Additional intermediate measurements varied; no consistent full-action speedup is established.',
 'Final Smooth action 3066.6 -> 3839.8 ms despite lower boundary/wire costs. Other phases also became slower. Timing variation/GC/system scheduling prevents causal attribution of the action regression from these runs.',
 'Phase names ending inclusive contain nested phases; do not sum inclusive totals with their children. cpp-smooth-and-export includes render export; native-input-install-and-export includes native mesh installation/export. This milestone does not isolate those C++ subphases.',
 'Final idle sample median 16.665 ms, p95 33.32 ms, one gap >50 ms. Brief camera sample median 16.665 ms, p95 49.935 ms, maximum 349.72 ms and 15 gaps >50 ms. Responsiveness is not established as consistently smooth. These are scheduling observations, not GPU completion/FPS measurements or continuous orbit tests.',
 'JS heap snapshots are not peak/total/GPU memory and fluctuate with GC. Final post-redo/interaction snapshot approximately 649 MB; before snapshot approximately 935 MB, insufficient to establish memory reduction.',
 'Full-renderer before/after verification harness uses the retained pre-change renderer snapshot in wasm/tmp/viewer-publication-before. Standalone regression packaging is future work.',
 'Boundary classification still builds an O(edges) map each reconstruction; caching requires explicit mutation/ownership invalidation and is deliberately not introduced in this step.'
 ],nextPriority='Reduce reconstruction allocation and repeated incidence work with explicit lifetime/invalidation guarantees, especially face-color surface construction and undo/redo publication; consider a worker only with a reviewable runtime ownership contract. C++ storage installation remains another measured target.',changedFiles=files)
(root/'viewer-publication-optimization.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
def table(headers,rows):
 return '<table><thead><tr>'+''.join('<th>'+escape(str(v))+'</th>' for v in headers)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+escape(str(v))+'</td>' for v in row)+'</tr>' for row in rows)+'</tbody></table>'
def bullets(items): return '<ul>'+''.join('<li>'+escape(s)+'</li>' for s in items)+'</ul>'
phases=report['browserSmoothPhases']
html='''<!doctype html><html lang="en"><meta charset="utf-8"><title>Viewer publication optimization</title><style>body{font:16px system-ui;margin:40px auto;max-width:1100px;padding:0 24px;line-height:1.55;color:#172437}h1{font-size:34px}table{border-collapse:collapse;width:100%;margin:20px 0}th,td{text-align:left;padding:10px;border-bottom:1px solid #dae1ea}th{background:#edf3fa}li{margin:8px 0}.note{background:#fff0d7;padding:18px}img{width:100%}code{font-size:13px;overflow-wrap:anywhere}</style><h1>Viewer publication optimization</h1><p>08 October 2026 · exact 500,000 quad workload · existing APIs, default display and history retained.</p><p class="note"><b>Boundary classification is faster. Full viewer latency is not consistently improved.</b> The final exploratory Smooth run took 3.84 seconds versus 3.07 seconds before. Multi-second main-thread pauses and camera scheduling stalls remain.</p>'''
html+='<h2>Implemented</h2>'+bullets(report['changes'])
html+='<h2>Repeatable Node boundary classification</h2>'+table(['Quads','Before median (ms)','After median (ms)'],[(r['faces'],round(r['beforeMs'],1),round(r['afterMs'],1)) for r in boundary])
html+='<h2>Actual browser actions — single run per version</h2>'+table(['Action','Before (ms)','Final after (ms)'],[(b['name'],round(b['actionMs'],1),round(a['actionMs'],1)) for b,a in zip(before['actions'],after['actions'])])
html+='<h2>Smooth phases</h2><p>Inclusive rows contain nested work. These columns are single samples, not medians. Input installation and smooth calls include native export.</p>'+table(['Phase','Before (ms)','Final after (ms)'],[(key,round(phases['before'][key],2) if key in phases['before'] else 'not separately captured',round(value,2)) for key,value in phases['after'].items()])
html+='<h2>Verification</h2>'+bullets(report['verification'])+'<h2>Limits and remaining work</h2>'+bullets(report['limitations'])+'<p><b>Next priority:</b> '+escape(report['nextPriority'])+'</p>'
html+='<h2>500k viewer after redo</h2><img src="viewer-publication-500k.png" alt="Actual Alice viewer after redo at 500000 quads"><h2>Changed files this milestone</h2>'+bullets(files)+'</html>'
(root/'viewer-publication-optimization.html').write_text(html,encoding='utf-8')
print(json.dumps({'node':boundary,'smoothPhases':report['browserSmoothPhases'],'verificationCases':[parity['boundaryParityCases'],parity['renderParityCases']]},indent=2))
