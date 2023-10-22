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

	playerGameBoard.placeShip(3, 2, destroyer);
	playerGameBoard.placeShip(4, 6, submarine);
	playerGameBoard.placeShip(5, 0, cruiser);
	playerGameBoard.placeShip(0, 0, battleShip);
	playerGameBoard.placeShip(9, 0, carrier);

	computerGameBoard.placeShip(3, 2, destroyer);
	computerGameBoard.placeShip(4, 3, submarine);
	computerGameBoard.placeShip(5, 7, cruiser);
	computerGameBoard.placeShip(0, 4, battleShip);
	computerGameBoard.placeShip(8, 5, carrier);

	loadDOM(playerGameBoard, computerGameBoard);
}

const gameLoop = game();
export { game };
