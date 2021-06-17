import { search } from './binary.js'

it('returns -1 if unfound', () => {
  expect(search([], 42)).toEqual(-1)
  expect(search([2, 52, 72], 42)).toEqual(-1)
  expect(search([22, 52, 72], 12)).toEqual(-1)
})

it('returns index if found', () => {
  expect(search([42], 42)).toEqual(0)
  expect(search([2, 42, 52, 72], 42)).toEqual(1)
  expect(search([22, 41, 42, 43, 52, 72], 42)).toEqual(2)
  expect(search([22, 41, 42, 43, 52, 72], 72)).toEqual(5)
})
