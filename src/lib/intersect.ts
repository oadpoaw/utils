/**
 * Intersect two arrays.
 * @param array_1
 * @param array_2
 * @returns
 */
export function intersect<T>(array_1: T[], array_2: T[]): T[] {
	if (!Array.isArray(array_1))
		throw new TypeError(
			`intersect(array_1, array_2): 'array_1' should be an array.`,
		);

	if (!Array.isArray(array_2))
		throw new TypeError(
			`intersect(array_1, array_2): 'array_2' should be an array.`,
		);

	const intersection: T[] = [];

	for (const item of new Set(array_1.filter((i) => array_2.includes(i))))
		intersection.push(item);

	return intersection;
}
