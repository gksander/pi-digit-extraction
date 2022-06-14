import { choose } from "./choose";

export const Bernoulli = (m: number): number => {
	let sum = 0;

	for (let k = 0; k <= m; k++) {
		for (let v = 0; v <= k; v++) {
			const c = v % 2 === 1 ? -1 : 1;
			sum += (c * choose(k, v) * Math.pow(v + 1, m)) / (k + 1);
		}
	}

	return sum;
};
