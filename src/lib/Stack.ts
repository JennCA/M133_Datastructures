import { IDataStructure } from './IDataStructure';

export class Stack implements IDataStructure {

	private stack = [];

	isEmpty(): boolean {
		return (!this.size()) ? true : false;
	}

	add(value: any): void {
		this.stack.push(value);
	}

	poll() {
		return this.stack.pop();
	}

	peek() {
		return this.stack[(this.size() - 1)];
	}

	size(): number {
		return this.stack.length;
	}
}
