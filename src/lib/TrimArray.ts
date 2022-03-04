/**
 * Trim an array.
 * @param array
 * @param maxLen
 * @returns
 */
export function TrimArray(array: any[], maxLen = 10): any[] {
	if (!Array.isArray(array))
		throw new TypeError(
			`TrimArray(array, maxLen): 'array' should be an array.`,
		);
	if (typeof maxLen !== 'number')
		throw new TypeError(
			`TrimArray(array, maxLen): 'maxLen' should be a number.`,
		);
	if (array.length < maxLen) {
		return array;
	}
	array = array.slice(0, maxLen);
	array.push(`${array.length - maxLen} more...`);
	return array;
}
