// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function mapStr(str) {
  const map = {};
  for (const char of str) {
    if (map[char] !== undefined) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  return map;
}

function anagrams(stringA, stringB) {
  const strAMap = mapStr(stringA.replace(/[^\w]/g, '').toLowerCase());
  const strBMap = mapStr(stringB.replace(/[^\w]/g, '').toLowerCase());

  if (Object.keys(strAMap).length !== Object.keys(strBMap).length) return false;

  for (const char in strAMap) {
    if (strAMap[char] !== strBMap[char]) {
      return false
    }
  }

  return true
}

// Sample A
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;
