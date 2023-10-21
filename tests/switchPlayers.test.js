import { player, switchPlayers } from "../src/player";
import { playerGameBoard, computerGameBoard } from "../src/gameboard";

test("Players taking turns", () => {
	const humanPlayer = player("Human", computerGameBoard);
	const computerPlayer = player("Computer", playerGameBoard);
	computerPlayer.attack();
	expect(switchPlayers()).toBe(computerPlayer);
});
