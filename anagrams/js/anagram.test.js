import { findAnagram } from './anagram.js'

test('empty string', () => {
  expect(findAnagram([''])).toEqual([['']])
})

test('single character', () => {
  expect(findAnagram(['a'])).toEqual([['a']])
})

test('one group', () => {
  expect(findAnagram(['ab', 'ba'])).toEqual([['ab', 'ba']])
})

test('example 1', () => {
  expect(findAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
    ['bat'],
    ['nat', 'tan'],
    ['ate', 'eat', 'tea'],
  ])
})
