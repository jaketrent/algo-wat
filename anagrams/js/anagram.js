export function findAnagram(strs) {
  const anagrams = {}

  strs.forEach((str) => {
    const sortedWord = str.split('').sort().join('')
    if (!(sortedWord in anagrams)) {
      anagrams[sortedWord] = []
    }
    anagrams[sortedWord].push(str)
  })

  return Object.values(anagrams)
    .sort((a, b) => a.length - b.length)
    .map((words) => words.sort())
}
