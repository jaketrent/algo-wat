import { fib, fibIterative, fibIterativeSpaceOpt } from './fib.js'

const implementations = [
  ['#fib recursive', fib],
  ['#fib iterative', fibIterative],
  ['#fib space optimization', fibIterativeSpaceOpt],
]

const cases = [
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8],
  [7, 13],
  [8, 21],
  [9, 34],
  [10, 55],
  [11, 89],
  [12, 144],
]

describe.each(implementations)('%s', (_desc, impl) => {
  test.each(cases)('%sth fibonacci number is %s', (n, expected) => {
    expect(impl(n)).toEqual(expected)
  })
})
