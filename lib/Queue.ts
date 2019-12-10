import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {

    private queue = [];

    public size(): number {
        return this.queue.length;
    }

    public isEmpty(): boolean {
        return (!this.size()) ? true : false;
    }

    public add(value: any): void {
        this.queue.push(value);
    }

    public peek(): any {
        return this.queue[0];
    }

    public poll(): any {
        return this.queue.shift();
    }
}