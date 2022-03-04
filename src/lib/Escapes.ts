export const Escapes = {
	/**
	 * Escapes Special Characters to be compatible with Regexs
	 * So special characters would not error out regex parsing.
	 */
	regex: (str: string) => {
		if (typeof str !== 'string')
			throw new TypeError(
				`Escapes.regex(str): 'str' should be a string.`,
			);
		return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	},
	/**
	 * Escapes the character `@` address sign.
	 */
	addressSign: (str: string) => {
		if (typeof str !== 'string')
			throw new TypeError(
				`Escapes.regex(str): 'str' should be a string.`,
			);
		return str.replace(/@/g, `@${String.fromCharCode(8203)}`);
	},
	/**
	 * Escapes the character ` backtick.
	 */
	backticks: (str: string) => {
		if (typeof str !== 'string')
			throw new TypeError(
				`Escapes.regex(str): 'str' should be a string.`,
			);
		return str.replace(/`/g, `\`${String.fromCharCode(8203)}`);
	},
};
