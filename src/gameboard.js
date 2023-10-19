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

	// Return true if the ship is there, return false if it isn't
	checkForShip = (arrayLetter, arrayNumber) => {
		const findShip = arrays[arrayLetter];
		if (findShip[arrayNumber] !== "") return true;
	};

	receiveAttack = () => {};

	return { arrays, checkForShip, receiveAttack };
}

const newShip = ship(4);
const newGame = gameBoard(newShip, "A", 1);
newGame.checkForShip("A", 1);

export { gameBoard };
