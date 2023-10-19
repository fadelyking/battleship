import { ship } from "../src/ship";

test("If ship was sunk", () => {
	const newShip = ship(2);
	expect(newShip.name).toBe("Submarine");
});
