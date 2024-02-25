/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
    height: 100%;
    overflow: hidden;
    background: radial-gradient(circle, white, rgba(0, 0, 0, 0.5));
    background-color: #1b1b2c;
    background-blend-mode: overlay;
  }
  
  .credits {
    width: 100%;
    top: 90%;
  }
  .piece{
    transform-style: preserve-3d;
  }
  *.unselectable {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    user-select: none;
 }
  .text {
    text-align: center;
    font-family: Helvetica;
    font-size: 2rem;
    color: rgb(196, 192, 192);
  }

  .text:hover{
    color: white;
    text-shadow: 1px 1px 30px rgb(24, 23, 23);
  }
  
  .centered, .cube > .piece > .element > .sticker {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform-style: preserve-3d;
  }
  
  .sticker{
    font-size: 33px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .scene {
    width: 100%;
    height: 100%;
    perspective: 1200px;
    transform-style: preserve-3d;
  }
  .scene > .pivot {
    width: 0;
    height: 0;
    transition: 0.1s;
  }
  .scene .anchor {
    width: 2em;
    height: 6em;
  }
  .scene div {
    position: absolute;
    transform-style: inherit;
  }
  
  .cube {
    font-size: 300%;
    margin-left: -1em;
    margin-top: -1em;
  }
  .cube > .piece {
    width: 1.9em;
    height: 1.9em;
  }
  .cube > .piece > .element {
    width: 100%;
    height: 100%;
    background: #0A0A0A;
    outline: 1px solid transparent;
    border: 0.05em solid #0A0A0A;
    border-radius: 10%;
  }
  .cube > .piece > .element.left {
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(-90deg) rotateZ(180deg) translateZ(1em);
  }
  .cube > .piece > .element.right {
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(90deg) rotateZ(90deg) translateZ(1em);
  }
  .cube > .piece > .element.back {
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(180deg) rotateZ(-90deg) translateZ(1em);
  }
  .cube > .piece > .element.front {
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(1em);
  }
  .cube > .piece > .element.bottom {
    transform-style: preserve-3d;
    transform: rotateX(-90deg) rotateY(0deg) rotateZ(-90deg) translateZ(1em);
  }
  .cube > .piece > .element.top {
    transform: rotateX(90deg) rotateY(0deg) rotateZ(180deg) translateZ(1em);
    transform-style: preserve-3d;
  }
  .cube > .piece > .element > .sticker {
    transform: translateZ(2px);
    width: 95%;
    height: 95%;
    border-radius: 10%;
    outline: 1px solid transparent;
    box-shadow: inset 0.05em 0.05em 0.2rem 0 rgba(255, 255, 255, 0.25), inset -0.05em -0.05em 0.2rem 0 rgba(0, 0, 0, 0.25);
  }
  .cube > .piece > .element > .sticker.blue {
    background-color: #383737;
  }
  .cube > .piece > .element > .sticker.green {
    background-color: #502b4b;
  }
  .cube > .piece > .element > .sticker.white {
    background-color: #ddd8d8;
  }
  .cube > .piece > .element > .sticker.yellow {
    background-color: #2a4652;
  }
  .cube > .piece > .element > .sticker.orange {
    background-color: #2e4826;
  }
  .cube > .piece > .element > .sticker.red {
    background-color: #542221;
  }
  .cube > .piece > .element > .sticker.blue:hover {
    background-color: #1d1d1d;
  }
  .cube > .piece > .element > .sticker.green:hover {
    background-color: #1d1d1d;
  }
  .cube > .piece > .element > .sticker.white:hover {
    background-color: #1d1d1d;
  }
  .cube > .piece > .element > .sticker.yellow:hover {
    background-color: #1d1d1d;
  }
  .cube > .piece > .element > .sticker.orange:hover {
    background-color: #1d1d1d;
  }
  .cube > .piece > .element > .sticker.red:hover {
    background-color: #1d1d1d;
  }
  .orange > .boxinfo{
    transform: rotate(90deg);
  }
  .green > .boxinfo{
    transform: rotate(270deg);
  }
  .blue > .boxinfo{
    transform: rotate(180deg);
  }
  .yellow > .boxinfo{
    transform: rotate(270deg);
  }
  
  .infodisplay{
    display: flex;
    flex-direction: column;
    top: 10%;
    font-size: 1.8em;
    align-content: center;
    width: 13rem;
    text-shadow: 1px 1px 30px rgb(94, 92, 92);
    height: 50rem;
    position: fixed;
    left: 1%;
    color: white;
  }
  .visible{
    display: flex;
  }
  .addpoint{
    all: unset;
    display: flex;
    align-self: center;
    color: #fffafa;
    height: 3rem;
    width: 3rem;
    font-size: 30px;
    background: none;
  }
  .addpoint:hover{
    text-shadow: 1px 1px 30px rgb(94, 92, 92);
    transform: scale(130%);
    transition-duration: 0.2s;
  }

  .buttondisplay{
    position: fixed;
    right:0%;
    top: 0%;
    display: flex;
    flex-direction: row;
    height: 3rem;
    width: 10rem;
    background-color: #1d1d1d;
  

  }
  .goback, .settings, .editmodet{
    all: unset;
    display: flex;
    align-self: center;
    color: #fffafa;
    height: 3rem;
    width: 3rem;
    font-size: 30px;
    background: none;
  }`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cube)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Cube = /*#__PURE__*/function () {
  function Cube(x) {
    _classCallCheck(this, Cube);
    _defineProperty(this, "count", 54);
    _defineProperty(this, "faces", []);
    _defineProperty(this, "currentangle", 0);
    _defineProperty(this, "size", 0);
    _defineProperty(this, "editmode", false);
    _defineProperty(this, "colors", ['blue', 'green', 'white', 'yellow', 'orange', 'red']);
    _defineProperty(this, "idno", 0);
    _defineProperty(this, "pieces", []);
    _defineProperty(this, "startXY", 0);
    this.size = x;
    this.pieces = document.getElementsByClassName('piece');
  }

  // Returns j-th adjacent face of i-th face
  _createClass(Cube, [{
    key: "getAxis",
    value: function getAxis(face) {
      return String.fromCharCode('X'.charCodeAt(0) + face / 2); // X, Y or Z
    }

    // Moves each of 26 pieces to their places, assigns IDs and attaches stickers
  }, {
    key: "assembleCube",
    value: function assembleCube() {
      var _this = this;
      console.log(this.assembleCube);
      for (var id, x, i = 0; id = 0, i < 26; i++) {
        x = Cube.mx(i, i % 18);
        this.pieces[i].style.transform = 'rotateX(0deg)' + this.moveto(i % 6, id, i) + (i > 5 ? this.moveto(x, id, i) + (i > 17 ? this.moveto(Cube.mx(x, x + 2), id, i) : '') : '');
        this.pieces[i].setAttribute('id', 'piece' + id);
      }
      var stickers = document.querySelectorAll('div.sticker');
      stickers.forEach(function (element) {
        element.addEventListener('click', function () {
          Cube.showinfo(element);
        });
        _this.faces.push(element);
      });
    }
  }, {
    key: "moveto",
    value: function moveto(face, id, i) {
      id = id + (1 << face);
      var square = document.createElement('div');
      square.setAttribute('class', 'sticker ' + this.colors[face]);
      square.classList.add('unselectable');
      square.classList.add(this.idno);
      this.idno = this.idno + 1;
      this.pieces[i].children[face].appendChild(square);
      return 'translate' + this.getAxis(face) + '(' + (face % 2 * 4 - 2) + 'em)';
    }
  }, {
    key: "getPieceBy",
    value: function getPieceBy(face, index, corner) {
      console.log("GETBYPIECE");
      return document.getElementById('piece' + ((1 << face) + (1 << Cube.mx(face, index)) + (1 << Cube.mx(face, index + 1)) * corner));
    }

    // Swaps stickers of the face (by clockwise) stated times, thereby rotates the face
  }, {
    key: "swapPieces",
    value: function swapPieces(face, times) {
      console.log('SWAP PEICES');
      for (var i = 0; i < 6 * times; i++) {
        var piece1 = this.getPieceBy(face, i / 2, i % 2),
          piece2 = this.getPieceBy(face, i / 2 + 1, i % 2);
        for (var j = 0; j < 5; j++) {
          var sticker1 = piece1.children[j < 4 ? Cube.mx(face, j) : face].firstChild,
            sticker2 = piece2.children[j < 4 ? Cube.mx(face, j + 1) : face].firstChild,
            className = sticker1 ? sticker1.className : '';
          if (className) {
            sticker1.className = sticker2.className;
            sticker2.className = className;
          }
        }
      }
      editfaces();
    }

    // Animates rotation of the face (by clockwise if cw), and then swaps stickers
  }, {
    key: "mousedown",
    value:
    // Events
    function mousedown(md_e) {
      console.log("MOUSEDOWN");
      this.startXY = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number), element = md_e.target.closest('.element'), face = [].indexOf.call((element || cube).parentNode.children, element);
      (element || document.body).appendChild(guide);
      scene.addEventListener('mousemove', Cube.mousemove(element));
      document.addEventListener('mouseup', Cube.mouseup(guide));
      scene.removeEventListener('mousedown', this.mousedown);
    }
  }, {
    key: "editfaces",
    value: function editfaces() {
      console.log("EDITFACES");
      faces.forEach(function (element) {
        if (element.childNodes.length > 0) {
          element.removeChild(element.firstChild);
        }
      });
      faces.forEach(function (element) {
        if (element.classList.contains('modified')) {
          console.log("WE GONE ONE");
          var info = document.createElement('p');
          info.classList.toggle('boxinfo');
          info.textContent = element.information;
          console.log(info);
          element.appendChild(info);
        }
      });
    }
  }], [{
    key: "mx",
    value: function mx(i, j) {
      return ([2, 4, 3, 5][j % 4 | 0] + i % 2 * ((j | 0) % 4 * 2 + 3) + 2 * (i / 2 | 0)) % 6;
    }
  }, {
    key: "animateRotation",
    value: function animateRotation(face, cw, currentTime) {
      console.log("ANIMATEROTATION");
      var k = .3 * (face % 2 * 2 - 1) * (2 * cw - 1),
        qubes = Array(9).fill(pieces[face]).map(function (value, index) {
          return index ? this.getPieceBy(face, index / 2, index % 2) : value;
        });
      (function rotatePieces() {
        var passed = Date.now() - currentTime,
          style = 'rotate' + this.getAxis(face) + '(' + k * passed * (passed < 300) + 'deg)';
        qubes.forEach(function (piece) {
          piece.style.transform = piece.style.transform.replace(/rotate.\(\S+\)/, style);
        });
        if (passed >= 300) return this.swapPieces(face, 3 - 2 * cw);
        requestAnimationFrame(rotatePieces);
      })();
    }
  }, {
    key: "mousemove",
    value: function mousemove(element, mm_e) {
      if (element) {
        var gid = /\d/.exec(document.elementFromPoint(mm_e.pageX, mm_e.pageY).id);
        if (gid && gid.input.includes('anchor')) {
          mouseup();
          var e = element.parentNode.children[Cube.mx(face, Number(gid) + 3)].hasChildNodes();
          Cube.animateRotation(Cube.mx(face, Number(gid) + 1 + 2 * e), e, Date.now());
        }
      } else pivot.style.transform = 'rotateX(' + (startXY[0] - (mm_e.pageY - md_e.pageY) / 2) + 'deg)' + 'rotateY(' + (startXY[1] + (mm_e.pageX - md_e.pageX) / 2) + 'deg)';
    }
  }, {
    key: "mouseup",
    value: function mouseup(guide) {
      console.log("MOUSEup");
      document.body.appendChild(guide);
      scene.removeEventListener('mousemove', Cube.mousemove);
      document.removeEventListener('mouseup', Cube.mouseup);
      scene.addEventListener('mousedown', this.mousedown);
    }
  }, {
    key: "showinfo",
    value: function showinfo(element) {
      if (Cube.editmode == true) {
        var text = document.createElement('p');
        text.classList.toggle('boxinfo');
        text.textContent = "Test";
        element.appendChild(text);
        element.classList.toggle('modified');
        element.information = "Test";
      }
      // else Cube.displayinfo(element)
      // Cube.displayinfo(element) 
    }
  }]);
  return Cube;
}();
_defineProperty(Cube, "editmode", false);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _cube_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



var test = new _cube_js__WEBPACK_IMPORTED_MODULE_1__["default"](3);
test.assembleCube();
document.ondragstart = function () {
  return false;
};
scene.addEventListener('mousedown', test.mousedown);
console.log("X");
var text = document.querySelector('div.text');
text.textContent = "EDIT MODE";
text.addEventListener('click', function (text) {
  toggle(text);
});
function toggle(text) {
  var display = document.querySelector('.infodisplay');
  editmode = !editmode;
  tets.editmode = !editmode;
  if (editmode == false) {
    text.textContent = "VIEW MODE";
    display.classList.toggle('visible');
  } else if (editmode == true) {
    text.textContent = "EDIT MODE";
    display.classList.toggle('visible');
  }
}
})();

/******/ })()
;