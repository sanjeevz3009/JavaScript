const prompt = require('prompt-sync')({sigint: true});

const fileName = prompt('Enter a file name: ');

const lastDotPosition = fileName.lastIndexOf('.');

if (lastDotPosition < 1) {
    console.log('File name does not have an extension: ', fileName);

} else {
    const withoutExtension = fileName.substring(0, lastDotPosition);
    console.log('File name without extension: ', withoutExtension);
}

