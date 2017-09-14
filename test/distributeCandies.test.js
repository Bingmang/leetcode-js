const leetcode = require('..')
const assert = require('assert')

describe('575. Distribute Candies', () => {
  it('input: ([1,1,2,2,3,3]), output: 3', () => {
    let result = leetcode.distributeCandies([1, 1, 2, 2, 3, 3])
    assert.equal(result, 3)
  })
  it('input: ([1,1,2,3]), output: 2', () => {
    let result = leetcode.distributeCandies([1, 1, 2, 3])
    assert.equal(result, 2)
  })
  it('input: ([1,1]), output: 1', () => {
    let result = leetcode.distributeCandies([1, 1])
    assert.equal(result, 1)
  })
  it('input: ([1000,1,1,1]), output: 2', () => {
    let result = leetcode.distributeCandies([1000, 1, 1, 1])
    assert.equal(result, 2)
  })
  it('input: ([0,0,14,0,10,0,0,0]), output: 3', () => {
    let result = leetcode.distributeCandies([0, 0, 14, 0, 10, 0, 0, 0])
    assert.equal(result, 3)
  })
})
