const prompt = require('prompt-sync')({sigint: true});
const number = Number(prompt('Enter a number: '));

if (!Number.isNa(NNumber(number))) {
	console.log(number, 'is a number!');	
}	else {
		console.log(number, 'is not a number!');
}
