export class Graph {
  constructor() {
    this.edges = new Map()
  }

  addNode(n) {
    this.edges.set(n, [])
  }

  addEdge(n1, n2) {
    this.edges.get(n1).push(n2)
    this.edges.get(n2).push(n1)
  }

  edgesFor(n) {
    return this.edges.get(n)
  }

  print() {
    console.table(this.edges)
  }

  static fromEdges(edges) {
    const g = new Graph()
    const nodes = [...new Set(edges.flat())]
    nodes.forEach((node) => g.addNode(node))
    edges
      .filter((edge) => edge.length === 2)
      .forEach((edge) => g.addEdge.apply(g, edge))
    return g
  }
}

export function search(graph, start, findWhere) {
  if (findWhere(start)) return start
  let searchQueue = graph.edgesFor(start)
  const searched = []

  while (searchQueue.length > 0) {
    const node = searchQueue.shift()

    if (!searched.includes(node)) {
      if (findWhere(node)) {
        return node
      } else {
        searchQueue = [...searchQueue, ...graph.edgesFor(node)]
        searched.push(node)
      }
    }
  }

  return
}
