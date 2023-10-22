/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadDOM: () => (/* binding */ loadDOM)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

function loadDOM(playerGameBoard, AIGameBoard) {
  const body = document.querySelector("body");
  const centerContainer = document.createElement("div");
  centerContainer.classList.toggle("center-container");
  const humanContainer = document.createElement("div");
  humanContainer.classList.toggle("board");
  const computerContainer = document.createElement("div");
  computerContainer.classList.toggle("board");
  body.appendChild(centerContainer);
  centerContainer.appendChild(humanContainer);
  centerContainer.appendChild(computerContainer);
  const cell = document.createElement("div");

  // Arrays to store the ships in
  const rows = 10;
  const columns = 10;
  const playerArray = playerGameBoard.shipArray();
  // 2D Array Loops
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.toggle(`cell-${i}${j}`);
      cell.setAttribute("data", `${playerArray[i][j]}`);
      if (cell.getAttribute("data") === "[object Object]") {
        cell.style.backgroundColor = "DarkRed";
      } else if (cell.getAttribute("data") === "Miss") {
        cell.style.borderRadius = "10px";
        cell.style.backgroundColor = "Crimson";
      }
      humanContainer.appendChild(cell);
    }
  }
  const computerArray = AIGameBoard.shipArray();
  // 2D Array Loops
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.toggle(`cell-${i}${j}`);
      cell.setAttribute("data", `${computerArray[i][j]}`);
      if (cell.getAttribute("data") === "[object Object]") {
        cell.style.backgroundColor = "DarkBlue";
      } else if (cell.getAttribute("data") === "Miss") {
        cell.style.borderRadius = "10px";
        cell.style.backgroundColor = "Crimson";
      }
      computerContainer.appendChild(cell);
    }
  }
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerGameBoard: () => (/* binding */ computerGameBoard),
/* harmony export */   gameBoard: () => (/* binding */ gameBoard),
/* harmony export */   playerGameBoard: () => (/* binding */ playerGameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

function gameBoard() {
  // Arrays to store the ships in
  const rows = 10;
  const columns = 10;
  const shipBoard = [];
  // 2D Array Loops
  for (let i = 0; i < rows; i++) {
    shipBoard[i] = [];
    for (let j = 0; j < columns; j++) {
      shipBoard[i][j] = "";
    }
  }

  // Place ships in 2D array
  const placeShip = (rows, column, ship) => {
    if (ship.shipDirection() === 1) {
      for (let i = 0; i < ship.shipLength + 1; i++) {
        shipBoard[rows - i].splice(column, 1, ship);
      }
    } else {
      for (let i = 0; i < ship.shipLength; i++) {
        shipBoard[rows].splice(column + i, 1, ship);
      }
    }
  };

  // Return true if the ship is there, return Miss if it's a miss, and return false if nothing
  const checkForShip = (row, column) => {
    const findShip = shipBoard[row][column];
    if (findShip !== "" && findShip !== "Miss") {
      return true;
    } else if (findShip === "Miss") {
      return "Miss";
    } else {
      return "Empty";
    }
  };

  // Takes a pair of coordinates, determines whether or not the attack hit a ship
  // If missed, the missed shot is also logged
  const receiveAttack = (row, column) => {
    const attackShip = shipBoard[row][column];
    if (attackShip === "") {
      return shipBoard[row].splice(column, 1, "Miss");
    } else if (attackShip !== "" && attackShip !== "Miss" && attackShip !== "Hit") {
      shipBoard[row].splice(column, 1, "Hit");
      return attackShip.gotHit();
    } else if (attackShip !== "" && attackShip !== "Hit" && attackShip === "Miss") {
      return "Already missed here";
    } else if (attackShip === "Hit") {
      return "Already hit here";
    }
  };

  // When a ship sinks increase the number of Sunken Ships through reportStatus
  // sunkShips stores that variable
  // reportStatus -> sunkShips -> sunkenShips
  let sunkenShips = 0;
  const sunkShips = () => sunkenShips;
  const reportStatus = ship => {
    if (ship.isSunk() === true) {
      return sunkenShips++;
    } else {
      return false;
    }
  };
  const shipArray = () => shipBoard;
  return {
    sunkShips,
    checkForShip,
    receiveAttack,
    reportStatus,
    placeShip,
    shipArray
  };
}
const playerGameBoard = gameBoard();
const computerGameBoard = gameBoard();


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });
function player(player, playerGameBoard, enemyGameBoard) {
  function randomNum(max) {
    return Math.floor(Math.random() * max);
  }
  const attack = (row, column) => {
    function aiAttack() {
      playerGameBoard.receiveAttack(randomNum(10), randomNum(10));
    }
    if (player === "Human") {
      enemyGameBoard.receiveAttack(row, column);
      aiAttack();
    }
  };
  return {
    attack
  };
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ship: () => (/* binding */ ship)
/* harmony export */ });

