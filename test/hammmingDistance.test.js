const leetcode = require('..')
const assert = require('assert')

describe('461. hammingDistance', () => {
  it('input: (1, 4), output: 2', () => {
    let result = leetcode.hammingDistance(1, 4)
    assert.equal(result, 2)
  })
})
