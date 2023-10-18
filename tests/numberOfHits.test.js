import { ship } from "../src/ship";

const largeShip = ship(0);

test("Ship hits increased", () => {
	expect(largeShip.numberOfHits()).toBe(largeShip.hits);
});
