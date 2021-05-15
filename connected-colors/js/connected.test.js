import { maxConnected } from './connected.js'

test('empty grid is 0', () => {
  expect(maxConnected([[]])).toEqual(0)
})

test('1-dim grid of one color is grid length', () => {
  expect(maxConnected([['r']])).toEqual(1)
  expect(maxConnected([['g', 'g']])).toEqual(2)
})

test('1-dim grid of two colors returns tie', () => {
  expect(maxConnected([['g', 'b']])).toEqual(1)
})

test('1-dim grid of two colors returns max', () => {
  expect(maxConnected([['g', 'b', 'b']])).toEqual(2)
})

test('2-dim grid of two colors returns tie', () => {
  expect(maxConnected([['g'], ['r']])).toEqual(1)
})

test('2-dim grid of connected color returns max', () => {
  expect(
    maxConnected([
      ['r', 'g'],
      ['g', 'g'],
    ])
  ).toEqual(3)
})

test('2-dim grid of disconnected colors returns max', () => {
  expect(
    maxConnected([
      ['g', 'r'],
      ['r', 'g'],
    ])
  ).toEqual(1)
})

test('3-dim grid of connected color returns max', () => {
  expect(
    maxConnected([
      ['r', 'g', 'b'],
      ['g', 'g', 'b'],
      ['g', 'g', 'g'],
    ])
  ).toEqual(6)
})
