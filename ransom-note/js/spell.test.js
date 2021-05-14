import { canSpell } from './spell.js'

test('false if no magazine or word', () => {
  expect(canSpell()).toEqual(false)
  expect(canSpell([])).toEqual(false)
  expect(canSpell(undefined, 'aWord')).toEqual(false)
  expect(canSpell(['a'])).toEqual(false)
})

test('false if magazine is empty', () => {
  expect(canSpell([], 'bed')).toEqual(false)
})

test('true if single letter is in magazine', () => {
  expect(canSpell(['a'], 'a')).toEqual(true)
})

test('false if single letter is missing in magazine', () => {
  expect(canSpell(['a'], 'b')).toEqual(false)
})

test('true if multiple letters in magazine', () => {
  expect(canSpell(['b', 'e', 'd'], 'bed')).toEqual(true)
})

test('false if multiple letters partially in magazine', () => {
  expect(canSpell(['a', 'b', 'c'], 'cat')).toEqual(false)
})

test('true if multiple letters in overloaded magazine', () => {
  expect(canSpell(['f', 'e', 'd', 'c', 'b', 'a'], 'bed')).toEqual(true)
})

test('false if duplicate letter in word is used already', () => {
  expect(canSpell(['g', 'i', 'n', 'd', 'e', 'b'], 'bedding')).toEqual(false)
})

test('true if magazine has enough duplicate letters', () => {
  expect(canSpell(['g', 'i', 'n', 'd', 'd', 'e', 'b'], 'bedding')).toEqual(true)
})
