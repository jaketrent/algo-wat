export function rotateShift(array, k) {
  for (let i = 0; i < k; ++i) {
    array.unshift(array.pop())
  }
  return array
}

export function rotateSplit(array, k) {
  if (k === 0) return array
  if (array.length === 1) return array

  const front = array.slice(0, array.length - k)
  const back = array.slice(array.length - k)
  return [...back, ...front]
}

export function rotateSwap(array, k) {
  for (let i = 0; i < k; ++i) {
    const toPutAtFront = array[array.length - 1]
    for (let j = array.length - 1; j > 0; --j) {
      array[j] = array[j - 1]
    }
    array[0] = toPutAtFront
  }
  return array
}
