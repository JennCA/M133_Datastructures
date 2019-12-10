import { IDataStructure } from './IDataStructure';
import { DataStructure } from './DataStructureEnum';
import { Stack } from './Stack';
import { Queue } from './Queue';

export class DataStructureFactory {

	public create(dataStructure: DataStructure): IDataStructure {
		return dataStructure === DataStructure.FIFO ? new Queue() : new Stack();
	}
}