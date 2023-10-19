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
			return attackShip[arrayIndex].name;
		}
	};

	return { arrays, checkForShip, receiveAttack };
}

const newShip = ship(4);
const newGame = gameBoard(newShip, "A", 1);
newGame.checkForShip("A", 1);
newGame.receiveAttack("A", 1);
export { gameBoard };
