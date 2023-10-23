import { gameBoard } from "./gameboard";
import { ship } from "./ship";

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

			cell.addEventListener("click", (e) => {
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
			return (shipLength = 1);
		} else if (submarineContainer.hasAttribute("status")) {
			return (shipLength = 2);
		} else if (cruiserContainer.hasAttribute("status")) {
			return (shipLength = 3);
		} else if (battleShipContainer.hasAttribute("status")) {
			return (shipLength = 4);
		} else {
			return (shipLength = 5);
		}
	};

	destroyerContainer.addEventListener("click", (e) => {
		battleShipContainer.removeAttribute("status");
		cruiserContainer.removeAttribute("status");
		submarineContainer.removeAttribute("status");
		carrierContainer.removeAttribute("status");
		destroyerContainer.setAttribute("status", "active");
		checkShip();
	});
	submarineContainer.addEventListener("click", (e) => {
		battleShipContainer.removeAttribute("status");
		cruiserContainer.removeAttribute("status");
		carrierContainer.removeAttribute("status");
		destroyerContainer.removeAttribute("status");
		submarineContainer.setAttribute("status", "active");
		checkShip();
	});
	cruiserContainer.addEventListener("click", (e) => {
		battleShipContainer.removeAttribute("status");
		carrierContainer.removeAttribute("status");
		submarineContainer.removeAttribute("status");
		destroyerContainer.removeAttribute("status");
		cruiserContainer.setAttribute("status", "active");
		checkShip();
	});
	battleShipContainer.addEventListener("click", (e) => {
		carrierContainer.removeAttribute("status");
		cruiserContainer.removeAttribute("status");
		submarineContainer.removeAttribute("status");
		destroyerContainer.removeAttribute("status");
		battleShipContainer.setAttribute("status", "active");
		checkShip();
	});
	carrierContainer.addEventListener("click", (e) => {
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

		const newShip = ship(shipLength, 0);
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
		const newShip = ship(shipLength, 1);
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

export { loadDOM };
