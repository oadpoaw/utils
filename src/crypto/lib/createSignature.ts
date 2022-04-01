import { BinaryLike, createSign } from 'crypto';

export function createSignature(privateKey: string, data: BinaryLike) {
	return createSign('rsa-sha256').update(data).sign(privateKey, 'hex');
}
