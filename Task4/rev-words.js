// This tool reverses each word in a text file.

const fs = require('fs');

if (process.argv.length !== 3) {
    console.log('Usuage: node rev.words.js file');
    process.exit(1);
}

function reverse(string) {
    return Array.from(string).reverse().join('');
}

const fileName = process.argv[2];

const fileContents = fs.readFileSync(fileName, 'utf-8');

const lines = fileContents.split('\n');

for (const line of lines) {
    const words = line.split(' ');

    const reversedWords = [];
    for (const word of words) {
        reversedWords.push(reverse(word));
    }

    console.log(reversedWords.join(' '));
}

