// Player
// Each player should have his own game board
// On play, activate the other player turn
// If it's player 1 (me) turn, allow me to choose where to attack
// If it's player 2 (computer) turn, randomly choose a place to attack
import { playerGameBoard, computerGameBoard } from "./gameboard";

function player(player, gameboard) {
	function randomNum(max) {
		return Math.floor(Math.random() * max);
	}
	const attack = () => {
		if (player === "Human") {
			gameboard.receiveAttack(2, 3);
			switchPlayers();
		} else if (player === "Computer") {
			gameboard.receiveAttack(randomNum(10), randomNum(10));
			switchPlayers();
		}
	};

	return { attack };
}

const humanPlayer = player("Human", computerGameBoard);
const computerPlayer = player("Computer", playerGameBoard);

humanPlayer.attack();
computerPlayer.attack();
function switchPlayers() {
	if (humanPlayer) {
		return computerPlayer;
	} else if (computerPlayer) {
		return humanPlayer;
	}
}

export { player, switchPlayers };
