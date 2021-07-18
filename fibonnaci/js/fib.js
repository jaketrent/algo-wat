export function fib(n) {
  if (n === 0) return 0
  if (n === 1) return 1

  return fib(n - 1) + fib(n - 2)
}

export function fibIterative(n) {
  const fibs = [0, 1]

  for (let i = 2; i <= n; ++i) {
    fibs.push(fibs[i - 1] + fibs[i - 2])
  }

  return fibs[n]
}

export function fibIterativeSpaceOpt(n) {
  let nMinus2 = 0
  let nMinus1 = 1
  if (n === 0) return 0

  for (let i = 2; i <= n; ++i) {
    const newFib = nMinus2 + nMinus1
    nMinus2 = nMinus1
    nMinus1 = newFib
  }

  return nMinus1
}
