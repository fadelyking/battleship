function player(player, playerGameBoard, enemyGameBoard) {
	function randomNum(max) {
		return Math.floor(Math.random() * max);
	}

	const attack = (row, column) => {
		if (player === "Human") {
			enemyGameBoard.receiveAttack(row, column);
			playerGameBoard.receiveAttack(randomNum(9), randomNum(9));
		}
	};

	return { attack };
}

export { player };
