/**
 * 344. Reverse String
 * @param {string} s
 * @return {string}
 */
let reverseString = (s) => {
  let result = ''
  for(let index = s.length - 1; index>-1;index--) {
    result += s.charAt(index)
  }
  return result
}

module.exports = reverseString