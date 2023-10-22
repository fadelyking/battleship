import { ship } from "./ship";

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
	const reportStatus = (ship) => {
		if (ship.isSunk() === true) {
			return sunkenShips++;
		} else {
			return false;
		}
	};

	const shipArray = () => shipBoard;

	return { sunkShips, checkForShip, receiveAttack, reportStatus, placeShip, shipArray };
}

const playerGameBoard = gameBoard();
const computerGameBoard = gameBoard();

export { gameBoard, playerGameBoard, computerGameBoard };
