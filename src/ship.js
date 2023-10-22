export { ship };

function ship(length, direction) {
	let shipLength = length;

	const shipDirection = () => {
		if (direction === 1) {
			return 1;
		} else {
			return 0;
		}
	};

	// Assign name based on length
	let name;
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

const newShip = ship(4, 1);
newShip.gotHit();
newShip.gotHit();
newShip.gotHit();
newShip.isSunk();
