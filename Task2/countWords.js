const prompt = require('prompt-sync')({sigint: true});

const words = prompt("Enter a sentence: ");

let spaceCount = 0;

for (let i=0; i<words.length; i++) {
	if (words[i] === ' ') spaceCount += 1;
}

// a sentece has words separated by spaces
// so there are one more words than spaces

const wordCount = spaceCount + 1;

console.log("Word count: ", wordCount);
