export { ship };

function ship(length) {
	let name;

	// Assign name based on length
	if (length === 5) {
		name = "Carrier";
	} else if (length === 4) {
		name = "Battleship";
	} else if (length === 3) {
		name = "Cruiser";
	} else if (length === 2) {
		name = "Submarine";
	} else {
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
	return { numberOfHits, gotHit, isSunk, hits, name };
}

const newShip = ship(4);
newShip.gotHit();
newShip.gotHit();
newShip.gotHit();
newShip.isSunk();
