/**
 * 665. Non-decreasing Array
 * @param {number[]} nums
 * @return {boolean}
 */
let checkPossibility = (nums) => {
  let punish_point = 0
  for (let index = 1; index < nums.length; index++) {
    // 数组中出现逆序,记一次惩罚点数
    if (nums[index] < nums[index - 1]) {
      punish_point++
      if (punish_point > 1) {
        return false
      }
      // 处理多位逆序问题,当检测到多位逆序直接判定失败
      if (index > 1
      && nums[index - 1] > nums[index + 1]
      && nums[index] < nums[index - 2]) {
        return false
      }
    }
  }
  return true
}

module.exports = checkPossibility
