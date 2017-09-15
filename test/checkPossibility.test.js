const leetcode = require('..')
const assert = require('assert')

describe('665. Non-decreasing Array', () => {
  it('input: ([4,2,3]), output: true', () => {
    let result = leetcode.checkPossibility([4, 2, 3])
    assert(result)
  })
  it('input: ([4,2,1]), output: false', () => {
    let result = leetcode.checkPossibility([4, 2, 1])
    assert(!result)
  })
  it('input: ([1,1,1,3,1,1,1,2]), output: true', () => {
    let result = leetcode.checkPossibility([1, 1, 1, 3, 1, 1, 1, 2])
    assert(result)
  })
  it('input: ([3,4,2,3]), output: false', () => {
    let result = leetcode.checkPossibility([3, 4, 2, 3])
    assert(!result)
  })
  it('input: ([2,1,2,1]), output: false', () => {
    let result = leetcode.checkPossibility([2, 1, 2, 1])
    assert(!result)
  })
})
