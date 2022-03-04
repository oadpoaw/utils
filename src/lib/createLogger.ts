import type winston from 'winston';

export function createLogger(transports: winston.transport[] = []) {
	try {
		const winston: typeof import('winston') = require('winston');

		return winston.createLogger({
			level: 'info',
			format: winston.format.combine(
				winston.format.errors({ stack: true }),
				winston.format.prettyPrint(),
				winston.format.printf(({ level, message, stack }) => {
					return `[${new Date()
						.toLocaleString()
						.toUpperCase()}] [${level}]: ${stack ?? message}`;
				}),
			),
			defaultMeta: { service: 'user-service' },
			transports: [new winston.transports.Console(), ...transports],
		});
	} catch (err) {
		throw new Error(
			`module 'winston' not found. Please install this module manually using 'npm install winston' to use 'createLogger(...)' from '@oadpoaw/utils'`,
		);
	}
}
