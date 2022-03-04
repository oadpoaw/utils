export const Base64 = {
	/**
	 * Encode a string.
	 * @param str
	 * @returns encoded base64 string
	 */
	encode: (str: string) => {
		if (typeof str !== 'string')
			throw new TypeError(
				`Base64.encode(str): 'str' should be a string.`,
			);
		return Buffer.from(str).toString('base64');
	},
	/**
	 * Decode a base64 string
	 * @param str encoded string
	 * @returns decoded base64 string
	 */
	decode: (str: string) => {
		if (typeof str !== 'string')
			throw new TypeError(
				`Base64.decode(str): 'str' should be a string.`,
			);
		return Buffer.from(str, 'base64').toString('utf-8');
	},
};
