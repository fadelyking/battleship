import "./styles.css";
import { gameBoard } from "./gameboard";
import { player } from "./player";
import { ship } from "./ship";
import { loadDOM } from "./DOM";

// Test if game creates player
// Test if game creates game board

function game() {
	const destroyer = ship(1, 1);
	const submarine = ship(2, 1);
	const cruiser = ship(3, 0);
	const battleShip = ship(4, 0);
	const carrier = ship(5, 0);

	const playerGameBoard = gameBoard();
	const computerGameBoard = gameBoard();

	const humanPlayer = player("Human", playerGameBoard, computerGameBoard);
	loadDOM(playerGameBoard, computerGameBoard);
}

const gameLoop = game();
export { game };
