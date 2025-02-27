// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) { // 1,2,3,4
    // i => number of #
    // n - i => number of spaces
    const val = [...new Array(i).fill('#'), ...new Array(n - i).fill(' ')].join('');
    console.log(val)
  }
}

// Sample A (Recursive)
function steps1(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}
// Iterative
function steps2(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

module.exports = steps;
