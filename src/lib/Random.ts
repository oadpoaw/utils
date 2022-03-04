const defaults = {
	max: 100,
	min: 0,
	chars: [
		...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
	],
};

export const Random = {
	number: (max: number = defaults.max, min: number = defaults.min) => {
		if (typeof max !== 'number')
			throw new TypeError(
				`Random.number(max, min): 'max' should be a number.`,
			);

		if (typeof min !== 'number')
			throw new TypeError(
				`Random.number(max, min): 'min' should be a number.`,
			);

		if (max === min || min > max)
			throw new RangeError(
				`Random.number(max, min): 'min' cannot be greater than or equal to 'max'.`,
			);

		return Math.floor(Math.random() * (max - min + 1) + min);
	},
	string: (length = 10, chars: string[] = defaults.chars) => {
		if (typeof length !== 'number')
			throw new TypeError(
				`Random.string(length, chars): 'length' should be a number.`,
			);

		if (
			!Array.isArray(chars) ||
			chars.some((char) => typeof char !== 'string')
		)
			throw new TypeError(
				`Random.string(length, chars): 'chars' should be an array of strings.`,
			);

		if (length < 1)
			throw new RangeError(
				`Random.string(length, chars): 'length' cannot be less than or equal to 0.`,
			);

		if (!chars.length)
			throw new RangeError(
				`Random.string(length, chars): 'chars' cannot be empty.`,
			);

		return [...Array(length)]
			.map(() => chars[Math.floor(Math.random() * chars.length)])
			.join('');
	},
};
