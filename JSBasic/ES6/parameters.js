function greet(greeting, name) {
	console.log(`${greeting} ${name}`);
}

greet('hi');

function greet1(greeting = 'Hello', name = 'friend') {
	console.log(`${greeting} ${name}`);
}

greet1('Hello');

function sum() {
	let sum = 0;
	Array.prototype.forEach.call(arguments, function (value) {
		sum += value;
	});
	console.log(sum);
}

sum(5, 7, 2, 10);
sum1(5, 7, 2, 10);
sum2(5, 7, 2, 10);

function sum1(...values) {
	let sum = 0;
	values.forEach(function (value) { sum += value; });
	console.log(sum);
}

function sum2(...args) {
	let result = args.reduce(function (prev, current) { return prev + current; });
	console.log(result);
}
