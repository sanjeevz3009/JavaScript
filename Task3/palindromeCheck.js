const prompt = require('prompt-sync')({signit: true});

// reverseArray here is the same as in the previous example
function reverseArray(arr) {
    // go from the beginning of the array to the middle
    // awap the item in the first haldf with an item in the second half

    for (let i=0; i<arr.length/2; i+=1) {
        const firstHalfItem = arr[i];
        const secondHalfItem = arr[arr.length - 1 - i];
        arr[i] = secondHalfItem;
        arr[arr.length - 1 - i] = firstHalfItem;
    }
    return arr;
}

function reverseString(str) {
    // Array.from() can make an array of characters from a string
    const array = Array.from(str);

    reverseArray(array);

    // Array.join() makes an array into a string
    return array.join('');
}

// check that the word is a palindrome by comparing it to its reverse

function isPalindrome(word) {
    return word === reverseString(word);
}

const word = prompt('Enter a word: ');

if (isPalindrome(word)) {
    console.log(`"${word}" is a palindrome`);
} else {
    console.log(`"${word}" is not a palindrome, as its rerverse spells ${reverseString(word)}`);
}

