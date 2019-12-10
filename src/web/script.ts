import { DataStructureFactory } from "../lib/DataStructureFactory";
import { DataStructure } from "../lib/DataStructureEnum";
import { IDataStructure } from "../lib/IDataStructure";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";

const choice = document.getElementById("choice") as HTMLSelectElement;
const messagesElement = document.getElementById('messages') as HTMLDivElement;
const input = document.getElementById('value') as HTMLInputElement;
var structure: IDataStructure;
var factory = new DataStructureFactory();
var selectedStructure: DataStructure;

init();

function init(): void {
	setSelectionOptions();
	setEventListeners();
	onChange();
}

function setSelectionOptions(): void {
	const options = [
		{ text: 'Queue', value: DataStructure.FIFO.valueOf() },
		{ text: 'Stack', value: DataStructure.LIFO.valueOf() }
	];

	options.forEach(option => {
		var elementOption = document.createElement('option');

		elementOption.text = option.text;
		elementOption.value = option.value.toString();

		choice.add(elementOption);
	});
}

function setEventListeners() {
	document.getElementById("btnAdd").addEventListener("click", () => add());
    document.getElementById("btnPeek").addEventListener("click", () => peek());
	document.getElementById("btnPoll").addEventListener("click", () => poll());
	document.getElementById("btnReset").addEventListener("click", () => reset());
	input.addEventListener('keypress', (e) => inputOnKeyPress(e));
	choice.addEventListener("change", () => onChange());
}

function selectedOption(): string {
	var value = choice.options[choice.selectedIndex].value;
	return value;
}

function onChange(): void {
	if (selectedOption() === DataStructure.FIFO.toString()) {
		structure = new Queue();
		output('Queue created');
	}
	else {
		structure = new Stack();
		output('Stack created');
	}
}

function add(): void {
	if (input.value.trim() != '') {
		structure.add(input.value.trim());
		output(`Added '${input.value}'`);
	}
	else {
		output('Value is empty or invalid')
	}
}

function poll(): void {
	if (structure.isEmpty())
		output(`${structure.constructor.name} is empty`);
	else
		output(`Poll: ${structure.poll()}`);
}

function peek(): void {
	if (structure.isEmpty())
		output(`${structure.constructor.name} is empty`);
	else
		output(`Peek: ${structure.peek()}`);
}


function reset(): void {
	messagesElement.innerHTML = '';
	output('Resetting ...');
	onChange();
}

function inputOnKeyPress(e: KeyboardEvent): void {
	if (e.key == 'Enter')
		add();
}

function output(message: string) {
	var messageElement = document.createElement('p');
	var time = new Date().toLocaleTimeString('en-US', {
		hour12: false,
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	});

	messageElement.textContent = `${time} | ${message}`;
	console.log(`${time} | ${message}`);
	messagesElement.prepend(messageElement);
}