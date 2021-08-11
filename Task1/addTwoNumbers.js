const prompt = require('prompt-sync')({sigint: true});

const firstInput = Number(prompt('Enter a number: '));
const secondInput = Number(prompt('Enter a number: '));

console.log(firstInput + secondInput);