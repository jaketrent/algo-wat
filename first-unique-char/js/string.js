export function findFirstUniqueChar(str) {
  if (!str) return -1

  const seen = new Map()
  const chars = str.split('')
  chars.forEach((char) => seen.set(char, (seen.get(char) || 0) + 1))
  const firstUniqueLetter = Array.from(seen.keys()).find(
    (key) => seen.get(key) === 1
  )

  return chars.findIndex((c) => firstUniqueLetter === c)
}
