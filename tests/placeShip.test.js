import { gameBoard } from "../src/gameboard";
import { ship } from "../src/ship";

test("Check if the ship was placed on the gameboard", () => {
	const newShip = ship(4, 0);
	const newGame = gameBoard(newShip);
	newGame.placeShip(1, 0, newShip);
	expect(newGame.checkForShip(1, 1)).toBe(true);
});
