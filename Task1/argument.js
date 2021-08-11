const prompt = require('prompt-sync')({sigint: true});

const input = prompt('Enter something: ');

console.log(input.length);
