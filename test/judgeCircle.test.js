const leetcode = require('..')
const assert = require('assert')

describe('657. judgeCircle', () => {
  it('input: ("ULDR"), output: true', () => {
    let result = leetcode.judgeCircle("ULDR")
    assert(result)
  })
  it('input: ("ULLR"), output: false', () => {
    let result = leetcode.judgeCircle('ULLR')
    assert(!result)
  })
})
