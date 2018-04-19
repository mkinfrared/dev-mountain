let roundScores = [36, 39, 44, 49, 45, 48, 52];

//Use reduce to get a sum
let sum = roundScores.reduce((total, cv) => total + cv);
console.log(sum);
//Use the sum to get an average
let avg = sum / roundScores.length;
console.log(avg);

//Handicap is 4
//Use a map to reduce all scores by 4
//Use a reduce to get a sum
//Use the sum to get an average
let handicapAvg = roundScores.map((score) => score - 4)
							 .reduce((pv, currentValue) => pv + currentValue)
				  / roundScores.length;
console.log(handicapAvg);


let lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"];

//Use reduce to go through the lyricWords and concatenate them together
let song = lyricWords.reduce((song, word) => `${song} ${song} ${word}`);
console.log(song);

let scores = [[4, 7], [7, 2], [4, 7], [5, 5]];

let scoreBoard = scores.reduce((scoreBoard, game) => {
	if (game[0] > game[1]) {
		scoreBoard.wins++;
		console.log(scoreBoard);
	} else if (game[1] > game[0]) {
		scoreBoard.loses++;
	} else {
		scoreBoard.ties++;
	}
	console.log(scoreBoard);
	return scoreBoard
},{wins:0, loses:0, ties:0});

console.log(scoreBoard);