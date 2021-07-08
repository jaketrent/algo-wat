import { findBalancePoint } from './balance.js'

it('is -1 for empty array', () => {
  expect(findBalancePoint()).toEqual(-1)
  expect(findBalancePoint([])).toEqual(-1)
})

it('is -1 for array shorter than 3', () => {
  expect(findBalancePoint([1])).toEqual(-1)
  expect(findBalancePoint([1, 2])).toEqual(-1)
})

it('is -1 for array that is unbalanced', () => {
  expect(findBalancePoint([1, 2, 3])).toEqual(-1)
  expect(findBalancePoint([3, 2, 1])).toEqual(-1)
})

it('is 1 for simplest balance', () => {
  expect(findBalancePoint([1, 2, 1])).toEqual(1)
})

test('balance not in middle', () => {
  expect(findBalancePoint([1, 2, 2, 3])).toEqual(2)
  expect(findBalancePoint([4, 2, 2, 2])).toEqual(1)
})

test('negative numbers', () => {
  expect(findBalancePoint([-1, 2, 2, 1])).toEqual(2)
  expect(findBalancePoint([4, 3, 2, 9, -2])).toEqual(2)
})
