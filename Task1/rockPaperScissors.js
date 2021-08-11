const prompt= require('prompt-sync')({sigint: true});

const randomNumber = Math.random();

let computerChoice;

if (randomNumber < 1/3) {
	computerChoice = 'rock';	
}	else if (randomNumber < 2/3) {
	computerChoice = 'paper';
}	else {
	computerChoice = 'scissors'
}

const userChoice = prompt('Enter your choice (rock, paper, scissors): ');

if (userChoice === computerChoice) {
	console.log("It's a draw, we both have", userChoice);
}	else if (userChoice === "rock") {
	if (computerChoice === "paper") {
		console.log("I win with paper over rock");
	}	else {
		console.log("You win with rock over scissors");
	}
}	else if (userChoice === "paper") {
	if (computerChoice === "rock") {
		console.log("You win with paper over rock");
	}	else {
		console.log("I win with scissors over paper")
	}
}	else {
	if (computerChoice === "paper") {
		console.log("You win with sicssors over paper");
	}	else {
		console.log("I win with rock over scissors")
	}
}