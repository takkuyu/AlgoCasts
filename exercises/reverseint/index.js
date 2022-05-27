// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const isNegative = n < 0;
  const numsStr = n.toString();
  
  if (numsStr.length === 1) return n;

  if (isNegative) {
    numsStr.replace('-', '')
  }

  const numsArr = numsStr.split('').reverse(); // ['9', '8', '1']
  const finalFormat = (isNegative ? '-' : '') + numsArr.join('').replace('0', '');

  return parseInt(finalFormat);
}

// Sample A
// The Math.sign() function returns either a positive or negative +/- 1,
// indicating the sign of a number passed into the argument. If the number passed into Math.sign() is 0, it will return a +/- 0.
// The parseInt() method parses a value as a string and returns the first integer. If the first character cannot be converted, NaN is returned.
function reverseInt2(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
