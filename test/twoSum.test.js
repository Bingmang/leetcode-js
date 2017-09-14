const leetcode = require('..')
const assert = require('assert')

describe('1. twoSum', () => {
  it('input: ([3, 9, -3, 40], 0), output: [0, 2]', () => {
    let result = leetcode.twoSum([3, 9, -3, 40], 0)
    assert(result[0] === 0 && result[1] === 2)
  })
})
