import { ship } from "./ship";

function gameBoard(ship) {
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
			for (let i = 0; i < ship.shipLength; i++) {
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
	const receiveAttack = (row, column) => {
		const attackShip = shipBoard[row][column];
		if (attackShip === "") {
			return shipBoard[row].splice(column, 1, "Miss");
		} else if (attackShip !== "" && attackShip !== "Miss") {
			shipBoard[row].splice(column, 1, "Hit");
			return ship.gotHit();
		} else if (attackShip !== "" && attackShip === "Miss") {
			return "Already missed here";
		} else if (attackShip !== "" && attackShip !== "Miss" && attackShip === "Hit") {
			return "Already hit here";
		}
	};

	// When a ship sinks increase the number of Sunken Ships through reportStatus
	// sunkShips stores that variable
	// reportStatus -> sunkShips -> sunkenShips
	let sunkenShips = 0;
	const sunkShips = () => sunkenShips;
	const reportStatus = () => {
		if (ship.isSunk() === true) {
			return sunkenShips++;
		} else {
			return false;
		}
	};

	return { sunkShips, checkForShip, receiveAttack, reportStatus, placeShip };
}

// Create a submarine
const battleShip = ship(4, 0);
const destroyer = ship(1, 1);
// Create a new gameBoard

const playerGameBoard = gameBoard(battleShip);
const computerGameBoard = gameBoard(destroyer);

// Place the ship
playerGameBoard.placeShip(0, 0, battleShip);

// Check if the ship exists on the array
playerGameBoard.checkForShip(0, 0);
// Attack the ship
playerGameBoard.receiveAttack(1, 1);
playerGameBoard.receiveAttack(1, 1);

// Determine whether the ship sunk or not. Increment sunkenShips if true.
playerGameBoard.reportStatus();

// Store the number of sunkenShips
playerGameBoard.sunkShips();
export { gameBoard, playerGameBoard, computerGameBoard };
