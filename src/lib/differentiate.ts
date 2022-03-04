/**
 * Differentiate two arrays.
 * @param array_1
 * @param array_2
 * @returns
 */
export function differentiate<T>(array_1: T[], array_2: T[]): T[] {
	if (!Array.isArray(array_1))
		throw new TypeError(
			`differentiate(array_1, array_2): 'array_1' should be an array.`,
		);

	if (!Array.isArray(array_2))
		throw new TypeError(
			`differentiate(array_1, array_2): 'array_2' should be an array.`,
		);

	return array_1.filter((i) => !array_2.includes(i));
}
