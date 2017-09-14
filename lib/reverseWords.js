/**
 * 557. Reverse Words in a String III
 * @param {string} s
 * @return {string}
 */
let reverseWords = (s) => {
  let result = ''
  // turn string into array
  let words = s.split(' ')
  words.forEach((word, index) => {
    result += reverseWord(word)
    // add space
    if (index !== (words.length -1)) {
      result += ' '
    }
  })
return result
}

/**
 * reverse word
 * @param {String} word 
 */
function reverseWord(word) {
  let result = ''
  for (let index = word.length - 1; index >= 0; index--) {
    result += word[index]
  }
  return result
}

module.exports = reverseWords