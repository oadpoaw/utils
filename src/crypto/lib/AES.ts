import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

type Params = Parameters<typeof createCipheriv>;

export class AES {
	public constructor(
		private readonly key: Params[1],
		private readonly iv: Params[2],
	) {}

	public encrypt(data: string) {
		const cipher = createCipheriv('aes256', this.key, this.iv);
		return cipher.update(data, 'utf-8', 'hex') + cipher.final('hex');
	}

	public decrypt(data: string) {
		const decipher = createDecipheriv('aes256', this.key, this.iv);
		return decipher.update(data, 'utf-8', 'hex') + decipher.final('hex');
	}

	public static generateKey() {
		return randomBytes(32);
	}

	public static generateIV() {
		return randomBytes(16);
	}
}