function ship(length, direction) {
  let shipLength = length;
  const shipDirection = () => {
    if (direction === 1) {
      return 1;
    } else {
      return 0;
    }
  };

  // Assign name based on length
  let name;
  if (length === 5) {
    name = "Carrier";
  } else if (length === 4) {
    name = "Battleship";
  } else if (length === 3) {
    name = "Cruiser";
  } else if (length === 2) {
    name = "Submarine";
  } else {
    name = "Destroyer";
  }

  // Number of hits
  let hits = 0;
  const numberOfHits = () => hits;
  const gotHit = () => hits++;

  //Check if the ship sunk
  const isSunk = () => {
    if (length === 5 && hits === 5 || length === 4 && hits === 4 || length === 3 && hits === 3 || length === 2 && hits === 2 || length === 1 && hits === 1) {
      return true;
    }
  };
  return {
    numberOfHits,
    gotHit,
    isSunk,
    shipDirection,
    hits,
    name,
    shipLength
  };
}
const newShip = ship(4, 1);
newShip.gotHit();
newShip.gotHit();
newShip.gotHit();
newShip.isSunk();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.center-container {
    display: flex;
    justify-content: space-between;

    width: 900px;
    height: 400px;
}

.board {
    display: grid;
    gap: 3px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);

    width: 400px;
    height: 100;
}

.board > * {
    background-color: #83d7ee;
    border-radius: 4px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sCAAsC;IACtC,mCAAmC;;IAEnC,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.center-container {\n    display: flex;\n    justify-content: space-between;\n\n    width: 900px;\n    height: 400px;\n}\n\n.board {\n    display: grid;\n    gap: 3px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n\n    width: 400px;\n    height: 100;\n}\n\n.board > * {\n    background-color: #83d7ee;\n    border-radius: 4px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ })

/******/ 	});
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");






// Test if game creates player
// Test if game creates game board

