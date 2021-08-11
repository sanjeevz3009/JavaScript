const a = [
  [1, 2, 3, 4, 5],
  [2, 4, 5, 6, 7],
  [3, 6, 6, 9, 10],
  [4, 0, 7, 0, 0],
  [0, 0, 8, 0, 0],
]

const n = 5;

function reportIncreasingSequencesOfNumbers(a) {
  // find increasing-by-one sequences going downwards
  // log each one when it's found
  
  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      const seq = findColumnSequence(a, row, col);
      if (seq != null) {
        console.log('we are at', row, col)
        console.log(seq);
      }
    }
  }
}

function findColumnSequence(a, row, col) {
  const seq = [ a[row][col] ];

  let done = false;
  let currentRow = row;
  do {
    // go downwards
    // if we encounter end of array, we're done
    // if we encounter a number that's not the above plus 1 we're done

    const nextRow = currentRow + 1;
    
    if (nextRow >= n) {
      done = true;
    } else if (a[nextRow][col] != a[currentRow][col] + 1) {
      done = true;
    } else {
      seq.push(a[nextRow][col]);
      currentRow = nextRow;
    }
  } while (!done);

  if (seq.length > 1) { 
    return seq;
  } else {
    return null;
  }
  
}


reportIncreasingSequencesOfNumbers(a);