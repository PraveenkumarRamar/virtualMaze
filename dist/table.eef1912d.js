// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"table.js":[function(require,module,exports) {
// // Creating a class
// class CRUDTable {
//     // Create a Constructor

//     constructor(containerId) {
//         this.container = document.getElementById(containerId);
//         this.data = [
//             {
//                 name: "PraveenKumar",
//                 email: "praveen@gmail.com"
//             }, {
//                 name: "Ragul",
//                 email: "ragul@gmail.com"
//             }];
//         this.heading = [
//             {
//                 title: "Name"
//             }, {
//                 title: "Email"
//             }, {
//                 title: "Action"
//             }
//         ]
//         this.action = [{
//             title: "Edit",
//             act: "edit",
//             btn: "btn btn-primary"
//         }, {
//             title: "Delete",
//             act: "delete",
//             btn: "btn btn-danger"
//         }
//         ]
//     }
//     getHeader() {
//         return `<thead>
//         <tr>
//             ${this.heading.map((items, index) =>
//             `<th>${items.title}</th>`)}
//         </tr>
//     </thead>`
//     }

//     getRowData() {
//         return 
//         let tbody = document.createElement("tbody")
//         tbody.innerHTML = `${this.data.map((item, index) => `
//         <tr id="${index}">
//             <td id="name_row${index}">${item.name}</td>
//             <td id="email_row${index}">${item.email}</td>
//             <td>
//             ${this.action.map((actions) => `
//             <button class="${actions.btn} m-2" onclick="crudTable.${actions.act} (${index})">${actions.title}</button>
//             `).join(" ")}
//             </td>
//         </tr>
//     `).join('')}`

//     }

//     render() {

//         // let table = document.createElement('table')
//         // table.append(this.getHeaderData(), this.getRowData())
//         // return table
//         this.container.innerHTML = `<table class="table table-striped">
//                     ${this.getHeader,this.getRowData}
//                     </table>
//                     <div class=" text-center">    
//                             <button class="btn btn-warning" onclick="crudTable.create()">Add New</button>
//                     </div>
//                 `;
//     }

//     create() {
//         const name = prompt("Enter name:");
//         const email = prompt("Enter email:");
//         this.data.push({ name, email });
//         this.render();
//     }

//     edit(index) {

//         let name = document.getElementById("name_row" + index)
//         let email = document.getElementById("email_row" + index)

//         // let nameValue = c
//         // let emailValue = email.innerHTML

//         // console.log(nameValue,emailValue);

//         name.innerHTML = `<input type='text' id='name_text${index}' value=' ${this.data[index].name}'>`
//         email.innerHTML = `<input type='text' id='email_text${index}' value=' ${this.data[index].email}'>`

//         console.log(this.data[index].name);

//         // const newName = prompt("Enter new name:", this.data[index].name);
//         // const newEmail = prompt("Enter new email:", this.data[index].email);
//         // this.data[index] = { name: nameValue, email: emailValue };
//         this.render();
//     }

//     save(index) {
//         let nameInput = document.getElementById("name_text" + index).value
//         let emailInput = document.getElementById("email_text" + index).value

//         console.log(nameInput, emailInput);

//         document.getElementById("name_row" + index).innerHTML = nameInput
//         document.getElementById("email_row" + index).innerHTML = emailInput
//         // console.log(name,email);
//     }

//     delete(index) {
//         if (confirm("Are you sure you want to delete this item?")) {
//             this.data.splice(index, 1);
//             this.render();
//         }
//     }
// }

// const crudTable = new CRUDTable('app');
// crudTable.render();

// // export default CRUDTable

var selectedRow = null;
var headingOne = document.getElementById('headingOne');
var headingTwo = document.getElementById('headingTwo');
var headingThree = document.getElementById('headingThree');
var headingFour = document.getElementById('headingFour');
var headingFive = document.getElementById('headingFive');
var ListHeadingOne = document.getElementById('ListHeadingOne');
var ListHeadingTwo = document.getElementById('ListHeadingTwo');
var ListHeadingThree = document.getElementById('ListHeadingThree');
var ListHeadingFour = document.getElementById('ListHeadingFour');
var ListHeadingFive = document.getElementById('ListHeadingFive');
headingOne.innerHTML = "Full Name";
headingTwo.innerHTML = "Staff Number";
headingThree.innerHTML = "Position";
headingFour.innerHTML = "Cell Number";
headingFive.innerHTML = "Email";
ListHeadingOne.innerHTML = headingOne.innerHTML;
ListHeadingTwo.innerHTML = headingTwo.innerHTML;
ListHeadingThree.innerHTML = headingThree.innerHTML;
ListHeadingFour.innerHTML = headingFour.innerHTML;
ListHeadingFive.innerHTML = headingFive.innerHTML;
function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);else updateRecord(formData);
  resetForm();
}
function readFormData() {
  var formData = {};
  formData["fieldOne"] = document.getElementById("fieldOne").value;
  formData["fieldTwo"] = document.getElementById("fieldTwo").value;
  formData["fieldThree"] = document.getElementById("fieldThree").value;
  formData["fieldFour"] = document.getElementById("fieldFour").value;
  formData["fieldFive"] = document.getElementById("fieldFive").value;
  return formData;
}
function insertNewRecord(data) {
  var table = document.getElementById("tableList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fieldOne;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.fieldTwo;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.fieldThree;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.fieldFour;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.fieldFive;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = "<a onClick=\"onEdit(this)\">Edit</a>\n                       <a onClick=\"onDelete(this)\">Delete</a>";
}
function resetForm() {
  document.getElementById("fieldOne").value = "";
  document.getElementById("fieldTwo").value = "";
  document.getElementById("fieldThree").value = "";
  document.getElementById("fieldFour").value = "";
  document.getElementById("fieldFive").value = "";
  selectedRow = null;
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fieldOne").value = selectedRow.cells[0].innerHTML;
  document.getElementById("fieldTwo").value = selectedRow.cells[1].innerHTML;
  document.getElementById("fieldThree").value = selectedRow.cells[2].innerHTML;
  document.getElementById("fieldFour").value = selectedRow.cells[3].innerHTML;
  document.getElementById("fieldFive").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fieldOne;
  selectedRow.cells[1].innerHTML = formData.fieldTwo;
  selectedRow.cells[2].innerHTML = formData.fieldThree;
  selectedRow.cells[3].innerHTML = formData.fieldFour;
  selectedRow.cells[4].innerHTML = formData.fieldFive;
}
function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById("tableList").deleteRow(row.rowIndex);
    resetForm();
  }
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53550" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","table.js"], null)
//# sourceMappingURL=/table.eef1912d.js.map