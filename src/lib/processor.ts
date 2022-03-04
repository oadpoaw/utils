interface Logger {
	error: (err: any) => any;
	warn: (err: any) => any;
}

let hasBeenCalled = false;

export function processor(logger: Logger) {
	if (typeof logger !== 'object')
		throw new TypeError(`processor(logger): 'logger' should be an object.`);

	if (typeof logger.error !== 'function')
		throw new TypeError(
			`processor(logger): 'logger.error' should be a function.`,
		);

	if (typeof logger.warn !== 'function')
		throw new TypeError(
			`processor(logger): 'logger.warn' should be a function.`,
		);

	if (hasBeenCalled)
		throw new Error(
			`processor(logger): Already been called and it cannot be called twice or more.`,
		);

	process.on('uncaughtException', (err) => {
		logger.error(err);
		process.exit(1);
	});

	process.on('warning', (err) => {
		logger.warn(err);
	});

	process.on('unhandledRejection', (reason) => {
		logger.error(reason);
		process.exit(1);
	});

	hasBeenCalled = true;
}
