export function findDepth(expression) {
  if (!expression) return 0

  const parens = expression.split('').filter((el) => ['(', ')'].includes(el))

  const ones = parens.map((p) => (p === '(' ? 1 : -1))

  let sum = 0
  const partialSum = ones.map((one) => (sum += one))

  const maxDepth = partialSum.reduce((max, sum) => (sum >= max ? sum : max), 0)

  return maxDepth
}

export function findDepthTerse(e) {
  return e
    ? e
        .split('')
        .filter((l) => /[\(\)]/.test(l))
        .map((p) => (p === '(' ? 1 : -1))
        .reduce(([s, a], o) => [s + o, [...a, s + o]], [0, []])[1]
        .reduce((m, s) => (s >= m ? s : m), 0)
    : 0
}
