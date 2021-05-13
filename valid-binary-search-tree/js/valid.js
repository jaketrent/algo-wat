export const isValidBST = (node) => {
  const isValid = (n, low, high) =>
    !n ||
    (n.val > low &&
      n.val < high &&
      isValid(n.left, low, n.val) &&
      isValid(n.right, n.val, high))

  return isValid(node, Number.MIN_VALUE, Number.MAX_VALUE)
}
