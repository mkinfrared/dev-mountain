let firstName = 'Bill',
	lastName  = 'Gates',
	email     = 'gates@hotmail.com';

let person = {
	firstName: firstName,
	lastName : lastName,
	email    : email,
	sayHello : function () {
		console.log(`Hi my name is ${firstName} ${lastName}`);
	},
};

let person2 = {
	firstName,
	lastName,
	email,
	sayHello() {
		console.log(`Hi my name is ${firstName} ${lastName}`);
	}
};

console.log(person);
console.log(person2);
console.log(person2.lastName);

function craeteCar(property, value) {
	let car       = {};
	car[property] = value;
	return car;
}

function createCar(property, value) {
	return {
		[property]: value,
		[property.toUpperCase()]: value,
		['get' + property](){
			return this[property];
		}
	}
}

console.log(createCar('vin', 123456));
console.log(person2.sayHello());
