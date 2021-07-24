export class Node {
  constructor(v, l, r) {
    this.value = v
    this.left = l
    this.right = r
  }
}

export function averagePerLevelBfs(tree) {
  const averages = []
  let levelQueue = [tree]

  while (levelQueue.length > 0) {
    let sum = 0
    let count = 0
    let nextLevelQueue = []

    while (levelQueue.length > 0) {
      const node = levelQueue.shift()
      sum += node.value
      count++
      if (node.left) nextLevelQueue.push(node.left)
      if (node.right) nextLevelQueue.push(node.right)
    }
    levelQueue = nextLevelQueue
    averages.push(sum / count)
  }

  return averages
}

export function averagePerLevelDfs(tree) {
  function sumPerLevel(tree, sums = new Map(), depth = 0) {
    if (!tree) return

    if (!sums.has(depth)) sums.set(depth, { sum: 0, count: 0 })

    const sum = sums.get(depth)
    sums.set(depth, { sum: sum.sum + tree.value, count: sum.count + 1 })

    sumPerLevel(tree.left, sums, depth + 1)
    sumPerLevel(tree.right, sums, depth + 1)

    return sums
  }

  function average(sums) {
    return Array.from(sums.values()).map((s) => s.sum / s.count)
  }

  return average(sumPerLevel(tree))
}
