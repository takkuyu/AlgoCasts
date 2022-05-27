// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {}

  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (map[element] !== undefined) {
      map[element] += 1;
    } else {
      map[element] = 1;
    }
  }

  const max = Math.max(Object.keys(map));
  return Object.keys(map).find(item => item === max)
}

module.exports = maxChar;
