const leetcode = require('..')
const assert = require('assert')

describe('461. findComplement', () => {
  it('input: (5), output: 2', () => {
    let result = leetcode.findComplement(5)
    assert.equal(result, 2)
  })
  it('input: (1), output: 0', () => {
    let result = leetcode.findComplement(1)
    assert.equal(result, 0)
  })
})
