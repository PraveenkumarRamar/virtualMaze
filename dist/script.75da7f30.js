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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var formatMilliseconds = function formatMilliseconds(milliseconds) {
  milliseconds = parseFloat(milliseconds || 0);

  // Create a new Date object using the milliseconds
  var date = new Date(milliseconds);

  // Get the components of the date and time
  var day = date.getDate().toString().padStart(2, '0'); // Get day and pad with zero if needed
  var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1 and pad with zero
  var year = date.getFullYear().toString(); // Get full year
  var hours = date.getHours().toString().padStart(2, '0'); // Get hours and pad with zero
  var minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with zero

  // Construct the formatted date and time string
  var formattedDateTime = "".concat(day, "/").concat(month, "/").concat(year, ", ").concat(hours, ":").concat(minutes);
  return formattedDateTime;
};
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

      // console.log(this.data);
      // console.log(this.fetching_data);
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
      tbody.id = 'content-table-body';
      this.fetching_data.forEach(function (data, index) {
        var tr = document.createElement("tr");
        tr.setAttribute("id", "row".concat(index));
        // console.log(data);

        _this.data.forEach(function (item) {
          var td = document.createElement("td");
          td.style.textAlign = "center";
          td.setAttribute("class", "data".concat(index));
          if (item.keyId !== "action") {
            td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
            if (data[item.keyId] !== undefined) {
              if (item.type == "number") {
                var number = data[item.keyId];
                td.innerHTML = item.format ? item.format(number) : number;
              }
            } else {
              td.innerHTML = 'notAvailable';
            }
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
      // console.log(id);

      // Add a new row for adding data
      // let newRow = document.createElement("tr");
      // newRow.setAttribute("id", `row${id}`);
      // this.data.forEach((item) => {
      //     let td = document.createElement("td");
      //     td.style.textAlign = "center";
      //     td.setAttribute("class", `data${id}`)

      //     if (item.keyId !== "action") {
      //         let input = document.createElement("input");
      //         input.setAttribute("type", "text");
      //         input.setAttribute("class", `text_data${id}`);
      //         input.setAttribute("placeholder", item.label);
      //         td.appendChild(input);
      //         newRow.appendChild(td);
      //     } else {
      //         let addButton = document.createElement("button");
      //         addButton.id = id
      //         addButton.classList.add('row-action-btn')
      //         addButton.innerText = "Add";
      //         td.appendChild(addButton);

      //         newRow.appendChild(td);
      //     }
      // });
      // id++;

      // tbody.appendChild(newRow);

      return tbody;
    }
  }, {
    key: "addData",
    value: function addData(id) {
      var _this2 = this;
      console.log(id, 'sadasd');
      var inputElements = document.querySelectorAll(".text_data".concat(id));
      console.log(inputElements);
      var newData = {};

      // console.log(inputElements, 'inputElements');

      inputElements.forEach(function (input, index) {
        var keyId = _this2.data[index].keyId;
        // console.log(keyId, 'keyy');
        newData[keyId] = input.value;
        // console.log(input.value);
      });
      this.fetching_data.push(newData);
      this.tableStructure();

      // } else {
      //     this.fetching_data.push({ title: title, description: description });
      // }
      // this.tableStructure();

      // console.log(data);
      // // return data
    }
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
      var table = document.createElement("table");
      var headingTable = this.getHeader();
      var dataTable = this.getData();
      table.append(headingTable, dataTable);

      // console.log(table);
      var appBody = document.getElementById("app");
      appBody.innerHTML = ''; // Clear previous content

      appBody.append(table); // Append the table

      var addButton = this.addDataButton();
      appBody.appendChild(addButton); // Append the table
      // console.log(table);

      // let add_btn =  this.addDataButton() 

      // appBody.append(add_btn)
    }
  }, {
    key: "editData",
    value: function editData(id) {
      var data = document.querySelector("#row".concat(id));
      // console.log(id);

      var td_cells = data.querySelectorAll(".data".concat(id));
      // console.log(td_cells.length);

      var keyData = this.data;
      // let f_dataKeys = Object.keys(this.fetching_data[id]);
      // console.log(f_dataKeys);
      var f_data = this.fetching_data[id];
      for (var i = 0; i < td_cells.length; i++) {
        if (keyData[i].type == "select") {
          // console.log(keyData[i]);
          var selectElement = document.createElement("select");
          selectElement.setAttribute("name", "table");
          selectElement.classList.add("select_data".concat(id));
          selectElement.setAttribute("id", "table-select-element");
          td_cells[i].innerHTML = "";
          td_cells[i].append(selectElement);
          var selectDataLength = keyData[i].option.length;
          // console.log(selectDataLength);

          for (var j = 0; j < selectDataLength; j++) {
            // console.log( f_data.title[i].selectTitle);
            var option = document.createElement("option");
            option.setAttribute("value", keyData[i].option[j]);
            option.innerText = keyData[i].option[j];
            selectElement.appendChild(option);
          }
        } else if (keyData[i].type == "radio") {
          var radioOptions = keyData[i].option;
          // console.log(radioOptions);

          var radioContainer = document.createElement("div"); // Container for radio inputs and labels
          for (var _j = 0; _j < radioOptions.length; _j++) {
            var input = document.createElement("input");
            input.setAttribute("type", keyData[i].type);
            input.setAttribute("name", "radio_data".concat(id)); // Unique name for radio group
            input.setAttribute("value", radioOptions[_j]);
            input.checked = f_data.gender == radioOptions[_j] ? true : false;
            var label = document.createElement("label");
            label.innerText = radioOptions[_j];
            radioContainer.appendChild(input);
            radioContainer.appendChild(label);
            // }
            td_cells[i].innerHTML = ""; // Clear cell content
            td_cells[i].appendChild(radioContainer);
          }
        } else if (keyData[i].type == "text") {
          // console.log(keyData[i], td_cells[i].innerHTML);
          var _input = document.createElement("input");
          _input.setAttribute("type", keyData[i].type);
          _input.classList.add("input_data".concat(id));
          _input.setAttribute("name", "text_".concat(id)); // Unique name for radio group
          _input.setAttribute("value", f_data[keyData[i].keyId]);
          td_cells[i].innerHTML = _input.outerHTML;
        } else if (keyData[i].type == "number") {
          var numberInput = document.createElement('input');
          var number = f_data[keyData[i].keyId];
          numberInput.classList.add("input_data".concat(id));
          numberInput.setAttribute('type', keyData[i].type);
          numberInput.setAttribute("value", number);
          td_cells[i].innerText = "";
          td_cells[i].appendChild(numberInput);
        }
        var editBtn = document.querySelector("#Edit_".concat(id));
        editBtn.style.display = "none";

        // console.log(editBtn);

        var saveBtn = document.querySelector("#Save_".concat(id));
        saveBtn.style.display = "inline";
        // saveBtn.addEventListener("click", () => this.saveData(id))
      }
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
      var dataRow = document.querySelector("#row".concat(id));
      var td_cells = dataRow.querySelectorAll(".data".concat(id));
      // console.log(td_cells);
      // let input_data = document.querySelectorAll(`#text_data${id})

      var keyData = this.data;
      var f_data = this.fetching_data[id];
      var newData = {};
      for (var i = 0; i < td_cells.length; i++) {
        if (keyData[i].type == "radio") {
          var radios = document.getElementsByName("radio_data".concat(id));
          // console.log(id);
          // console.log(radios);
          var _iterator = _createForOfIteratorHelper(radios),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var data = _step.value;
              if (data.checked) td_cells[i].innerHTML = data.value;
              // data.checked?console.log("checked",data.value):console.log("no",data.value);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else if (keyData[i].type == "select") {
          var _data = td_cells[i].querySelector(".select_data".concat(id));
          // console.log(data.value);
          // for (let selected of data) {
          var value = _data.value;
          td_cells[i].innerHTML = value;
          // }
        } else if (keyData[i].type == "number" || keyData[i].type == "text") {
          var _data2 = td_cells[i].querySelector(".input_data".concat(id)).value;
          td_cells[i].innerHTML = keyData[i].format ? keyData[i].format(_data2) : _data2;
        }
      }
      var editBtn = document.querySelector("#Edit_".concat(id));
      editBtn.style.display = "inline";

      // console.log(editBtn);

      var saveBtn = document.querySelector("#Save_".concat(id));
      saveBtn.style.display = "none";

      // this.tableStructure();
      // this.fetching_data.push(newData);
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
  }, {
    key: "addAddingRow",
    value: function addAddingRow() {
      var _this4 = this;
      var parentContainer = document.querySelector('#content-table-body');
      var id = this.fetching_data.length;
      var newRow = document.createElement("tr");
      newRow.setAttribute("id", "row".concat(id));
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
      parentContainer.appendChild(newRow);
      var main_add_btn = document.querySelector('#addButton');
      var add_btn_event = newRow.querySelector('.row-action-btn');
      add_btn_event === null || add_btn_event === void 0 || add_btn_event.addEventListener('click', function () {
        _this4.addData(add_btn_event.id);
        add_btn_event.parentElement.parentElement.remove();
        main_add_btn.style.display = 'flex';
      });
    }
  }, {
    key: "addDataButton",
    value: function addDataButton() {
      var _this5 = this;
      var id = this.fetching_data.length;
      var addBtn = document.createElement("button");
      addBtn.innerHTML = "Add";
      addBtn.style.textAlign = "center";
      addBtn.setAttribute("id", "addButton");
      addBtn.addEventListener("click", function () {
        _this5.addAddingRow();
        addBtn.style.display = 'none';
      });
      return addBtn;
    }
  }]);
}();
var deploy = new Table([{
  keyId: "name",
  label: "Name",
  type: "text",
  format: function format(value) {
    return value || 'N/A';
  }
}, {
  keyId: "gender",
  label: "Gender",
  type: "radio",
  option: ["male", "female", "trans"]
}, {
  keyId: "department",
  label: "Department",
  type: "select",
  option: ["IT", "Software", "Mech"]
}, {
  keyId: "designation",
  label: "Designation",
  type: "select",
  option: ["Manager", "developer"]
}, {
  keyId: "date",
  label: "Date",
  type: "number",
  format: function format(value) {
    return formatMilliseconds(value);
  }
}, {
  keyId: "action",
  label: "Action",
  action: ["Edit", "Delete", "Save"]
}], [{
  name: "Raja",
  date: 1725895,
  gender: 'male',
  // 0,1,2
  department: "Software",
  // IT, Software, Mech
  designation: "Developer" // Manager, developer, 
}
// {
//     name: "Praveen",
//     date: 1725895215663,
//     gender: 'male', // 0,1,2
//     department: "Software", // IT, Software, Mech
//     designation: "Developer" // Manager, developer, 
// },
// {
//     name: "Ajin",
//     date: 1725895215663,
//     gender: 'male', // 0,1,2
//     department: "Software", // IT, Software, Mech
//     designation: "Developer" // Manager, developer, 
// }
]);
deploy.tableStructure();
var _default = exports.default = Table;
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62769" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map