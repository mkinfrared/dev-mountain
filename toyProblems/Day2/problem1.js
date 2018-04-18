function fizzBuzz(num) {
	for (let i = 1; i <= num; i++) {
		if (i % 15 === 0) { console.log('Bob Ross');}
		else if (i % 3 === 0) { console.log('Bob'); }
		else if (i % 5 === 0) { console.log('Ross'); }
		else {
			console.log(i);
		}
	}
}

fizzBuzz(15);

// 1 - Clarify the problem
// 2 - Data structures (Identify any data types/variables that we'll need to create to solve the problem)
// 3 - Sample Data (Pass in some values to test the function. This will help you better understand the question and any bugs that could come up)
// 4 - Solve Sample Data
// 5 - Function Signature (first line of the function + data type that will be returned)
// 6 - Code Constructs (Different )