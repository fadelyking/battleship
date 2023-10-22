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

  // Arrays to store the ships in
  const rows = 10;
  const columns = 10;
  const playerArray = playerGameBoard.shipArray();
  // 2D Array Loops
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.toggle(`cell-${i}${j}`);
      cell.textContent = playerArray[i][j];
      humanContainer.appendChild(cell);
    }
  }
  const computerArray = AIGameBoard.shipArray();
  // 2D Array Loops
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.toggle(`cell-${i}${j}`);
      cell.textContent = computerArray[i][j];
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
        shipBoard[rows - i].splice(column, 1, ship.name);
      }
    } else {
      for (let i = 0; i < ship.shipLength; i++) {
        shipBoard[rows].splice(column + i, 1, ship.name);
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
  const receiveAttack = (row, column, ship) => {
    const attackShip = shipBoard[row][column];
    if (attackShip === "") {
      return shipBoard[row].splice(column, 1, "Miss");
    } else if (attackShip !== "" && attackShip !== "Miss" && attackShip !== "Hit") {
      shipBoard[row].splice(column, 1, "Hit");
      return ship.gotHit();
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

// Create a submarine
const battleShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4, 0);
const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1, 1);
const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(5, 0);
// Create a new gameBoard

const playerGameBoard = gameBoard();
const computerGameBoard = gameBoard();

// Place the ship
playerGameBoard.placeShip(0, 0, battleShip);

// Check if the ship exists on the array
playerGameBoard.checkForShip(0, 0);

// Attack the ship
playerGameBoard.receiveAttack(0, 1, battleShip);
// Determine whether the ship sunk or not. Increment sunkenShips if true.
playerGameBoard.reportStatus(battleShip);

// Store the number of sunkenShips
playerGameBoard.sunkShips();


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   switchPlayers: () => (/* binding */ switchPlayers)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
// Player
// Each player should have his own game board
// On play, activate the other player turn
// If it's player 1 (me) turn, allow me to choose where to attack
// If it's player 2 (computer) turn, randomly choose a place to attack

function player(player, gameBoard) {
  let currentPlayer = player;
  function randomNum(max) {
    return Math.floor(Math.random() * max);
  }
  const attack = () => {
    if (player === "Human") {
      gameBoard.receiveAttack(2, 3);
      switchPlayers();
    } else if (player === "Computer") {
      gameBoard.receiveAttack(randomNum(10), randomNum(10));
      switchPlayers();
    }
  };
  return {
    attack,
    currentPlayer
  };
}
const humanPlayer = player("Human", _gameboard__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard);
const computerPlayer = player("Computer", _gameboard__WEBPACK_IMPORTED_MODULE_0__.playerGameBoard);
humanPlayer.attack();
function switchPlayers() {
  if (humanPlayer) {
    return computerPlayer;
  } else if (computerPlayer) {
    return humanPlayer;
  }
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
    border: 3px solid black;
    width: 900px;
    height: 400px;
}

.board {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    border: 2px solid red;
    width: 400px;
    height: 100;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,qBAAqB;IACrB,YAAY;IACZ,WAAW;AACf","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.center-container {\n    display: flex;\n    justify-content: space-between;\n    border: 3px solid black;\n    width: 900px;\n    height: 400px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 2px solid red;\n    width: 400px;\n    height: 100;\n}"],"sourceRoot":""}]);
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
  const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)("Human", playerGameBoard);
  const computerPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)("Ai", computerGameBoard);
  playerGameBoard.placeShip(3, 2, destroyer);
  playerGameBoard.placeShip(4, 6, submarine);
  playerGameBoard.placeShip(5, 0, cruiser);
  playerGameBoard.placeShip(0, 0, battleShip);
  playerGameBoard.placeShip(9, 0, carrier);
  computerGameBoard.placeShip(3, 2, destroyer);
  computerGameBoard.placeShip(4, 6, submarine);
  computerGameBoard.placeShip(5, 0, cruiser);
  computerGameBoard.placeShip(0, 4, battleShip);
  computerGameBoard.placeShip(9, 0, carrier);
  (0,_DOM__WEBPACK_IMPORTED_MODULE_4__.loadDOM)(playerGameBoard, computerGameBoard);
  return {};
}
const gameLoop = game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztFQUMzQ3ZDLGVBQWUsQ0FBQ3VCLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFa0IsT0FBTyxDQUFDO0VBRXhDQyxpQkFBaUIsQ0FBQ25CLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFaUIsU0FBUyxDQUFDO0VBQzVDRSxpQkFBaUIsQ0FBQ25CLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFcUMsU0FBUyxDQUFDO0VBQzVDbEIsaUJBQWlCLENBQUNuQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXNDLE9BQU8sQ0FBQztFQUMxQ25CLGlCQUFpQixDQUFDbkIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVnQixVQUFVLENBQUM7RUFDN0NHLGlCQUFpQixDQUFDbkIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVrQixPQUFPLENBQUM7RUFFMUMxQyw2Q0FBTyxDQUFDQyxlQUFlLEVBQUUwQyxpQkFBaUIsQ0FBQztFQUUzQyxPQUFPLENBQUMsQ0FBQztBQUNWO0FBRUEsTUFBTW9CLFFBQVEsR0FBR0gsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmZ1bmN0aW9uIGxvYWRET00ocGxheWVyR2FtZUJvYXJkLCBBSUdhbWVCb2FyZCkge1xuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cdGNvbnN0IGNlbnRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNlbnRlckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY2VudGVyLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgaHVtYW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRodW1hbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYm9hcmRcIik7XG5cdGNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29tcHV0ZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJvYXJkXCIpO1xuXG5cdGJvZHkuYXBwZW5kQ2hpbGQoY2VudGVyQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWFuQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQ29udGFpbmVyKTtcblxuXHQvLyBBcnJheXMgdG8gc3RvcmUgdGhlIHNoaXBzIGluXG5cdGNvbnN0IHJvd3MgPSAxMDtcblx0Y29uc3QgY29sdW1ucyA9IDEwO1xuXG5cdGNvbnN0IHBsYXllckFycmF5ID0gcGxheWVyR2FtZUJvYXJkLnNoaXBBcnJheSgpO1xuXHQvLyAyRCBBcnJheSBMb29wc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG5cdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShgY2VsbC0ke2l9JHtqfWApO1xuXHRcdFx0Y2VsbC50ZXh0Q29udGVudCA9IHBsYXllckFycmF5W2ldW2pdO1xuXHRcdFx0aHVtYW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgY29tcHV0ZXJBcnJheSA9IEFJR2FtZUJvYXJkLnNoaXBBcnJheSgpO1xuXHQvLyAyRCBBcnJheSBMb29wc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG5cdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShgY2VsbC0ke2l9JHtqfWApO1xuXHRcdFx0Y2VsbC50ZXh0Q29udGVudCA9IGNvbXB1dGVyQXJyYXlbaV1bal07XG5cdFx0XHRjb21wdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHsgbG9hZERPTSB9O1xuIiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuXHQvLyBBcnJheXMgdG8gc3RvcmUgdGhlIHNoaXBzIGluXG5cdGNvbnN0IHJvd3MgPSAxMDtcblx0Y29uc3QgY29sdW1ucyA9IDEwO1xuXHRjb25zdCBzaGlwQm9hcmQgPSBbXTtcblx0Ly8gMkQgQXJyYXkgTG9vcHNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcblx0XHRzaGlwQm9hcmRbaV0gPSBbXTtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuXHRcdFx0c2hpcEJvYXJkW2ldW2pdID0gXCJcIjtcblx0XHR9XG5cdH1cblxuXHQvLyBQbGFjZSBzaGlwcyBpbiAyRCBhcnJheVxuXHRjb25zdCBwbGFjZVNoaXAgPSAocm93cywgY29sdW1uLCBzaGlwKSA9PiB7XG5cdFx0aWYgKHNoaXAuc2hpcERpcmVjdGlvbigpID09PSAxKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aCArIDE7IGkrKykge1xuXHRcdFx0XHRzaGlwQm9hcmRbcm93cyAtIGldLnNwbGljZShjb2x1bW4sIDEsIHNoaXAubmFtZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2hpcEJvYXJkW3Jvd3NdLnNwbGljZShjb2x1bW4gKyBpLCAxLCBzaGlwLm5hbWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgc2hpcCBpcyB0aGVyZSwgcmV0dXJuIE1pc3MgaWYgaXQncyBhIG1pc3MsIGFuZCByZXR1cm4gZmFsc2UgaWYgbm90aGluZ1xuXHRjb25zdCBjaGVja0ZvclNoaXAgPSAocm93LCBjb2x1bW4pID0+IHtcblx0XHRjb25zdCBmaW5kU2hpcCA9IHNoaXBCb2FyZFtyb3ddW2NvbHVtbl07XG5cdFx0aWYgKGZpbmRTaGlwICE9PSBcIlwiICYmIGZpbmRTaGlwICE9PSBcIk1pc3NcIikge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIGlmIChmaW5kU2hpcCA9PT0gXCJNaXNzXCIpIHtcblx0XHRcdHJldHVybiBcIk1pc3NcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFwiRW1wdHlcIjtcblx0XHR9XG5cdH07XG5cblx0Ly8gVGFrZXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcFxuXHQvLyBJZiBtaXNzZWQsIHRoZSBtaXNzZWQgc2hvdCBpcyBhbHNvIGxvZ2dlZFxuXHRjb25zdCByZWNlaXZlQXR0YWNrID0gKHJvdywgY29sdW1uLCBzaGlwKSA9PiB7XG5cdFx0Y29uc3QgYXR0YWNrU2hpcCA9IHNoaXBCb2FyZFtyb3ddW2NvbHVtbl07XG5cdFx0aWYgKGF0dGFja1NoaXAgPT09IFwiXCIpIHtcblx0XHRcdHJldHVybiBzaGlwQm9hcmRbcm93XS5zcGxpY2UoY29sdW1uLCAxLCBcIk1pc3NcIik7XG5cdFx0fSBlbHNlIGlmIChhdHRhY2tTaGlwICE9PSBcIlwiICYmIGF0dGFja1NoaXAgIT09IFwiTWlzc1wiICYmIGF0dGFja1NoaXAgIT09IFwiSGl0XCIpIHtcblx0XHRcdHNoaXBCb2FyZFtyb3ddLnNwbGljZShjb2x1bW4sIDEsIFwiSGl0XCIpO1xuXHRcdFx0cmV0dXJuIHNoaXAuZ290SGl0KCk7XG5cdFx0fSBlbHNlIGlmIChhdHRhY2tTaGlwICE9PSBcIlwiICYmIGF0dGFja1NoaXAgIT09IFwiSGl0XCIgJiYgYXR0YWNrU2hpcCA9PT0gXCJNaXNzXCIpIHtcblx0XHRcdHJldHVybiBcIkFscmVhZHkgbWlzc2VkIGhlcmVcIjtcblx0XHR9IGVsc2UgaWYgKGF0dGFja1NoaXAgPT09IFwiSGl0XCIpIHtcblx0XHRcdHJldHVybiBcIkFscmVhZHkgaGl0IGhlcmVcIjtcblx0XHR9XG5cdH07XG5cblx0Ly8gV2hlbiBhIHNoaXAgc2lua3MgaW5jcmVhc2UgdGhlIG51bWJlciBvZiBTdW5rZW4gU2hpcHMgdGhyb3VnaCByZXBvcnRTdGF0dXNcblx0Ly8gc3Vua1NoaXBzIHN0b3JlcyB0aGF0IHZhcmlhYmxlXG5cdC8vIHJlcG9ydFN0YXR1cyAtPiBzdW5rU2hpcHMgLT4gc3Vua2VuU2hpcHNcblx0bGV0IHN1bmtlblNoaXBzID0gMDtcblx0Y29uc3Qgc3Vua1NoaXBzID0gKCkgPT4gc3Vua2VuU2hpcHM7XG5cdGNvbnN0IHJlcG9ydFN0YXR1cyA9IChzaGlwKSA9PiB7XG5cdFx0aWYgKHNoaXAuaXNTdW5rKCkgPT09IHRydWUpIHtcblx0XHRcdHJldHVybiBzdW5rZW5TaGlwcysrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHNoaXBBcnJheSA9ICgpID0+IHNoaXBCb2FyZDtcblxuXHRyZXR1cm4geyBzdW5rU2hpcHMsIGNoZWNrRm9yU2hpcCwgcmVjZWl2ZUF0dGFjaywgcmVwb3J0U3RhdHVzLCBwbGFjZVNoaXAsIHNoaXBBcnJheSB9O1xufVxuXG4vLyBDcmVhdGUgYSBzdWJtYXJpbmVcbmNvbnN0IGJhdHRsZVNoaXAgPSBzaGlwKDQsIDApO1xuY29uc3QgZGVzdHJveWVyID0gc2hpcCgxLCAxKTtcbmNvbnN0IGNhcnJpZXIgPSBzaGlwKDUsIDApO1xuLy8gQ3JlYXRlIGEgbmV3IGdhbWVCb2FyZFxuXG5jb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcbmNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbi8vIFBsYWNlIHRoZSBzaGlwXG5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDAsIDAsIGJhdHRsZVNoaXApO1xuXG4vLyBDaGVjayBpZiB0aGUgc2hpcCBleGlzdHMgb24gdGhlIGFycmF5XG5wbGF5ZXJHYW1lQm9hcmQuY2hlY2tGb3JTaGlwKDAsIDApO1xuXG4vLyBBdHRhY2sgdGhlIHNoaXBcbnBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDAsIDEsIGJhdHRsZVNoaXApO1xuLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHNoaXAgc3VuayBvciBub3QuIEluY3JlbWVudCBzdW5rZW5TaGlwcyBpZiB0cnVlLlxucGxheWVyR2FtZUJvYXJkLnJlcG9ydFN0YXR1cyhiYXR0bGVTaGlwKTtcblxuLy8gU3RvcmUgdGhlIG51bWJlciBvZiBzdW5rZW5TaGlwc1xucGxheWVyR2FtZUJvYXJkLnN1bmtTaGlwcygpO1xuZXhwb3J0IHsgZ2FtZUJvYXJkLCBwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkIH07XG4iLCIvLyBQbGF5ZXJcbi8vIEVhY2ggcGxheWVyIHNob3VsZCBoYXZlIGhpcyBvd24gZ2FtZSBib2FyZFxuLy8gT24gcGxheSwgYWN0aXZhdGUgdGhlIG90aGVyIHBsYXllciB0dXJuXG4vLyBJZiBpdCdzIHBsYXllciAxIChtZSkgdHVybiwgYWxsb3cgbWUgdG8gY2hvb3NlIHdoZXJlIHRvIGF0dGFja1xuLy8gSWYgaXQncyBwbGF5ZXIgMiAoY29tcHV0ZXIpIHR1cm4sIHJhbmRvbWx5IGNob29zZSBhIHBsYWNlIHRvIGF0dGFja1xuaW1wb3J0IHsgcGxheWVyR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5mdW5jdGlvbiBwbGF5ZXIocGxheWVyLCBnYW1lQm9hcmQpIHtcblx0bGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXI7XG5cdGZ1bmN0aW9uIHJhbmRvbU51bShtYXgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcblx0fVxuXG5cdGNvbnN0IGF0dGFjayA9ICgpID0+IHtcblx0XHRpZiAocGxheWVyID09PSBcIkh1bWFuXCIpIHtcblx0XHRcdGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDIsIDMpO1xuXHRcdFx0c3dpdGNoUGxheWVycygpO1xuXHRcdH0gZWxzZSBpZiAocGxheWVyID09PSBcIkNvbXB1dGVyXCIpIHtcblx0XHRcdGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbU51bSgxMCksIHJhbmRvbU51bSgxMCkpO1xuXHRcdFx0c3dpdGNoUGxheWVycygpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4geyBhdHRhY2ssIGN1cnJlbnRQbGF5ZXIgfTtcbn1cblxuY29uc3QgaHVtYW5QbGF5ZXIgPSBwbGF5ZXIoXCJIdW1hblwiLCBjb21wdXRlckdhbWVCb2FyZCk7XG5jb25zdCBjb21wdXRlclBsYXllciA9IHBsYXllcihcIkNvbXB1dGVyXCIsIHBsYXllckdhbWVCb2FyZCk7XG5cbmh1bWFuUGxheWVyLmF0dGFjaygpO1xuXG5mdW5jdGlvbiBzd2l0Y2hQbGF5ZXJzKCkge1xuXHRpZiAoaHVtYW5QbGF5ZXIpIHtcblx0XHRyZXR1cm4gY29tcHV0ZXJQbGF5ZXI7XG5cdH0gZWxzZSBpZiAoY29tcHV0ZXJQbGF5ZXIpIHtcblx0XHRyZXR1cm4gaHVtYW5QbGF5ZXI7XG5cdH1cbn1cblxuZXhwb3J0IHsgcGxheWVyLCBzd2l0Y2hQbGF5ZXJzIH07XG4iLCJleHBvcnQgeyBzaGlwIH07XG5cbmZ1bmN0aW9uIHNoaXAobGVuZ3RoLCBkaXJlY3Rpb24pIHtcblx0bGV0IHNoaXBMZW5ndGggPSBsZW5ndGg7XG5cblx0Y29uc3Qgc2hpcERpcmVjdGlvbiA9ICgpID0+IHtcblx0XHRpZiAoZGlyZWN0aW9uID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEFzc2lnbiBuYW1lIGJhc2VkIG9uIGxlbmd0aFxuXHRsZXQgbmFtZTtcblx0aWYgKGxlbmd0aCA9PT0gNSkge1xuXHRcdG5hbWUgPSBcIkNhcnJpZXJcIjtcblx0fSBlbHNlIGlmIChsZW5ndGggPT09IDQpIHtcblx0XHRuYW1lID0gXCJCYXR0bGVzaGlwXCI7XG5cdH0gZWxzZSBpZiAobGVuZ3RoID09PSAzKSB7XG5cdFx0bmFtZSA9IFwiQ3J1aXNlclwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMikge1xuXHRcdG5hbWUgPSBcIlN1Ym1hcmluZVwiO1xuXHR9IGVsc2Uge1xuXHRcdG5hbWUgPSBcIkRlc3Ryb3llclwiO1xuXHR9XG5cblx0Ly8gTnVtYmVyIG9mIGhpdHNcblx0bGV0IGhpdHMgPSAwO1xuXHRjb25zdCBudW1iZXJPZkhpdHMgPSAoKSA9PiBoaXRzO1xuXHRjb25zdCBnb3RIaXQgPSAoKSA9PiBoaXRzKys7XG5cblx0Ly9DaGVjayBpZiB0aGUgc2hpcCBzdW5rXG5cdGNvbnN0IGlzU3VuayA9ICgpID0+IHtcblx0XHRpZiAoXG5cdFx0XHQobGVuZ3RoID09PSA1ICYmIGhpdHMgPT09IDUpIHx8XG5cdFx0XHQobGVuZ3RoID09PSA0ICYmIGhpdHMgPT09IDQpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAzICYmIGhpdHMgPT09IDMpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAyICYmIGhpdHMgPT09IDIpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAxICYmIGhpdHMgPT09IDEpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdHJldHVybiB7IG51bWJlck9mSGl0cywgZ290SGl0LCBpc1N1bmssIHNoaXBEaXJlY3Rpb24sIGhpdHMsIG5hbWUsIHNoaXBMZW5ndGggfTtcbn1cblxuY29uc3QgbmV3U2hpcCA9IHNoaXAoNCwgMSk7XG5uZXdTaGlwLmdvdEhpdCgpO1xubmV3U2hpcC5nb3RIaXQoKTtcbm5ld1NoaXAuZ290SGl0KCk7XG5uZXdTaGlwLmlzU3VuaygpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogOTAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAxMDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMTAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgbG9hZERPTSB9IGZyb20gXCIuL0RPTVwiO1xuXG4vLyBUZXN0IGlmIGdhbWUgY3JlYXRlcyBwbGF5ZXJcbi8vIFRlc3QgaWYgZ2FtZSBjcmVhdGVzIGdhbWUgYm9hcmRcblxuZnVuY3Rpb24gZ2FtZSgpIHtcblx0Y29uc3QgZGVzdHJveWVyID0gc2hpcCgxLCAxKTtcblx0Y29uc3Qgc3VibWFyaW5lID0gc2hpcCgyLCAxKTtcblx0Y29uc3QgY3J1aXNlciA9IHNoaXAoMywgMCk7XG5cdGNvbnN0IGJhdHRsZVNoaXAgPSBzaGlwKDQsIDApO1xuXHRjb25zdCBjYXJyaWVyID0gc2hpcCg1LCAwKTtcblxuXHRjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblx0Y29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuXHRjb25zdCBodW1hblBsYXllciA9IHBsYXllcihcIkh1bWFuXCIsIHBsYXllckdhbWVCb2FyZCk7XG5cdGNvbnN0IGNvbXB1dGVyUGxheWVyID0gcGxheWVyKFwiQWlcIiwgY29tcHV0ZXJHYW1lQm9hcmQpO1xuXG5cdHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoMywgMiwgZGVzdHJveWVyKTtcblx0cGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcCg0LCA2LCBzdWJtYXJpbmUpO1xuXHRwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDUsIDAsIGNydWlzZXIpO1xuXHRwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDAsIDAsIGJhdHRsZVNoaXApO1xuXHRwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDksIDAsIGNhcnJpZXIpO1xuXG5cdGNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcCgzLCAyLCBkZXN0cm95ZXIpO1xuXHRjb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXAoNCwgNiwgc3VibWFyaW5lKTtcblx0Y29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwKDUsIDAsIGNydWlzZXIpO1xuXHRjb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXAoMCwgNCwgYmF0dGxlU2hpcCk7XG5cdGNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcCg5LCAwLCBjYXJyaWVyKTtcblxuXHRsb2FkRE9NKHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQpO1xuXG5cdHJldHVybiB7fTtcbn1cblxuY29uc3QgZ2FtZUxvb3AgPSBnYW1lKCk7XG5leHBvcnQgeyBnYW1lIH07XG4iXSwibmFtZXMiOlsiZ2FtZUJvYXJkIiwibG9hZERPTSIsInBsYXllckdhbWVCb2FyZCIsIkFJR2FtZUJvYXJkIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNlbnRlckNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJodW1hbkNvbnRhaW5lciIsImNvbXB1dGVyQ29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJyb3dzIiwiY29sdW1ucyIsInBsYXllckFycmF5Iiwic2hpcEFycmF5IiwiaSIsImoiLCJjZWxsIiwidGV4dENvbnRlbnQiLCJjb21wdXRlckFycmF5Iiwic2hpcCIsInNoaXBCb2FyZCIsInBsYWNlU2hpcCIsImNvbHVtbiIsInNoaXBEaXJlY3Rpb24iLCJzaGlwTGVuZ3RoIiwic3BsaWNlIiwibmFtZSIsImNoZWNrRm9yU2hpcCIsInJvdyIsImZpbmRTaGlwIiwicmVjZWl2ZUF0dGFjayIsImF0dGFja1NoaXAiLCJnb3RIaXQiLCJzdW5rZW5TaGlwcyIsInN1bmtTaGlwcyIsInJlcG9ydFN0YXR1cyIsImlzU3VuayIsImJhdHRsZVNoaXAiLCJkZXN0cm95ZXIiLCJjYXJyaWVyIiwiY29tcHV0ZXJHYW1lQm9hcmQiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwicmFuZG9tTnVtIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXR0YWNrIiwic3dpdGNoUGxheWVycyIsImh1bWFuUGxheWVyIiwiY29tcHV0ZXJQbGF5ZXIiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJoaXRzIiwibnVtYmVyT2ZIaXRzIiwibmV3U2hpcCIsImdhbWUiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiZ2FtZUxvb3AiXSwic291cmNlUm9vdCI6IiJ9