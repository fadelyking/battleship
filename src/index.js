import "./styles.css";
import { gameBoard } from "./gameboard";
import { player } from "./player";
import { ship } from "./ship";
import { loadDOM } from "./DOM";

// Test if game creates player
// Test if game creates game board

function game() {
	const playerGameBoard = gameBoard();
	const computerGameBoard = gameBoard();

	const humanPlayer = player("Human", playerGameBoard, computerGameBoard);
	loadDOM(humanPlayer, playerGameBoard, computerGameBoard);
}

const gameLoop = game();
export { game };
