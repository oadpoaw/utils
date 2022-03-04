import { ArrayShuffle } from '..';

/**
 * Shuffles the given string.
 * @param str The string to be shuffled
 * @returns Shuffled string
 */
export function StringShuffle(str: string): string {
	if (typeof str !== 'string')
		throw new TypeError(`StringShuffle(str): 'str' should be a string.`);

	return ArrayShuffle(str.split('')).join('');
}
