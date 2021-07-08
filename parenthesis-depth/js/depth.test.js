import { findDepth, findDepthTerse } from './depth.js'

const implementations = [
  // ['#findDepth', findDepth],
  ['#findDepthTerse', findDepthTerse],
]

implementations.forEach(([name, find]) => {
  test(`${name} default of 0`, () => {
    expect(find()).toEqual(0)
    expect(find('')).toEqual(0)
  })

  test(`${name} no parens`, () => {
    expect(find('3+x')).toEqual(0)
  })

  test(`${name} 1x depth`, () => {
    expect(find('(3+x)')).toEqual(1)
    expect(find('3*(3+x)')).toEqual(1)
    expect(find('(3+y)*(3+x)')).toEqual(1)
  })

  test(`${name} 2x depth`, () => {
    expect(find('((3+x))')).toEqual(2)
    expect(find('3*((3+x))')).toEqual(2)
    expect(find('((3+y)*(3+x))')).toEqual(2)
  })

  test(`${name} 3x depth`, () => {
    expect(find('(((3+x)))')).toEqual(3)
    expect(find('(3*((3+x))(')).toEqual(3)
    expect(find('(3+y)*(3+(y*(3+x)))')).toEqual(3)
  })
})
