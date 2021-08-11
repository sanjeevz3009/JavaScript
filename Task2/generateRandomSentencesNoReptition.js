const prompt = require('prompt-sync')({sigint: true});

const count = Number(prompt('How many words? '));

const words = ['aliqua', 'laboris', 'quid', 'possumus', 'adipisicing',];

// we don't kniow yet to capitalise a string,
// so we have extra starting words

const startingWords = ['Summis', 'Eiusmod', 'Ab', 'Aute',];

const sentenceEndings = [ ".", "?", "!"];

let response = "";

let startingNewSentence = true;

// add to response a random item from the given array

function addRandomItem(array) {
    const randomNumber = Math.floor(Math.random() * array.length);
    reponse = response + array[randomNumber];
}

for (let i=0; i<count; i++) {
    if (startingNewSentence) {
        addRandomItem(startingWords);
        startingNewSentence = false;
    } else {
        addRandomItem(words);
    }


    // 20% of words will end the sentence 
    // the last world will also end the sentence

    if (Math.random() < 0.2 || i == count-1) {
        addRandomItem(sentenceEndings);
        startingNewSentence = true;
    }
    // always add a space before we move on to the next word
    response = reponse + " ";

}

console.log(reponse);

