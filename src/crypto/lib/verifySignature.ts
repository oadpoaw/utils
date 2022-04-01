import { BinaryLike, createVerify } from 'crypto';

export function verifySignature(
	publicKey: string,
	data: BinaryLike,
	signature: string,
) {
	return createVerify('rsa-sha256')
		.update(data)
		.verify(publicKey, signature, 'hex');
}
