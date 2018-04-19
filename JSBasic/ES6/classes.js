class Task {
	constructor(title = Task.getDefaultTitle()) {
		console.log('Creating a task');
		this.title = title;
		this._done = false;
		Task.count++;
	}

	get done() {
		return this._done === true ? 'Complete' : 'Incomplete';
	}

	set done(value) {
		if (value !== undefined && typeof value === 'boolean') {
			this._done = value;
		} else {
			console.error('Error! MF!');
		}
	}

	complete() {
		this.done = true;
		console.log(`The task ${this.title} is complete`);
	}

	static getDefaultTitle() {
		return 'Task';
	}
}

Task.count = 0;

let task  = new Task('Clean up the room');
let task2 = new Task('Buy products');
let task3 = new Task();

console.log(task.title);
console.log(task2.title);
console.log(task3.title);
// console.log(task2.complete());
task2.complete();

console.log(Task.count);
console.log(task3._done);
task3.complete();
console.log(task3._done);
// task.getDefaultTitle();
task3.done;
console.log(task3.done);