const defaults = {
	padding: 10,
	block: '■',
	padBlock: '□',
};

/**
 * Create text based progress bar.
 * @param percent
 * @param padding
 * @param block
 * @param padblock
 * @returns
 */
export function ProgressBar(
	percent: number,
	padding: number | null = defaults.padding,
	block: string | null = defaults.block,
	padblock: string | null = defaults.padBlock,
): string {
	if (typeof percent !== 'number')
		throw new RangeError(
			`(percent, padding?, block?, padblock?) => string; 'percent' should be a number.`,
		);

	if (percent < 0 || percent > 100)
		throw new RangeError(
			`(percent, padding?, block?, padblock?) => string; 'percent' should not be greater than 100 or less than 0.`,
		);

	if (!padding || typeof padding !== 'number') padding = defaults.padding;
	if (!block || typeof block !== 'string' || block.length !== 1)
		block = defaults.block;
	if (!padblock || typeof padblock !== 'string' || padblock.length !== 1)
		padblock = defaults.padBlock;

	return block
		.repeat(Math.floor(percent * (padding * 0.01)))
		.padEnd(padding, padblock);
}
