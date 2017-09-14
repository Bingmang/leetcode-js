/**
 * findWords
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = (words) => {
  let result = []
  words.forEach((word) => {
    if (findWord(word)) {
      result.push(word)
    }
  })
  return result
}

/**
 * Select keyboard row
 * @param {String} word 
 * @return {Boolean}
 */
function findWord(word) {
  let keyboard_row1 = 'qwertyuiop'
  let keyboard_row2 = 'asdfghjkl'
  let keyboard_row3 = 'zxcvbnm'
  let word_low = word.toLowerCase()
  if (keyboard_row3.indexOf(word_low[0]) > -1) {
    return checkRow(word_low, keyboard_row3)
  }
  else if (keyboard_row2.indexOf(word_low[0]) > -1) {
    return checkRow(word_low, keyboard_row2)
  }
  else {
    return checkRow(word_low, keyboard_row1)
  }
}

/**
 * Check whether the word in the keyboard row
 * @param {String} word 
 * @param {String} keyboard_row 
 * @return {Boolean}
 */
function checkRow(word, keyboard_row) {
  for (let char of word) {
    if (keyboard_row.indexOf(char) < 0) {
      return false
    }
  }
  return true
}

module.exports = findWords