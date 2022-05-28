// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#' 1
//   pyramid(2)
//       ' # '
//       '###' 3
//   pyramid(3)
//       '  #  ' [1] 1
//       ' ### ' [2] 3
//       '#####'  [3] 5
//   pyramid(4)
//       '   #   ' 1
//       '  ###  ' 3
//       ' ##### ' 5
//       '#######' 7

function pyramid(n) {
  // number of # = number of # in the previous level + 2
  const size = 2 * (n - 1) + 1; // 5
  // floor(7 / 2) = index of the very first #.
  let middle = Math.floor(size / 2); // 2
  let pounds = 1;

  for (let i = 0; i < n; i++) {
    let str = '';

    for (let j = 0; j < size; j++) { // 5
      if (j >= middle && j < middle + pounds) {
        str += '#'
      } else {
        str += ' '
      }
    }

    console.log(str)

    middle--;
    pounds += 2;
  }
}

// Sample A
function pyramid1(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && column <= midpoint + row) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}
// Recursive
function pyramid2(n, row = 0, level = '') {
  // Base case
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid2(n, row, level + add);
}

module.exports = pyramid;
