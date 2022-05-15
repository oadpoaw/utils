type Subscriber<T> = (value: T) => Promise<void> | void;

export class Observer<T> {
	private readonly subscribers: Map<Symbol, Subscriber<T>> = new Map();

	public subscribe(subscriber: Subscriber<T>): Symbol {
		const token = Symbol(
			this.subscribers.size + 1 + Date.now() + Math.random(),
		);
		this.subscribers.set(token, subscriber);
		return token;
	}

	public unsubscribe(id: Symbol): void {
		this.subscribers.delete(id);
	}

	public async publish(value: T): Promise<void> {
		for (const [, subscriber] of this.subscribers) {
			await subscriber(value);
		}
	}
}
