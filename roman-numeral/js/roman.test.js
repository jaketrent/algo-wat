import { fromRoman, toRoman } from './roman.js'

describe('#fromRoman', () => {
  const cases = [
    [0, ''],
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'IX'],
    [10, 'X'],
    [20, 'XX'],
    [49, 'XLIX'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ]
  cases.forEach(([output, input]) => {
    test(`${input} converts to ${output}`, () => {
      expect(fromRoman(input)).toBe(output)
    })
  })
})

describe('#toRoman', () => {
  const cases = [
    [0, ''],
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'IX'],
    [10, 'X'],
    [20, 'XX'],
    [49, 'XLIX'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ]
  cases.forEach(([input, output]) => {
    test(`${input} converts to ${output}`, () => {
      expect(toRoman(input)).toBe(output)
    })
  })
})
