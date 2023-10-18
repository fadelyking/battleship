import { ship } from "../src/ship";
const newShip = ship(2);
newShip.gotHit();
newShip.gotHit();

test("If ship was sunk", () => {
	expect(newShip.isSunk()).toBe(true);
});
