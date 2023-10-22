function player(player, playerGameBoard, enemyGameBoard) {
	function randomNum(max) {
		return Math.floor(Math.random() * max);
	}

	const attack = (row, column) => {
		function aiAttack() {
			playerGameBoard.receiveAttack(randomNum(10), randomNum(10));
		}
		if (player === "Human") {
			enemyGameBoard.receiveAttack(row, column);
			aiAttack();
		}
	};
	return { attack };
}

export { player };
