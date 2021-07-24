import { findFirstUniqueChar } from './string.js'

test('empty', () => {
  expect(findFirstUniqueChar()).toEqual(-1)
})

test('repeat characters', () => {
  expect(findFirstUniqueChar('aa')).toEqual(-1)
  expect(findFirstUniqueChar('aabb')).toEqual(-1)
})

test('has unique', () => {
  expect(findFirstUniqueChar('a')).toEqual(0)
  expect(findFirstUniqueChar('aab')).toEqual(2)
  expect(findFirstUniqueChar('aba')).toEqual(1)
})

test('multiple uniques', () => {
  expect(findFirstUniqueChar('ab')).toEqual(0)
  expect(findFirstUniqueChar('aaabc')).toEqual(3)
  expect(findFirstUniqueChar('aaabcdd')).toEqual(3)
})
