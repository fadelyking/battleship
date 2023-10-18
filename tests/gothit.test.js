import { ship } from "../src/ship";
const newShip = ship(4);

test("Ship was hit", () => {
	expect(newShip.gotHit(1)).toBe(newShip.hits++);
});
