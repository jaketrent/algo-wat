import { Node, averagePerLevelBfs, averagePerLevelDfs } from './binary-tree.js'

const implementations = [
  ['depth-first search', averagePerLevelDfs],
  ['breadth-first search', averagePerLevelBfs],
]

describe.each(implementations)('%s', (_desc, impl) => {
  test('1 level, 1 value', () => {
    const tree = new Node(4)

    expect(impl(tree)).toEqual([4])
  })

  test('2 levels, 1 value each', () => {
    const tree = new Node(4, new Node(2))

    expect(impl(tree)).toEqual([4, 2])
  })

  test('2 level, 2 values', () => {
    const tree = new Node(4, new Node(4), new Node(8))

    expect(impl(tree)).toEqual([4, 6])
  })

  test('sparse tree', () => {
    const tree = new Node(
      4,
      new Node(2, new Node(3), new Node(5)),
      new Node(9, undefined, new Node(7))
    )

    expect(impl(tree)).toEqual([4, 5.5, 5])
  })
})
