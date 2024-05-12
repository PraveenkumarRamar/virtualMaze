// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4QWE2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8f144eb9cc12b1cf";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dUu5I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _script = require("./script");
var _scriptDefault = parcelHelpers.interopDefault(_script);
let Screen1_button = document.createElement("button");
Screen1_button.setAttribute("id", "screen1");
Screen1_button.innerText = "Screen1";
Screen1_button.addEventListener("click", ()=>{
    tables.makeTable();
});
let Screen2_button = document.createElement("button");
Screen2_button.setAttribute("id", "screen2");
Screen2_button.innerText = "Screen2";
Screen2_button.addEventListener("click", ()=>{
    tables2.makeTable();
});
document.body.append(Screen1_button, Screen2_button);
class Screen1 {
    constructor(data, fetching_data){
        this.table1 = new (0, _scriptDefault.default)(data, fetching_data);
    }
    makeTable() {
        this.table1.tableStructure();
    // console.log("make table is working");
    }
}
class Screen2 {
    constructor(data, fetching_data){
        this.table2 = new (0, _scriptDefault.default)(data, fetching_data);
    }
    makeTable() {
        this.table2.tableStructure();
    // console.log("make table is working");
    }
}
let tables = new Screen1([
    {
        keyId: "title",
        label: "Title"
    },
    {
        keyId: "description",
        label: "Description"
    },
    {
        keyId: "action",
        label: "Action",
        action: [
            "Edit",
            "Delete",
            "Save"
        ]
    }
], [
    {
        id: "1",
        title: "title 1",
        description: "Direct-message"
    },
    {
        id: "2",
        title: "title 2",
        description: "Legacy"
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct-message"
    }
]);
let tables2 = new Screen2([
    {
        keyId: "title",
        label: "Title"
    },
    {
        keyId: "description",
        label: "Description"
    },
    {
        keyId: "reason",
        label: "Reason"
    },
    {
        keyId: "date",
        label: "Date"
    },
    {
        keyId: "action",
        label: "Action",
        action: [
            "Edit",
            "Delete",
            "Save"
        ]
    }
], [
    {
        id: "1",
        title: "title 1",
        description: "Direct",
        reason: "nothing",
        date: 122001
    },
    {
        id: "2",
        title: "title 2",
        description: "Legacy",
        reason: "no reason",
        date: 123002
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct",
        reason: "only reason",
        date: 125001
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct",
        reason: "yes yes",
        date: 112001
    }
]) // })
 // document.body.append(screen1);
