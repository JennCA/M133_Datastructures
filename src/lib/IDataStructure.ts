export interface IDataStructure {

    // checks if the structure is empty
    isEmpty(): boolean;

    // adds the value @param to enqueue
    add(value: any): void;

    // poll the next value
    poll(): any;

    // retuns the structure
    peek(): any;

    // retuns the size of the data structure
    size(): number;

}
