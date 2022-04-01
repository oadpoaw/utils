import { useCallback, useState } from 'react';

export function useAsyncError() {
	const [_, setError] = useState<any>();

	return useCallback(
		(err) => {
			setError(() => {
				throw err;
			});
		},
		[setError],
	);
}
