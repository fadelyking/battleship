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
  const renderAIBoard = () => {
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
  };
  renderAIBoard();
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
  const randomShipLoop = num => {
    const aiShip = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.ship)(num, Math.floor(Math.random() * 1));
    AIGameBoard.placeRandomShips(parseInt(Math.floor(Math.random() * 10)), parseInt(parseInt(Math.floor(Math.random() * 10))), aiShip);
  };
  for (let i = 6; i <= 10; i++) {
    console.log("looped");
    const board = document.querySelectorAll(".board");
    function removeAllChildNodes(board) {
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
    }
    removeAllChildNodes(board[0]);
    removeAllChildNodes(board[1]);
    randomShipLoop(i);
    renderboard();
    renderAIBoard();
  }
  return {
    randomShipLoop
  };
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


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
  const placeShip = (row, column, ship, type) => {
    const shipDirection = ship.shipDirection();
    if (!checkForShip(row, column)) {
      if (shipDirection === 1 && row - ship.shipLength + 1 >= 0 || shipDirection === 0 && column + ship.shipLength <= 10) {
        if (shipDirection === 1 && type !== "Enemy") {
          for (let i = 0; i < ship.shipLength; i++) {
            shipBoard[row - i].splice(column, 1, ship);
          }
        } else if (shipDirection === 0 && type !== "Enemy") {
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
  let num = 0;
  const placeRandomShips = (row, column, ship) => {
    console.log(row, column + 1, ship);
    const shipDirection = ship.shipDirection();
    if (!checkForShip(row, column)) {
      if (shipDirection === 1 && row - ship.shipLength + 1 >= 0 || shipDirection === 0 && column + ship.shipLength <= 10) {
        if (shipDirection === 1) {
          for (let i = 0; i < ship.shipLength - 5; i++) {
            shipBoard[row - i].splice(column, 1, ship);
          }
        } else {
          for (let i = 0; i < ship.shipLength - 5; i++) {
            shipBoard[row].splice(column + i, 1, ship);
          }
        }
      } else {
        for (let i = 0; i < ship.shipLength - 5; i++) {
          shipBoard[row].splice(column + i, 1, ship);
        }
      }
    } else {
      for (let i = 0; i < ship.shipLength - 5; i++) {
        shipBoard[row - i].splice(column, 1, ship);
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
  let storedShip = ["Destroyer", "Submarine", "Cruiser", "Battleship", "Carrier", "Enemy-Destroyer", "Enemy-Submarine", "Enemy-Cruiser", "Enemy-Battleship", "Enemy-Carrier"];
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
    existentShips,
    placeRandomShips
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
  // If ship direction is 0, the ship is horizontal
  // If ship direction is 1, the ship is vertical
  const shipDirection = () => {
    if (direction === 1) {
      return 1;
    } else {
      return 0;
    }
  };

  // Assign name based on length
  let name;
  let type;
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
  } else if (length === 10) {
    name = "Enemy-Carrier";
    type = "Enemy";
  } else if (length === 9) {
    name = "Enemy-Battleship";
    type = "Enemy";
  } else if (length === 8) {
    name = "Enemy-Cruiser";
    type = "Enemy";
  } else if (length === 7) {
    name = "Enemy-Destroyer";
    type = "Enemy";
  } else if (length === 6) {
    name = "Enemy-Submarine";
    type = "Enemy";
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

.ai-board {
    display: grid;
    gap: 3px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);

    width: 400px;
    height: 100;
}

.ai-board > * {
    background-color: #83d7ee;
    border-radius: 4px;
    cursor: pointer;
}

.ai-board > *:hover {
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

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sCAAsC;IACtC,mCAAmC;;IAEnC,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sCAAsC;IACtC,mCAAmC;;IAEnC,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;;IAEI,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,uCAAuC;IACvC,kCAAkC;IAClC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB;;AAEJ;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,SAAS;;AAEb;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.center-container {\n    display: flex;\n    justify-content: space-between;\n\n    width: 1200px;\n    height: 400px;\n}\n\n.board {\n    display: grid;\n    gap: 3px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n\n    width: 400px;\n    height: 100;\n}\n\n.board > * {\n    background-color: #83d7ee;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.board > *:hover {\n    background-color: #83d7ee;\n    border-radius: 8px;\n}\n\n.ai-board {\n    display: grid;\n    gap: 3px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n\n    width: 400px;\n    height: 100;\n}\n\n.ai-board > * {\n    background-color: #83d7ee;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.ai-board > *:hover {\n    background-color: #83d7ee;\n    border-radius: 8px;\n}\n\n.side-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column-reverse;\n    gap: 10px;\n    border: 2px solid black;\n    width: 200px;\n    height: 75%;\n}\n\n.side-container > * {\n    display: flex;\n    gap: 3px;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid black;\n    width: 130px;\n    height: 40px;\n}\n.side-container > *:hover {\n    width: 133px;\n    height: 43px;\n}\n.side-container > * > * {\n\n    background-color: DarkRed;\n    border-radius: 4px;\n    width: 20px;\n    height: 20px;\n}\n\n.mid {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.option {\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(2, 100px);\n    grid-template-rows: repeat(2, 1fr);\n    width: 200px;\n    height: 100px;\n}\n\n.option > * {\n    font-size: 1.9rem;\n}\n\n.option > *:hover {\n    font-size: 2rem;\n}\n\n[status=\"active\"] {\n    background-color: yellow;\n}\n\n.nums {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    justify-items: end;\n    align-items: center;\n    font-size: 1.6rem;\n    margin-right: -50px;\n\n}\n\n.ai-nums {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    justify-items: end;\n    align-items: center;\n    font-size: 1.6rem;\n    margin-left: -50px\n\n}\n\n\n.human-nums {\n    position: absolute;\n    display: flex;\n    top: 50px;\n\n}\n\n[numtype=\"computer-nums\"] {\n    position: absolute;\n    display: flex;\n    top: 50px;\n} \n\n[class^=\"cell\"] {\n    display: flex;\n    justify-content: center;\n    font-size: 1.6rem;\n}\n\n"],"sourceRoot":""}]);
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
  const playerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
  const computerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
  const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)("Human", playerGameBoard, computerGameBoard);
  (0,_DOM__WEBPACK_IMPORTED_MODULE_4__.loadDOM)(humanPlayer, playerGameBoard, computerGameBoard);
}
const gameLoop = game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNrQjtBQUNOO0FBQ0o7QUFDRTs7QUFFaEM7QUFDQTs7QUFFQSxTQUFTOEMsSUFBSUEsQ0FBQSxFQUFHO0VBQ2YsTUFBTTdHLGVBQWUsR0FBR0oscURBQVMsQ0FBQyxDQUFDO0VBQ25DLE1BQU15RyxpQkFBaUIsR0FBR3pHLHFEQUFTLENBQUMsQ0FBQztFQUVyQyxNQUFNa0gsV0FBVyxHQUFHL0csK0NBQU0sQ0FBQyxPQUFPLEVBQUVDLGVBQWUsRUFBRXFHLGlCQUFpQixDQUFDO0VBQ3ZFdkcsNkNBQU8sQ0FBQ2dILFdBQVcsRUFBRTlHLGVBQWUsRUFBRXFHLGlCQUFpQixDQUFDO0FBQ3pEO0FBRUEsTUFBTVUsUUFBUSxHQUFHRixJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGxvYWRET00ocGxheWVyLCBwbGF5ZXJHYW1lQm9hcmQsIEFJR2FtZUJvYXJkKSB7XG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblx0Y29uc3QgY2VudGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2VudGVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjZW50ZXItY29udGFpbmVyXCIpO1xuXHRjb25zdCBodW1hbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGh1bWFuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJib2FyZFwiKTtcblx0Y29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb21wdXRlckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYm9hcmRcIik7XG5cdGNvbnN0IG1pZGRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1pZGRsZUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwibWlkXCIpO1xuXHRjb25zdCBzaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2lkZUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZS1jb250YWluZXJcIik7XG5cdGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwib3B0aW9uXCIpO1xuXHRjb25zdCBudW1iZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bnVtYmVyR3JpZC5jbGFzc0xpc3QudG9nZ2xlKFwibnVtc1wiKTtcblx0Y29uc3QgY29tcHV0ZXJOdW1iZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29tcHV0ZXJOdW1iZXJHcmlkLmNsYXNzTGlzdC50b2dnbGUoXCJhaS1udW1zXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRjb25zdCBudW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IGNvbXB1dGVyTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRudW0udGV4dENvbnRlbnQgPSBgJHtpfWA7XG5cdFx0Y29tcHV0ZXJOdW0udGV4dENvbnRlbnQgPSBgJHtpfWA7XG5cdFx0bnVtYmVyR3JpZC5hcHBlbmRDaGlsZChudW0pO1xuXHRcdGNvbXB1dGVyTnVtYmVyR3JpZC5hcHBlbmRDaGlsZChjb21wdXRlck51bSk7XG5cdH1cblxuXHRib2R5LmFwcGVuZENoaWxkKGNlbnRlckNvbnRhaW5lcik7XG5cdGNlbnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXJHcmlkKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWFuQ29udGFpbmVyKTtcblx0Y2VudGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pZGRsZUNvbnRhaW5lcik7XG5cdG1pZGRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQ29udGFpbmVyKTtcblx0bWlkZGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbkNvbnRhaW5lcik7XG5cdGNlbnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlckNvbnRhaW5lcik7XG5cdGNlbnRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlck51bWJlckdyaWQpO1xuXG5cdC8vIEFycmF5cyB0byBzdG9yZSB0aGUgc2hpcHMgaW5cblx0Y29uc3Qgcm93cyA9IDEwO1xuXHRjb25zdCBjb2x1bW5zID0gMTA7XG5cblx0Y29uc3QgcGxheWVyQXJyYXkgPSBwbGF5ZXJHYW1lQm9hcmQuc2hpcEFycmF5KCk7XG5cdC8vIDJEIEFycmF5IExvb3BzXG5cdGNvbnN0IHJlbmRlcmJvYXJkID0gKCkgPT4ge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuXHRcdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QudG9nZ2xlKGBjZWxsLSR7aX0ke2p9YCk7XG5cdFx0XHRcdGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBgJHtwbGF5ZXJBcnJheVtpXVtqXX1gKTtcblx0XHRcdFx0aWYgKGNlbGwuY2xhc3NOYW1lID09PSBgY2VsbC0wJHtqfWApIHtcblx0XHRcdFx0XHRjb25zdCBodW1hbk51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRcdGh1bWFuTnVtcy5jbGFzc0xpc3QuYWRkKFwiaHVtYW4tbnVtc1wiKTtcblx0XHRcdFx0XHRodW1hbk51bXMudGV4dENvbnRlbnQgPSBgJHtqfWA7XG5cdFx0XHRcdFx0Y2VsbC5hcHBlbmRDaGlsZChodW1hbk51bXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImRhdGFcIikgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdFx0XHRjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiRGFya1JlZFwiO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSA9PT0gXCJNaXNzXCIpIHtcblx0XHRcdFx0XHRjZWxsLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuXHRcdFx0XHRcdGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJDcmltc29uXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aHVtYW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZW5kZXJib2FyZCgpO1xuXG5cdGNvbnN0IHJlbmRlckFJQm9hcmQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY29tcHV0ZXJBcnJheSA9IEFJR2FtZUJvYXJkLnNoaXBBcnJheSgpO1xuXHRcdC8vIDJEIEFycmF5IExvb3BzXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRjZWxsLmNsYXNzTGlzdC50b2dnbGUoYGNlbGwtJHtpfSR7an1gKTtcblx0XHRcdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIGAke2NvbXB1dGVyQXJyYXlbaV1bal19YCk7XG5cdFx0XHRcdGlmIChjZWxsLmNsYXNzTmFtZSA9PT0gYGNlbGwtMCR7an1gKSB7XG5cdFx0XHRcdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY29tcHV0ZXJcIik7XG5cdFx0XHRcdFx0Y29uc3QgaHVtYW5OdW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRodW1hbk51bXMuc2V0QXR0cmlidXRlKFwibnVtdHlwZVwiLCBcImNvbXB1dGVyLW51bXNcIik7XG5cdFx0XHRcdFx0aHVtYW5OdW1zLnRleHRDb250ZW50ID0gYCR7OSAtIGp9YDtcblx0XHRcdFx0XHRjZWxsLmFwcGVuZENoaWxkKGh1bWFuTnVtcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG5cdFx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIkRhcmtCbHVlXCI7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpID09PSBcIk1pc3NcIikge1xuXHRcdFx0XHRcdGNlbGwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG5cdFx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIkNyaW1zb25cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb21wdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcblxuXHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHJvdyA9IGNlbGwuY2xhc3NOYW1lLmNoYXJBdChjZWxsLmNsYXNzTmFtZS5sZW5ndGggLSAyKTtcblx0XHRcdFx0XHRjb25zdCBjb2x1bW4gPSBjZWxsLmNsYXNzTmFtZS5jaGFyQXQoY2VsbC5jbGFzc05hbWUubGVuZ3RoIC0gMSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocGFyc2VJbnQocm93KSwgcGFyc2VJbnQoY29sdW1uKSk7XG5cdFx0XHRcdFx0cGxheWVyLmF0dGFjayhwYXJzZUludChyb3cpLCBwYXJzZUludChjb2x1bW4pKTtcblxuXHRcdFx0XHRcdGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcblx0XHRcdFx0XHRmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKGJvYXJkKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAoYm9hcmQuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRcdFx0XHRib2FyZC5yZW1vdmVDaGlsZChib2FyZC5maXJzdENoaWxkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVtb3ZlQWxsQ2hpbGROb2Rlcyhib2FyZCk7XG5cdFx0XHRcdFx0cmVuZGVyYm9hcmQoKTtcblxuXHRcdFx0XHRcdGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImRhdGFcIikgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdFx0XHRcdGNlbGwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG5cdFx0XHRcdFx0XHRjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiY3JpbXNvblwiO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG5cdFx0XHRcdFx0XHRjZWxsLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuXHRcdFx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJlbmRlckFJQm9hcmQoKTtcblxuXHRjb25zdCBkZXN0cm95ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkZXN0cm95ZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImRlc3Ryb3llci1jb250YWluZXJcIik7XG5cdGNvbnN0IHN1Ym1hcmluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHN1Ym1hcmluZUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic3VibWFyaW5lLWNvbnRhaW5lclwiKTtcblx0Y29uc3Qgc3VibWFyaW5lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHN1Ym1hcmluZUNlbGwuY2xhc3NMaXN0LnRvZ2dsZShcInN1Ym1hcmluZS1vcHRpb25cIik7XG5cdGNvbnN0IGNydWlzZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjcnVpc2VyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjcnVpc2VyLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgYmF0dGxlU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGJhdHRsZVNoaXBDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJhdHRsZXNoaXAtY29udGFpbmVyXCIpO1xuXHRjb25zdCBjYXJyaWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2FycmllckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY2Fycmllci1jb250YWluZXJcIik7XG5cdGNvbnN0IHZlcnRpY2FsT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0dmVydGljYWxPcHRpb24udGV4dENvbnRlbnQgPSBcIuKHhVwiO1xuXHR2ZXJ0aWNhbE9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmVydGljYWwtYnRuXCIpO1xuXHRjb25zdCBob3Jpem9udGFsT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0aG9yaXpvbnRhbE9wdGlvbi50ZXh0Q29udGVudCA9IFwi4oeGXCI7XG5cdGhvcml6b250YWxPcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcImhvcml6b250YWwtYnRuXCIpO1xuXG5cdGNvbnN0IHhJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0eElucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJob3Jpem9udGFsLWlucHV0XCIpO1xuXHR4SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcblx0Y29uc3QgeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHR5SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsLWlucHV0XCIpO1xuXHR5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcblxuXHRjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRlc3Ryb3llckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcblx0XHRjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0c3VibWFyaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcblx0fVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0Y29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNydWlzZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xuXHR9XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0YmF0dGxlU2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XG5cdH1cblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuXHRcdGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjYXJyaWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcblx0fVxuXG5cdHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzdHJveWVyQ29udGFpbmVyKTtcblx0c2lkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtYXJpbmVDb250YWluZXIpO1xuXHRzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNydWlzZXJDb250YWluZXIpO1xuXHRzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhdHRsZVNoaXBDb250YWluZXIpO1xuXHRzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcnJpZXJDb250YWluZXIpO1xuXHRvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoeElucHV0KTtcblx0b3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHlJbnB1dCk7XG5cdG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChob3Jpem9udGFsT3B0aW9uKTtcblx0b3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHZlcnRpY2FsT3B0aW9uKTtcblxuXHRsZXQgc2hpcExlbmd0aDtcblx0Y29uc3QgY2hlY2tTaGlwID0gKCkgPT4ge1xuXHRcdGlmIChkZXN0cm95ZXJDb250YWluZXIuaGFzQXR0cmlidXRlKFwic3RhdHVzXCIpKSB7XG5cdFx0XHRyZXR1cm4gKHNoaXBMZW5ndGggPSAxKTtcblx0XHR9IGVsc2UgaWYgKHN1Ym1hcmluZUNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoXCJzdGF0dXNcIikpIHtcblx0XHRcdHJldHVybiAoc2hpcExlbmd0aCA9IDIpO1xuXHRcdH0gZWxzZSBpZiAoY3J1aXNlckNvbnRhaW5lci5oYXNBdHRyaWJ1dGUoXCJzdGF0dXNcIikpIHtcblx0XHRcdHJldHVybiAoc2hpcExlbmd0aCA9IDMpO1xuXHRcdH0gZWxzZSBpZiAoYmF0dGxlU2hpcENvbnRhaW5lci5oYXNBdHRyaWJ1dGUoXCJzdGF0dXNcIikpIHtcblx0XHRcdHJldHVybiAoc2hpcExlbmd0aCA9IDQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKHNoaXBMZW5ndGggPSA1KTtcblx0XHR9XG5cdH07XG5cblx0ZGVzdHJveWVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGJhdHRsZVNoaXBDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGNydWlzZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdHN1Ym1hcmluZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0Y2FycmllckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0ZGVzdHJveWVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0YXR1c1wiLCBcImFjdGl2ZVwiKTtcblx0XHRjaGVja1NoaXAoKTtcblx0fSk7XG5cdHN1Ym1hcmluZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRiYXR0bGVTaGlwQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRjcnVpc2VyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRjYXJyaWVyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRkZXN0cm95ZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdHN1Ym1hcmluZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdGF0dXNcIiwgXCJhY3RpdmVcIik7XG5cdFx0Y2hlY2tTaGlwKCk7XG5cdH0pO1xuXHRjcnVpc2VyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGJhdHRsZVNoaXBDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGNhcnJpZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdHN1Ym1hcmluZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0ZGVzdHJveWVyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRjcnVpc2VyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0YXR1c1wiLCBcImFjdGl2ZVwiKTtcblx0XHRjaGVja1NoaXAoKTtcblx0fSk7XG5cdGJhdHRsZVNoaXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y2FycmllckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0Y3J1aXNlckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0c3VibWFyaW5lQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRkZXN0cm95ZXJDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGJhdHRsZVNoaXBDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3RhdHVzXCIsIFwiYWN0aXZlXCIpO1xuXHRcdGNoZWNrU2hpcCgpO1xuXHR9KTtcblx0Y2FycmllckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRiYXR0bGVTaGlwQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRjcnVpc2VyQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0YXR1c1wiKTtcblx0XHRzdWJtYXJpbmVDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwic3RhdHVzXCIpO1xuXHRcdGRlc3Ryb3llckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0dXNcIik7XG5cdFx0Y2FycmllckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdGF0dXNcIiwgXCJhY3RpdmVcIik7XG5cdFx0Y2hlY2tTaGlwKCk7XG5cdH0pO1xuXG5cdGhvcml6b250YWxPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIik7XG5cdFx0ZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2Rlcyhib2FyZCkge1xuXHRcdFx0d2hpbGUgKGJvYXJkLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0Ym9hcmQucmVtb3ZlQ2hpbGQoYm9hcmQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbW92ZUFsbENoaWxkTm9kZXMoYm9hcmQpO1xuXG5cdFx0Y29uc3QgY29udGFpbmVycyA9IHNpZGVDb250YWluZXIuY2hpbGROb2Rlcztcblx0XHRjb25zdCBjaGVja0ZvckNvbnRhaW5lcnMgPSAoKSA9PiB7XG5cdFx0XHRmb3IgKGxldCBjb250YWluZXIgb2YgY29udGFpbmVycykge1xuXHRcdFx0XHRpZiAoY29udGFpbmVyLmhhc0F0dHJpYnV0ZShcInN0YXR1c1wiKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zb2xlLmxvZyhjaGVja0ZvckNvbnRhaW5lcnMoKSk7XG5cblx0XHRjb25zdCBuZXdTaGlwID0gc2hpcChzaGlwTGVuZ3RoLCAwKTtcblx0XHRpZiAoeElucHV0LnZhbHVlID09PSBcIlwiIHx8IHlJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuXHRcdFx0Y29uc29sZS5sb2coeElucHV0LnZhbHVlKTtcblx0XHRcdGFsZXJ0KFwiUGxlYXNlIGZpbGwgaW4gdGhlIG51bWJlclwiKTtcblx0XHRcdHJlbmRlcmJvYXJkKCk7XG5cdFx0fSBlbHNlIGlmIChjaGVja0ZvckNvbnRhaW5lcnMoKSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRhbGVydChcIlBsZWFzZSBwaWNrIGEgc2hpcFwiKTtcblx0XHRcdHJlbmRlcmJvYXJkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwbGF5ZXJHYW1lQm9hcmQuZXhpc3RlbnRTaGlwcyhuZXdTaGlwKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChwYXJzZUludCh4SW5wdXQudmFsdWUpLCBwYXJzZUludCh5SW5wdXQudmFsdWUpLCBuZXdTaGlwKTtcblx0XHRcdFx0cmVuZGVyYm9hcmQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsZXJ0KFwiU2hpcCBpcyBhbHJlYWR5IHRoZXJlXCIpO1xuXHRcdFx0XHRyZW5kZXJib2FyZCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0dmVydGljYWxPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIik7XG5cdFx0ZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2Rlcyhib2FyZCkge1xuXHRcdFx0d2hpbGUgKGJvYXJkLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0Ym9hcmQucmVtb3ZlQ2hpbGQoYm9hcmQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbW92ZUFsbENoaWxkTm9kZXMoYm9hcmQpO1xuXG5cdFx0Y29uc3QgY29udGFpbmVycyA9IHNpZGVDb250YWluZXIuY2hpbGROb2Rlcztcblx0XHRjb25zdCBjaGVja0ZvckNvbnRhaW5lcnMgPSAoKSA9PiB7XG5cdFx0XHRmb3IgKGxldCBjb250YWluZXIgb2YgY29udGFpbmVycykge1xuXHRcdFx0XHRpZiAoY29udGFpbmVyLmhhc0F0dHJpYnV0ZShcInN0YXR1c1wiKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgbmV3U2hpcCA9IHNoaXAoc2hpcExlbmd0aCwgMSk7XG5cdFx0aWYgKHhJbnB1dC52YWx1ZSA9PT0gXCJcIiB8fCB5SW5wdXQudmFsdWUgPT09IFwiXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKHhJbnB1dC52YWx1ZSk7XG5cdFx0XHRhbGVydChcIlBsZWFzZSBmaWxsIGluIHRoZSBudW1iZXJcIik7XG5cdFx0XHRyZW5kZXJib2FyZCgpO1xuXHRcdH0gZWxzZSBpZiAoY2hlY2tGb3JDb250YWluZXJzKCkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0YWxlcnQoXCJQbGVhc2UgcGljayBhIHNoaXBcIik7XG5cdFx0XHRyZW5kZXJib2FyZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocGxheWVyR2FtZUJvYXJkLmV4aXN0ZW50U2hpcHMobmV3U2hpcCkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAocGFyc2VJbnQoeElucHV0LnZhbHVlKSwgcGFyc2VJbnQoeUlucHV0LnZhbHVlKSwgbmV3U2hpcCk7XG5cdFx0XHRcdHJlbmRlcmJvYXJkKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGVydChcIlNoaXAgaXMgYWxyZWFkeSB0aGVyZVwiKTtcblx0XHRcdFx0cmVuZGVyYm9hcmQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGNvbnN0IHJhbmRvbVNoaXBMb29wID0gKG51bSkgPT4ge1xuXHRcdGNvbnN0IGFpU2hpcCA9IHNoaXAobnVtLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxKSk7XG5cdFx0QUlHYW1lQm9hcmQucGxhY2VSYW5kb21TaGlwcyhcblx0XHRcdHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSksXG5cdFx0XHRwYXJzZUludChwYXJzZUludChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpKSxcblx0XHRcdGFpU2hpcFxuXHRcdCk7XG5cdH07XG5cblx0Zm9yIChsZXQgaSA9IDY7IGkgPD0gMTA7IGkrKykge1xuXHRcdGNvbnNvbGUubG9nKFwibG9vcGVkXCIpO1xuXHRcdGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKTtcblx0XHRmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKGJvYXJkKSB7XG5cdFx0XHR3aGlsZSAoYm9hcmQuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRib2FyZC5yZW1vdmVDaGlsZChib2FyZC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVtb3ZlQWxsQ2hpbGROb2Rlcyhib2FyZFswXSk7XG5cdFx0cmVtb3ZlQWxsQ2hpbGROb2Rlcyhib2FyZFsxXSk7XG5cdFx0cmFuZG9tU2hpcExvb3AoaSk7XG5cdFx0cmVuZGVyYm9hcmQoKTtcblx0XHRyZW5kZXJBSUJvYXJkKCk7XG5cdH1cblxuXHRyZXR1cm4geyByYW5kb21TaGlwTG9vcCB9O1xufVxuXG5leHBvcnQgeyBsb2FkRE9NIH07XG4iLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgbG9hZERPTSwgcmFuZG9tU2hpcExvb3AgfSBmcm9tIFwiLi9ET01cIjtcbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcblx0Ly8gQXJyYXlzIHRvIHN0b3JlIHRoZSBzaGlwcyBpblxuXHRjb25zdCByb3dzID0gMTA7XG5cdGNvbnN0IGNvbHVtbnMgPSAxMDtcblx0Y29uc3Qgc2hpcEJvYXJkID0gW107XG5cdC8vIDJEIEFycmF5IExvb3BzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG5cdFx0c2hpcEJvYXJkW2ldID0gW107XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcblx0XHRcdHNoaXBCb2FyZFtpXVtqXSA9IFwiXCI7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUGxhY2Ugc2hpcHMgaW4gMkQgYXJyYXlcblx0Y29uc3QgcGxhY2VTaGlwID0gKHJvdywgY29sdW1uLCBzaGlwLCB0eXBlKSA9PiB7XG5cdFx0Y29uc3Qgc2hpcERpcmVjdGlvbiA9IHNoaXAuc2hpcERpcmVjdGlvbigpO1xuXHRcdGlmICghY2hlY2tGb3JTaGlwKHJvdywgY29sdW1uKSkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQoc2hpcERpcmVjdGlvbiA9PT0gMSAmJiByb3cgLSBzaGlwLnNoaXBMZW5ndGggKyAxID49IDApIHx8XG5cdFx0XHRcdChzaGlwRGlyZWN0aW9uID09PSAwICYmIGNvbHVtbiArIHNoaXAuc2hpcExlbmd0aCA8PSAxMClcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoc2hpcERpcmVjdGlvbiA9PT0gMSAmJiB0eXBlICE9PSBcIkVuZW15XCIpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRzaGlwQm9hcmRbcm93IC0gaV0uc3BsaWNlKGNvbHVtbiwgMSwgc2hpcCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09IDAgJiYgdHlwZSAhPT0gXCJFbmVteVwiKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0c2hpcEJvYXJkW3Jvd10uc3BsaWNlKGNvbHVtbiArIGksIDEsIHNoaXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxlcnQoXCJJbnZhbGlkIHBsYWNlbWVudDsgZXhjZWVkcyBib2FyZCBib3VuZGFyaWVzLlwiKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50LiBFeGNlZWRzIGJvYXJkIGJvdW5kYXJpZXMuXCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhbGVydChcIkludmFsaWQgcGxhY2VtZW50OyBTaGlwIG92ZXJsYXBzLlwiKTtcblx0XHR9XG5cdH07XG5cdGxldCBudW0gPSAwO1xuXHRjb25zdCBwbGFjZVJhbmRvbVNoaXBzID0gKHJvdywgY29sdW1uLCBzaGlwKSA9PiB7XG5cdFx0Y29uc29sZS5sb2cocm93LCBjb2x1bW4gKyAxLCBzaGlwKTtcblx0XHRjb25zdCBzaGlwRGlyZWN0aW9uID0gc2hpcC5zaGlwRGlyZWN0aW9uKCk7XG5cdFx0aWYgKCFjaGVja0ZvclNoaXAocm93LCBjb2x1bW4pKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdChzaGlwRGlyZWN0aW9uID09PSAxICYmIHJvdyAtIHNoaXAuc2hpcExlbmd0aCArIDEgPj0gMCkgfHxcblx0XHRcdFx0KHNoaXBEaXJlY3Rpb24gPT09IDAgJiYgY29sdW1uICsgc2hpcC5zaGlwTGVuZ3RoIDw9IDEwKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChzaGlwRGlyZWN0aW9uID09PSAxKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGggLSA1OyBpKyspIHtcblx0XHRcdFx0XHRcdHNoaXBCb2FyZFtyb3cgLSBpXS5zcGxpY2UoY29sdW1uLCAxLCBzaGlwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGggLSA1OyBpKyspIHtcblx0XHRcdFx0XHRcdHNoaXBCb2FyZFtyb3ddLnNwbGljZShjb2x1bW4gKyBpLCAxLCBzaGlwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoIC0gNTsgaSsrKSB7XG5cdFx0XHRcdFx0c2hpcEJvYXJkW3Jvd10uc3BsaWNlKGNvbHVtbiArIGksIDEsIHNoaXApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoIC0gNTsgaSsrKSB7XG5cdFx0XHRcdHNoaXBCb2FyZFtyb3cgLSBpXS5zcGxpY2UoY29sdW1uLCAxLCBzaGlwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdC8vIFJldHVybiB0cnVlIGlmIHRoZSBzaGlwIGlzIHRoZXJlLCByZXR1cm4gTWlzcyBpZiBpdCdzIGEgbWlzcywgYW5kIHJldHVybiBmYWxzZSBpZiBub3RoaW5nXG5cdGNvbnN0IGNoZWNrRm9yU2hpcCA9IChyb3csIGNvbHVtbikgPT4ge1xuXHRcdGNvbnN0IGZpbmRTaGlwID0gc2hpcEJvYXJkW3Jvd11bY29sdW1uXTtcblx0XHRpZiAoZmluZFNoaXAgIT09IFwiXCIgJiYgZmluZFNoaXAgIT09IFwiTWlzc1wiKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKGZpbmRTaGlwID09PSBcIk1pc3NcIikge1xuXHRcdFx0cmV0dXJuIFwiTWlzc1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXBcblx0Ly8gSWYgbWlzc2VkLCB0aGUgbWlzc2VkIHNob3QgaXMgYWxzbyBsb2dnZWRcblx0Y29uc3QgcmVjZWl2ZUF0dGFjayA9IChyb3csIGNvbHVtbikgPT4ge1xuXHRcdGNvbnN0IGF0dGFja1NoaXAgPSBzaGlwQm9hcmRbcm93XVtjb2x1bW5dO1xuXHRcdGlmIChhdHRhY2tTaGlwID09PSBcIlwiKSB7XG5cdFx0XHRyZXR1cm4gc2hpcEJvYXJkW3Jvd10uc3BsaWNlKGNvbHVtbiwgMSwgXCJNaXNzXCIpO1xuXHRcdH0gZWxzZSBpZiAoYXR0YWNrU2hpcCAhPT0gXCJcIiAmJiBhdHRhY2tTaGlwICE9PSBcIk1pc3NcIiAmJiBhdHRhY2tTaGlwICE9PSBcIkhpdFwiKSB7XG5cdFx0XHRzaGlwQm9hcmRbcm93XS5zcGxpY2UoY29sdW1uLCAxLCBcIkhpdFwiKTtcblx0XHRcdHJldHVybiBhdHRhY2tTaGlwLmdvdEhpdCgpO1xuXHRcdH0gZWxzZSBpZiAoYXR0YWNrU2hpcCAhPT0gXCJcIiAmJiBhdHRhY2tTaGlwICE9PSBcIkhpdFwiICYmIGF0dGFja1NoaXAgPT09IFwiTWlzc1wiKSB7XG5cdFx0XHRyZXR1cm4gXCJBbHJlYWR5IG1pc3NlZCBoZXJlXCI7XG5cdFx0fSBlbHNlIGlmIChhdHRhY2tTaGlwID09PSBcIkhpdFwiKSB7XG5cdFx0XHRyZXR1cm4gXCJBbHJlYWR5IGhpdCBoZXJlXCI7XG5cdFx0fVxuXHR9O1xuXHRsZXQgc3RvcmVkU2hpcCA9IFtcblx0XHRcIkRlc3Ryb3llclwiLFxuXHRcdFwiU3VibWFyaW5lXCIsXG5cdFx0XCJDcnVpc2VyXCIsXG5cdFx0XCJCYXR0bGVzaGlwXCIsXG5cdFx0XCJDYXJyaWVyXCIsXG5cdFx0XCJFbmVteS1EZXN0cm95ZXJcIixcblx0XHRcIkVuZW15LVN1Ym1hcmluZVwiLFxuXHRcdFwiRW5lbXktQ3J1aXNlclwiLFxuXHRcdFwiRW5lbXktQmF0dGxlc2hpcFwiLFxuXHRcdFwiRW5lbXktQ2FycmllclwiLFxuXHRdO1xuXHRjb25zdCBleGlzdGVudFNoaXBzID0gKHNoaXApID0+IHtcblx0XHRjb25zdCBmaW5kU3BsaWNlID0gc3RvcmVkU2hpcC5maW5kSW5kZXgoKG5hbWUpID0+IG5hbWUgPT09IHNoaXAubmFtZSk7XG5cdFx0aWYgKGZpbmRTcGxpY2UgPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKGZpbmRTcGxpY2UgIT09IC0xKSB7XG5cdFx0XHRzdG9yZWRTaGlwLnNwbGljZShmaW5kU3BsaWNlLCAxKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0Ly8gV2hlbiBhIHNoaXAgc2lua3MgaW5jcmVhc2UgdGhlIG51bWJlciBvZiBTdW5rZW4gU2hpcHMgdGhyb3VnaCByZXBvcnRTdGF0dXNcblx0Ly8gc3Vua1NoaXBzIHN0b3JlcyB0aGF0IHZhcmlhYmxlXG5cdC8vIHJlcG9ydFN0YXR1cyAtPiBzdW5rU2hpcHMgLT4gc3Vua2VuU2hpcHNcblx0bGV0IHN1bmtlblNoaXBzID0gMDtcblx0Y29uc3Qgc3Vua1NoaXBzID0gKCkgPT4gc3Vua2VuU2hpcHM7XG5cdGNvbnN0IHJlcG9ydFN0YXR1cyA9IChzaGlwKSA9PiB7XG5cdFx0aWYgKHNoaXAuaXNTdW5rKCkgPT09IHRydWUpIHtcblx0XHRcdHJldHVybiBzdW5rZW5TaGlwcysrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHNoaXBBcnJheSA9ICgpID0+IHNoaXBCb2FyZDtcblxuXHRyZXR1cm4ge1xuXHRcdHN1bmtTaGlwcyxcblx0XHRjaGVja0ZvclNoaXAsXG5cdFx0cmVjZWl2ZUF0dGFjayxcblx0XHRyZXBvcnRTdGF0dXMsXG5cdFx0cGxhY2VTaGlwLFxuXHRcdHNoaXBBcnJheSxcblx0XHRleGlzdGVudFNoaXBzLFxuXHRcdHBsYWNlUmFuZG9tU2hpcHMsXG5cdH07XG59XG5cbmNvbnN0IHBsYXllckdhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xuY29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxubGV0IG5ld1NoaXAgPSBzaGlwKDQsIDApO1xucGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcCgxLCAyLCBuZXdTaGlwKTtcbmV4cG9ydCB7IGdhbWVCb2FyZCwgcGxheWVyR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCB9O1xuIiwiZnVuY3Rpb24gcGxheWVyKHBsYXllciwgcGxheWVyR2FtZUJvYXJkLCBlbmVteUdhbWVCb2FyZCkge1xuXHRmdW5jdGlvbiByYW5kb21OdW0obWF4KSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG5cdH1cblxuXHRjb25zdCBhdHRhY2sgPSAocm93LCBjb2x1bW4pID0+IHtcblx0XHRmdW5jdGlvbiBhaUF0dGFjaygpIHtcblx0XHRcdHBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbU51bSgxMCksIHJhbmRvbU51bSgxMCkpO1xuXHRcdH1cblx0XHRpZiAocGxheWVyID09PSBcIkh1bWFuXCIpIHtcblx0XHRcdGVuZW15R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pO1xuXHRcdFx0YWlBdHRhY2soKTtcblx0XHR9XG5cdH07XG5cdHJldHVybiB7IGF0dGFjayB9O1xufVxuXG5leHBvcnQgeyBwbGF5ZXIgfTtcbiIsImV4cG9ydCB7IHNoaXAgfTtcblxuZnVuY3Rpb24gc2hpcChsZW5ndGgsIGRpcmVjdGlvbikge1xuXHRsZXQgc2hpcExlbmd0aCA9IGxlbmd0aDtcblx0Ly8gSWYgc2hpcCBkaXJlY3Rpb24gaXMgMCwgdGhlIHNoaXAgaXMgaG9yaXpvbnRhbFxuXHQvLyBJZiBzaGlwIGRpcmVjdGlvbiBpcyAxLCB0aGUgc2hpcCBpcyB2ZXJ0aWNhbFxuXHRjb25zdCBzaGlwRGlyZWN0aW9uID0gKCkgPT4ge1xuXHRcdGlmIChkaXJlY3Rpb24gPT09IDEpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdH07XG5cblx0Ly8gQXNzaWduIG5hbWUgYmFzZWQgb24gbGVuZ3RoXG5cdGxldCBuYW1lO1xuXHRsZXQgdHlwZTtcblx0aWYgKGxlbmd0aCA9PT0gNSkge1xuXHRcdG5hbWUgPSBcIkNhcnJpZXJcIjtcblx0fSBlbHNlIGlmIChsZW5ndGggPT09IDQpIHtcblx0XHRuYW1lID0gXCJCYXR0bGVzaGlwXCI7XG5cdH0gZWxzZSBpZiAobGVuZ3RoID09PSAzKSB7XG5cdFx0bmFtZSA9IFwiQ3J1aXNlclwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMikge1xuXHRcdG5hbWUgPSBcIlN1Ym1hcmluZVwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSkge1xuXHRcdG5hbWUgPSBcIkRlc3Ryb3llclwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMTApIHtcblx0XHRuYW1lID0gXCJFbmVteS1DYXJyaWVyXCI7XG5cdFx0dHlwZSA9IFwiRW5lbXlcIjtcblx0fSBlbHNlIGlmIChsZW5ndGggPT09IDkpIHtcblx0XHRuYW1lID0gXCJFbmVteS1CYXR0bGVzaGlwXCI7XG5cdFx0dHlwZSA9IFwiRW5lbXlcIjtcblx0fSBlbHNlIGlmIChsZW5ndGggPT09IDgpIHtcblx0XHRuYW1lID0gXCJFbmVteS1DcnVpc2VyXCI7XG5cdFx0dHlwZSA9IFwiRW5lbXlcIjtcblx0fSBlbHNlIGlmIChsZW5ndGggPT09IDcpIHtcblx0XHRuYW1lID0gXCJFbmVteS1EZXN0cm95ZXJcIjtcblx0XHR0eXBlID0gXCJFbmVteVwiO1xuXHR9IGVsc2UgaWYgKGxlbmd0aCA9PT0gNikge1xuXHRcdG5hbWUgPSBcIkVuZW15LVN1Ym1hcmluZVwiO1xuXHRcdHR5cGUgPSBcIkVuZW15XCI7XG5cdH1cblxuXHQvLyBOdW1iZXIgb2YgaGl0c1xuXHRsZXQgaGl0cyA9IDA7XG5cdGNvbnN0IG51bWJlck9mSGl0cyA9ICgpID0+IGhpdHM7XG5cdGNvbnN0IGdvdEhpdCA9ICgpID0+IGhpdHMrKztcblxuXHQvL0NoZWNrIGlmIHRoZSBzaGlwIHN1bmtcblx0Y29uc3QgaXNTdW5rID0gKCkgPT4ge1xuXHRcdGlmIChcblx0XHRcdChsZW5ndGggPT09IDUgJiYgaGl0cyA9PT0gNSkgfHxcblx0XHRcdChsZW5ndGggPT09IDQgJiYgaGl0cyA9PT0gNCkgfHxcblx0XHRcdChsZW5ndGggPT09IDMgJiYgaGl0cyA9PT0gMykgfHxcblx0XHRcdChsZW5ndGggPT09IDIgJiYgaGl0cyA9PT0gMikgfHxcblx0XHRcdChsZW5ndGggPT09IDEgJiYgaGl0cyA9PT0gMSlcblx0XHQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fTtcblx0cmV0dXJuIHsgbnVtYmVyT2ZIaXRzLCBnb3RIaXQsIGlzU3Vuaywgc2hpcERpcmVjdGlvbiwgaGl0cywgbmFtZSwgc2hpcExlbmd0aCB9O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogM3B4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuXG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMTAwO1xufVxuXG4uYm9hcmQgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkN2VlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib2FyZCA+ICo6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M2Q3ZWU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYWktYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAzcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG5cbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAxMDA7XG59XG5cbi5haS1ib2FyZCA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M2Q3ZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFpLWJvYXJkID4gKjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDdlZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zaWRlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBnYXA6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNzUlO1xufVxuXG4uc2lkZS1jb250YWluZXIgPiAqIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4uc2lkZS1jb250YWluZXIgPiAqOmhvdmVyIHtcbiAgICB3aWR0aDogMTMzcHg7XG4gICAgaGVpZ2h0OiA0M3B4O1xufVxuLnNpZGUtY29udGFpbmVyID4gKiA+ICoge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRGFya1JlZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ubWlkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG4ub3B0aW9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDEwMHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ub3B0aW9uID4gKiB7XG4gICAgZm9udC1zaXplOiAxLjlyZW07XG59XG5cbi5vcHRpb24gPiAqOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbltzdGF0dXM9XCJhY3RpdmVcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLm51bXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAganVzdGlmeS1pdGVtczogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtNTBweDtcblxufVxuXG4uYWktbnVtcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHhcblxufVxuXG5cbi5odW1hbi1udW1zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IDUwcHg7XG5cbn1cblxuW251bXR5cGU9XCJjb21wdXRlci1udW1zXCJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IDUwcHg7XG59IFxuXG5bY2xhc3NePVwiY2VsbFwiXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4Qjs7SUFFOUIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLHNDQUFzQztJQUN0QyxtQ0FBbUM7O0lBRW5DLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixzQ0FBc0M7SUFDdEMsbUNBQW1DOztJQUVuQyxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQjs7QUFFSjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgd2lkdGg6IDEyMDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG5cXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMDtcXG59XFxuXFxuLmJvYXJkID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4M2Q3ZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQgPiAqOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDdlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uYWktYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDNweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcblxcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMTAwO1xcbn1cXG5cXG4uYWktYm9hcmQgPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzZDdlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5haS1ib2FyZCA+ICo6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODNkN2VlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zaWRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA3NSU7XFxufVxcblxcbi5zaWRlLWNvbnRhaW5lciA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uc2lkZS1jb250YWluZXIgPiAqOmhvdmVyIHtcXG4gICAgd2lkdGg6IDEzM3B4O1xcbiAgICBoZWlnaHQ6IDQzcHg7XFxufVxcbi5zaWRlLWNvbnRhaW5lciA+ICogPiAqIHtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRGFya1JlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubWlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ub3B0aW9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDEwMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ub3B0aW9uID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4ub3B0aW9uID4gKjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuW3N0YXR1cz1cXFwiYWN0aXZlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5udW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIG1hcmdpbi1yaWdodDogLTUwcHg7XFxuXFxufVxcblxcbi5haS1udW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweFxcblxcbn1cXG5cXG5cXG4uaHVtYW4tbnVtcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdG9wOiA1MHB4O1xcblxcbn1cXG5cXG5bbnVtdHlwZT1cXFwiY29tcHV0ZXItbnVtc1xcXCJdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0b3A6IDUwcHg7XFxufSBcXG5cXG5bY2xhc3NePVxcXCJjZWxsXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBsb2FkRE9NIH0gZnJvbSBcIi4vRE9NXCI7XG5cbi8vIFRlc3QgaWYgZ2FtZSBjcmVhdGVzIHBsYXllclxuLy8gVGVzdCBpZiBnYW1lIGNyZWF0ZXMgZ2FtZSBib2FyZFxuXG5mdW5jdGlvbiBnYW1lKCkge1xuXHRjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblx0Y29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuXHRjb25zdCBodW1hblBsYXllciA9IHBsYXllcihcIkh1bWFuXCIsIHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQpO1xuXHRsb2FkRE9NKGh1bWFuUGxheWVyLCBwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkKTtcbn1cblxuY29uc3QgZ2FtZUxvb3AgPSBnYW1lKCk7XG5leHBvcnQgeyBnYW1lIH07XG4iXSwibmFtZXMiOlsiZ2FtZUJvYXJkIiwic2hpcCIsImxvYWRET00iLCJwbGF5ZXIiLCJwbGF5ZXJHYW1lQm9hcmQiLCJBSUdhbWVCb2FyZCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjZW50ZXJDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaHVtYW5Db250YWluZXIiLCJjb21wdXRlckNvbnRhaW5lciIsIm1pZGRsZUNvbnRhaW5lciIsInNpZGVDb250YWluZXIiLCJvcHRpb25Db250YWluZXIiLCJudW1iZXJHcmlkIiwiY29tcHV0ZXJOdW1iZXJHcmlkIiwiaSIsIm51bSIsImNvbXB1dGVyTnVtIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInJvd3MiLCJjb2x1bW5zIiwicGxheWVyQXJyYXkiLCJzaGlwQXJyYXkiLCJyZW5kZXJib2FyZCIsImoiLCJjZWxsIiwic2V0QXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiaHVtYW5OdW1zIiwiYWRkIiwiZ2V0QXR0cmlidXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJyZW5kZXJBSUJvYXJkIiwiY29tcHV0ZXJBcnJheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicm93IiwiY2hhckF0IiwibGVuZ3RoIiwiY29sdW1uIiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50IiwiYXR0YWNrIiwiYm9hcmQiLCJyZW1vdmVBbGxDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGVzdHJveWVyQ29udGFpbmVyIiwic3VibWFyaW5lQ29udGFpbmVyIiwic3VibWFyaW5lQ2VsbCIsImNydWlzZXJDb250YWluZXIiLCJiYXR0bGVTaGlwQ29udGFpbmVyIiwiY2FycmllckNvbnRhaW5lciIsInZlcnRpY2FsT3B0aW9uIiwiaG9yaXpvbnRhbE9wdGlvbiIsInhJbnB1dCIsInlJbnB1dCIsInNoaXBDZWxsIiwic2hpcExlbmd0aCIsImNoZWNrU2hpcCIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lcnMiLCJjaGlsZE5vZGVzIiwiY2hlY2tGb3JDb250YWluZXJzIiwiY29udGFpbmVyIiwibmV3U2hpcCIsInZhbHVlIiwiYWxlcnQiLCJ1bmRlZmluZWQiLCJleGlzdGVudFNoaXBzIiwicGxhY2VTaGlwIiwicmFuZG9tU2hpcExvb3AiLCJhaVNoaXAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGFjZVJhbmRvbVNoaXBzIiwicXVlcnlTZWxlY3RvckFsbCIsInNoaXBCb2FyZCIsInR5cGUiLCJzaGlwRGlyZWN0aW9uIiwiY2hlY2tGb3JTaGlwIiwic3BsaWNlIiwiZmluZFNoaXAiLCJyZWNlaXZlQXR0YWNrIiwiYXR0YWNrU2hpcCIsImdvdEhpdCIsInN0b3JlZFNoaXAiLCJmaW5kU3BsaWNlIiwiZmluZEluZGV4IiwibmFtZSIsInN1bmtlblNoaXBzIiwic3Vua1NoaXBzIiwicmVwb3J0U3RhdHVzIiwiaXNTdW5rIiwiY29tcHV0ZXJHYW1lQm9hcmQiLCJlbmVteUdhbWVCb2FyZCIsInJhbmRvbU51bSIsIm1heCIsImFpQXR0YWNrIiwiZGlyZWN0aW9uIiwiaGl0cyIsIm51bWJlck9mSGl0cyIsImdhbWUiLCJodW1hblBsYXllciIsImdhbWVMb29wIl0sInNvdXJjZVJvb3QiOiIifQ==