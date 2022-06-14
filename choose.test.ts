import { describe, it, expect } from "vitest";
import { choose } from "./choose";

describe("choose", () => {
	// n, k, (n choose k)
	const cases: [number, number, number][] = [
		[3, 1, 3],
		[5, 1, 5],
		[5, 2, 10],
		[5, 3, 10],
		[10, 4, 210],
		[18, 15, 816],
	];

	it.each(cases)("choose(%i, %i) = %i", (n, k, output) => {
		expect(choose(n, k)).toEqual(output);
	});
});
