export function sort(arr) {
  if (!Array.isArray(arr)) return

  if (arr.length <= 1) return arr

  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr[pivotIndex]

  const lessThanPivot = arr.filter((el, i) => el <= pivot && i !== pivotIndex)
  const greaterThanPivot = arr.filter((el, i) => el > pivot && i !== pivotIndex)

  return [...sort(lessThanPivot), pivot, ...sort(greaterThanPivot)]
}
