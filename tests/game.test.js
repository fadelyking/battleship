import { game } from "../src";
import { gameBoard } from "../src/gameboard";
import { ship } from "../src/ship";

test("Game creates player", () => {
	const gameLoop = game();
	gameLoop.createGameBoard();
	const playerGameBoard = gameBoard();
	const computerGameBoard = gameBoard();
	expect(gameLoop.createGameBoard()).toEqual(playerGameBoard, computerGameBoard);
});
/* 
test("Game creates gameBoard", () => {
	expect(createGameboard).toBe(gameBoard);
});
 */
