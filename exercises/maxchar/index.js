// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// for (let index = 0; index < str.length; index++) {
//   const element = str[index];
//   if (map[element] !== undefined) {
//     map[element] += 1;
//   } else {
//     map[element] = 1;
//   }
// }

function maxChar(str) {
  const map = {}

  for (let char of str) {
    if (map[char] !== undefined) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  const max = Math.max(...Object.values(map));
  return Object.keys(map).find(key => map[key] === max)
}

// Sample A
function maxChar2(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}


module.exports = maxChar;
