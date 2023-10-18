export { ship };

function ship(length) {
	let hits = 0;
	const numberOfHits = () => hits;
	const gotHit = () => hits++;
	const isSunk = () => {
		if (length === 4 && hits === 4) {
			return true;
		} else if (length === 3 && hits === 3) {
			return true;
		} else if (length === 2 && hits === 2) {
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
