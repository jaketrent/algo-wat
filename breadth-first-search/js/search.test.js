import { Graph, search } from './search'

test('single node, not included', () => {
  const g = Graph.fromEdges([['A']])
  expect(search(g, 'A', (n) => n === 'B')).toBeUndefined()
})

test('many nodes, not included', () => {
  const g = Graph.fromEdges([
    ['A', 'B'],
    ['A', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['A', 'E'],
  ])
  expect(search(g, 'A', (n) => n === 'F')).toBeUndefined()
})

test('self', () => {
  const g = Graph.fromEdges([['A']])
  expect(search(g, 'A', (n) => n === 'A')).toEqual('A')
})

test('1 away', () => {
  const g = Graph.fromEdges([['A', 'B']])
  expect(search(g, 'A', (n) => n === 'B')).toEqual('B')
})

test('2 away', () => {
  const g = Graph.fromEdges([
    ['A', 'B'],
    ['B', 'C'],
  ])
  expect(search(g, 'A', (n) => n === 'C')).toEqual('C')
})

test('3+ away, and can reverse', () => {
  const g = Graph.fromEdges([
    ['A', 'B'],
    ['A', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['E', 'F'],
  ])
  expect(search(g, 'A', (n) => n === 'E')).toEqual('E')
  expect(search(g, 'E', (n) => n === 'A')).toEqual('A')
})
