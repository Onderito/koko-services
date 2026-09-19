// Exercise the consent component with mocked React hooks and browser APIs.
// No real Google requests or production measurement IDs are used.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = fs.readFileSync('src/app/ui/analytics.tsx', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const KEY = 'kokolimo-consent-v1';
const entry = (analytics, advertising, savedAt = Date.now()) => JSON.stringify({ version: 1, analytics, advertising, savedAt });
function boot(stored, env = { NEXT_PUBLIC_GA_ID: 'G-TEST', NEXT_PUBLIC_GOOGLE_ADS_ID: 'AW-TEST' }) {
  const state = [], effects = [], cookies = [];
  let cursor = 0, reloaded = false, initial = true, value = stored;
  const exports = {};
  const window = { location: { hostname: 'www.kokolimo.com', reload: () => { reloaded = true; } }, addEventListener() {}, removeEventListener() {}, setInterval() {}, clearInterval() {} };
  const context = { exports, process: { env }, window, document: { get cookie() { return '_ga=test; _gcl_au=test; necessary=keep'; }, set cookie(v) { cookies.push(v); } }, localStorage: { getItem: () => value, setItem: (_, v) => { value = v; } }, require: name => {
    if (name === 'react') return { useState: initialValue => { const index = cursor++; if (!(index in state)) state[index] = initialValue; return [state[index], v => { state[index] = v; }]; }, useEffect: fn => { if (initial) effects.push(fn); } };
    if (name === 'react/jsx-runtime') return { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }), Fragment: 'fragment' };
    if (name === 'next/script') return { default: 'script' };
    if (name === 'next/link') return { default: 'a' };
    throw new Error(name);
  } };
  vm.runInNewContext(compiled, context);
  function render() { cursor = 0; return exports.default(); }
  const ssr = render();
  effects.forEach(fn => fn()); initial = false;
  return { render, ssr, cookies, get stored() { return value; }, get reloaded() { return reloaded; } };
}
function nodes(tree) { if (!tree || typeof tree !== 'object') return []; return [tree, ...[tree.props?.children].flat(Infinity).flatMap(nodes)]; }
function scripts(tree) { return nodes(tree).filter(x => x.type === 'script'); }
function click(app, label) { const button = nodes(app.render()).find(x => x.type === 'button' && x.props.children === label); assert.ok(button, label); button.props.onClick(); }
for (const stored of [null, 'broken', entry(true, true, Date.now() - 181 * 86400000), entry(true, true, Date.now() + 86400000), JSON.stringify({ version: 1, analytics: 'yes', advertising: true, savedAt: Date.now() }), entry(false, false)]) {
  const app = boot(stored); assert.equal(scripts(app.ssr).length, 0); assert.equal(scripts(app.render()).length, 0);
}
let app = boot(null); click(app, 'Reject all'); assert.equal(scripts(app.render()).length, 0); assert.equal(JSON.parse(app.stored).advertising, false);
app = boot(null); click(app, 'Accept all'); let code = scripts(app.render())[0].props.children;
assert.ok(code.includes('G-TEST') && code.includes('AW-TEST')); assert.ok(code.indexOf("'consent', 'default'") < code.indexOf("'config'"));
app = boot(entry(true, false)); code = scripts(app.render())[0].props.children; assert.ok(code.includes('G-TEST')); assert.ok(!code.includes('AW-TEST')); assert.ok(code.includes('"ad_storage":"denied"'));
app = boot(entry(false, true)); code = scripts(app.render())[0].props.children; assert.ok(!code.includes('G-TEST')); assert.ok(code.includes('AW-TEST'));
app = boot(entry(true, true)); click(app, 'Cookie settings'); click(app, 'Reject all'); assert.ok(app.reloaded); assert.equal(JSON.parse(app.stored).analytics, false); assert.ok(app.cookies.some(x => x.startsWith('_ga='))); assert.ok(!app.cookies.some(x => x.startsWith('necessary=')));
app = boot(entry(true, false), { NEXT_PUBLIC_GTM_ID: 'GTM-TEST' }); assert.equal(scripts(app.render()).length, 0);
app = boot(entry(true, true), { NEXT_PUBLIC_GTM_ID: 'GTM-TEST' }); assert.ok(scripts(app.render())[0].props.children.includes('GTM-TEST'));
app = boot(entry(true, true), {}); assert.equal(scripts(app.render()).length, 0);
assert.ok(!source.includes('<noscript>'));
console.log('Consent checks passed: SSR blocking, absent/invalid/expired/refused choices, granular consent, tag order, withdrawal, cookie cleanup, GTM gating and absent IDs.');
