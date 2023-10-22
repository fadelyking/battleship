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

export { loadDOM };
