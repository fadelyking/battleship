import { gameBoard } from "./gameboard";

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

export { loadDOM };
