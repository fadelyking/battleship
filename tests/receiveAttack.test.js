import { ship } from "../src/ship";
import { gameBoard } from "../src/gameboard";

test("Shot missed", () => {
	const newShip = ship(4);
	const newGame = gameBoard(newShip, "A", 1);
	newGame.checkForShip("A", 1);
	newGame.receiveAttack("A", 3);
	expect(newGame.checkForShip("A", 3)).toBe("Miss");
});

test("Shot landed", () => {
	const newShip = ship(4);
	const newGame = gameBoard(newShip, "A", 1);
	newGame.checkForShip("A", 2);
	newGame.receiveAttack("A", 2);
	expect(newGame.receiveAttack("A", 1)).toBe("Battleship");
});
