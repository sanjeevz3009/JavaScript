// given an array, this function puts it in revese order

function reverseArray(arr) {
    // go from the beginning of the array to the middle
    // swap the item in the first half wirh an item in the second half

    for (let i=0; i<arr.length/2; i+=1) {
        const firstHalfItem = arr[i];
        const secondHalfItem = arr[arr.length - 1 - i];
        arr[i] = secondHalfItem;
        arr[arr.length - 1 - i] = firstHalfItem;
    }
    return arr;
}

// test the function - we should see 3, 2, 1 and 4, 3, 2, 1
console.log('Test 123: ', reverseArray([1, 2, 3]));
console.log('Test 1234 ', reverseArray([1, 2, 3, 4]));