function game() {
  const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(1, 1);
  const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(2, 1);
  const cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(3, 0);
  const battleShip = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(4, 0);
  const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(5, 0);
  const playerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
  const computerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
  const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)("Human", playerGameBoard, computerGameBoard);
  playerGameBoard.placeShip(3, 2, destroyer);
  playerGameBoard.placeShip(4, 6, submarine);
  playerGameBoard.placeShip(5, 0, cruiser);
  playerGameBoard.placeShip(0, 0, battleShip);
  playerGameBoard.placeShip(9, 0, carrier);
  computerGameBoard.placeShip(3, 2, destroyer);
  computerGameBoard.placeShip(4, 3, submarine);
  computerGameBoard.placeShip(5, 7, cruiser);
  computerGameBoard.placeShip(0, 4, battleShip);
  computerGameBoard.placeShip(8, 5, carrier);
  (0,_DOM__WEBPACK_IMPORTED_MODULE_4__.loadDOM)(playerGameBoard, computerGameBoard);
}
const gameLoop = game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWtDLE9BQU8sQ0FBQztFQUMxQ25CLGlCQUFpQixDQUFDZixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW1DLFVBQVUsQ0FBQztFQUM3Q3BCLGlCQUFpQixDQUFDZixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW9DLE9BQU8sQ0FBQztFQUUxQ2hFLDZDQUFPLENBQUNDLGVBQWUsRUFBRTBDLGlCQUFpQixDQUFDO0FBQzVDO0FBRUEsTUFBTXVCLFFBQVEsR0FBR1AsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmZ1bmN0aW9uIGxvYWRET00ocGxheWVyR2FtZUJvYXJkLCBBSUdhbWVCb2FyZCkge1xuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cdGNvbnN0IGNlbnRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNlbnRlckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY2VudGVyLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgaHVtYW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRodW1hbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYm9hcmRcIik7XG5cdGNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29tcHV0ZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJvYXJkXCIpO1xuXG5cdGJvZHkuYXBwZW5kQ2hpbGQoY2VudGVyQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWFuQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQ29udGFpbmVyKTtcblx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0Ly8gQXJyYXlzIHRvIHN0b3JlIHRoZSBzaGlwcyBpblxuXHRjb25zdCByb3dzID0gMTA7XG5cdGNvbnN0IGNvbHVtbnMgPSAxMDtcblxuXHRjb25zdCBwbGF5ZXJBcnJheSA9IHBsYXllckdhbWVCb2FyZC5zaGlwQXJyYXkoKTtcblx0Ly8gMkQgQXJyYXkgTG9vcHNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuXHRcdFx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC50b2dnbGUoYGNlbGwtJHtpfSR7an1gKTtcblx0XHRcdGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBgJHtwbGF5ZXJBcnJheVtpXVtqXX1gKTtcblxuXHRcdFx0aWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuXHRcdFx0XHRjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiRGFya1JlZFwiO1xuXHRcdFx0fSBlbHNlIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImRhdGFcIikgPT09IFwiTWlzc1wiKSB7XG5cdFx0XHRcdGNlbGwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG5cdFx0XHRcdGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJDcmltc29uXCI7XG5cdFx0XHR9XG5cdFx0XHRodW1hbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBjb21wdXRlckFycmF5ID0gQUlHYW1lQm9hcmQuc2hpcEFycmF5KCk7XG5cdC8vIDJEIEFycmF5IExvb3BzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcblx0XHRcdGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QudG9nZ2xlKGBjZWxsLSR7aX0ke2p9YCk7XG5cdFx0XHRjZWxsLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgYCR7Y29tcHV0ZXJBcnJheVtpXVtqXX1gKTtcblx0XHRcdGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImRhdGFcIikgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIkRhcmtCbHVlXCI7XG5cdFx0XHR9IGVsc2UgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSA9PT0gXCJNaXNzXCIpIHtcblx0XHRcdFx0Y2VsbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcblx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIkNyaW1zb25cIjtcblx0XHRcdH1cblx0XHRcdGNvbXB1dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgeyBsb2FkRE9NIH07XG4iLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG5cdC8vIEFycmF5cyB0byBzdG9yZSB0aGUgc2hpcHMgaW5cblx0Y29uc3Qgcm93cyA9IDEwO1xuXHRjb25zdCBjb2x1bW5zID0gMTA7XG5cdGNvbnN0IHNoaXBCb2FyZCA9IFtdO1xuXHQvLyAyRCBBcnJheSBMb29wc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuXHRcdHNoaXBCb2FyZFtpXSA9IFtdO1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG5cdFx0XHRzaGlwQm9hcmRbaV1bal0gPSBcIlwiO1xuXHRcdH1cblx0fVxuXG5cdC8vIFBsYWNlIHNoaXBzIGluIDJEIGFycmF5XG5cdGNvbnN0IHBsYWNlU2hpcCA9IChyb3dzLCBjb2x1bW4sIHNoaXApID0+IHtcblx0XHRpZiAoc2hpcC5zaGlwRGlyZWN0aW9uKCkgPT09IDEpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0XHRcdHNoaXBCb2FyZFtyb3dzIC0gaV0uc3BsaWNlKGNvbHVtbiwgMSwgc2hpcCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2hpcEJvYXJkW3Jvd3NdLnNwbGljZShjb2x1bW4gKyBpLCAxLCBzaGlwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gUmV0dXJuIHRydWUgaWYgdGhlIHNoaXAgaXMgdGhlcmUsIHJldHVybiBNaXNzIGlmIGl0J3MgYSBtaXNzLCBhbmQgcmV0dXJuIGZhbHNlIGlmIG5vdGhpbmdcblx0Y29uc3QgY2hlY2tGb3JTaGlwID0gKHJvdywgY29sdW1uKSA9PiB7XG5cdFx0Y29uc3QgZmluZFNoaXAgPSBzaGlwQm9hcmRbcm93XVtjb2x1bW5dO1xuXHRcdGlmIChmaW5kU2hpcCAhPT0gXCJcIiAmJiBmaW5kU2hpcCAhPT0gXCJNaXNzXCIpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSBpZiAoZmluZFNoaXAgPT09IFwiTWlzc1wiKSB7XG5cdFx0XHRyZXR1cm4gXCJNaXNzXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBcIkVtcHR5XCI7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXBcblx0Ly8gSWYgbWlzc2VkLCB0aGUgbWlzc2VkIHNob3QgaXMgYWxzbyBsb2dnZWRcblx0Y29uc3QgcmVjZWl2ZUF0dGFjayA9IChyb3csIGNvbHVtbikgPT4ge1xuXHRcdGNvbnN0IGF0dGFja1NoaXAgPSBzaGlwQm9hcmRbcm93XVtjb2x1bW5dO1xuXHRcdGlmIChhdHRhY2tTaGlwID09PSBcIlwiKSB7XG5cdFx0XHRyZXR1cm4gc2hpcEJvYXJkW3Jvd10uc3BsaWNlKGNvbHVtbiwgMSwgXCJNaXNzXCIpO1xuXHRcdH0gZWxzZSBpZiAoYXR0YWNrU2hpcCAhPT0gXCJcIiAmJiBhdHRhY2tTaGlwICE9PSBcIk1pc3NcIiAmJiBhdHRhY2tTaGlwICE9PSBcIkhpdFwiKSB7XG5cdFx0XHRzaGlwQm9hcmRbcm93XS5zcGxpY2UoY29sdW1uLCAxLCBcIkhpdFwiKTtcblx0XHRcdHJldHVybiBhdHRhY2tTaGlwLmdvdEhpdCgpO1xuXHRcdH0gZWxzZSBpZiAoYXR0YWNrU2hpcCAhPT0gXCJcIiAmJiBhdHRhY2tTaGlwICE9PSBcIkhpdFwiICYmIGF0dGFja1NoaXAgPT09IFwiTWlzc1wiKSB7XG5cdFx0XHRyZXR1cm4gXCJBbHJlYWR5IG1pc3NlZCBoZXJlXCI7XG5cdFx0fSBlbHNlIGlmIChhdHRhY2tTaGlwID09PSBcIkhpdFwiKSB7XG5cdFx0XHRyZXR1cm4gXCJBbHJlYWR5IGhpdCBoZXJlXCI7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFdoZW4gYSBzaGlwIHNpbmtzIGluY3JlYXNlIHRoZSBudW1iZXIgb2YgU3Vua2VuIFNoaXBzIHRocm91Z2ggcmVwb3J0U3RhdHVzXG5cdC8vIHN1bmtTaGlwcyBzdG9yZXMgdGhhdCB2YXJpYWJsZVxuXHQvLyByZXBvcnRTdGF0dXMgLT4gc3Vua1NoaXBzIC0+IHN1bmtlblNoaXBzXG5cdGxldCBzdW5rZW5TaGlwcyA9IDA7XG5cdGNvbnN0IHN1bmtTaGlwcyA9ICgpID0+IHN1bmtlblNoaXBzO1xuXHRjb25zdCByZXBvcnRTdGF0dXMgPSAoc2hpcCkgPT4ge1xuXHRcdGlmIChzaGlwLmlzU3VuaygpID09PSB0cnVlKSB7XG5cdFx0XHRyZXR1cm4gc3Vua2VuU2hpcHMrKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBzaGlwQXJyYXkgPSAoKSA9PiBzaGlwQm9hcmQ7XG5cblx0cmV0dXJuIHsgc3Vua1NoaXBzLCBjaGVja0ZvclNoaXAsIHJlY2VpdmVBdHRhY2ssIHJlcG9ydFN0YXR1cywgcGxhY2VTaGlwLCBzaGlwQXJyYXkgfTtcbn1cblxuY29uc3QgcGxheWVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5jb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xuXG5leHBvcnQgeyBnYW1lQm9hcmQsIHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQgfTtcbiIsImZ1bmN0aW9uIHBsYXllcihwbGF5ZXIsIHBsYXllckdhbWVCb2FyZCwgZW5lbXlHYW1lQm9hcmQpIHtcblx0ZnVuY3Rpb24gcmFuZG9tTnVtKG1heCkge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuXHR9XG5cblx0Y29uc3QgYXR0YWNrID0gKHJvdywgY29sdW1uKSA9PiB7XG5cdFx0ZnVuY3Rpb24gYWlBdHRhY2soKSB7XG5cdFx0XHRwbGF5ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21OdW0oMTApLCByYW5kb21OdW0oMTApKTtcblx0XHR9XG5cdFx0aWYgKHBsYXllciA9PT0gXCJIdW1hblwiKSB7XG5cdFx0XHRlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcblx0XHRcdGFpQXR0YWNrKCk7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4geyBhdHRhY2sgfTtcbn1cblxuZXhwb3J0IHsgcGxheWVyIH07XG4iLCJleHBvcnQgeyBzaGlwIH07XG5cbmZ1bmN0aW9uIHNoaXAobGVuZ3RoLCBkaXJlY3Rpb24pIHtcblx0bGV0IHNoaXBMZW5ndGggPSBsZW5ndGg7XG5cblx0Y29uc3Qgc2hpcERpcmVjdGlvbiA9ICgpID0+IHtcblx0XHRpZiAoZGlyZWN0aW9uID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEFzc2lnbiBuYW1lIGJhc2VkIG9uIGxlbmd0aFxuXHRsZXQgbmFtZTtcblx0aWYgKGxlbmd0aCA9PT0gNSkge1xuXHRcdG5hbWUgPSBcIkNhcnJpZXJcIjtcblx0fSBlbHNlIGlmIChsZW5ndGggPT09IDQpIHtcblx0XHRuYW1lID0gXCJCYXR0bGVzaGlwXCI7XG5cdH0gZWxzZSBpZiAobGVuZ3RoID09PSAzKSB7XG5cdFx0bmFtZSA9IFwiQ3J1aXNlclwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMikge1xuXHRcdG5hbWUgPSBcIlN1Ym1hcmluZVwiO1xuXHR9IGVsc2Uge1xuXHRcdG5hbWUgPSBcIkRlc3Ryb3llclwiO1xuXHR9XG5cblx0Ly8gTnVtYmVyIG9mIGhpdHNcblx0bGV0IGhpdHMgPSAwO1xuXHRjb25zdCBudW1iZXJPZkhpdHMgPSAoKSA9PiBoaXRzO1xuXHRjb25zdCBnb3RIaXQgPSAoKSA9PiBoaXRzKys7XG5cblx0Ly9DaGVjayBpZiB0aGUgc2hpcCBzdW5rXG5cdGNvbnN0IGlzU3VuayA9ICgpID0+IHtcblx0XHRpZiAoXG5cdFx0XHQobGVuZ3RoID09PSA1ICYmIGhpdHMgPT09IDUpIHx8XG5cdFx0XHQobGVuZ3RoID09PSA0ICYmIGhpdHMgPT09IDQpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAzICYmIGhpdHMgPT09IDMpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAyICYmIGhpdHMgPT09IDIpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAxICYmIGhpdHMgPT09IDEpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdHJldHVybiB7IG51bWJlck9mSGl0cywgZ290SGl0LCBpc1N1bmssIHNoaXBEaXJlY3Rpb24sIGhpdHMsIG5hbWUsIHNoaXBMZW5ndGggfTtcbn1cblxuY29uc3QgbmV3U2hpcCA9IHNoaXAoNCwgMSk7XG5uZXdTaGlwLmdvdEhpdCgpO1xubmV3U2hpcC5nb3RIaXQoKTtcbm5ld1NoaXAuZ290SGl0KCk7XG5uZXdTaGlwLmlzU3VuaygpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIHdpZHRoOiA5MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAzcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG5cbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAxMDA7XG59XG5cbi5ib2FyZCA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M2Q3ZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7O0lBRTlCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixzQ0FBc0M7SUFDdEMsbUNBQW1DOztJQUVuQyxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG5cXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMDtcXG59XFxuXFxuLmJvYXJkID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M2Q3ZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGxvYWRET00gfSBmcm9tIFwiLi9ET01cIjtcblxuLy8gVGVzdCBpZiBnYW1lIGNyZWF0ZXMgcGxheWVyXG4vLyBUZXN0IGlmIGdhbWUgY3JlYXRlcyBnYW1lIGJvYXJkXG5cbmZ1bmN0aW9uIGdhbWUoKSB7XG5cdGNvbnN0IGRlc3Ryb3llciA9IHNoaXAoMSwgMSk7XG5cdGNvbnN0IHN1Ym1hcmluZSA9IHNoaXAoMiwgMSk7XG5cdGNvbnN0IGNydWlzZXIgPSBzaGlwKDMsIDApO1xuXHRjb25zdCBiYXR0bGVTaGlwID0gc2hpcCg0LCAwKTtcblx0Y29uc3QgY2FycmllciA9IHNoaXAoNSwgMCk7XG5cblx0Y29uc3QgcGxheWVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cdGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cblx0Y29uc3QgaHVtYW5QbGF5ZXIgPSBwbGF5ZXIoXCJIdW1hblwiLCBwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkKTtcblxuXHRwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDMsIDIsIGRlc3Ryb3llcik7XG5cdHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoNCwgNiwgc3VibWFyaW5lKTtcblx0cGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcCg1LCAwLCBjcnVpc2VyKTtcblx0cGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcCgwLCAwLCBiYXR0bGVTaGlwKTtcblx0cGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcCg5LCAwLCBjYXJyaWVyKTtcblxuXHRjb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXAoMywgMiwgZGVzdHJveWVyKTtcblx0Y29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDQsIDMsIHN1Ym1hcmluZSk7XG5cdGNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcCg1LCA3LCBjcnVpc2VyKTtcblx0Y29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDAsIDQsIGJhdHRsZVNoaXApO1xuXHRjb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXAoOCwgNSwgY2Fycmllcik7XG5cblx0bG9hZERPTShwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkKTtcbn1cblxuY29uc3QgZ2FtZUxvb3AgPSBnYW1lKCk7XG5leHBvcnQgeyBnYW1lIH07XG4iXSwibmFtZXMiOlsiZ2FtZUJvYXJkIiwibG9hZERPTSIsInBsYXllckdhbWVCb2FyZCIsIkFJR2FtZUJvYXJkIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNlbnRlckNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJodW1hbkNvbnRhaW5lciIsImNvbXB1dGVyQ29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJjZWxsIiwicm93cyIsImNvbHVtbnMiLCJwbGF5ZXJBcnJheSIsInNoaXBBcnJheSIsImkiLCJqIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJjb21wdXRlckFycmF5Iiwic2hpcCIsInNoaXBCb2FyZCIsInBsYWNlU2hpcCIsImNvbHVtbiIsInNoaXBEaXJlY3Rpb24iLCJzaGlwTGVuZ3RoIiwic3BsaWNlIiwiY2hlY2tGb3JTaGlwIiwicm93IiwiZmluZFNoaXAiLCJyZWNlaXZlQXR0YWNrIiwiYXR0YWNrU2hpcCIsImdvdEhpdCIsInN1bmtlblNoaXBzIiwic3Vua1NoaXBzIiwicmVwb3J0U3RhdHVzIiwiaXNTdW5rIiwiY29tcHV0ZXJHYW1lQm9hcmQiLCJwbGF5ZXIiLCJlbmVteUdhbWVCb2FyZCIsInJhbmRvbU51bSIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImF0dGFjayIsImFpQXR0YWNrIiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwibmFtZSIsImhpdHMiLCJudW1iZXJPZkhpdHMiLCJuZXdTaGlwIiwiZ2FtZSIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsImNydWlzZXIiLCJiYXR0bGVTaGlwIiwiY2FycmllciIsImh1bWFuUGxheWVyIiwiZ2FtZUxvb3AiXSwic291cmNlUm9vdCI6IiJ9