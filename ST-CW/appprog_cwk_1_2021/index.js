"use strict";
/*
* Application Programming Coursework 1
*
* If you open `index.html` in your browser you will see
* a series of unit tests. The challenge is to make all of these
* tests pass, similar to your worksheets.
*
* All code you write must be contained within this file.
* Do not modify `tests.js` (although you should read it to see
* exactly what we are testing)
*
* For the first two tests, we have started the functions for you.
* For the subsequent tests, you will need to write them in this file
* yourself.
*
* Remember to make regular backups of your work.
*
* ALL WORK MUST BE YOUR OWN.
*
* If you do not attempt the advanced challenge, your maximum possible
* mark will be 75% for this coursework.
*
* This assessment is worth 50% of your overall module mark.
*/

// modify these functions
// ...

function id () {
  return "UP2002235";
}

function easyStart () {
  return true;
}

/**
 * Don't delete me, you'll need me later :)
 */
function numToArray(limit) {
  let result = [];
  for (let i=limit; 1<=i; i-=1) {
    result.push(i);
  }
  return result;
}

// add the remaining functions here
// ...

function greet(name) {
  if (name === undefined) {
    return ('Hello mystery person how are you?');

  } else if (name !== undefined) {
    return (`Hello ${name} how are you?`);
  }
}

function palindrome(candidate, ignore) {
  if (!candidate) {
    return false;

  } else {
    // strip all whitespaces
    if (ignore) candidate = candidate.replace(/\s+/g, '');
    // convert string to an array, reverse array values
    // and convert it into a string
    const reverseString = candidate.split('').reverse().join('');

    if (reverseString === candidate) {
      return true;
    } else {
      return false;
    }
  }
}

function sign(x) {
  if (x > 0) {
    return ('positive');

  } else if (x < 0) {
    return ('negative');

  } else {
    return ('neither');
  }
}

function nSay(msg, n) {
  let array1 = [];
  for (let i=0; i<n; i+=1) {
    array1.push(msg);
  }
  return array1;
}

function wordCount(str) {
  let wordCount = 0;
  // keep track of the context
  let foundFirstWord = false;
  let previousWasSpace = false;

  for (let i=0; i<str.length; i++) {
      if (!foundFirstWord) {
          if (str[i] !== ' ') {
              foundFirstWord = true;
              wordCount = 1;
              console.log("1", foundFirstWord, wordCount);
          }
      }   else {
          if (str[i] !== ' ' && previousWasSpace) {
              wordCount += 1;
              previousWasSpace = false;
              console.log("2", previousWasSpace, wordCount);
          }
          if (str[i] === ' ') {
              // remember for the next character that the previous was a space
              previousWasSpace = true;
              console.log("3", previousWasSpace);
          
          }
      }
  }
  return (wordCount);
}

function charCount(str) {
  // strip all whitespaces
  const strippedWhiteSpaces = str.replace(/\s+/g, '');
  const charCount = strippedWhiteSpaces.length;
  return charCount;
}

function acronym(str) {
  let acronymArray = [];
  const stripWhiteSpaces = str.replace(/\s+/g, '');
  const array = stripWhiteSpaces.split('');

  for (let i=0; i<array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      acronymArray.push(array[i]);
    }
  }
  return acronymArray.join('');
}

function honours(mark) {
  const honoursClass = ["First", "Upper Second", "Lower Second", "Third", "Fail"];
  if (mark >= 70) {
    return honoursClass[0];

  } else if (mark >= 60 && mark < 70) {
    return honoursClass[1];

  } else if (mark >= 50 && mark < 60) {
    return honoursClass[2];

  } else if (mark >= 40 && mark < 50) {
    return honoursClass[3];

  } else {
    return honoursClass[4];
  }
}

function uniqueWords(str) {
  // convert the string to lowercase and split it to store in an array
  const stringArr = str.toLowerCase().split(' ');
  let resultArr = [];

  // if the word isn't already in the list, push it to the list
  for (const word of stringArr) {
    if (!resultArr.includes(word)) {
      resultArr.push(word);
    }
  }
  return resultArr;
}

function clickAttacher(selector, cn) {
  const button = document.querySelectorAll(selector);
  for (const b of button) {
    b.addEventListener('click', ()=> b.classList.toggle(cn));
  }
}

function drawChessBoard(canvas) {
  const context = canvas.getContext('2d');
  const squareSize = 60;

  // recording the locations of the chess piece images
  const bbishop = new Image();
  bbishop.src = './i/bbishop.png';
  const bking = new Image();
  bking.src = './i/bking.png';
  const bknight = new Image();
  bknight.src = './i/bknight.png';
  const bpawn = new Image();
  bpawn.src = './i/bpawn.png';
  const bqueen = new Image();
  bqueen.src = './i/bqueen.png';
  const brook = new Image();
  brook.src = './i/brook.png';
  
  const wbishop = new Image();
  wbishop.src = './i/wb.png';
  const wking = new Image();
  wking.src = './i/wking.png';
  const wknight = new Image();
  wknight.src = './i/wknight.png';
  const wpawn = new Image();
  wpawn.src = './i/wpawn.png';
  const wqueen = new Image();
  wqueen.src = './i/wqueen.png';
  const wrook = new Image();
  wrook.src = './i/wrook.png';
  
  // list that will be used to iterate through to place the chess pieces
  const top = [brook, bknight, bbishop, bqueen, bking, bbishop, bknight, brook];
  const bottom = [wrook, wknight, wbishop, wqueen, wking, wbishop, wknight, wrook];

  function drawChessPieces(list, position){
    for (const [x, p] of list.entries()){
      context.drawImage(p, x*squareSize, position*squareSize);
    }
  }

  // places the pawns on the chess board
  function placePiecesPawns(pawnColour, position){
    for (let x = 0; x < 8; x++){
      context.drawImage(pawnColour, x*squareSize, position*squareSize);
    }
  }
  
  // places rest of the chess pieces in the chess board
  function placePieces(){
    for (let y = 0; y < 8; y++){
      for (let x = 0; x < 8; x++){
        context.fillStyle = ((x+y) % 2 === 0 ? "#FFFFFF" : "#A0A0A0");
        context.fillRect(x*squareSize, y*squareSize, squareSize, squareSize);
      }
    }
    for (const [x, p] of top.entries()){
      context.drawImage(p, x*squareSize, squareSize*0)
    }
    for (let x = 0; x < 8; x++){
      context.drawImage(bpawn, x*squareSize, 60);
    }
    for (const [x, p] of bottom.entries()){
      context.drawImage(p, x*squareSize, squareSize*7)
    }
    for (let x = 0; x < 8; x++){
      context.drawImage(wpawn, x*squareSize, squareSize*6);
    }
    window.requestAnimationFrame(placePieces);
  }
  window.requestAnimationFrame(placePieces);

  return true;
}

function playChess() {
  return true;
}

