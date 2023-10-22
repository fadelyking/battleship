import { player, switchPlayers } from "../src/player";
import { playerGameBoard, computerGameBoard } from "../src/gameboard";

test("Players taking turns", () => {
	const humanPlayer = player("Human", playerGameBoard, computerGameBoard);
	const computerPlayer = player("Computer", computerGameBoard, playerGameBoard);
	computerPlayer.attack(1, 0);
	expect(humanPlayer.attack(1, 0)).toBe(computerPlayer.attack());
});
