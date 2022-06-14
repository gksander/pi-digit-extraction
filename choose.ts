import { factorial } from "./factorial";

export const choose = (n: number, k: number): number => {
	if (!(Number.isInteger(n) && Number.isInteger(k) && k >= 0 && n >= k))
		throw new Error("Pass non-negative integers n and k, where 0 <= k <= n");

	return factorial(n) / (factorial(k) * factorial(n - k));
};
