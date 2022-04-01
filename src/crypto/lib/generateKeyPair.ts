import { generateKeyPairSync } from 'crypto';

export function generateKeyPair(passphrase: string) {
	const { privateKey, publicKey } = generateKeyPairSync('rsa', {
		modulusLength: 4096,
		publicKeyEncoding: {
			type: 'spki',
			format: 'pem',
		},
		privateKeyEncoding: {
			type: 'pkcs8',
			format: 'pem',
			cipher: 'aes-256-cbc',
			passphrase,
		},
	});

	return { publicKey, privateKey };
}
