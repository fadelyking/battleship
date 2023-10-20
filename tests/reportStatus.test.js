import { gameBoard } from "../src/gameboard";
import { ship } from "../src/ship";

test("Check if the ship was placed on the gameboard", () => {
	const newShip = ship(4);
	const newGame = gameBoard(newShip, "A", 1);
	newGame.receiveAttack("A", 1);
	newGame.receiveAttack("A", 1);
	newGame.receiveAttack("A", 1);
	newGame.receiveAttack("A", 1);
	newGame.reportStatus();
	expect(newGame.reportStatus()).toBe(1);
});
