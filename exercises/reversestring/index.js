// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if (!str || str.length < 2) return null

  let reverseStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  return reverseStr
}

function reverse2(str) {
  if (!str || str.length < 2) return null
  const reversedStr = str.split('').reverse().join('')
  return str == reversedStr
}

module.exports = reverse;
