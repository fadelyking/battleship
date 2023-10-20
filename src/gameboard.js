import { ship } from "./ship";

function gameBoard(ship, value, location) {
	// Arrays to store the ships in
	const arrays = {
		A: ["", "", "", "", "", "", "", "", "", ""],
		B: ["", "", "", "", "", "", "", "", "", ""],
		C: ["", "", "", "", "", "", "", "", "", ""],
		D: ["", "", "", "", "", "", "", "", "", ""],
		E: ["", "", "", "", "", "", "", "", "", ""],
		F: ["", "", "", "", "", "", "", "", "", ""],
		J: ["", "", "", "", "", "", "", "", "", ""],
	};

	// Store the ship in the desired location
	arrays[value].splice(location, 1, ship);

	// Return true if the ship is there, return Miss if it's a miss, and return false if nothing
	checkForShip = (arrayLetter, arrayIndex) => {
		const findShip = arrays[arrayLetter];
		if (findShip[arrayIndex] !== "" && findShip[arrayIndex] !== "Miss") {
			return true;
		} else if (findShip[arrayIndex] === "Miss") {
			return "Miss";
		}
	};

	// Takes a pair of coordinates, determines whether or not the attack hit a ship
	// If missed, the missed shot is also logged
	receiveAttack = (arrayLetter, arrayIndex) => {
		const attackShip = arrays[arrayLetter];
		if (attackShip[arrayIndex] === "") {
			return arrays[arrayLetter].splice(arrayIndex, 1, "Miss");
		} else if (attackShip[arrayIndex] !== "" && attackShip[arrayIndex] !== "Miss") {
			return attackShip[arrayIndex].gotHit();
		} else if (attackShip[arrayIndex] !== "" && attackShip[arrayIndex] === "Miss") {
			return "Already missed here";
		}
	};

	// When a ship sinks increase the number of Sunken Ships through reportStatus
	// sunkShips stores that variable
	// reportStatus -> sunkShips -> sunkenShips
	let sunkenShips = 0;
	sunkShips = () => sunkenShips;
	reportStatus = () => {
		if (ship.isSunk() === true) {
			return sunkenShips++;
		} else {
			return false;
		}
	};

	return { sunkShips, checkForShip, receiveAttack, reportStatus };
}

// Create a submarine
const submarine = ship(2);
const destroyer = ship(1);
// Create a new gameBoard
const playerGameBoard = gameBoard(submarine, "A", 1);
const computerGameBoard = gameBoard(destroyer, "B", 2);
// Check if the ship exists on the array
playerGameBoard.checkForShip("A", 1);

// Attack the ship
/* playerGameBoard.receiveAttack("A", 1);
playerGameBoard.receiveAttack("A", 1);
 */
// Determine whether the ship sunk or not. Increment sunkenShips if true.
playerGameBoard.reportStatus();

// Store the number of sunkenShips
playerGameBoard.sunkShips();
export { gameBoard, playerGameBoard, computerGameBoard };
