const leetcode = require('..')
const assert = require('assert')

describe('557. Reverse Words in a String III', () => {
  it(`input: ("Let's take LeetCode contest"), output: "s'teL ekat edoCteeL tsetnoc"`, () => {
    let result = leetcode.reverseWords("Let's take LeetCode contest")
    assert.equal(result, "s'teL ekat edoCteeL tsetnoc")
  })
  it('input: (""), output: ""', () => {
    let result = leetcode.reverseWords('')
    assert.equal(result, '')
  })
  it('input: ("a"), output: "a"', () => {
    let result = leetcode.reverseWords('a')
    assert.equal(result, 'a')
  })
})
