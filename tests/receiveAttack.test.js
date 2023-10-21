import { ship } from "../src/ship";
import { gameBoard } from "../src/gameboard";

test("Shot missed", () => {
	const newShip = ship(4, 2);
	const newGame = gameBoard(newShip);
	newGame.checkForShip(1, 1);
	newGame.receiveAttack(1, 3);
	expect(newGame.checkForShip(1, 3)).toBe("Miss");
});

test("Shot landed", () => {
	const newShip = ship(4, 0);
	const newGame = gameBoard(newShip);
	newGame.placeShip(0, 1, newShip);
	newGame.checkForShip(1, 1);
	newGame.receiveAttack(0, 1);
	expect(newGame.receiveAttack(0, 1)).toBe(1);
});
