const leetcode = require('..')
const assert = require('assert')

describe('344. Reverse String', () => {
  it('input: ("hello"), output: "olleh"', () => {
    let result = leetcode.reverseString('hello')
    assert.equal(result, 'olleh')
  })
  it('input: (""), output: ""', () => {
    let result = leetcode.reverseString('')
    assert.equal(result, '')
  })
})
