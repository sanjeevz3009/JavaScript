// Use arrays and objects to simplify rock-paper-scissors.
const prompt = require('prompt-sync')({sigint: true});

const CHOICES = ['rock', 'paper', 'scissors'];

const LOSING_CHOICE = {
	rock: 'scissors',
	paper: 'rock',
	scissors: 'paper',
};

let userChoice;

do {
	const randomNumber = Math.floor(Math.random() *3);
	const computerChoice = CHOICES[randomNumber];

	userChoice = prompt('Enter your choice (rock, paper, scissors) or the word "stop": ');

	if (userChoice !== 'stop') {
		// Check that the user has input valid choice.
		if (!CHOICES.includes(userChoice)) {
			console.error('Sorry, the only options are rock, paper and scissors.');
			console.error('Try again!');
		}
		else if (userChoice === computerChoice) {
			console.log("It's a draw, we both have", userChoice);
		}	else if (LOSING_CHOICE[userChoice] === computerChoice) {
			console.log(`You win with ${userChoice} over ${computerChoice}`);
		}	else {
			console.log(`I win with ${computerChoice} over ${userChoice}`);
		}
	}
}	while (userChoice !== 'stop');

console.log('Thank you for playing the game!')

//