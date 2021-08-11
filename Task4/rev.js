// This tool reverses a text file:
// It will write into the ouput file the contents
// of the input file reversed character by character.

const fs = require('fs');

if (process.argv.length !== 4) {
    console.error('Usuage: node rev.js inputfile outputfile');
    process.exit()
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

const fileContents = fs.readFileSync(inputFile, 'utf-8');

// We can use Array reverse() to do our job here.
const characters = Array.from(fileContents);
const reversed = characters.reverse();

// join('') put the array back together as a string
fs.writeFileSync(outputFile, reversed.join(''));


