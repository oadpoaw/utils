/**
 * Split a string into smaller chunks depending on the size specified in the second parameter.
 * @param str The string to be chunked
 * @param size Size of each chunk
 * @returns Chunks of strings
 */
export function StringChunk(str: string, size: number): string[] {
	if (typeof str !== 'string')
		throw new TypeError(
			`StringChunk(str, size): 'str' should be a string.`,
		);

	if (typeof size !== 'number')
		throw new TypeError(
			`StringChunk(str, size): 'size' should be a number.`,
		);

	if (size < 1)
		throw new RangeError(
			`StringChunk(str, size): 'size' should be greater than 1.`,
		);

	const chunks = str.match(new RegExp(`(.|[\r\n]){1,${size}}`, 'g'));

	return chunks ? chunks : [];
}
