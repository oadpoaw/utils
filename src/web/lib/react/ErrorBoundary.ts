import { Component } from 'react';
import type { ReactNode } from 'react';

interface Props {
	fallback: ReactNode;
	children: ReactNode;
}

interface State {
	error: boolean;
	errorObject: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
	public constructor(props: Props | Readonly<Props>) {
		super(props);
		this.state = {
			error: false,
			errorObject: null,
		};
	}

	public componentDidCatch(error: Error) {
		this.setState({ error: true });
		this.setState({ errorObject: error });
	}

	public render() {
		if (this.state.error) return this.props.fallback;

		return this.props.children;
	}
}
