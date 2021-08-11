const prompt = require('prompt-sync')({sigint: true});

const fileName = prompt('Enter a file name: ');

let foundLastDot = false;
let response = '';

// find the last dot, then copy the string before that into response
// notice the loop goes from the end of the file name string 

for (let i=fileName.length - 1; i >= 0; i--) {
    if (!foundLastDot) {
        // we do not have the last dot yet
        if (fileName[i] === '.') {
            foundLastDot = true;
        }
    }   else {
        // we have the last dot, so we copy every character
        response = fileName[i] + response;
        console.log(response)
    }
}

if (response === '') {
    // we never found a dot, or it was the first character
    console.log('File name does not have an extensiion: ', fileName);
}   else {
    console.log('File name without extension: ', response);
}

