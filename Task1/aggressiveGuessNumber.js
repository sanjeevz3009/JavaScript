const prompt = require('prompt-sync')({sigint: true});

const winningNumber = Math.floor(Math.random() * 10) + 1;

console.log("I have thought of an integer between 1 and 10.");

const guess = Number(prompt("Tell me what you think it is: "));

if (!Number.isInteger(guess)) {
	console.log("Enter a integer!");
}	else if (guess > 10 || guess < 1 ) {
	console.log("I told you it would be between 1 and 10, stupid!");	
}	else if (guess === winningNumber) {
	console.log("You got it right!");
}	else{
	console.log("I was thinking of ", winningNumber)
}

