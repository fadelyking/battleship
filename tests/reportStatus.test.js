import { gameBoard } from "../src/gameboard";
import { ship } from "../src/ship";

test("Check if the ship sunk or not", () => {
	const newShip = ship(4, 0);
	const newGame = gameBoard(newShip);
	newGame.placeShip(0, 0, newShip);
	newGame.receiveAttack(0, 1);
	newGame.receiveAttack(0, 1);
	newGame.receiveAttack(0, 1);
	newGame.receiveAttack(0, 1);
	newGame.reportStatus();
	expect(newGame.reportStatus()).toBe(1);
});
