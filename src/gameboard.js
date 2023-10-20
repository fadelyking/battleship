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
		}
	};

	// When a ship sinks increase the number of Sunken Ships through reportStatus
	// sunkShips stores that variable
	// reportStatus -> sunkShips -> sunkenShips
	let sunkenShips = 0;
	sunkShips = () => sunkenShips;
	reportStatus = () => {
		if (ship.isSunk() === true) {
			console.log("sunk");
			return sunkenShips++;
		} else {
			return false;
		}
	};

	return { sunkShips, checkForShip, receiveAttack, reportStatus };
}

// Create a submarine
const newShip = ship(2);
// Create a new gameBoard
const newGame = gameBoard(newShip, "A", 1);
// Check if the ship exists on the array
newGame.checkForShip("A", 1);

// Attack the ship
newGame.receiveAttack("A", 1);
newGame.receiveAttack("A", 1);

// Determine whether the ship sunk or not. Increment sunkenShips if true.
newGame.reportStatus();

// Store the number of sunkenShips
newGame.sunkShips();
export { gameBoard };
