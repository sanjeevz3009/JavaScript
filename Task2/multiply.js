const prompt = require('prompt-sync')({sigint: true})

const a = Number(prompt('Enter a positive integer: '));
const b = Number(prompt('Enter any number: '));

console.log(`${a}*${b} = ${a*b}`);

let result = 0;

// compute the multiple by a-times adding b 

for (let i=0; i<a; i++) {
	result += b;
}

console.log(`${a}*${b} = ${result}`);

