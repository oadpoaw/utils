/**
 * Shorten a string at a given length.
 * @param text The string to shorten
 * @param maxLen The length of the string
 * @returns Shorten text
 */
export function shorten(text: string, maxLen = 2000) {
	if (typeof text !== 'string')
		throw new TypeError(
			`shorten(text, maxLen): 'text' should be a string.`,
		);
	if (typeof maxLen !== 'number')
		throw new TypeError(
			`shorten(text, maxLen): 'text' should be a number.`,
		);
	return text.length > maxLen ? `${text.slice(0, maxLen - 3)}...` : text;
}
