import { gameBoard } from "../src/gameboard";
import { ship } from "../src/ship";

let newShip = ship(4, 0);
let newGame = gameBoard(newShip, 1, 1);

beforeEach(() => {
	newShip = ship(4, 0);
	newGame = gameBoard(newShip);
});

test("Shot missed", () => {
	newGame.checkForShip(1, 1);
	newGame.receiveAttack(1, 8);
	expect(newGame.checkForShip(1, 8)).toBe("Miss");
});

test("Shot landed", () => {
	newGame.placeShip(0, 1, newShip);
	newGame.checkForShip(1, 1);
	newGame.receiveAttack(0, 1);
	expect(newGame.receiveAttack(0, 2)).toBe(1);
});

test("Attack and sink a ship", () => {
	newGame.placeShip(0, 0, newShip);
	newGame.receiveAttack(0, 0);
	newGame.receiveAttack(0, 1);
	newGame.receiveAttack(0, 2);
	newGame.receiveAttack(0, 3);
	newGame.reportStatus(newShip);
	expect(newGame.reportStatus(newShip)).toBe(1);
});
