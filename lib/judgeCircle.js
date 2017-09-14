/**
 * @param {string} moves
 * @return {boolean}
 */
let judgeCircle = function(moves) {
  let counter = {
    'U': 0,
    'D': 0,
    'L': 0,
    'R': 0,
  }
  for (let char of moves) {
    counter[char]++
  }
  return (counter.U === counter.D) && (counter.L === counter.R)
}

module.exports = judgeCircle