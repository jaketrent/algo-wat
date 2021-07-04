import { sort } from './sort.js'

it('returns already-sorted arrays', () => {
  expect(sort()).toEqual()
  expect(sort([])).toEqual([])
  expect(sort([1])).toEqual([1])
  expect(sort([1, 1])).toEqual([1, 1])
  expect(sort([1, 5, 7])).toEqual([1, 5, 7])
  expect(sort([1, 1, 5, 7])).toEqual([1, 1, 5, 7])
})

it('sorts out-of-order arrays', () => {
  expect(sort([3, 1])).toEqual([1, 3])
  expect(sort([1, 7, 5, 5])).toEqual([1, 5, 5, 7])
  expect(sort([8, 7, 5, 5])).toEqual([5, 5, 7, 8])
  expect(sort([11, 9, 1, 1, 8, 7, 5, 5])).toEqual([1, 1, 5, 5, 7, 8, 9, 11])
})
