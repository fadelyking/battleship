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


function loadDOM(player, playerGameBoard, AIGameBoard) {
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
  const numberGrid = document.createElement("div");
  numberGrid.classList.toggle("nums");
  const computerNumberGrid = document.createElement("div");
  computerNumberGrid.classList.toggle("ai-nums");
  for (let i = 0; i < 10; i++) {
    const num = document.createElement("div");
    const computerNum = document.createElement("div");
    num.textContent = `${i}`;
    computerNum.textContent = `${i}`;
    numberGrid.appendChild(num);
    computerNumberGrid.appendChild(computerNum);
  }
  body.appendChild(centerContainer);
  centerContainer.appendChild(numberGrid);
  centerContainer.appendChild(humanContainer);
  centerContainer.appendChild(middleContainer);
  middleContainer.appendChild(sideContainer);
  middleContainer.appendChild(optionContainer);
  centerContainer.appendChild(computerContainer);
  centerContainer.appendChild(computerNumberGrid);

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
        if (cell.className === `cell-0${j}`) {
          const humanNums = document.createElement("div");
          humanNums.classList.add("human-nums");
          humanNums.textContent = `${j}`;
          cell.appendChild(humanNums);
        }
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
      if (cell.className === `cell-0${j}`) {
        cell.setAttribute("type", "computer");
        const humanNums = document.createElement("div");
        humanNums.setAttribute("numtype", "computer-nums");
        humanNums.textContent = `${9 - j}`;
        cell.appendChild(humanNums);
      }
      if (cell.getAttribute("data") === "[object Object]") {
        cell.style.backgroundColor = "DarkBlue";
      } else if (cell.getAttribute("data") === "Miss") {
        cell.style.borderRadius = "10px";
        cell.style.backgroundColor = "Crimson";
      }
      computerContainer.appendChild(cell);
      cell.addEventListener("click", e => {
        const row = cell.className.charAt(cell.className.length - 2);
        const column = cell.className.charAt(cell.className.length - 1);
        console.log(parseInt(row), parseInt(column));
        player.attack(parseInt(row), parseInt(column));
        const board = document.querySelector(".board");
        function removeAllChildNodes(board) {
          while (board.firstChild) {
            board.removeChild(board.firstChild);
          }
        }
        removeAllChildNodes(board);
        renderboard();
        if (cell.getAttribute("data") !== "[object Object]") {
          cell.style.borderRadius = "10px";
          cell.style.backgroundColor = "crimson";
        } else if (cell.getAttribute("data") === "[object Object]") {
          cell.style.borderRadius = "10px";
          cell.style.backgroundColor = "green";
        }
      });
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
    const containers = sideContainer.childNodes;
    const checkForContainers = () => {
      for (let container of containers) {
        if (container.hasAttribute("status")) {
          return false;
        }
      }
    };
    console.log(checkForContainers());
    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.ship)(shipLength, 0);
    if (xInput.value === "" || yInput.value === "") {
      console.log(xInput.value);
      alert("Please fill in the number");
      renderboard();
    } else if (checkForContainers() === undefined) {
      alert("Please pick a ship");
      renderboard();
    } else {
      if (playerGameBoard.existentShips(newShip) === false) {
        playerGameBoard.placeShip(parseInt(xInput.value), parseInt(yInput.value), newShip);
        renderboard();
      } else {
        alert("Ship is already there");
        renderboard();
      }
    }
  });
  verticalOption.addEventListener("click", () => {
    const board = document.querySelector(".board");
    function removeAllChildNodes(board) {
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
    }
    removeAllChildNodes(board);
    const containers = sideContainer.childNodes;
    const checkForContainers = () => {
      for (let container of containers) {
        if (container.hasAttribute("status")) {
          return false;
        }
      }
    };
    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.ship)(shipLength, 1);
    if (xInput.value === "" || yInput.value === "") {
      console.log(xInput.value);
      alert("Please fill in the number");
      renderboard();
    } else if (checkForContainers() === undefined) {
      alert("Please pick a ship");
      renderboard();
    } else {
      if (playerGameBoard.existentShips(newShip) === false) {
        playerGameBoard.placeShip(parseInt(xInput.value), parseInt(yInput.value), newShip);
        renderboard();
      } else {
        alert("Ship is already there");
        renderboard();
      }
    }
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
  const placeShip = (row, column, ship) => {
    const shipDirection = ship.shipDirection();
    if (!checkForShip(row, column)) {
      if (shipDirection === 1 && row - ship.shipLength + 1 >= 0 || shipDirection === 0 && column + ship.shipLength <= 10) {
        if (shipDirection === 1) {
          for (let i = 0; i < ship.shipLength; i++) {
            shipBoard[row - i].splice(column, 1, ship);
          }
        } else {
          for (let i = 0; i < ship.shipLength; i++) {
            shipBoard[row].splice(column + i, 1, ship);
          }
        }
      } else {
        alert("Invalid placement; exceeds board boundaries.");
        console.log("Invalid ship placement. Exceeds board boundaries.");
      }
    } else {
      alert("Invalid placement; Ship overlaps.");
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
      return false;
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
  let storedShip = ["Destroyer", "Submarine", "Cruiser", "Battleship", "Carrier"];
  const existentShips = ship => {
    const findSplice = storedShip.findIndex(name => name === ship.name);
    if (findSplice === -1) {
      return true;
    } else if (findSplice !== -1) {
      storedShip.splice(findSplice, 1);
      return false;
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
    shipArray,
    existentShips
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
}

.nums {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    justify-items: end;
    align-items: center;
    font-size: 1.6rem;
    margin-right: -50px;

}

.ai-nums {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    justify-items: end;
    align-items: center;
    font-size: 1.6rem;
    margin-left: -50px

}


.human-nums {
    position: absolute;
    display: flex;
    top: 50px;

}

[numtype="computer-nums"] {
    position: absolute;
    display: flex;
    top: 50px;
} 

[class^="cell"] {
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sCAAsC;IACtC,mCAAmC;;IAEnC,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;;IAEI,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,uCAAuC;IACvC,kCAAkC;IAClC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB;;AAEJ;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,SAAS;;AAEb;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.center-container {\n    display: flex;\n    justify-content: space-between;\n\n    width: 1200px;\n    height: 400px;\n}\n\n.board {\n    display: grid;\n    gap: 3px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n\n    width: 400px;\n    height: 100;\n}\n\n.board > * {\n    background-color: #83d7ee;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.board > *:hover {\n    background-color: #83d7ee;\n    border-radius: 8px;\n}\n\n.side-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column-reverse;\n    gap: 10px;\n    border: 2px solid black;\n    width: 200px;\n    height: 75%;\n}\n\n.side-container > * {\n    display: flex;\n    gap: 3px;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid black;\n    width: 130px;\n    height: 40px;\n}\n.side-container > *:hover {\n    width: 133px;\n    height: 43px;\n}\n.side-container > * > * {\n\n    background-color: DarkRed;\n    border-radius: 4px;\n    width: 20px;\n    height: 20px;\n}\n\n.mid {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.option {\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(2, 100px);\n    grid-template-rows: repeat(2, 1fr);\n    width: 200px;\n    height: 100px;\n}\n\n.option > * {\n    font-size: 1.9rem;\n}\n\n.option > *:hover {\n    font-size: 2rem;\n}\n\n[status=\"active\"] {\n    background-color: yellow;\n}\n\n.nums {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    justify-items: end;\n    align-items: center;\n    font-size: 1.6rem;\n    margin-right: -50px;\n\n}\n\n.ai-nums {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    justify-items: end;\n    align-items: center;\n    font-size: 1.6rem;\n    margin-left: -50px\n\n}\n\n\n.human-nums {\n    position: absolute;\n    display: flex;\n    top: 50px;\n\n}\n\n[numtype=\"computer-nums\"] {\n    position: absolute;\n    display: flex;\n    top: 50px;\n} \n\n[class^=\"cell\"] {\n    display: flex;\n    justify-content: center;\n    font-size: 1.6rem;\n}\n\n"],"sourceRoot":""}]);
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
  (0,_DOM__WEBPACK_IMPORTED_MODULE_4__.loadDOM)(humanPlayer, playerGameBoard, computerGameBoard);
}
const gameLoop = game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLG1GQUFtRixNQUFNLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNrQjtBQUNOO0FBQ0o7QUFDRTs7QUFFaEM7QUFDQTs7QUFFQSxTQUFTWSxJQUFJQSxDQUFBLEVBQUc7RUFDZixNQUFNQyxTQUFTLEdBQUczRywyQ0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDNUIsTUFBTTRHLFNBQVMsR0FBRzVHLDJDQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUM1QixNQUFNNkcsT0FBTyxHQUFHN0csMkNBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzFCLE1BQU04RyxVQUFVLEdBQUc5RywyQ0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDN0IsTUFBTStHLE9BQU8sR0FBRy9HLDJDQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUUxQixNQUFNRyxlQUFlLEdBQUdKLHFEQUFTLENBQUMsQ0FBQztFQUNuQyxNQUFNZ0csaUJBQWlCLEdBQUdoRyxxREFBUyxDQUFDLENBQUM7RUFFckMsTUFBTWlILFdBQVcsR0FBRzlHLCtDQUFNLENBQUMsT0FBTyxFQUFFQyxlQUFlLEVBQUU0RixpQkFBaUIsQ0FBQztFQUN2RTlGLDZDQUFPLENBQUMrRyxXQUFXLEVBQUU3RyxlQUFlLEVBQUU0RixpQkFBaUIsQ0FBQztBQUN6RDtBQUVBLE1BQU1rQixRQUFRLEdBQUdQLElBQUksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gbG9hZERPTShwbGF5ZXIsIHBsYXllckdhbWVCb2FyZCwgQUlHYW1lQm9hcmQpIHtcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXHRjb25zdCBjZW50ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjZW50ZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNlbnRlci1jb250YWluZXJcIik7XG5cdGNvbnN0IGh1bWFuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aHVtYW5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJvYXJkXCIpO1xuXHRjb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbXB1dGVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJib2FyZFwiKTtcblx0Y29uc3QgbWlkZGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWlkZGxlQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJtaWRcIik7XG5cdGNvbnN0IHNpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzaWRlQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlLWNvbnRhaW5lclwiKTtcblx0Y29uc3Qgb3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0b3B0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJvcHRpb25cIik7XG5cdGNvbnN0IG51bWJlckdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRudW1iZXJHcmlkLmNsYXNzTGlzdC50b2dnbGUoXCJudW1zXCIpO1xuXHRjb25zdCBjb21wdXRlck51bWJlckdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb21wdXRlck51bWJlckdyaWQuY2xhc3NMaXN0LnRvZ2dsZShcImFpLW51bXNcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdGNvbnN0IG51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Y29uc3QgY29tcHV0ZXJOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG51bS50ZXh0Q29udGVudCA9IGAke2l9YDtcblx0XHRjb21wdXRlck51bS50ZXh0Q29udGVudCA9IGAke2l9YDtcblx0XHRudW1iZXJHcmlkLmFwcGVuZENoaWxkKG51bSk7XG5cdFx0Y29tcHV0ZXJOdW1iZXJHcmlkLmFwcGVuZENoaWxkKGNvbXB1dGVyTnVtKTtcblx0fVxuXG5cdGJvZHkuYXBwZW5kQ2hpbGQoY2VudGVyQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlckdyaWQpO1xuXHRjZW50ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtYW5Db250YWluZXIpO1xuXHRjZW50ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWlkZGxlQ29udGFpbmVyKTtcblx0bWlkZGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVDb250YWluZXIpO1xuXHRtaWRkbGVDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyTnVtYmVyR3JpZCk7XG5cblx0Ly8gQXJyYXlzIHRvIHN0b3JlIHRoZSBzaGlwcyBpblxuXHRjb25zdCByb3dzID0gMTA7XG5cdGNvbnN0IGNvbHVtbnMgPSAxMDtcblxuXHRjb25zdCBwbGF5ZXJBcnJheSA9IHBsYXllckdhbWVCb2FyZC5zaGlwQXJyYXkoKTtcblx0Ly8gMkQgQXJyYXkgTG9vcHNcblx0Y29uc3QgcmVuZGVyYm9hcmQgPSAoKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRjZWxsLmNsYXNzTGlzdC50b2dnbGUoYGNlbGwtJHtpfSR7an1gKTtcblx0XHRcdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIGAke3BsYXllckFycmF5W2ldW2pdfWApO1xuXHRcdFx0XHRpZiAoY2VsbC5jbGFzc05hbWUgPT09IGBjZWxsLTAke2p9YCkge1xuXHRcdFx0XHRcdGNvbnN0IGh1bWFuTnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0aHVtYW5OdW1zLmNsYXNzTGlzdC5hZGQoXCJodW1hbi1udW1zXCIpO1xuXHRcdFx0XHRcdGh1bWFuTnVtcy50ZXh0Q29udGVudCA9IGAke2p9YDtcblx0XHRcdFx0XHRjZWxsLmFwcGVuZENoaWxkKGh1bWFuTnVtcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuXHRcdFx0XHRcdGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJEYXJrUmVkXCI7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpID09PSBcIk1pc3NcIikge1xuXHRcdFx0XHRcdGNlbGwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG5cdFx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIkNyaW1zb25cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRodW1hbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJlbmRlcmJvYXJkKCk7XG5cblx0Y29uc3QgY29tcHV0ZXJBcnJheSA9IEFJR2FtZUJvYXJkLnNoaXBBcnJheSgpO1xuXHQvLyAyRCBBcnJheSBMb29wc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG5cdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LnRvZ2dsZShgY2VsbC0ke2l9JHtqfWApO1xuXHRcdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIGAke2NvbXB1dGVyQXJyYXlbaV1bal19YCk7XG5cdFx0XHRpZiAoY2VsbC5jbGFzc05hbWUgPT09IGBjZWxsLTAke2p9YCkge1xuXHRcdFx0XHRjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb21wdXRlclwiKTtcblx0XHRcdFx0Y29uc3QgaHVtYW5OdW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0aHVtYW5OdW1zLnNldEF0dHJpYnV0ZShcIm51bXR5cGVcIiwgXCJjb21wdXRlci1udW1zXCIpO1xuXHRcdFx0XHRodW1hbk51bXMudGV4dENvbnRlbnQgPSBgJHs5IC0gan1gO1xuXHRcdFx0XHRjZWxsLmFwcGVuZENoaWxkKGh1bWFuTnVtcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImRhdGFcIikgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIkRhcmtCbHVlXCI7XG5cdFx0XHR9IGVsc2UgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSA9PT0gXCJNaXNzXCIpIHtcblx0XHRcdFx0Y2VsbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcblx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIkNyaW1zb25cIjtcblx0XHRcdH1cblx0XHRcdGNvbXB1dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXG5cdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0XHRjb25zdCByb3cgPSBjZWxsLmNsYXNzTmFtZS5jaGFyQXQoY2VsbC5jbGFzc05hbWUubGVuZ3RoIC0gMik7XG5cdFx0XHRcdGNvbnN0IGNvbHVtbiA9IGNlbGwuY2xhc3NOYW1lLmNoYXJBdChjZWxsLmNsYXNzTmFtZS5sZW5ndGggLSAxKTtcblx0XHRcdFx0Y29uc29sZS5sb2cocGFyc2VJbnQocm93KSwgcGFyc2VJbnQoY29sdW1uKSk7XG5cdFx0XHRcdHBsYXllci5hdHRhY2socGFyc2VJbnQocm93KSwgcGFyc2VJbnQoY29sdW1uKSk7XG5cblx0XHRcdFx0Y29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuXHRcdFx0XHRmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKGJvYXJkKSB7XG5cdFx0XHRcdFx0d2hpbGUgKGJvYXJkLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0XHRcdGJvYXJkLnJlbW92ZUNoaWxkKGJvYXJkLmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZW1vdmVBbGxDaGlsZE5vZGVzKGJvYXJkKTtcblx0XHRcdFx0cmVuZGVyYm9hcmQoKTtcblxuXHRcdFx0XHRpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG5cdFx0XHRcdFx0Y2VsbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcblx0XHRcdFx0XHRjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3JpbXNvblwiO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuXHRcdFx0XHRcdGNlbGwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG5cdFx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGRlc3Ryb3llckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRlc3Ryb3llckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiZGVzdHJveWVyLWNvbnRhaW5lclwiKTtcblx0Y29uc3Qgc3VibWFyaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3VibWFyaW5lQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzdWJtYXJpbmUtY29udGFpbmVyXCIpO1xuXHRjb25zdCBzdWJtYXJpbmVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3VibWFyaW5lQ2VsbC5jbGFzc0xpc3QudG9nZ2xlKFwic3VibWFyaW5lLW9wdGlvblwiKTtcblx0Y29uc3QgY3J1aXNlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNydWlzZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNydWlzZXItY29udGFpbmVyXCIpO1xuXHRjb25zdCBiYXR0bGVTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YmF0dGxlU2hpcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYmF0dGxlc2hpcC1jb250YWluZXJcIik7XG5cdGNvbnN0IGNhcnJpZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJyaWVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJyaWVyLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgdmVydGljYWxPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHR2ZXJ0aWNhbE9wdGlvbi50ZXh0Q29udGVudCA9IFwi4oeFXCI7XG5cdHZlcnRpY2FsT3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbC1idG5cIik7XG5cdGNvbnN0IGhvcml6b250YWxPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRob3Jpem9udGFsT3B0aW9uLnRleHRDb250ZW50ID0gXCLih4ZcIjtcblx0aG9yaXpvbnRhbE9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaG9yaXpvbnRhbC1idG5cIik7XG5cblx0Y29uc3QgeElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHR4SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcImhvcml6b250YWwtaW5wdXRcIik7XG5cdHhJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xuXHRjb25zdCB5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHlJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwidmVydGljYWwtaW5wdXRcIik7XG5cdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xuXG5cdGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGVzdHJveWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuXHRcdGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRzdWJtYXJpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xuXHR9XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Y3J1aXNlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XG5cdH1cblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRiYXR0bGVTaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG5cdFx0Y29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNhcnJpZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xuXHR9XG5cblx0c2lkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXN0cm95ZXJDb250YWluZXIpO1xuXHRzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1hcmluZUNvbnRhaW5lcik7XG5cdHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3J1aXNlckNvbnRhaW5lcik7XG5cdHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmF0dGxlU2hpcENvbnRhaW5lcik7XG5cdHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FycmllckNvbnRhaW5lcik7XG5cdG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh4SW5wdXQpO1xuXHRvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoeUlucHV0KTtcblx0b3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvcml6b250YWxPcHRpb24pO1xuXHRvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodmVydGljYWxPcHRpb24pO1xuXG5cdGxldCBzaGlwTGVuZ3RoO1xuXHRjb25zdCBjaGVja1NoaXAgPSAoKSA9PiB7XG5cdFx0aWYgKGRlc3Ryb3llckNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoXCJzdGF0dXNcIikpIHtcblx0XHRcdHJldHVybiAoc2hpcExlbmd0aCA9IDEpO1xuXHRcdH0gZWxzZSBpZiAoc3VibWFyaW5lQ29udGFpbmVyLmhhc0F0dHJpYnV0ZShcInN0YXR1c1wiKSkge1xuXHRcdFx0cmV0dXJuIChzaGlwTGVuZ3RoID0gMik7XG5cdFx0fSBlbHNlIGlmIChjcnVpc2VyQ29udGFpbmVyLmhhc0F0dHJpYnV0ZShcInN0YXR1c1wiKSkge1xuXHRcdFx0cmV0dXJuIChzaGlwTGVuZ3RoID0gMyk7XG5cdFx0fSBlbHNlIGlmIChiYXR0bGVTaGlwQ29udGFpbmVyLmhhc0F0dHJpYnV0ZShcInN0YXR1c1wiKSkge1xuXHRcdFx0cmV0dXJuIChzaGlwTGVuZ3RoID0gNCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoc2hpcExlbmd0aCA9IDUpO1xuXHRcdH1cblx0fTtcblxuXHRkZXN0cm95ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0YmF0dGxlU2hpcENvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0Y3J1aXNlckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0c3VibWFyaW5lQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRjYXJyaWVyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRkZXN0cm95ZXJDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3RhdHVzXCIsIFwiYWN0aXZlXCIpO1xuXHRcdGNoZWNrU2hpcCgpO1xuXHR9KTtcblx0c3VibWFyaW5lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGJhdHRsZVNoaXBDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGNydWlzZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGNhcnJpZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGRlc3Ryb3llckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0c3VibWFyaW5lQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0YXR1c1wiLCBcImFjdGl2ZVwiKTtcblx0XHRjaGVja1NoaXAoKTtcblx0fSk7XG5cdGNydWlzZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0YmF0dGxlU2hpcENvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0Y2FycmllckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0c3VibWFyaW5lQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRkZXN0cm95ZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGNydWlzZXJDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3RhdHVzXCIsIFwiYWN0aXZlXCIpO1xuXHRcdGNoZWNrU2hpcCgpO1xuXHR9KTtcblx0YmF0dGxlU2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRjYXJyaWVyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRjcnVpc2VyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRzdWJtYXJpbmVDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGRlc3Ryb3llckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0YmF0dGxlU2hpcENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdGF0dXNcIiwgXCJhY3RpdmVcIik7XG5cdFx0Y2hlY2tTaGlwKCk7XG5cdH0pO1xuXHRjYXJyaWVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGJhdHRsZVNoaXBDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGNydWlzZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdHN1Ym1hcmluZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0ZGVzdHJveWVyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRjYXJyaWVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0YXR1c1wiLCBcImFjdGl2ZVwiKTtcblx0XHRjaGVja1NoaXAoKTtcblx0fSk7XG5cblx0aG9yaXpvbnRhbE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcblx0XHRmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKGJvYXJkKSB7XG5cdFx0XHR3aGlsZSAoYm9hcmQuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRib2FyZC5yZW1vdmVDaGlsZChib2FyZC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVtb3ZlQWxsQ2hpbGROb2Rlcyhib2FyZCk7XG5cblx0XHRjb25zdCBjb250YWluZXJzID0gc2lkZUNvbnRhaW5lci5jaGlsZE5vZGVzO1xuXHRcdGNvbnN0IGNoZWNrRm9yQ29udGFpbmVycyA9ICgpID0+IHtcblx0XHRcdGZvciAobGV0IGNvbnRhaW5lciBvZiBjb250YWluZXJzKSB7XG5cdFx0XHRcdGlmIChjb250YWluZXIuaGFzQXR0cmlidXRlKFwic3RhdHVzXCIpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnNvbGUubG9nKGNoZWNrRm9yQ29udGFpbmVycygpKTtcblxuXHRcdGNvbnN0IG5ld1NoaXAgPSBzaGlwKHNoaXBMZW5ndGgsIDApO1xuXHRcdGlmICh4SW5wdXQudmFsdWUgPT09IFwiXCIgfHwgeUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh4SW5wdXQudmFsdWUpO1xuXHRcdFx0YWxlcnQoXCJQbGVhc2UgZmlsbCBpbiB0aGUgbnVtYmVyXCIpO1xuXHRcdFx0cmVuZGVyYm9hcmQoKTtcblx0XHR9IGVsc2UgaWYgKGNoZWNrRm9yQ29udGFpbmVycygpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGFsZXJ0KFwiUGxlYXNlIHBpY2sgYSBzaGlwXCIpO1xuXHRcdFx0cmVuZGVyYm9hcmQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHBsYXllckdhbWVCb2FyZC5leGlzdGVudFNoaXBzKG5ld1NoaXApID09PSBmYWxzZSkge1xuXHRcdFx0XHRwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKHBhcnNlSW50KHhJbnB1dC52YWx1ZSksIHBhcnNlSW50KHlJbnB1dC52YWx1ZSksIG5ld1NoaXApO1xuXHRcdFx0XHRyZW5kZXJib2FyZCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxlcnQoXCJTaGlwIGlzIGFscmVhZHkgdGhlcmVcIik7XG5cdFx0XHRcdHJlbmRlcmJvYXJkKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHR2ZXJ0aWNhbE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcblx0XHRmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKGJvYXJkKSB7XG5cdFx0XHR3aGlsZSAoYm9hcmQuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRib2FyZC5yZW1vdmVDaGlsZChib2FyZC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVtb3ZlQWxsQ2hpbGROb2Rlcyhib2FyZCk7XG5cblx0XHRjb25zdCBjb250YWluZXJzID0gc2lkZUNvbnRhaW5lci5jaGlsZE5vZGVzO1xuXHRcdGNvbnN0IGNoZWNrRm9yQ29udGFpbmVycyA9ICgpID0+IHtcblx0XHRcdGZvciAobGV0IGNvbnRhaW5lciBvZiBjb250YWluZXJzKSB7XG5cdFx0XHRcdGlmIChjb250YWluZXIuaGFzQXR0cmlidXRlKFwic3RhdHVzXCIpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBuZXdTaGlwID0gc2hpcChzaGlwTGVuZ3RoLCAxKTtcblx0XHRpZiAoeElucHV0LnZhbHVlID09PSBcIlwiIHx8IHlJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuXHRcdFx0Y29uc29sZS5sb2coeElucHV0LnZhbHVlKTtcblx0XHRcdGFsZXJ0KFwiUGxlYXNlIGZpbGwgaW4gdGhlIG51bWJlclwiKTtcblx0XHRcdHJlbmRlcmJvYXJkKCk7XG5cdFx0fSBlbHNlIGlmIChjaGVja0ZvckNvbnRhaW5lcnMoKSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRhbGVydChcIlBsZWFzZSBwaWNrIGEgc2hpcFwiKTtcblx0XHRcdHJlbmRlcmJvYXJkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwbGF5ZXJHYW1lQm9hcmQuZXhpc3RlbnRTaGlwcyhuZXdTaGlwKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChwYXJzZUludCh4SW5wdXQudmFsdWUpLCBwYXJzZUludCh5SW5wdXQudmFsdWUpLCBuZXdTaGlwKTtcblx0XHRcdFx0cmVuZGVyYm9hcmQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsZXJ0KFwiU2hpcCBpcyBhbHJlYWR5IHRoZXJlXCIpO1xuXHRcdFx0XHRyZW5kZXJib2FyZCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbmV4cG9ydCB7IGxvYWRET00gfTtcbiIsImltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcblx0Ly8gQXJyYXlzIHRvIHN0b3JlIHRoZSBzaGlwcyBpblxuXHRjb25zdCByb3dzID0gMTA7XG5cdGNvbnN0IGNvbHVtbnMgPSAxMDtcblx0Y29uc3Qgc2hpcEJvYXJkID0gW107XG5cdC8vIDJEIEFycmF5IExvb3BzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG5cdFx0c2hpcEJvYXJkW2ldID0gW107XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcblx0XHRcdHNoaXBCb2FyZFtpXVtqXSA9IFwiXCI7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUGxhY2Ugc2hpcHMgaW4gMkQgYXJyYXlcblx0Y29uc3QgcGxhY2VTaGlwID0gKHJvdywgY29sdW1uLCBzaGlwKSA9PiB7XG5cdFx0Y29uc3Qgc2hpcERpcmVjdGlvbiA9IHNoaXAuc2hpcERpcmVjdGlvbigpO1xuXHRcdGlmICghY2hlY2tGb3JTaGlwKHJvdywgY29sdW1uKSkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQoc2hpcERpcmVjdGlvbiA9PT0gMSAmJiByb3cgLSBzaGlwLnNoaXBMZW5ndGggKyAxID49IDApIHx8XG5cdFx0XHRcdChzaGlwRGlyZWN0aW9uID09PSAwICYmIGNvbHVtbiArIHNoaXAuc2hpcExlbmd0aCA8PSAxMClcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoc2hpcERpcmVjdGlvbiA9PT0gMSkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHNoaXBCb2FyZFtyb3cgLSBpXS5zcGxpY2UoY29sdW1uLCAxLCBzaGlwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0c2hpcEJvYXJkW3Jvd10uc3BsaWNlKGNvbHVtbiArIGksIDEsIHNoaXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxlcnQoXCJJbnZhbGlkIHBsYWNlbWVudDsgZXhjZWVkcyBib2FyZCBib3VuZGFyaWVzLlwiKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50LiBFeGNlZWRzIGJvYXJkIGJvdW5kYXJpZXMuXCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhbGVydChcIkludmFsaWQgcGxhY2VtZW50OyBTaGlwIG92ZXJsYXBzLlwiKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gUmV0dXJuIHRydWUgaWYgdGhlIHNoaXAgaXMgdGhlcmUsIHJldHVybiBNaXNzIGlmIGl0J3MgYSBtaXNzLCBhbmQgcmV0dXJuIGZhbHNlIGlmIG5vdGhpbmdcblx0Y29uc3QgY2hlY2tGb3JTaGlwID0gKHJvdywgY29sdW1uKSA9PiB7XG5cdFx0Y29uc3QgZmluZFNoaXAgPSBzaGlwQm9hcmRbcm93XVtjb2x1bW5dO1xuXHRcdGlmIChmaW5kU2hpcCAhPT0gXCJcIiAmJiBmaW5kU2hpcCAhPT0gXCJNaXNzXCIpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSBpZiAoZmluZFNoaXAgPT09IFwiTWlzc1wiKSB7XG5cdFx0XHRyZXR1cm4gXCJNaXNzXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0Ly8gVGFrZXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcFxuXHQvLyBJZiBtaXNzZWQsIHRoZSBtaXNzZWQgc2hvdCBpcyBhbHNvIGxvZ2dlZFxuXHRjb25zdCByZWNlaXZlQXR0YWNrID0gKHJvdywgY29sdW1uKSA9PiB7XG5cdFx0Y29uc3QgYXR0YWNrU2hpcCA9IHNoaXBCb2FyZFtyb3ddW2NvbHVtbl07XG5cdFx0aWYgKGF0dGFja1NoaXAgPT09IFwiXCIpIHtcblx0XHRcdHJldHVybiBzaGlwQm9hcmRbcm93XS5zcGxpY2UoY29sdW1uLCAxLCBcIk1pc3NcIik7XG5cdFx0fSBlbHNlIGlmIChhdHRhY2tTaGlwICE9PSBcIlwiICYmIGF0dGFja1NoaXAgIT09IFwiTWlzc1wiICYmIGF0dGFja1NoaXAgIT09IFwiSGl0XCIpIHtcblx0XHRcdHNoaXBCb2FyZFtyb3ddLnNwbGljZShjb2x1bW4sIDEsIFwiSGl0XCIpO1xuXHRcdFx0cmV0dXJuIGF0dGFja1NoaXAuZ290SGl0KCk7XG5cdFx0fSBlbHNlIGlmIChhdHRhY2tTaGlwICE9PSBcIlwiICYmIGF0dGFja1NoaXAgIT09IFwiSGl0XCIgJiYgYXR0YWNrU2hpcCA9PT0gXCJNaXNzXCIpIHtcblx0XHRcdHJldHVybiBcIkFscmVhZHkgbWlzc2VkIGhlcmVcIjtcblx0XHR9IGVsc2UgaWYgKGF0dGFja1NoaXAgPT09IFwiSGl0XCIpIHtcblx0XHRcdHJldHVybiBcIkFscmVhZHkgaGl0IGhlcmVcIjtcblx0XHR9XG5cdH07XG5cdGxldCBzdG9yZWRTaGlwID0gW1wiRGVzdHJveWVyXCIsIFwiU3VibWFyaW5lXCIsIFwiQ3J1aXNlclwiLCBcIkJhdHRsZXNoaXBcIiwgXCJDYXJyaWVyXCJdO1xuXHRjb25zdCBleGlzdGVudFNoaXBzID0gKHNoaXApID0+IHtcblx0XHRjb25zdCBmaW5kU3BsaWNlID0gc3RvcmVkU2hpcC5maW5kSW5kZXgoKG5hbWUpID0+IG5hbWUgPT09IHNoaXAubmFtZSk7XG5cdFx0aWYgKGZpbmRTcGxpY2UgPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKGZpbmRTcGxpY2UgIT09IC0xKSB7XG5cdFx0XHRzdG9yZWRTaGlwLnNwbGljZShmaW5kU3BsaWNlLCAxKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0Ly8gV2hlbiBhIHNoaXAgc2lua3MgaW5jcmVhc2UgdGhlIG51bWJlciBvZiBTdW5rZW4gU2hpcHMgdGhyb3VnaCByZXBvcnRTdGF0dXNcblx0Ly8gc3Vua1NoaXBzIHN0b3JlcyB0aGF0IHZhcmlhYmxlXG5cdC8vIHJlcG9ydFN0YXR1cyAtPiBzdW5rU2hpcHMgLT4gc3Vua2VuU2hpcHNcblx0bGV0IHN1bmtlblNoaXBzID0gMDtcblx0Y29uc3Qgc3Vua1NoaXBzID0gKCkgPT4gc3Vua2VuU2hpcHM7XG5cdGNvbnN0IHJlcG9ydFN0YXR1cyA9IChzaGlwKSA9PiB7XG5cdFx0aWYgKHNoaXAuaXNTdW5rKCkgPT09IHRydWUpIHtcblx0XHRcdHJldHVybiBzdW5rZW5TaGlwcysrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHNoaXBBcnJheSA9ICgpID0+IHNoaXBCb2FyZDtcblxuXHRyZXR1cm4ge1xuXHRcdHN1bmtTaGlwcyxcblx0XHRjaGVja0ZvclNoaXAsXG5cdFx0cmVjZWl2ZUF0dGFjayxcblx0XHRyZXBvcnRTdGF0dXMsXG5cdFx0cGxhY2VTaGlwLFxuXHRcdHNoaXBBcnJheSxcblx0XHRleGlzdGVudFNoaXBzLFxuXHR9O1xufVxuXG5jb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcbmNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbmxldCBuZXdTaGlwID0gc2hpcCg0LCAwKTtcbnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoMSwgMiwgbmV3U2hpcCk7XG5leHBvcnQgeyBnYW1lQm9hcmQsIHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQgfTtcbiIsImZ1bmN0aW9uIHBsYXllcihwbGF5ZXIsIHBsYXllckdhbWVCb2FyZCwgZW5lbXlHYW1lQm9hcmQpIHtcblx0ZnVuY3Rpb24gcmFuZG9tTnVtKG1heCkge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuXHR9XG5cblx0Y29uc3QgYXR0YWNrID0gKHJvdywgY29sdW1uKSA9PiB7XG5cdFx0ZnVuY3Rpb24gYWlBdHRhY2soKSB7XG5cdFx0XHRwbGF5ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21OdW0oMTApLCByYW5kb21OdW0oMTApKTtcblx0XHR9XG5cdFx0aWYgKHBsYXllciA9PT0gXCJIdW1hblwiKSB7XG5cdFx0XHRlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcblx0XHRcdGFpQXR0YWNrKCk7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4geyBhdHRhY2sgfTtcbn1cblxuZXhwb3J0IHsgcGxheWVyIH07XG4iLCJleHBvcnQgeyBzaGlwIH07XG5cbmZ1bmN0aW9uIHNoaXAobGVuZ3RoLCBkaXJlY3Rpb24pIHtcblx0bGV0IHNoaXBMZW5ndGggPSBsZW5ndGg7XG5cblx0Y29uc3Qgc2hpcERpcmVjdGlvbiA9ICgpID0+IHtcblx0XHRpZiAoZGlyZWN0aW9uID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEFzc2lnbiBuYW1lIGJhc2VkIG9uIGxlbmd0aFxuXHRsZXQgbmFtZTtcblx0aWYgKGxlbmd0aCA9PT0gNSkge1xuXHRcdG5hbWUgPSBcIkNhcnJpZXJcIjtcblx0fSBlbHNlIGlmIChsZW5ndGggPT09IDQpIHtcblx0XHRuYW1lID0gXCJCYXR0bGVzaGlwXCI7XG5cdH0gZWxzZSBpZiAobGVuZ3RoID09PSAzKSB7XG5cdFx0bmFtZSA9IFwiQ3J1aXNlclwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMikge1xuXHRcdG5hbWUgPSBcIlN1Ym1hcmluZVwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSkge1xuXHRcdG5hbWUgPSBcIkRlc3Ryb3llclwiO1xuXHR9XG5cblx0Ly8gTnVtYmVyIG9mIGhpdHNcblx0bGV0IGhpdHMgPSAwO1xuXHRjb25zdCBudW1iZXJPZkhpdHMgPSAoKSA9PiBoaXRzO1xuXHRjb25zdCBnb3RIaXQgPSAoKSA9PiBoaXRzKys7XG5cblx0Ly9DaGVjayBpZiB0aGUgc2hpcCBzdW5rXG5cdGNvbnN0IGlzU3VuayA9ICgpID0+IHtcblx0XHRpZiAoXG5cdFx0XHQobGVuZ3RoID09PSA1ICYmIGhpdHMgPT09IDUpIHx8XG5cdFx0XHQobGVuZ3RoID09PSA0ICYmIGhpdHMgPT09IDQpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAzICYmIGhpdHMgPT09IDMpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAyICYmIGhpdHMgPT09IDIpIHx8XG5cdFx0XHQobGVuZ3RoID09PSAxICYmIGhpdHMgPT09IDEpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdHJldHVybiB7IG51bWJlck9mSGl0cywgZ290SGl0LCBpc1N1bmssIHNoaXBEaXJlY3Rpb24sIGhpdHMsIG5hbWUsIHNoaXBMZW5ndGggfTtcbn1cblxuY29uc3QgbmV3U2hpcCA9IHNoaXAoNCwgMSk7XG5uZXdTaGlwLmdvdEhpdCgpO1xubmV3U2hpcC5nb3RIaXQoKTtcbm5ld1NoaXAuZ290SGl0KCk7XG5uZXdTaGlwLmlzU3VuaygpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogM3B4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuXG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMTAwO1xufVxuXG4uYm9hcmQgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkN2VlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib2FyZCA+ICo6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M2Q3ZWU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc2lkZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDc1JTtcbn1cblxuLnNpZGUtY29udGFpbmVyID4gKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLnNpZGUtY29udGFpbmVyID4gKjpob3ZlciB7XG4gICAgd2lkdGg6IDEzM3B4O1xuICAgIGhlaWdodDogNDNweDtcbn1cbi5zaWRlLWNvbnRhaW5lciA+ICogPiAqIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IERhcmtSZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLm1pZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLm9wdGlvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMDBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm9wdGlvbiA+ICoge1xuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xufVxuXG4ub3B0aW9uID4gKjpob3ZlciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5bc3RhdHVzPVwiYWN0aXZlXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5udW1zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLTUwcHg7XG5cbn1cblxuLmFpLW51bXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAganVzdGlmeS1pdGVtczogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4XG5cbn1cblxuXG4uaHVtYW4tbnVtcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiA1MHB4O1xuXG59XG5cbltudW10eXBlPVwiY29tcHV0ZXItbnVtc1wiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiA1MHB4O1xufSBcblxuW2NsYXNzXj1cImNlbGxcIl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7O0lBRTlCLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixzQ0FBc0M7SUFDdEMsbUNBQW1DOztJQUVuQyxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQjs7QUFFSjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgd2lkdGg6IDEyMDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG5cXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMDtcXG59XFxuXFxuLmJvYXJkID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M2Q3ZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQgPiAqOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDdlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc2lkZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNzUlO1xcbn1cXG5cXG4uc2lkZS1jb250YWluZXIgPiAqIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLnNpZGUtY29udGFpbmVyID4gKjpob3ZlciB7XFxuICAgIHdpZHRoOiAxMzNweDtcXG4gICAgaGVpZ2h0OiA0M3B4O1xcbn1cXG4uc2lkZS1jb250YWluZXIgPiAqID4gKiB7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IERhcmtSZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLm1pZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm9wdGlvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm9wdGlvbiA+ICoge1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuXFxuLm9wdGlvbiA+ICo6aG92ZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbltzdGF0dXM9XFxcImFjdGl2ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ubnVtcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC01MHB4O1xcblxcbn1cXG5cXG4uYWktbnVtcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTUwcHhcXG5cXG59XFxuXFxuXFxuLmh1bWFuLW51bXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRvcDogNTBweDtcXG5cXG59XFxuXFxuW251bXR5cGU9XFxcImNvbXB1dGVyLW51bXNcXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdG9wOiA1MHB4O1xcbn0gXFxuXFxuW2NsYXNzXj1cXFwiY2VsbFxcXCJdIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgbG9hZERPTSB9IGZyb20gXCIuL0RPTVwiO1xuXG4vLyBUZXN0IGlmIGdhbWUgY3JlYXRlcyBwbGF5ZXJcbi8vIFRlc3QgaWYgZ2FtZSBjcmVhdGVzIGdhbWUgYm9hcmRcblxuZnVuY3Rpb24gZ2FtZSgpIHtcblx0Y29uc3QgZGVzdHJveWVyID0gc2hpcCgxLCAxKTtcblx0Y29uc3Qgc3VibWFyaW5lID0gc2hpcCgyLCAxKTtcblx0Y29uc3QgY3J1aXNlciA9IHNoaXAoMywgMCk7XG5cdGNvbnN0IGJhdHRsZVNoaXAgPSBzaGlwKDQsIDApO1xuXHRjb25zdCBjYXJyaWVyID0gc2hpcCg1LCAwKTtcblxuXHRjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblx0Y29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuXHRjb25zdCBodW1hblBsYXllciA9IHBsYXllcihcIkh1bWFuXCIsIHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQpO1xuXHRsb2FkRE9NKGh1bWFuUGxheWVyLCBwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkKTtcbn1cblxuY29uc3QgZ2FtZUxvb3AgPSBnYW1lKCk7XG5leHBvcnQgeyBnYW1lIH07XG4iXSwibmFtZXMiOlsiZ2FtZUJvYXJkIiwic2hpcCIsImxvYWRET00iLCJwbGF5ZXIiLCJwbGF5ZXJHYW1lQm9hcmQiLCJBSUdhbWVCb2FyZCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjZW50ZXJDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaHVtYW5Db250YWluZXIiLCJjb21wdXRlckNvbnRhaW5lciIsIm1pZGRsZUNvbnRhaW5lciIsInNpZGVDb250YWluZXIiLCJvcHRpb25Db250YWluZXIiLCJudW1iZXJHcmlkIiwiY29tcHV0ZXJOdW1iZXJHcmlkIiwiaSIsIm51bSIsImNvbXB1dGVyTnVtIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInJvd3MiLCJjb2x1bW5zIiwicGxheWVyQXJyYXkiLCJzaGlwQXJyYXkiLCJyZW5kZXJib2FyZCIsImoiLCJjZWxsIiwic2V0QXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiaHVtYW5OdW1zIiwiYWRkIiwiZ2V0QXR0cmlidXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJjb21wdXRlckFycmF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyb3ciLCJjaGFyQXQiLCJsZW5ndGgiLCJjb2x1bW4iLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJhdHRhY2siLCJib2FyZCIsInJlbW92ZUFsbENoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkZXN0cm95ZXJDb250YWluZXIiLCJzdWJtYXJpbmVDb250YWluZXIiLCJzdWJtYXJpbmVDZWxsIiwiY3J1aXNlckNvbnRhaW5lciIsImJhdHRsZVNoaXBDb250YWluZXIiLCJjYXJyaWVyQ29udGFpbmVyIiwidmVydGljYWxPcHRpb24iLCJob3Jpem9udGFsT3B0aW9uIiwieElucHV0IiwieUlucHV0Iiwic2hpcENlbGwiLCJzaGlwTGVuZ3RoIiwiY2hlY2tTaGlwIiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVycyIsImNoaWxkTm9kZXMiLCJjaGVja0ZvckNvbnRhaW5lcnMiLCJjb250YWluZXIiLCJuZXdTaGlwIiwidmFsdWUiLCJhbGVydCIsInVuZGVmaW5lZCIsImV4aXN0ZW50U2hpcHMiLCJwbGFjZVNoaXAiLCJzaGlwQm9hcmQiLCJzaGlwRGlyZWN0aW9uIiwiY2hlY2tGb3JTaGlwIiwic3BsaWNlIiwiZmluZFNoaXAiLCJyZWNlaXZlQXR0YWNrIiwiYXR0YWNrU2hpcCIsImdvdEhpdCIsInN0b3JlZFNoaXAiLCJmaW5kU3BsaWNlIiwiZmluZEluZGV4IiwibmFtZSIsInN1bmtlblNoaXBzIiwic3Vua1NoaXBzIiwicmVwb3J0U3RhdHVzIiwiaXNTdW5rIiwiY29tcHV0ZXJHYW1lQm9hcmQiLCJlbmVteUdhbWVCb2FyZCIsInJhbmRvbU51bSIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFpQXR0YWNrIiwiZGlyZWN0aW9uIiwiaGl0cyIsIm51bWJlck9mSGl0cyIsImdhbWUiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlU2hpcCIsImNhcnJpZXIiLCJodW1hblBsYXllciIsImdhbWVMb29wIl0sInNvdXJjZVJvb3QiOiIifQ==