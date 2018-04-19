var answers        = ["yes", "no", "yes", "no", "no", "no"]
let flippedAnswers = answers.map((answer) => (answer === 'yes') ? 'no' : 'yes');
console.log(flippedAnswers);
//map over answers
//change yes into no and no into yes

//DESIRED RESULT = ["no", "yes", "no", "yes", "yes", "yes"]


var employees = [
	{name: "a-aron", pay: 12},
	{name: "b-bron", pay: 18},
	{name: "c-ron", pay: 20},
	{name: "le-bron", pay: 21},
];

//map over employees and give each employee a bump in pay by 3.
//split on the - in name and turn name into first_name and last_name
//save it to a new array variable


//DESIRED RESULT =
/*
 var employees = [
 { last_name: "aron", first_name: "a", pay: 15 },
 { last_name: "bron", first_name: "b", pay: 21 },
 { last_name: "ron", first_name: "c", pay: 23 },
 { last_name: "bron", first_name: "le", pay: 24 },
 ]
 */

let employeeDesired = employees.map((obj) => obj.pay + 3);
console.log(employeeDesired);

let names = employees.map((obj) => {
	let arr = obj.name.split('-');
	return {
		firstname: arr[0],
		lastName : arr[1]
	};
});
console.log(names);