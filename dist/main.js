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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function loadDOM(playerGameBoard, AIGameBoard) {
  const body = document.querySelector("body");
  const centerContainer = document.createElement("div");
  centerContainer.classList.toggle("center-container");
  const humanContainer = document.createElement("div");
  humanContainer.classList.toggle("board");
  const computerContainer = document.createElement("div");
  computerContainer.classList.toggle("board");
  const middleContainer = document.createElement("div");
  middleContainer.classList.toggle("mid");
  const sideContainer = document.createElement("div");
  sideContainer.classList.toggle("side-container");
  const optionContainer = document.createElement("div");
  optionContainer.classList.toggle("option");
  body.appendChild(centerContainer);
  centerContainer.appendChild(humanContainer);
  centerContainer.appendChild(middleContainer);
  middleContainer.appendChild(sideContainer);
  middleContainer.appendChild(optionContainer);
  centerContainer.appendChild(computerContainer);

  // Arrays to store the ships in
  const rows = 10;
  const columns = 10;
  const playerArray = playerGameBoard.shipArray();
  // 2D Array Loops
  const renderboard = () => {
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
  };
  renderboard();
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
  const destroyerContainer = document.createElement("div");
  destroyerContainer.classList.toggle("destroyer-container");
  const submarineContainer = document.createElement("div");
  submarineContainer.classList.toggle("submarine-container");
  const submarineCell = document.createElement("div");
  submarineCell.classList.toggle("submarine-option");
  const cruiserContainer = document.createElement("div");
  cruiserContainer.classList.toggle("cruiser-container");
  const battleShipContainer = document.createElement("div");
  battleShipContainer.classList.toggle("battleship-container");
  const carrierContainer = document.createElement("div");
  carrierContainer.classList.toggle("carrier-container");
  const verticalOption = document.createElement("button");
  verticalOption.textContent = "⇅";
  verticalOption.classList.toggle("vertical-btn");
  const horizontalOption = document.createElement("button");
  horizontalOption.textContent = "⇆";
  horizontalOption.classList.toggle("horizontal-btn");
  const xInput = document.createElement("input");
  xInput.classList.toggle("horizontal-input");
  xInput.setAttribute("type", "number");
  const yInput = document.createElement("input");
  yInput.classList.toggle("vertical-input");
  yInput.setAttribute("type", "number");
  const shipCell = document.createElement("div");
  destroyerContainer.appendChild(shipCell);
  for (let i = 0; i < 2; i++) {
    const shipCell = document.createElement("div");
    submarineContainer.appendChild(shipCell);
  }
  for (let i = 0; i < 3; i++) {
    const shipCell = document.createElement("div");
    cruiserContainer.appendChild(shipCell);
  }
  for (let i = 0; i < 4; i++) {
    const shipCell = document.createElement("div");
    battleShipContainer.appendChild(shipCell);
  }
  for (let i = 0; i < 5; i++) {
    const shipCell = document.createElement("div");
    carrierContainer.appendChild(shipCell);
  }
  sideContainer.appendChild(destroyerContainer);
  sideContainer.appendChild(submarineContainer);
  sideContainer.appendChild(cruiserContainer);
  sideContainer.appendChild(battleShipContainer);
  sideContainer.appendChild(carrierContainer);
  optionContainer.appendChild(xInput);
  optionContainer.appendChild(yInput);
  optionContainer.appendChild(horizontalOption);
  optionContainer.appendChild(verticalOption);
  let shipLength;
  const checkShip = () => {
    if (destroyerContainer.hasAttribute("status")) {
      return shipLength = 1;
    } else if (submarineContainer.hasAttribute("status")) {
      return shipLength = 2;
    } else if (cruiserContainer.hasAttribute("status")) {
      return shipLength = 3;
    } else if (battleShipContainer.hasAttribute("status")) {
      return shipLength = 4;
    } else {
      return shipLength = 5;
    }
  };
  destroyerContainer.addEventListener("click", e => {
    battleShipContainer.removeAttribute("status");
    cruiserContainer.removeAttribute("status");
    submarineContainer.removeAttribute("status");
    carrierContainer.removeAttribute("status");
    destroyerContainer.setAttribute("status", "active");
    checkShip();
  });
  submarineContainer.addEventListener("click", e => {
    battleShipContainer.removeAttribute("status");
    cruiserContainer.removeAttribute("status");
    carrierContainer.removeAttribute("status");
    destroyerContainer.removeAttribute("status");
    submarineContainer.setAttribute("status", "active");
    checkShip();
  });
  cruiserContainer.addEventListener("click", e => {
    battleShipContainer.removeAttribute("status");
    carrierContainer.removeAttribute("status");
    submarineContainer.removeAttribute("status");
    destroyerContainer.removeAttribute("status");
    cruiserContainer.setAttribute("status", "active");
    checkShip();
  });
  battleShipContainer.addEventListener("click", e => {
    carrierContainer.removeAttribute("status");
    cruiserContainer.removeAttribute("status");
    submarineContainer.removeAttribute("status");
    destroyerContainer.removeAttribute("status");
    battleShipContainer.setAttribute("status", "active");
    checkShip();
  });
  carrierContainer.addEventListener("click", e => {
    battleShipContainer.removeAttribute("status");
    cruiserContainer.removeAttribute("status");
    submarineContainer.removeAttribute("status");
    destroyerContainer.removeAttribute("status");
    carrierContainer.setAttribute("status", "active");
    checkShip();
  });
  horizontalOption.addEventListener("click", () => {
    const board = document.querySelector(".board");
    function removeAllChildNodes(board) {
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
    }
    removeAllChildNodes(board);
    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.ship)(shipLength, 0);
    playerGameBoard.placeShip(parseInt(xInput.value), parseInt(yInput.value), newShip);
    renderboard();
    console.log(playerArray);
  });
  verticalOption.addEventListener("click", () => {
    const board = document.querySelector(".board");
    function removeAllChildNodes(board) {
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
    }
    removeAllChildNodes(board);
    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.ship)(shipLength, 1);
    playerGameBoard.placeShip(parseInt(xInput.value), parseInt(yInput.value), newShip);
    renderboard();
  });
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
    console.log(" I was Called");
    if (ship.shipDirection() === 1) {
      for (let i = 0; i < ship.shipLength; i++) {
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
  console.log(shipBoard);
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
let newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4, 0);
playerGameBoard.placeShip(1, 2, newShip);


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
  } else if (length === 1) {
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

    width: 1200px;
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
    cursor: pointer;
}

