/**
 * Parses numbers to return a readable string.
 * @param n
 * @param separator
 * @returns
 */
export function HumanReadable(n: number, separator = ',') {
	if (typeof n !== 'number')
		throw new TypeError(
			`HumanReadable(n, separator): 'n' should be a number.`,
		);

	if (typeof separator !== 'string')
		throw new TypeError(
			`HumanReadable(n, separator): 'separator' should be a string.`,
		);

	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
