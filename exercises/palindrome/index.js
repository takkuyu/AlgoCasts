// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (!str || str.length <= 1) return false;

  let head = 0;
  let tail = str.length - 1;
  const middle = Math.floor(str.length / 2) - 1;

  while(true) {
    // a b c c b a -> 6 (middle = 2)
    // a b c d c b a -> 7 (middle = 2)
    // a b a -> 3 (middle = 1 -> 0)
    // a a -> 2 (middle = 0)
    if (str[head] === str[tail]) {
      if (head == middle) {
        return true
      }
      head++;
      tail--;
    } else {
      return false
    }
  }
}

// Sample A
// but this does double operations
function palindrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
