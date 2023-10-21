import { ship } from "../src/ship";

let newShip = ship(4, 0);

beforeEach(() => {
	newShip = ship(4, 0);
});

test("If ship name matches", () => {
	expect(newShip.name).toBe("Battleship");
});

test("Ship hits increased", () => {
	expect(newShip.numberOfHits()).toBe(0);
});

test("If ship was sunk", () => {
	newShip.gotHit();
	newShip.gotHit();
	newShip.gotHit();
	newShip.gotHit();
	expect(newShip.isSunk()).toBe(true);
});