.board > *:hover {
    background-color: #83d7ee;
    border-radius: 8px;
}

.side-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    gap: 10px;
    border: 2px solid black;
    width: 200px;
    height: 75%;
}

.side-container > * {
    display: flex;
    gap: 3px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    width: 130px;
    height: 40px;
}
.side-container > *:hover {
    width: 133px;
    height: 43px;
}
.side-container > * > * {

    background-color: DarkRed;
    border-radius: 4px;
    width: 20px;
    height: 20px;
}

.mid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.option {
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(2, 100px);
    grid-template-rows: repeat(2, 1fr);
    width: 200px;
    height: 100px;
}

.option > * {
    font-size: 1.9rem;
}

.option > *:hover {
    font-size: 2rem;
}

[status="active"] {
    background-color: yellow;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sCAAsC;IACtC,mCAAmC;;IAEnC,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;;IAEI,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,uCAAuC;IACvC,kCAAkC;IAClC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.center-container {\n    display: flex;\n    justify-content: space-between;\n\n    width: 1200px;\n    height: 400px;\n}\n\n.board {\n    display: grid;\n    gap: 3px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n\n    width: 400px;\n    height: 100;\n}\n\n.board > * {\n    background-color: #83d7ee;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.board > *:hover {\n    background-color: #83d7ee;\n    border-radius: 8px;\n}\n\n.side-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column-reverse;\n    gap: 10px;\n    border: 2px solid black;\n    width: 200px;\n    height: 75%;\n}\n\n.side-container > * {\n    display: flex;\n    gap: 3px;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid black;\n    width: 130px;\n    height: 40px;\n}\n.side-container > *:hover {\n    width: 133px;\n    height: 43px;\n}\n.side-container > * > * {\n\n    background-color: DarkRed;\n    border-radius: 4px;\n    width: 20px;\n    height: 20px;\n}\n\n.mid {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.option {\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(2, 100px);\n    grid-template-rows: repeat(2, 1fr);\n    width: 200px;\n    height: 100px;\n}\n\n.option > * {\n    font-size: 1.9rem;\n}\n\n.option > *:hover {\n    font-size: 2rem;\n}\n\n[status=\"active\"] {\n    background-color: yellow;\n}"],"sourceRoot":""}]);
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
  (0,_DOM__WEBPACK_IMPORTED_MODULE_4__.loadDOM)(playerGameBoard, computerGameBoard);
}
const gameLoop = game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8s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LENBQUMsQ0FBQztFQUM1QixNQUFNMkYsT0FBTyxHQUFHM0YsMkNBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzFCLE1BQU00RixVQUFVLEdBQUc1RiwyQ0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDN0IsTUFBTTZGLE9BQU8sR0FBRzdGLDJDQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUUxQixNQUFNRSxlQUFlLEdBQUdILHFEQUFTLENBQUMsQ0FBQztFQUNuQyxNQUFNMEUsaUJBQWlCLEdBQUcxRSxxREFBUyxDQUFDLENBQUM7RUFFckMsTUFBTStGLFdBQVcsR0FBR3BCLCtDQUFNLENBQUMsT0FBTyxFQUFFeEUsZUFBZSxFQUFFdUUsaUJBQWlCLENBQUM7RUFDdkV4RSw2Q0FBTyxDQUFDQyxlQUFlLEVBQUV1RSxpQkFBaUIsQ0FBQztBQUM1QztBQUVBLE1BQU1zQixRQUFRLEdBQUdQLElBQUksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gbG9hZERPTShwbGF5ZXJHYW1lQm9hcmQsIEFJR2FtZUJvYXJkKSB7XG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblx0Y29uc3QgY2VudGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2VudGVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjZW50ZXItY29udGFpbmVyXCIpO1xuXHRjb25zdCBodW1hbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGh1bWFuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJib2FyZFwiKTtcblx0Y29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb21wdXRlckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYm9hcmRcIik7XG5cdGNvbnN0IG1pZGRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1pZGRsZUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwibWlkXCIpO1xuXHRjb25zdCBzaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2lkZUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZS1jb250YWluZXJcIik7XG5cdGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwib3B0aW9uXCIpO1xuXG5cdGJvZHkuYXBwZW5kQ2hpbGQoY2VudGVyQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWFuQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pZGRsZUNvbnRhaW5lcik7XG5cdG1pZGRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQ29udGFpbmVyKTtcblx0bWlkZGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbkNvbnRhaW5lcik7XG5cdGNlbnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlckNvbnRhaW5lcik7XG5cblx0Ly8gQXJyYXlzIHRvIHN0b3JlIHRoZSBzaGlwcyBpblxuXHRjb25zdCByb3dzID0gMTA7XG5cdGNvbnN0IGNvbHVtbnMgPSAxMDtcblxuXHRjb25zdCBwbGF5ZXJBcnJheSA9IHBsYXllckdhbWVCb2FyZC5zaGlwQXJyYXkoKTtcblx0Ly8gMkQgQXJyYXkgTG9vcHNcblx0Y29uc3QgcmVuZGVyYm9hcmQgPSAoKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRjZWxsLmNsYXNzTGlzdC50b2dnbGUoYGNlbGwtJHtpfSR7an1gKTtcblx0XHRcdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIGAke3BsYXllckFycmF5W2ldW2pdfWApO1xuXG5cdFx0XHRcdGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImRhdGFcIikgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdFx0XHRjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiRGFya1JlZFwiO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSA9PT0gXCJNaXNzXCIpIHtcblx0XHRcdFx0XHRjZWxsLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuXHRcdFx0XHRcdGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJDcmltc29uXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aHVtYW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZW5kZXJib2FyZCgpO1xuXG5cdGNvbnN0IGNvbXB1dGVyQXJyYXkgPSBBSUdhbWVCb2FyZC5zaGlwQXJyYXkoKTtcblx0Ly8gMkQgQXJyYXkgTG9vcHNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuXHRcdFx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC50b2dnbGUoYGNlbGwtJHtpfSR7an1gKTtcblx0XHRcdGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBgJHtjb21wdXRlckFycmF5W2ldW2pdfWApO1xuXHRcdFx0aWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuXHRcdFx0XHRjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiRGFya0JsdWVcIjtcblx0XHRcdH0gZWxzZSBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpID09PSBcIk1pc3NcIikge1xuXHRcdFx0XHRjZWxsLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuXHRcdFx0XHRjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiQ3JpbXNvblwiO1xuXHRcdFx0fVxuXHRcdFx0Y29tcHV0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZGVzdHJveWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGVzdHJveWVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJkZXN0cm95ZXItY29udGFpbmVyXCIpO1xuXHRjb25zdCBzdWJtYXJpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzdWJtYXJpbmVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInN1Ym1hcmluZS1jb250YWluZXJcIik7XG5cdGNvbnN0IHN1Ym1hcmluZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzdWJtYXJpbmVDZWxsLmNsYXNzTGlzdC50b2dnbGUoXCJzdWJtYXJpbmUtb3B0aW9uXCIpO1xuXHRjb25zdCBjcnVpc2VyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y3J1aXNlckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY3J1aXNlci1jb250YWluZXJcIik7XG5cdGNvbnN0IGJhdHRsZVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRiYXR0bGVTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJiYXR0bGVzaGlwLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgY2FycmllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcnJpZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNhcnJpZXItY29udGFpbmVyXCIpO1xuXHRjb25zdCB2ZXJ0aWNhbE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdHZlcnRpY2FsT3B0aW9uLnRleHRDb250ZW50ID0gXCLih4VcIjtcblx0dmVydGljYWxPcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsLWJ0blwiKTtcblx0Y29uc3QgaG9yaXpvbnRhbE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGhvcml6b250YWxPcHRpb24udGV4dENvbnRlbnQgPSBcIuKHhlwiO1xuXHRob3Jpem9udGFsT3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJob3Jpem9udGFsLWJ0blwiKTtcblxuXHRjb25zdCB4SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHhJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwiaG9yaXpvbnRhbC1pbnB1dFwiKTtcblx0eElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG5cdGNvbnN0IHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0eUlucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbC1pbnB1dFwiKTtcblx0eUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG5cblx0Y29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkZXN0cm95ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG5cdFx0Y29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHN1Ym1hcmluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XG5cdH1cblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjcnVpc2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0Y29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGJhdHRsZVNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xuXHR9XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcblx0XHRjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Y2FycmllckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XG5cdH1cblxuXHRzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3Ryb3llckNvbnRhaW5lcik7XG5cdHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWFyaW5lQ29udGFpbmVyKTtcblx0c2lkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcnVpc2VyQ29udGFpbmVyKTtcblx0c2lkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVTaGlwQ29udGFpbmVyKTtcblx0c2lkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJyaWVyQ29udGFpbmVyKTtcblx0b3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHhJbnB1dCk7XG5cdG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh5SW5wdXQpO1xuXHRvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbE9wdGlvbik7XG5cdG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZXJ0aWNhbE9wdGlvbik7XG5cblx0bGV0IHNoaXBMZW5ndGg7XG5cdGNvbnN0IGNoZWNrU2hpcCA9ICgpID0+IHtcblx0XHRpZiAoZGVzdHJveWVyQ29udGFpbmVyLmhhc0F0dHJpYnV0ZShcInN0YXR1c1wiKSkge1xuXHRcdFx0cmV0dXJuIChzaGlwTGVuZ3RoID0gMSk7XG5cdFx0fSBlbHNlIGlmIChzdWJtYXJpbmVDb250YWluZXIuaGFzQXR0cmlidXRlKFwic3RhdHVzXCIpKSB7XG5cdFx0XHRyZXR1cm4gKHNoaXBMZW5ndGggPSAyKTtcblx0XHR9IGVsc2UgaWYgKGNydWlzZXJDb250YWluZXIuaGFzQXR0cmlidXRlKFwic3RhdHVzXCIpKSB7XG5cdFx0XHRyZXR1cm4gKHNoaXBMZW5ndGggPSAzKTtcblx0XHR9IGVsc2UgaWYgKGJhdHRsZVNoaXBDb250YWluZXIuaGFzQXR0cmlidXRlKFwic3RhdHVzXCIpKSB7XG5cdFx0XHRyZXR1cm4gKHNoaXBMZW5ndGggPSA0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChzaGlwTGVuZ3RoID0gNSk7XG5cdFx0fVxuXHR9O1xuXG5cdGRlc3Ryb3llckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRiYXR0bGVTaGlwQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRjcnVpc2VyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRzdWJtYXJpbmVDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGNhcnJpZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGRlc3Ryb3llckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdGF0dXNcIiwgXCJhY3RpdmVcIik7XG5cdFx0Y2hlY2tTaGlwKCk7XG5cdH0pO1xuXHRzdWJtYXJpbmVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0YmF0dGxlU2hpcENvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0Y3J1aXNlckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0Y2FycmllckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0ZGVzdHJveWVyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRzdWJtYXJpbmVDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3RhdHVzXCIsIFwiYWN0aXZlXCIpO1xuXHRcdGNoZWNrU2hpcCgpO1xuXHR9KTtcblx0Y3J1aXNlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRiYXR0bGVTaGlwQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRjYXJyaWVyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRzdWJtYXJpbmVDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGRlc3Ryb3llckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0Y3J1aXNlckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdGF0dXNcIiwgXCJhY3RpdmVcIik7XG5cdFx0Y2hlY2tTaGlwKCk7XG5cdH0pO1xuXHRiYXR0bGVTaGlwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNhcnJpZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGNydWlzZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdHN1Ym1hcmluZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0ZGVzdHJveWVyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRiYXR0bGVTaGlwQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0YXR1c1wiLCBcImFjdGl2ZVwiKTtcblx0XHRjaGVja1NoaXAoKTtcblx0fSk7XG5cdGNhcnJpZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0YmF0dGxlU2hpcENvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0Y3J1aXNlckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0c3VibWFyaW5lQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRkZXN0cm95ZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGNhcnJpZXJDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3RhdHVzXCIsIFwiYWN0aXZlXCIpO1xuXHRcdGNoZWNrU2hpcCgpO1xuXHR9KTtcblxuXHRob3Jpem9udGFsT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuXHRcdGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMoYm9hcmQpIHtcblx0XHRcdHdoaWxlIChib2FyZC5maXJzdENoaWxkKSB7XG5cdFx0XHRcdGJvYXJkLnJlbW92ZUNoaWxkKGJvYXJkLmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZW1vdmVBbGxDaGlsZE5vZGVzKGJvYXJkKTtcblxuXHRcdGNvbnN0IG5ld1NoaXAgPSBzaGlwKHNoaXBMZW5ndGgsIDApO1xuXHRcdHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAocGFyc2VJbnQoeElucHV0LnZhbHVlKSwgcGFyc2VJbnQoeUlucHV0LnZhbHVlKSwgbmV3U2hpcCk7XG5cdFx0cmVuZGVyYm9hcmQoKTtcblx0XHRjb25zb2xlLmxvZyhwbGF5ZXJBcnJheSk7XG5cdH0pO1xuXG5cdHZlcnRpY2FsT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuXHRcdGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMoYm9hcmQpIHtcblx0XHRcdHdoaWxlIChib2FyZC5maXJzdENoaWxkKSB7XG5cdFx0XHRcdGJvYXJkLnJlbW92ZUNoaWxkKGJvYXJkLmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZW1vdmVBbGxDaGlsZE5vZGVzKGJvYXJkKTtcblx0XHRjb25zdCBuZXdTaGlwID0gc2hpcChzaGlwTGVuZ3RoLCAxKTtcblxuXHRcdHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAocGFyc2VJbnQoeElucHV0LnZhbHVlKSwgcGFyc2VJbnQoeUlucHV0LnZhbHVlKSwgbmV3U2hpcCk7XG5cdFx0cmVuZGVyYm9hcmQoKTtcblx0fSk7XG59XG5cbmV4cG9ydCB7IGxvYWRET00gfTtcbiIsImltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcblx0Ly8gQXJyYXlzIHRvIHN0b3JlIHRoZSBzaGlwcyBpblxuXHRjb25zdCByb3dzID0gMTA7XG5cdGNvbnN0IGNvbHVtbnMgPSAxMDtcblx0Y29uc3Qgc2hpcEJvYXJkID0gW107XG5cdC8vIDJEIEFycmF5IExvb3BzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG5cdFx0c2hpcEJvYXJkW2ldID0gW107XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcblx0XHRcdHNoaXBCb2FyZFtpXVtqXSA9IFwiXCI7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUGxhY2Ugc2hpcHMgaW4gMkQgYXJyYXlcblx0Y29uc3QgcGxhY2VTaGlwID0gKHJvd3MsIGNvbHVtbiwgc2hpcCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiIEkgd2FzIENhbGxlZFwiKTtcblx0XHRpZiAoc2hpcC5zaGlwRGlyZWN0aW9uKCkgPT09IDEpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2hpcEJvYXJkW3Jvd3MgLSBpXS5zcGxpY2UoY29sdW1uLCAxLCBzaGlwKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRzaGlwQm9hcmRbcm93c10uc3BsaWNlKGNvbHVtbiArIGksIDEsIHNoaXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgc2hpcCBpcyB0aGVyZSwgcmV0dXJuIE1pc3MgaWYgaXQncyBhIG1pc3MsIGFuZCByZXR1cm4gZmFsc2UgaWYgbm90aGluZ1xuXHRjb25zdCBjaGVja0ZvclNoaXAgPSAocm93LCBjb2x1bW4pID0+IHtcblx0XHRjb25zdCBmaW5kU2hpcCA9IHNoaXBCb2FyZFtyb3ddW2NvbHVtbl07XG5cdFx0aWYgKGZpbmRTaGlwICE9PSBcIlwiICYmIGZpbmRTaGlwICE9PSBcIk1pc3NcIikge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIGlmIChmaW5kU2hpcCA9PT0gXCJNaXNzXCIpIHtcblx0XHRcdHJldHVybiBcIk1pc3NcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFwiRW1wdHlcIjtcblx0XHR9XG5cdH07XG5cblx0Ly8gVGFrZXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcFxuXHQvLyBJZiBtaXNzZWQsIHRoZSBtaXNzZWQgc2hvdCBpcyBhbHNvIGxvZ2dlZFxuXHRjb25zdCByZWNlaXZlQXR0YWNrID0gKHJvdywgY29sdW1uKSA9PiB7XG5cdFx0Y29uc3QgYXR0YWNrU2hpcCA9IHNoaXBCb2FyZFtyb3ddW2NvbHVtbl07XG5cdFx0aWYgKGF0dGFja1NoaXAgPT09IFwiXCIpIHtcblx0XHRcdHJldHVybiBzaGlwQm9hcmRbcm93XS5zcGxpY2UoY29sdW1uLCAxLCBcIk1pc3NcIik7XG5cdFx0fSBlbHNlIGlmIChhdHRhY2tTaGlwICE9PSBcIlwiICYmIGF0dGFja1NoaXAgIT09IFwiTWlzc1wiICYmIGF0dGFja1NoaXAgIT09IFwiSGl0XCIpIHtcblx0XHRcdHNoaXBCb2FyZFtyb3ddLnNwbGljZShjb2x1bW4sIDEsIFwiSGl0XCIpO1xuXHRcdFx0cmV0dXJuIGF0dGFja1NoaXAuZ290SGl0KCk7XG5cdFx0fSBlbHNlIGlmIChhdHRhY2tTaGlwICE9PSBcIlwiICYmIGF0dGFja1NoaXAgIT09IFwiSGl0XCIgJiYgYXR0YWNrU2hpcCA9PT0gXCJNaXNzXCIpIHtcblx0XHRcdHJldHVybiBcIkFscmVhZHkgbWlzc2VkIGhlcmVcIjtcblx0XHR9IGVsc2UgaWYgKGF0dGFja1NoaXAgPT09IFwiSGl0XCIpIHtcblx0XHRcdHJldHVybiBcIkFscmVhZHkgaGl0IGhlcmVcIjtcblx0XHR9XG5cdH07XG5cblx0Ly8gV2hlbiBhIHNoaXAgc2lua3MgaW5jcmVhc2UgdGhlIG51bWJlciBvZiBTdW5rZW4gU2hpcHMgdGhyb3VnaCByZXBvcnRTdGF0dXNcblx0Ly8gc3Vua1NoaXBzIHN0b3JlcyB0aGF0IHZhcmlhYmxlXG5cdC8vIHJlcG9ydFN0YXR1cyAtPiBzdW5rU2hpcHMgLT4gc3Vua2VuU2hpcHNcblx0bGV0IHN1bmtlblNoaXBzID0gMDtcblx0Y29uc3Qgc3Vua1NoaXBzID0gKCkgPT4gc3Vua2VuU2hpcHM7XG5cdGNvbnN0IHJlcG9ydFN0YXR1cyA9IChzaGlwKSA9PiB7XG5cdFx0aWYgKHNoaXAuaXNTdW5rKCkgPT09IHRydWUpIHtcblx0XHRcdHJldHVybiBzdW5rZW5TaGlwcysrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHNoaXBBcnJheSA9ICgpID0+IHNoaXBCb2FyZDtcblx0Y29uc29sZS5sb2coc2hpcEJvYXJkKTtcblxuXHRyZXR1cm4geyBzdW5rU2hpcHMsIGNoZWNrRm9yU2hpcCwgcmVjZWl2ZUF0dGFjaywgcmVwb3J0U3RhdHVzLCBwbGFjZVNoaXAsIHNoaXBBcnJheSB9O1xufVxuXG5jb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcbmNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbmxldCBuZXdTaGlwID0gc2hpcCg0LCAwKTtcbnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoMSwgMiwgbmV3U2hpcCk7XG5leHBvcnQgeyBnYW1lQm9hcmQsIHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQgfTtcbiIsImZ1bmN0aW9uIHBsYXllcihwbGF5ZXIsIHBsYXllckdhbWVCb2FyZCwgZW5lbXlHYW1lQm9hcmQpIHtcblx0ZnVuY3Rpb24gcmFuZG9tTnVtKG1heCkge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuXHR9XG5cblx0Y29uc3QgYXR0YWNrID0gKHJvdywgY29sdW1uKSA9PiB7XG5cdFx0ZnVuY3Rpb24gYWlBdHRhY2soKSB7XG5cdFx0XHRwbGF5ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21OdW0oMTApLCByYW5kb21OdW0oMTApKTtcblx0XHR9XG5cdFx0aWYgKHBsYXllciA9PT0gXCJIdW1hblwiKSB7XG5cdFx0XHRlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcblx0XHRcdGFpQXR0YWNrKCk7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4geyBhdHRhY2sgfTtcbn1cblxuZXhwb3J0IHsgcGxheWVyIH07XG4iLCJleHBvcnQgeyBzaGlwIH07XG5cbmZ1bmN0aW9uIHNoaXAobGVuZ3RoLCBkaXJlY3Rpb24pIHtcblx0bGV0IHNoaXBMZW5ndGggPSBsZW5ndGg7XG5cblx0Y29uc3Qgc2hpcERpcmVjdGlvbiA9ICgpID0+IHtcblx0XHRpZiAoZGlyZWN0aW9uID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEFzc2lnbiBuYW1lIGJhc2VkIG9uIGxlbmd0aFxuXHRsZXQgbmFtZTtcblx0aWYgKGxlbmd0aCA9PT0gNSkge1xuXHRcdG5hbWUgPSBcIkNhcnJpZXJcIjtcblx0fSBlbHNlIGlmIChsZW5ndGggPT09IDQpIHtcblx0XHRuYW1lID0gXCJCYXR0bGVzaGlwXCI7XG5cdH0gZWxzZSBpZiAobGVuZ3RoID09PSAzKSB7XG5cdFx0bmFtZSA9IFwiQ3J1aXNlclwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMikge1xuXHRcdG5hbWUgPSBcIlN1Ym1hcmluZVwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSkge1xuXHRcdG5hbWUgPSBcIkRlc3Ryb3llclwiO1xuXHR9XG5cblx0Ly8gTnVtYmVyIG9mIGhpdHNcblx0bGV0IGhpdHMgPSAwO1xuXHRjb25zdCBudW1iZXJPZkhpdHMgPSAoKSA9PiBoaXRzO1xuXHRjb25zdCBnb3RIaXQgPSAoKSA9PiBoaXRzKys7XG5cblx0Ly9DaGVjayBpZiB0aGUgc2hpcCBzdW5rXG5cdGNvbnN0IGlzU3VuayA9ICgpID0+IHtcblx0XHRpZiAoXG5cdFx0XHQobGVuZ3RoID09PSA1ICYmIGhpdHMgPT09IDUpIHx8XG5cdFx0XHQobGVuZ3RoID09PSA0ICYmIGhpdHMgPT09IDQpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAzICYmIGhpdHMgPT09IDMpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAyICYmIGhpdHMgPT09IDIpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAxICYmIGhpdHMgPT09IDEpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdHJldHVybiB7IG51bWJlck9mSGl0cywgZ290SGl0LCBpc1N1bmssIHNoaXBEaXJlY3Rpb24sIGhpdHMsIG5hbWUsIHNoaXBMZW5ndGggfTtcbn1cblxuY29uc3QgbmV3U2hpcCA9IHNoaXAoNCwgMSk7XG5uZXdTaGlwLmdvdEhpdCgpO1xubmV3U2hpcC5nb3RIaXQoKTtcbm5ld1NoaXAuZ290SGl0KCk7XG5uZXdTaGlwLmlzU3VuaygpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogM3B4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuXG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMTAwO1xufVxuXG4uYm9hcmQgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkN2VlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib2FyZCA+ICo6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M2Q3ZWU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc2lkZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDc1JTtcbn1cblxuLnNpZGUtY29udGFpbmVyID4gKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLnNpZGUtY29udGFpbmVyID4gKjpob3ZlciB7XG4gICAgd2lkdGg6IDEzM3B4O1xuICAgIGhlaWdodDogNDNweDtcbn1cbi5zaWRlLWNvbnRhaW5lciA+ICogPiAqIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IERhcmtSZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLm1pZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLm9wdGlvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMDBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm9wdGlvbiA+ICoge1xuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xufVxuXG4ub3B0aW9uID4gKjpob3ZlciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5bc3RhdHVzPVwiYWN0aXZlXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4Qjs7SUFFOUIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLHNDQUFzQztJQUN0QyxtQ0FBbUM7O0lBRW5DLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICB3aWR0aDogMTIwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDNweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcblxcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMTAwO1xcbn1cXG5cXG4uYm9hcmQgPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDdlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib2FyZCA+ICo6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkN2VlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zaWRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA3NSU7XFxufVxcblxcbi5zaWRlLWNvbnRhaW5lciA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uc2lkZS1jb250YWluZXIgPiAqOmhvdmVyIHtcXG4gICAgd2lkdGg6IDEzM3B4O1xcbiAgICBoZWlnaHQ6IDQzcHg7XFxufVxcbi5zaWRlLWNvbnRhaW5lciA+ICogPiAqIHtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRGFya1JlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubWlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ub3B0aW9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDEwMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ub3B0aW9uID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4ub3B0aW9uID4gKjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuW3N0YXR1cz1cXFwiYWN0aXZlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBsb2FkRE9NIH0gZnJvbSBcIi4vRE9NXCI7XG5cbi8vIFRlc3QgaWYgZ2FtZSBjcmVhdGVzIHBsYXllclxuLy8gVGVzdCBpZiBnYW1lIGNyZWF0ZXMgZ2FtZSBib2FyZFxuXG5mdW5jdGlvbiBnYW1lKCkge1xuXHRjb25zdCBkZXN0cm95ZXIgPSBzaGlwKDEsIDEpO1xuXHRjb25zdCBzdWJtYXJpbmUgPSBzaGlwKDIsIDEpO1xuXHRjb25zdCBjcnVpc2VyID0gc2hpcCgzLCAwKTtcblx0Y29uc3QgYmF0dGxlU2hpcCA9IHNoaXAoNCwgMCk7XG5cdGNvbnN0IGNhcnJpZXIgPSBzaGlwKDUsIDApO1xuXG5cdGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xuXHRjb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xuXG5cdGNvbnN0IGh1bWFuUGxheWVyID0gcGxheWVyKFwiSHVtYW5cIiwgcGxheWVyR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCk7XG5cdGxvYWRET00ocGxheWVyR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCk7XG59XG5cbmNvbnN0IGdhbWVMb29wID0gZ2FtZSgpO1xuZXhwb3J0IHsgZ2FtZSB9O1xuIl0sIm5hbWVzIjpbImdhbWVCb2FyZCIsInNoaXAiLCJsb2FkRE9NIiwicGxheWVyR2FtZUJvYXJkIiwiQUlHYW1lQm9hcmQiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2VudGVyQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImh1bWFuQ29udGFpbmVyIiwiY29tcHV0ZXJDb250YWluZXIiLCJtaWRkbGVDb250YWluZXIiLCJzaWRlQ29udGFpbmVyIiwib3B0aW9uQ29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJyb3dzIiwiY29sdW1ucyIsInBsYXllckFycmF5Iiwic2hpcEFycmF5IiwicmVuZGVyYm9hcmQiLCJpIiwiaiIsImNlbGwiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImNvbXB1dGVyQXJyYXkiLCJkZXN0cm95ZXJDb250YWluZXIiLCJzdWJtYXJpbmVDb250YWluZXIiLCJzdWJtYXJpbmVDZWxsIiwiY3J1aXNlckNvbnRhaW5lciIsImJhdHRsZVNoaXBDb250YWluZXIiLCJjYXJyaWVyQ29udGFpbmVyIiwidmVydGljYWxPcHRpb24iLCJ0ZXh0Q29udGVudCIsImhvcml6b250YWxPcHRpb24iLCJ4SW5wdXQiLCJ5SW5wdXQiLCJzaGlwQ2VsbCIsInNoaXBMZW5ndGgiLCJjaGVja1NoaXAiLCJoYXNBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlbW92ZUF0dHJpYnV0ZSIsImJvYXJkIiwicmVtb3ZlQWxsQ2hpbGROb2RlcyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsIm5ld1NoaXAiLCJwbGFjZVNoaXAiLCJwYXJzZUludCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNoaXBCb2FyZCIsImNvbHVtbiIsInNoaXBEaXJlY3Rpb24iLCJzcGxpY2UiLCJjaGVja0ZvclNoaXAiLCJyb3ciLCJmaW5kU2hpcCIsInJlY2VpdmVBdHRhY2siLCJhdHRhY2tTaGlwIiwiZ290SGl0Iiwic3Vua2VuU2hpcHMiLCJzdW5rU2hpcHMiLCJyZXBvcnRTdGF0dXMiLCJpc1N1bmsiLCJjb21wdXRlckdhbWVCb2FyZCIsInBsYXllciIsImVuZW15R2FtZUJvYXJkIiwicmFuZG9tTnVtIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXR0YWNrIiwiYWlBdHRhY2siLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJuYW1lIiwiaGl0cyIsIm51bWJlck9mSGl0cyIsImdhbWUiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlU2hpcCIsImNhcnJpZXIiLCJodW1hblBsYXllciIsImdhbWVMb29wIl0sInNvdXJjZVJvb3QiOiIifQ==