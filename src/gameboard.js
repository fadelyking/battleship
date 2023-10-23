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
	const placeShip = (row, column, ship) => {
		const shipDirection = ship.shipDirection();
		if (!checkForShip(row, column)) {
			if (
				(shipDirection === 1 && row - ship.shipLength + 1 >= 0) ||
				(shipDirection === 0 && column + ship.shipLength <= 10)
			) {
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
	const existentShips = (ship) => {
		const findSplice = storedShip.findIndex((name) => name === ship.name);
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
	const reportStatus = (ship) => {
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
	};
}

const playerGameBoard = gameBoard();
const computerGameBoard = gameBoard();

let newShip = ship(4, 0);
playerGameBoard.placeShip(1, 2, newShip);
export { gameBoard, playerGameBoard, computerGameBoard };
