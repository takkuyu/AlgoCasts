// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const arr = [];
//   for (let index = 0; index <= n; index++) {
//     if (index < 2) {
//       arr[index] = index;
//       continue;
//     }
//     arr[index] = arr[index - 2] + arr[index - 1];
//   }

//   return arr[n]
// }

// Recursive
function fib(n, i = 0, arr = []) {
  if (i === n + 1) {
    return arr[n];
  }

  if (i < 2) {
    arr[i] = i;
  } else {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  // Note: Needs to "return" fib()!
  return fib(n, i + 1, arr);
}


// Sample A
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
