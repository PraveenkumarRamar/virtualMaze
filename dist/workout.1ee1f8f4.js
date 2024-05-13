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
})({"script.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var Table = /*#__PURE__*/function () {
  function Table() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var fetching_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    _classCallCheck(this, Table);
    this.data = data;
    this.fetching_data = fetching_data;
    this.formContainer = null;
  }
  return _createClass(Table, [{
    key: "getHeader",
    value: function getHeader() {
      var thead = document.createElement("thead");
      var tr = document.createElement("tr");
      tr.style.textAlign = "center";
      this.data.forEach(function (data, index) {
        var th = document.createElement("th");
        th.innerText = data.label ? data.label : "-";
        tr.append(th);
      });
      console.log(this.data);
      console.log(this.fetching_data);
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

    // getData() {
    //     let tbody = document.createElement('tbody');

    //     this.fetching_data.forEach((data, index) => {
    //         let tr = document.createElement("tr");
    //         tr.setAttribute("id", `row${index}`);

    //         this.data.forEach((item) => {
    //             let td = document.createElement("td");
    //             td.style.textAlign = "center";
    //             td.setAttribute("class", `data${index}`);

    //             if (item.keyId !== "action") {
    //                 td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
    //                 tr.append(td);
    //             } else {
    //                 let buttonsCell = document.createElement("td");
    //                 buttonsCell.appendChild(this.getActionButton(item.action, index)); // Pass data.id as row ID
    //                 tr.appendChild(buttonsCell);
    //             }
    //         });

    //         tbody.appendChild(tr);
    //     });

    //     return tbody;
    // }
  }, {
    key: "getData",
    value: function getData() {
      var _this = this;
      var tbody = document.createElement('tbody');
      this.fetching_data.forEach(function (data, index) {
        var tr = document.createElement("tr");
        tr.setAttribute("id", "row".concat(index));
        _this.data.forEach(function (item) {
          var td = document.createElement("td");
          td.style.textAlign = "center";
          td.setAttribute("class", "data".concat(index));
          if (item.keyId !== "action") {
            td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
            tr.append(td);
          } else {
            var buttonsCell = document.createElement("td");
            buttonsCell.appendChild(_this.getActionButton(item.action, index)); // Pass data.id as row ID
            tr.appendChild(buttonsCell);
          }
        });
        tbody.appendChild(tr);
      });
      var id = this.fetching_data.length;
      console.log(id);

      // Add a new row for adding data
      var newRow = document.createElement("tr");
      newRow.setAttribute("id", "row".concat(id));
      // newRow.style.display = "none"
      this.data.forEach(function (item) {
        var td = document.createElement("td");
        td.style.textAlign = "center";
        td.setAttribute("class", "data".concat(id));
        if (item.keyId !== "action") {
          var input = document.createElement("input");
          input.setAttribute("type", "text");
          input.setAttribute("class", "text_data".concat(id));
          input.setAttribute("placeholder", item.label);
          td.appendChild(input);
          newRow.appendChild(td);
        } else {
          var addButton = document.createElement("button");
          addButton.id = id;
          addButton.classList.add('row-action-btn');
          addButton.innerText = "Add";
          td.appendChild(addButton);
          newRow.appendChild(td);
        }
      });
      id++;
      tbody.appendChild(newRow);
      return tbody;
    }
  }, {
    key: "addData",
    value: function addData(id) {
      var _this2 = this;
      // let data =  document.querySelectorAll(".data0")
      // // for(let d of data){
      // //     i++
      // //     console.log(d.innerHTML);
      // // }

      var newRow = document.getElementById("row".concat(id));
      var inputElements = document.querySelectorAll(".text_data".concat(id));
      var newData = {};
      console.log(inputElements, 'inputElements');
      inputElements.forEach(function (input, index) {
        var keyId = _this2.data[index].keyId;
        console.log(keyId, 'keyy');
        newData[keyId] = input.value;
      });
      this.fetching_data.push(newData);
      this.tableStructure();

      // const title = prompt("Enter title:");
      // const description = prompt("Enter description:");
      // if ((title.length || description.length) < 0) {
      //     alert('Fields cannot be empty')
      //     return
      // } else {
      //     this.fetching_data.push({ title: title, description: description });
      // }
      // this.tableStructure();

      // console.log(data);
      // // return data
    }
    // addDataButton() {
    //     let addBtn = document.createElement("button")
    //     addBtn.innerHTML = "Add";
    //     addBtn.style.textAlign = "center"

    //     let addRowBtn = document.getElementById("newRow")
    //     console.log(addRowBtn);
    //     // addRowBtn.style.display = "inline"
    //     // addBtn.style.display = "none"

    //     addBtn.addEventListener("click", () => this.addData())
    //     return addBtn
    // }
  }, {
    key: "getActionButton",
    value: function getActionButton(actions, id) {
      var _this3 = this;
      var buttonContainer = document.createElement("div"); // Create a container for buttons
      buttonContainer.style.display = "flex"; // Align buttons horizontally
      buttonContainer.style.justifyContent = "center";
      actions.forEach(function (action) {
        var button = document.createElement("button");
        button.style.margin = "5px";
        button.setAttribute("id", "".concat(action, "_").concat(id)); // Unique ID for each button based on row ID
        button.innerText = action;

        // Add event listener based on action type
        switch (action) {
          case "Edit":
            button.addEventListener("click", function () {
              return _this3.editData(id);
            });
            break;
          case "Delete":
            button.addEventListener("click", function () {
              return _this3.deleteData(id);
            });
            break;
          case "Save":
            button.style.display = "none"; // Hide the Save button initially
            button.addEventListener("click", function () {
              return _this3.saveData(id);
            });
            break;
          default:
            break;
        }
        buttonContainer.appendChild(button);
      });
      return buttonContainer;
    }
  }, {
    key: "tableStructure",
    value: function tableStructure() {
      var _this4 = this;
      var table = document.createElement("table");
      var headingTable = this.getHeader();
      var dataTable = this.getData();
      table.append(headingTable, dataTable);

      // console.log(table);
      var appBody = document.getElementById("app");
      appBody.innerHTML = ''; // Clear previous content
      appBody.append(table); // Append the table
      console.log(table);
      var add_btn_event = document.querySelector('.row-action-btn');
      add_btn_event === null || add_btn_event === void 0 || add_btn_event.addEventListener('click', function () {
        _this4.addData(add_btn_event.id);
      });
    }
  }, {
    key: "editData",
    value: function editData(id) {
      // console.log(`Data edited successfully in  ${id}`);
      var data = document.querySelectorAll(".data".concat(id));
      console.log(data.length);

      // let fContainer = this.formContainer || this.formData()
      // let form = fContainer.querySelector('.form-container')
      // // console.log(form);
      // form.innerHTML = ''
      // fContainer.style.display = "block";
      // this.formContainer = fContainer

      for (var i = 0; i < data.length; i++) {
        data[i].innerHTML = "<input type='text' id='text_data".concat(id, "' value='").concat(data[i].innerHTML, "'/>");
      }
      var editBtn = document.querySelector("#Edit_".concat(id));
      editBtn.style.display = "none";

      // console.log(editBtn);

      var saveBtn = document.querySelector("#Save_".concat(id));
      saveBtn.style.display = "inline";

      // for (let datas of data) {
      //     // console.log(typeof datas.innerHTML);
      //     let inputs = datas.innerHTML
      //     form.innerHTML += `<input type='text' id='text_data${id}' value='${inputs}'/><br><br>`;
      //     // inputs.setAttribute("type" , "text")
      // }
      // let ele = document.getElementById("app")
      // ele.append(fContainer)
      // document.body.appendChild(fContainer)
    }
  }, {
    key: "deleteData",
    value: function deleteData(id) {
      console.log(id);
      if (confirm("Are you sure you want to delete this item?")) {
        this.fetching_data.splice(id, 1);
        this.tableStructure();
      }
    }
  }, {
    key: "saveData",
    value: function saveData(id) {
      var _this5 = this;
      var input_data = document.querySelectorAll("#text_data".concat(id));
      var table_data = document.querySelectorAll(".data".concat(id));
      var newData = {};

      // Assuming input_data and table_data have the same length
      input_data.forEach(function (input, index) {
        var keyId = _this5.data[index].keyId;
        // console.log(keyId, 'keyy');
        newData[keyId] = input.value;
        table_data[index].innerHTML = input.value;
      });
      // this.tableStructure();
      this.fetching_data.push(newData);

      // this.closeForm(id)
    }
  }, {
    key: "formData",
    value: function formData() {
      var div = document.createElement("div");
      div.setAttribute("class", "forms-section");
      var form = document.createElement("form");
      form.setAttribute("class", "form-container");
      div.append(form);
      return div;
    }

    // closeForm(id) {

    //     let editBtn = document.querySelector(`#Edit_${id}`)
    //     editBtn.style.display = "inline"

    //     // console.log(editBtn);

    //     let saveBtn = document.querySelector(`#Save_${id}`)
    //     saveBtn.style.display = "none"

    //     // let form = document.querySelector(".forms-section")
    //     this.formContainer.style.display = "none";

    // }
  }]);
}();
var deploy = new Table([{
  keyId: "title",
  label: "Title"
  // formate() {

  // }
}, {
  keyId: "description",
  label: "Description"
  // formate() {

  // }
}, {
  keyId: "reason",
  label: "Reason"
  // action: ["Edit", "Delete", "Save"]

  // formate() {

  // }
}, {
  keyId: "date",
  label: "Date"
  // action: ["Edit", "Delete", "Save"]
  // formate() {

  // }
}, {
  keyId: "action",
  label: "Action",
  action: ["Edit", "Delete", "Save"]

  // formate() {

  // }
}], [{
  id: "1",
  title: "title 1",
  description: "Direct",
  reason: "nothing",
  date: 122001
}, {
  id: "2",
  title: "title 2",
  description: "Legacy",
  reason: "no reason",
  date: 123002
}, {
  id: "3",
  title: "title 3",
  description: "Direct",
  reason: "only reason",
  date: 125001
}, {
  id: "3",
  title: "title 3",
  description: "Direct",
  reason: "yes yes",
  date: 112001
}]);

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
var _default = exports.default = Table;
},{}],"workout.js":[function(require,module,exports) {
"use strict";

var _script = _interopRequireDefault(require("./script"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Screen1_button = document.createElement("button");
Screen1_button.setAttribute('id', 'screen1');
Screen1_button.innerText = "Screen1";
Screen1_button.addEventListener("click", function () {
  tables.makeTable();
});
var Screen2_button = document.createElement("button");
Screen2_button.setAttribute('id', 'screen2');
Screen2_button.innerText = "Screen2";
Screen2_button.addEventListener("click", function () {
  tables2.makeTable();
});
document.body.append(Screen1_button, Screen2_button);
var Screen1 = /*#__PURE__*/function () {
  function Screen1(data, fetching_data) {
    _classCallCheck(this, Screen1);
    this.table1 = new _script.default(data, fetching_data);
  }
  return _createClass(Screen1, [{
    key: "makeTable",
    value: function makeTable() {
      this.table1.tableStructure();
      // console.log("make table is working");
    }
  }]);
}();
var Screen2 = /*#__PURE__*/function () {
  function Screen2(data, fetching_data) {
    _classCallCheck(this, Screen2);
    this.table2 = new _script.default(data, fetching_data);
  }
  return _createClass(Screen2, [{
    key: "makeTable",
    value: function makeTable() {
      this.table2.tableStructure();
      // console.log("make table is working");
    }
  }]);
}();
var tables = new Screen1([{
  keyId: "title",
  label: "Title"
}, {
  keyId: "description",
  label: "Description"
}, {
  keyId: "action",
  label: "Action",
  action: ["Edit", "Delete", "Save"]
}], [{
  title: "title 1",
  description: "Direct-message"
}, {
  title: "title 2",
  description: "Legacy"
}, {
  title: "title 3",
  description: "Direct-message"
}]);
var tables2 = new Screen2([{
  keyId: "title",
  label: "Title"
  // formate() {

  // }
}, {
  keyId: "description",
  label: "Description"
  // formate() {

  // }
}, {
  keyId: "reason",
  label: "Reason"
  // action: ["Edit", "Delete", "Save"]

  // formate() {

  // }
}, {
  keyId: "date",
  label: "Date"
  // action: ["Edit", "Delete", "Save"]
  // formate() {

  // }
}, {
  keyId: "action",
  label: "Action",
  action: ["Edit", "Delete", "Save"]

  // formate() {

  // }
}], [{
  title: "title 1",
  description: "Direct",
  reason: "nothing",
  date: 122001
}, {
  title: "title 2",
  description: "Legacy",
  reason: "no reason",
  date: 123002
}, {
  title: "title 3",
  description: "Direct",
  reason: "only reason",
  date: 125001
}, {
  title: "title 3",
  description: "Direct",
  reason: "yes yes",
  date: 112001
}]);

// })

// document.body.append(screen1);
},{"./script":"script.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59606" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","workout.js"], null)
//# sourceMappingURL=/workout.1ee1f8f4.js.map