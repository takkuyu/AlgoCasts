// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let result = [];
  let currentPos = 0;

  while(true) {
    // currentPos = 0, 2, 4, 6, 8
    // currentPos = 2, 4, 6, 8, 10
    const subArr = array.slice(currentPos, currentPos + size);
    if (subArr.length >= 1) {
      result.push(subArr);
      currentPos += size;
    } else {
      break;
    }
  }

  return result;
}

// Sample A
function chunk2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

function chunk3(array, size) {
  const chunked = [];

  // [ [1,2,], ... ]
  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      // Create another subarray
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

module.exports = chunk;
