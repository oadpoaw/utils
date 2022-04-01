import jwt from 'jsonwebtoken';

export class JWT {
	public constructor(private secret: jwt.Secret) {}

	public sign(
		payload: string | object | Buffer,
		signOptions: jwt.SignOptions,
	) {
		return jwt.sign(payload, this.secret, signOptions);
	}

	public verify(
		token: string,
		options?: jwt.VerifyOptions & { complete?: false | undefined },
	) {
		return jwt.verify(token, this.secret, options);
	}

	public decode(token: string, options?: jwt.DecodeOptions | undefined) {
		return jwt.decode(token, options);
	}
}
