import { describe, expect, it } from "vitest";
import { Bernoulli } from "./Bernoulli";

describe("Bernoulli", () => {
	const cases: [number, number][] = [
		[0, 1],
		[2, 1 / 6],
		[4, -1 / 30],
		[6, 1 / 42],
		[8, -1 / 30],
		[10, 5 / 66],
		[12, -691 / 2730],
	];

	it.each(cases)("B_(%i) = %i", (n, output) => {
		expect(Bernoulli(n)).toBeCloseTo(output);
	});
});
