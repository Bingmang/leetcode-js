/**
 * @param {number} num
 * @return {number}
 */

let findComplement = (num) => {
  // let mask = ~0
  // // find last 1 in num
  // while (num & mask) {
  //   mask <<= 1
  // }
  // return ~mask & ~num
  return num ^ parseInt('1'.repeat(num.toString(2).length), 2)
}

module.exports = findComplement