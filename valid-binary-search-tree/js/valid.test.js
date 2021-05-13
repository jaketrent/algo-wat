import { isValidBST } from './valid.js'

it('is true for empty tree', () => {
  expect(isValidBST()).toBeTruthy()
})

it('is true for single node', () => {
  expect(isValidBST({ val: 1 })).toBeTruthy()
})

it('is true for smaller left', () => {
  expect(isValidBST({ val: 2, left: { val: 1 } })).toBeTruthy()
})

it('is false for larger left', () => {
  expect(isValidBST({ val: 2, left: { val: 3 } })).toBeFalsy()
})

it('is true for larger right', () => {
  expect(isValidBST({ val: 2, right: { val: 5 } })).toBeTruthy()
})

it('is false for smaller right', () => {
  expect(isValidBST({ val: 2, right: { val: 1 } })).toBeFalsy()
})

it('is true for smaller left, larger right', () => {
  expect(
    isValidBST({ val: 5, left: { val: 4 }, right: { val: 7 } })
  ).toBeTruthy()
})

it('is false if right grandchild is smaller', () => {
  expect(
    isValidBST({
      val: 5,
      left: { val: 4 },
      right: { val: 7, left: { val: 2 } },
    })
  ).toBeFalsy()
})

it('is false if left grandchild is larger', () => {
  expect(
    isValidBST({
      val: 5,
      left: { val: 4, right: { val: 6 } },
      right: { val: 7 },
    })
  ).toBeFalsy()
})

it('is true down to valid grandchildren', () => {
  expect(
    isValidBST({
      val: 5,
      left: { val: 4 },
      right: { val: 7, left: { val: 6 } },
    })
  ).toBeTruthy()
})
