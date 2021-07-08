export function findBalancePoint(arr) {
  if (!Array.isArray(arr)) return -1
  if (arr.length < 3) return -1

  let sum = 0
  const partialSums = arr.map((el) => (sum += el))

  for (let i = 1; i < partialSums.length; ++i) {
    const sumLeft = partialSums[i - 1]
    const sumRight = partialSums[partialSums.length - 1] - partialSums[i]
    if (sumLeft === sumRight) return i
  }

  return -1
}
