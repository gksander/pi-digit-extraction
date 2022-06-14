import { describe, it, expect } from "vitest";
import { factorial } from "./factorial";

describe("factorial", () => {
	const cases: [number, number][] = [
		[0, 1],
		[1, 1],
		[2, 2],
		[3, 6],
		[4, 24],
		[12, 479001600],
		[15, 1.307674368e12],
	];

	it.each(cases)("factorial(%i) = %i", (n, out) => {
		expect(factorial(n)).toEqual(out);
	});
});
