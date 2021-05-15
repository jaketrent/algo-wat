export const maxConnected = (grid) => {
  let maxN = 0
  for (const y in grid) {
    for (const x in grid[y]) {
      maxN = max(
        maxN,
        traverseIterative(grid, {}, parseInt(x, 10), parseInt(y, 10))
      )
    }
  }
  return maxN
}

const traverse = (grid, visited, x, y) => {
  const visitedKey = x + ',' + y
  if (visitedKey in visited) return 0

  visited[visitedKey] = true
  let result = 1
  for (const neighbor of filterConnectedNeighbors(grid, x, y)) {
    result += traverse(grid, visited, neighbor[0], neighbor[1])
  }
  return result
}

const traverseIterative = (grid, visited, x, y) => {
  const stack = [[x, y]]

  let result = 0
  while (stack.length > 0) {
    const [x, y] = stack.pop()

    const key = x + ',' + y
    if (key in visited) continue
    visited[key] = true

    result += 1
    for (const neighbor of filterConnectedNeighbors(grid, x, y)) {
      stack.push(neighbor)
    }
  }
  return result
}

const filterConnectedNeighbors = (grid, x, y) => {
  const POSITIONS = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ]

  const n = []
  for (const position of POSITIONS) {
    const adjacentColor = colorAt(grid, x + position[0], y + position[1])
    const color = colorAt(grid, x, y)
    if (adjacentColor === color) n.push([x + position[0], y + position[1]])
  }
  return n
}

const colorAt = (grid, x, y) => {
  if (x >= 0 && x < grid[0].length && y >= 0 && y < grid.length)
    return grid[y][x]
}

const max = (a, b) => (a > b ? a : b)
