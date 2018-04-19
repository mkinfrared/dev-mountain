class Task {
	constructor(title) {
		this._title = title;
		this.done = false;
		Task.count++;
		console.log('Creating a task');
	}
	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}
	static getDefaultTitle (){
		return 'Task';
	}
	complete() {
		this.done = true;
		console.log(`Task ${this.title} is complete`);
	}
}

Task.count = 0;

class Subtask extends Task {
	constructor(title, parent) {						// Нужно указать праметры
		super(title);			// Но можно использовать spread (...) вместе с arguments
		this.parent = parent;
		console.log('Creating a subtask');
	}

	complete() {
		super.complete();
		console.log(`Subtask ${this.title} is complete`);
	}
}

let task    = new Task('Learn Javascript'),
	subtask = new Subtask('Learn ES6', task);

console.log(task);
console.log(subtask);

console.log(task instanceof Task);
console.log(subtask instanceof Task);

task.complete();
subtask.complete();

console.log(Subtask.getDefaultTitle());
console.log(Subtask.count);