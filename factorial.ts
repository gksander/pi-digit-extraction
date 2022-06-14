export const factorial = (n: number): number => {
	// Validation
	if (!Number.isInteger(n) || n < 0)
		throw new Error("Pass a non-negative integer");

	// Base case
	if (n <= 1) return 1;

	// Check cache
	if (cache[n]) return cache[n];

	// Recurse and cache
	const val = n * factorial(n - 1);
	cache[n] = val;

	return val;
};

const cache: Record<number, number> = {};
