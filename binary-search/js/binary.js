export const search = (sortedArray, needle) => {
  function _search(arr, needle, min, max) {
    if (max < min) return -1
    const midpoint = min + Math.floor((max - min) / 2)
    const guess = arr[midpoint]
    if (guess === needle) return midpoint
    else if (guess < needle) return _search(arr, needle, midpoint + 1, max)
    else if (guess > needle) return _search(arr, needle, min, midpoint - 1)
  }

  return _search(sortedArray, needle, 0, sortedArray.length - 1)
}