;

},{"./script":"6rimH","@parcel/transformer-js/src/esmodule-helpers.js":"bpisw"}],"6rimH":[function(require,module,exports) {
// let screen1 = document.createElement("button");
// screen1.innerText = "Screen1"
// screen1.addEventListener("click", () => {
//     test.tableStructure();
// })
// let screen2 = document.createElement("button");
// screen2.innerText = "Screen2"
// screen2.addEventListener("click", () => {
//     deploy.tableStructure();
// })
// document.body.append(screen1, screen2);
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Table {
    constructor(data = [], fetching_data = []){
        this.data = data;
        this.fetching_data = fetching_data;
        this.formContainer = null;
    }
    getHeader() {
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        tr.style.textAlign = "center";
        this.data.forEach((data, index)=>{
            let th = document.createElement("th");
            th.innerText = data.label ? data.label : "-";
            tr.append(th);
        });
        // Object.keys(this.fetching_data[index]).forEach((key)=>{
        //     console.log(key);
        // })
        // this.data.map((datas, index) => {
        //     // if (data.label === undefined) {
        //     //     // d
        //     //     return data.label = "-";
        //     // }
        //     console.log(this.data[index]);
        //     // if(this.data[index].keyId == Object.keys(this.fetching_data[index])){
        //     //     console.log(this.data[index].keyId);
        //     // }
        //     // let th = document.createElement("th");
        //     // th.setAttribute("id", `headerId${index}`)
        //     // th.innerHTML = data.label
        // })
        thead.append(tr);
        // console.log(thead);
        return thead;
    }
    // getActionButton(actions,id) {
    //     let button_data = document.createElement("td");
    //     button_data.style.textAlign = "center";
    //     actions.forEach((action,index) => {
    //         let button = document.createElement("button");
    //         button.style.margin = "10px";
    //         button.setAttribute("id",id)
    //         button.innerText = action;
    //         // button.addEventListener("click", () => {
    //         //     deploy.`${action}Data`(id)})
    //         button_data.appendChild(button);
    //     });
    //     return button_data;
    // }
    // getData() {
    //     let tbody = document.createElement('tbody');
    //     this.fetching_data.forEach((data,index) => {
    //         let tr = document.createElement("tr");
    //         tr.setAttribute("id", `row${index}`);
    //         this.data.forEach((item) => {
    //             let td = document.createElement("td");
    //             td.style.textAlign = "center";
    //             td.setAttribute("class", `data${index}`)
    //             td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
    //             // data[item.keyId] == "action" ? return : "-";
    //             tr.append(td)
    //         });
    //         if (Array.isArray(data.action)) {
    //             let buttons = this.getActionButton(data.action,index);
    //             tr.appendChild(buttons);
    //         }
    //         else {
    //             let emptyCell = document.createElement("td");
    //             tr.appendChild(emptyCell);
    //         }
    //         console.log(tr);
    //         tbody.appendChild(tr);
    //     });
    //     return tbody;
    // }
    getData() {
        let tbody = document.createElement("tbody");
        this.fetching_data.forEach((data, index)=>{
            let tr = document.createElement("tr");
            tr.setAttribute("id", `row${index}`);
            this.data.forEach((item)=>{
                let td = document.createElement("td");
                td.style.textAlign = "center";
                td.setAttribute("class", `data${index}`);
                if (item.keyId !== "action") {
                    td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
                    tr.append(td);
                } else {
                    let buttonsCell = document.createElement("td");
                    buttonsCell.appendChild(this.getActionButton(item.action, index)); // Pass data.id as row ID
                    tr.appendChild(buttonsCell);
                }
            });
            tbody.appendChild(tr);
        });
        return tbody;
    }
    getActionButton(actions, id) {
        let buttonContainer = document.createElement("div"); // Create a container for buttons
        buttonContainer.style.display = "flex"; // Align buttons horizontally
        buttonContainer.style.justifyContent = "center";
        actions.forEach((action)=>{
            let button = document.createElement("button");
            button.style.margin = "5px";
            button.setAttribute("id", `${action}_${id}`); // Unique ID for each button based on row ID
            button.innerText = action;
            // Add event listener based on action type
            switch(action){
                case "Edit":
                    button.addEventListener("click", ()=>this.editData(id));
                    break;
                case "Delete":
                    button.addEventListener("click", ()=>this.deleteData(id));
                    break;
                case "Save":
                    button.style.display = "none"; // Hide the Save button initially
                    button.addEventListener("click", ()=>this.saveData(id));
                    break;
                default:
                    break;
            }
            buttonContainer.appendChild(button);
        });
        return buttonContainer;
    }
    tableStructure() {
        let table = document.createElement("table");
        let headingTable = this.getHeader();
        let dataTable = this.getData();
        table.append(headingTable, dataTable);
        // console.log(table);
        let appBody = document.getElementById("app");
        appBody.innerHTML = ""; // Clear previous content
        appBody.append(table, this.addDataButton()); // Append the table
        console.log(table);
    }
    editData(id) {
        // console.log(`Data edited successfully in  ${id}`);
        let data = document.querySelectorAll(`.data${id}`);
        let fContainer = this.formContainer || this.formData();
        let form = fContainer.querySelector(".form-container");
        // console.log(form);
        form.innerHTML = "";
        fContainer.style.display = "block";
        this.formContainer = fContainer;
        let editBtn = document.querySelector(`#Edit_${id}`);
        editBtn.style.display = "none";
        // console.log(editBtn);
        let saveBtn = document.querySelector(`#Save_${id}`);
        saveBtn.style.display = "inline";
        for (let datas of data){
            // console.log(typeof datas.innerHTML);
            let inputs = datas.innerHTML;
            form.innerHTML += `<input type='text' id='text_data${id}' value='${inputs}'/><br><br>`;
        // inputs.setAttribute("type" , "text")
        }
        let ele = document.getElementById("app");
        ele.append(fContainer);
    // document.body.appendChild(fContainer)
    }
    deleteData(id) {
        console.log(id);
        if (confirm("Are you sure you want to delete this item?")) {
            this.fetching_data.splice(id, 1);
            this.tableStructure();
        }
    }
    saveData(id) {
        let input_data = document.querySelectorAll(`#text_data${id}`);
        let table_data = document.querySelectorAll(`.data${id}`);
        // Assuming input_data and table_data have the same length
        input_data.forEach((input, index)=>{
            table_data[index].innerHTML = input.value;
        });
        this.closeForm(id);
    }
    formData() {
        let div = document.createElement("div");
        div.setAttribute("class", "forms-section");
        let form = document.createElement("form");
        form.setAttribute("class", "form-container");
        div.append(form);
        return div;
    }
    addData() {
        // let data =  document.querySelectorAll(".data0")
        // // for(let d of data){
        // //     i++
        // //     console.log(d.innerHTML);
        // // }
        const title = prompt("Enter title:");
        const description = prompt("Enter description:");
        if ((title.length || description.length) < 0) {
            alert("Fields cannot be empty");
            return;
        } else this.fetching_data.push({
            title: title,
            description: description
        });
        this.tableStructure();
    // console.log(data);
    // // return data
    }
    addDataButton() {
        let addBtn = document.createElement("button");
        addBtn.innerHTML = "Add";
        addBtn.style.textAlign = "center";
        addBtn.addEventListener("click", ()=>this.addData());
        return addBtn;
    }
    closeForm(id) {
        let editBtn = document.querySelector(`#Edit_${id}`);
        editBtn.style.display = "inline";
        // console.log(editBtn);
        let saveBtn = document.querySelector(`#Save_${id}`);
        saveBtn.style.display = "none";
        // let form = document.querySelector(".forms-section")
        this.formContainer.style.display = "none";
    }
}
let deploy = new Table([
    {
        keyId: "title",
        label: "Title"
    },
    {
        keyId: "description",
        label: "Description"
    },
    {
        keyId: "reason",
        label: "Reason"
    },
    {
        keyId: "date",
        label: "Date"
    },
    {
        keyId: "action",
        label: "Action",
        action: [
            "Edit",
            "Delete",
            "Save"
        ]
    }
], [
    {
        id: "1",
        title: "title 1",
        description: "Direct",
        reason: "nothing",
        date: 122001
    },
    {
        id: "2",
        title: "title 2",
        description: "Legacy",
        reason: "no reason",
        date: 123002
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct",
        reason: "only reason",
        date: 125001
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct",
        reason: "yes yes",
        date: 112001
    }
]);
// deploy.getData()
// deploy.tableStructure();
// class Table2 extends Table {
//     constructor(data = [], fetching_data = []) {
//         super(data, fetching_data)
//     }
// }
// let test = new Table([
//     {
//         keyId: "title",
//         label: "Title",
//         // formate() {
//         // }
//     },
//     {
//         keyId: "description",
//         label: "Description",
//         // formate() {
//         // }
//     },
//     {
//         keyId: "action",
//         label: "Action",
//         action: ["Edit", "Delete", "Save"]
//         // formate() {
//         // }
//     }
// ], [
//     {
//         id: "1",
//         title: "title 1",
//         description: "Direct-message",
//     },
//     {
//         id: "2",
//         title: "title 2",
//         description: "Legacy",
//     },
//     {
//         id: "3",
//         title: "title 3",
//         description: "Direct-message",
//     }
// ])
exports.default = Table;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bpisw"}],"bpisw":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["4QWE2","dUu5I"], "dUu5I", "parcelRequire94c2")

//# sourceMappingURL=index.cc12b1cf.js.map
