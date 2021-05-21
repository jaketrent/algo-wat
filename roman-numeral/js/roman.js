const conversions = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  D: 500,
  CM: 900,
  M: 1000,
}

export const fromRoman = (roman) => {
  // return addArabic(roman, 0)
  return addArabicIterative(roman)
}

const addArabic = (roman, total) => {
  if (roman.length === 0) return total
  const head = getNextLongestMatchingKey(roman)
  const rest = roman.replace(head, '')
  return addArabic(rest, total + conversions[head])
}

const addArabicIterative = (roman) => {
  let total = 0
  while (roman.length > 0) {
    const head = getNextLongestMatchingKey(roman)
    const rest = roman.replace(head, '')
    total += conversions[head]
    roman = rest
  }
  return total
}

const getNextLongestMatchingKey = (roman) => {
  return roman in conversions
    ? roman
    : getNextLongestMatchingKey(roman.slice(0, roman.length - 1))
}

export const toRoman = (arabic) => {
  // return appendRoman(arabic)
  return appendRomanIterative(arabic)
}

const appendRoman = (arabic) => {
  if (arabic === 0) return ''

  const roman = Object.keys(conversions)
    .reverse()
    .find((r) => conversions[r] <= arabic)
  return roman + appendRoman(arabic - conversions[roman])
}

const appendRomanIterative = (arabic) => {
  let roman = ''

  while (arabic > 0) {
    const nextRoman = Object.keys(conversions)
      .reverse()
      .find((r) => conversions[r] <= arabic)
    arabic -= conversions[nextRoman]
    roman += nextRoman
  }
  return roman
}
