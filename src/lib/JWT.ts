import type jwt from 'jsonwebtoken';

export class JWT {
	private static _jwt: typeof jwt;

	public constructor(private secret: string) {
		try {
			if (!JWT._jwt) JWT._jwt = require('jsonwebtoken');
		} catch (err) {
			throw new Error(
				`module 'jsonwebtoken' not found. Please install this module manually using 'npm install jsonwebtoken' to use 'new JWT(...)' from '@oadpoaw/utils'`,
			);
		}
	}

	public sign(
		payload: string | object | Buffer,
		signOptions: jwt.SignOptions,
	) {
		return JWT.jwt.sign(payload, this.secret, signOptions);
	}

	public verify(
		token: string,
		options?: jwt.VerifyOptions & { complete?: false | undefined },
	) {
		return JWT.jwt.verify(token, this.secret, options);
	}

	public decode(token: string, options?: jwt.DecodeOptions | undefined) {
		return JWT.jwt.decode(token, options);
	}

	public static get jwt() {
		return JWT._jwt;
	}
}
