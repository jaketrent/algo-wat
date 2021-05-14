export const canSpell = (magazine, word) => {
  if (!Array.isArray(magazine) || typeof word !== 'string') return false

  const letterCounts = magazine.reduce(
    (dict, letter) => ({ ...dict, [letter]: 1 + (dict[letter] || 0) }),
    {}
  )

  for (const letter of word.split('')) {
    if (letterCounts[letter] >= 1) --letterCounts[letter]
    else return false
  }
  return true
}
