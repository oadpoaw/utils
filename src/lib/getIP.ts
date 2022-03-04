import type { IncomingHttpHeaders } from 'http';

/**
 * Get IP from headers 'x-forwarded-for'
 * @param headers
 * @returns
 */
export function getIP(headers: Headers | IncomingHttpHeaders) {
	const xff =
		headers instanceof Headers
			? headers.get('x-forwarded-for')
			: (headers['x-forwarded-for'] as string);

	return xff ? xff.split(',')[0] : '127.0.0.1';
}
