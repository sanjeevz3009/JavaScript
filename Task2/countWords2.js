const prompt = require('prompt-sync')({sigint: true});

const sentence = prompt("Enter a sentence: ");

let wordCount = 0;

// go through the string keep track of the context

let foundFirstWord = false;
let previousWasSpace = false;

for (let i=0; i<sentence.length; i++) {
    if (!foundFirstWord) {
        // before the first word, just like for a non-space
        if (sentence[i] !== ' ') {
            foundFirstWord = true;
            wordCount = 1;
            console.log("1", foundFirstWord, wordCount)
        }
    }   else {
        // we have seen the first word 
        // add a word if we are on a non-sapce that had a space before
        if (sentence[i] !== ' ' && previousWasSpace) {
            wordCount += 1;
            previousWasSpace = false;
            console.log("2", previousWasSpace, wordCount)
        }
        if (sentence[i] === ' ') {
            // remember for the next character that the previous was a space
            previousWasSpace = true;
            console.log("3", previousWasSpace)
        
        }
    }
 }

 console.log("Word count: ", wordCount);

