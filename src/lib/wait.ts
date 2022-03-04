export function wait(ms: number) {
	if (typeof ms !== 'number')
		throw new TypeError(`wait(ms): 'ms' should be a number.`);
	return new Promise((resolve) => setTimeout(resolve, ms));
}
