export { ship };

function ship(length) {
	let hits = 0;
	const numberOfHits = () => hits;
	const gotHit = () => hits++;
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
	return { numberOfHits, gotHit, isSunk, hits };
}

const newShip = ship(4);
newShip.gotHit();
newShip.gotHit();
newShip.gotHit();
newShip.isSunk();
