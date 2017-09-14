/**
 * 575. Distribute Candies
 * @param {number[]} candies
 * @return {number}
 */
let distributeCandies = (candies) => {
  return Math.min(candies.length / 2, (new Set(candies)).size)
}

module.exports = distributeCandies