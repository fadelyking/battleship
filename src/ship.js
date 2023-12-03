export { ship };

function ship(length, direction) {
	let shipLength = length;
	// If ship direction is 0, the ship is horizontal
	// If ship direction is 1, the ship is vertical
	const shipDirection = () => {
		if (direction === 1) {
			return 1;
		} else {
			return 0;
		}
	};

	// Assign name based on length
	let name;
	let type;
	if (length === 5) {
		name = "Carrier";
	} else if (length === 4) {
		name = "Battleship";
	} else if (length === 3) {
		name = "Cruiser";
	} else if (length === 2) {
		name = "Submarine";
	} else if (length === 1) {
		name = "Destroyer";
	} else if (length === 10) {
		name = "Enemy-Carrier";
		type = "Enemy";
	} else if (length === 9) {
		name = "Enemy-Battleship";
		type = "Enemy";
	} else if (length === 8) {
		name = "Enemy-Cruiser";
		type = "Enemy";
	} else if (length === 7) {
		name = "Enemy-Destroyer";
		type = "Enemy";
	} else if (length === 6) {
		name = "Enemy-Submarine";
		type = "Enemy";
	}

	// Number of hits
	let hits = 0;
	const numberOfHits = () => hits;
	const gotHit = () => hits++;

	//Check if the ship sunk
	const isSunk = () => {
		if (
			(length === 5 && hits === 5) ||
			(length === 4 && hits === 4) ||
			(length === 3 && hits === 3) ||
			(length === 2 && hits === 2) ||
			(length === 1 && hits === 1)
		) {
			return true;
		}
	};
	return { numberOfHits, gotHit, isSunk, shipDirection, hits, name, shipLength };
}
