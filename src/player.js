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
	const letterArray = ["A", "B", "C", "D", "E", "F", "J"];
	attack = () => {
		if (player === "Human") {
			gameboard.receiveAttack("A", 3);
			switchPlayers();
		} else if (player === "Computer") {
			gameboard.receiveAttack(letterArray[randomNum(7)], randomNum(10));
			switchPlayers();
		}
	};

	return { attack };
}

const humanPlayer = player("Human", computerGameBoard);
const computerPlayer = player("Computer", playerGameBoard);

humanPlayer.attack();
function switchPlayers() {
	if (humanPlayer) {
		return computerPlayer.attack();
	} else if (computerPlayer) {
		return humanPlayer.attack();
	}
}

export { player, switchPlayers };
