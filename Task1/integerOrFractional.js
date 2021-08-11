const prompt = require('prompt-sync')({sigint: true});
const number = Number(prompt('Enter a number: '));

if (Number.isInteger(number)) {
	console.log(number, 'is integer!');
}	else {
		console.log(number, 'is fractional!');
}