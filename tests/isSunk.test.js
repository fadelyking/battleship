import { ship } from "../src/ship";

test("If ship was sunk", () => {
	const newShip = ship(2);
	newShip.gotHit();
	newShip.gotHit();
	expect(newShip.isSunk()).toBe(true);
});
