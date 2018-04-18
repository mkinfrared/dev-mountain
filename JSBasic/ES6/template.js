const pi = 4;
// pi = 6; НЕЛЬЗЯ ПЕРЕОПРЕДЕЛИТЬ И ТОЧКА!

// ОПЕРАТОР РАЗВОРОТА "..." SPREAD OPERATOR

let staticLanguages  = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

let languages = [staticLanguages, 'C#', dynamicLanguages, 'Python'];
console.log(languages);
let languages1 = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];
console.log(languages1);

function add(x, y, z) { console.log(x + y + z); }

let numbers = [1, 2, 3];

add(numbers); //БУДЕТ ОШИБКА

add(...numbers);


// TEMPLATE STRINGS - ШАБЛОННЫЕ СТРОКИ

function greet(name) { console.log(`Hello ${name}`); }

greet('Bill');

function crateEmail(to, from, subject, message) {
	console.log(`
		To: ${to}
		From: ${from}
		Subject: ${subject}
		Message: ${message}
	`);
}

crateEmail('john@mail.com', 'jane@mail.com', 'Hello', 'how are you doing?');

function sum(x, y) {
	console.log(`${x} + ${y} = ${x + y}`);
}

sum(5, 6);

function upperName(literals, value) {
	return literals[0] + value.toUpperCase();
}

let name = 'Bill';
console.log(upperName`Hello ${name}`);