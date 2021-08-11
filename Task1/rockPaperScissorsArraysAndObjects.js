// Use arrays and objects to simplify rock-paper-scissors.

const prompt = require('prompt-sync')({sigint: true});

const CHOICES  = ['rock', 'paper', 'scissors'];

const LOSING_CHOICE = {
	rock: 'scissors',
	paper: 'rock',
	scissors: 'paper',
};

const randomNumber = Math.floor(Math.random() *3);
const computerChoice = CHOICES[randomNumber];

const userChoice = prompt('Enter your choice (rock, paper, scissors): ');

if (userChoice === computerChoice) {
	console.log("It's a draw, we both have", userChoice)
}	else if (LOSING_CHOICE[userChoice] === computerChoice) {
	console.log(`You win with ${userChoice} over ${computerChoice}`);
}	else {
	console.log(`I win with ${computerChoice} over ${userChoice}`);

}