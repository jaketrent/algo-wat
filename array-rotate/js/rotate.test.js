import { rotateShift, rotateSplit } from './rotate.js'

const implementations = [
  ['#rotateShift', rotateShift],
  ['#rotateSplit', rotateSplit],
]

describe.each(implementations)('%s', (_desc, rotate) => {
  test('k=0', () => {
    expect(rotate([], 0)).toEqual([])
    expect(rotate([1], 0)).toEqual([1])
    expect(rotate([1, 2], 0)).toEqual([1, 2])
  })

  test('k=1', () => {
    expect(rotate([1], 1)).toEqual([1])
    expect(rotate([1, 2], 1)).toEqual([2, 1])
  })

  test('k=2', () => {
    expect(rotate([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2])
  })

  test('example 1', () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
  })

  test('longer', () => {
    const expected = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]
    expect(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual(expected)
  })
})
