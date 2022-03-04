import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	selector: string;
}

export const Portal: React.FC<Props> = ({ children, selector }) => {
	const ref = useRef<Element | null>();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector(selector);
		setMounted(true);

		return () => setMounted(false);
	}, [selector]);

	return mounted ? createPortal(children, <Element>ref.current) : null;
};
