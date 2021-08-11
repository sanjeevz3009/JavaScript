const prompt = require('prompt-sync')({sigint: true});

const firstInput = prompt('Enter something: ');
const secondInput = prompt('Enter something: ');

console.log(firstInput + secondInput)