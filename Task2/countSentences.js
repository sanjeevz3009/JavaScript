const prompt = require('prompt-sync')({sigint: true});

const text = prompt("Enter several sentences: ");

let sentenceCount = 0;

for (let i=0; i<text.length; i++) {
    if (text[i] === '.') {
        if (i === text.length - 1) {
            // a full stop at the end of the string ends a sentence
            sentenceCount += 1;
        }   else if (text[i+1] === ' ') {
            // a full stop before a space ends a sentence
            sentenceCount += 1;
        }
    }
}

console.log("Sentence count: ", sentenceCount)

