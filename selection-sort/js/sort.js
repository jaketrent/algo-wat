export function sort(arr) {
  if (!Array.isArray(arr)) return

  // immutable
  return arr.reduce(
    ([sorted, remaining]) => {
      const [min, minIndex] = findMin(remaining)
      return [
        [...sorted, min],
        [...remaining.slice(0, minIndex), ...remaining.slice(minIndex + 1)],
      ]
    },
    [[], arr]
  )[0]

  // mutable, but clearer
  // const sorted = []
  // while (arr.length > 0) {
  //   const [min, minIndex] = findMin(arr)
  //   arr.splice(minIndex, 1)
  //   sorted.push(min)
  // }
  // return sorted
}

function findMin(arr) {
  // immutable
  return arr.reduce(
    ([min, minIndex], el, i) => (el <= min ? [el, i] : [min, minIndex]),
    [arr[0], 0]
  )

  // mutable, perhaps clearer
  // let min = arr[0]
  // let minIndex = 0
  // arr.forEach((el, i) => {
  //   if (el <= min) {
  //     min = el
  //     minIndex = i
  //   }
  // })
  // return [min, minIndex]
}
