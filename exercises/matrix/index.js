// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)     (row, col)
//     [[1, 2, 3], (0,0) (0,1) (0,2)
//     [8, 9, 4],  (1,0) (1,1) (1,2)
//     [7, 6, 5]]  (2,0) (2,1) (2,2)
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // First row = [1, ... n]
  // Last row = [prev - 1, ... the 1st item in row 1 + n - 1 ]
  const matrix = new Array(n).fill(new Array(n).fill(''));
  let row = 0
  let col = 0

  for (let index = 1; index <= n*n; index++) {
    if (matrix[row][col] === '') {
      matrix[row][col] = index;
      col++;
    } else {
      row++;
      if (matrix[row][col] === '') {
        matrix[row][col] = index;
      }
    }
    // } else if (matrix[0].length === n) {
    //   matrix[1][col] = index;
    // }
  }

  // left to right, top to bottom, right to left, bottom to top
}

// Sample A
function matrix1(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
