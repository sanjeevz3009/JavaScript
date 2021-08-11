const prompt = require('prompt-sync')({sigint: true});

const count = Number(prompt('How many words? '));

const words = [
    'aliqua', 'laboris', 'quid', 'possumus','adipisicing',
];

let response = "";

for (let i=0; i<count; i++) {
    const randomNumber = Math.floor(Math.random() * words.length);
    console.log(randomNumber)
    response = response + words[randomNumber] + " ";
}

console.log(response)

