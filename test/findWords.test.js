const leetcode = require('..')
const assert = require('assert')

describe('500. Keyboard Row', () => {
  it('input: (["Hello", "Alaska", "Dad", "Peace"]), output: ["Alaska", "Dad"]', () => {
    let result = leetcode.findWords(['Hello', 'Alaska', 'Dad', 'Peace'])
    assert(result[0] === 'Alaska' && result[1] === 'Dad')
  })
  it('input: ([]), output: []', () => {
    let result = leetcode.findWords([])
    assert.equal(result.length, 0)
  })
  it('input: (["Zbc"]), output: ["Zbc"]', () => {
    let result = leetcode.findWords(['Zbc'])
    assert.equal(result[0], 'Zbc')
  })
})
