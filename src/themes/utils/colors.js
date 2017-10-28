// Thank you erikras: https://github.com/erikras/styled-components-theme
// and jxnblk: https://github.com/jxnblk/monochrome/blob/master/src/palette.js
// import Color from 'color'
import chroma from 'chroma-js'
import huename from 'hue-name'

const toHex = (hsl) => (
  chroma.hsl(hsl).hex()
)

const toHsl = (hex) => {
  try {
    const [ h = 0, s, l ] = chroma(hex).hsl()
    return [ h, s, l ]
  } catch (e) {
    return null
  }
}

const toRgb = (hsl) => {
  try {
    return chroma.hsl(hsl).rgb()
  } catch (e) {
    return null
  }
}

const isDark = color => chroma(color).luminance() < .5

const steps = [
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  0,
].map(n => n + .5).map(n => n / 10)

const createLum = ({ h, s, l }) => lum =>
  chroma.hsl(h, s, l).luminance(lum).hex()

const spreadLum = ({ h, s, l }) => {
  const base = chroma.hsl(h, s, l).luminance()
  const lowerstep = base / 5
  const upperstep = (1 - base) / 6
  const lower = [
    4, 3, 2, 1
  ].map(step => chroma.hsl(h, s, l).luminance(step * lowerstep).hex())
  const upper = [
    5, 4, 3, 2, 1, 0
  ].map(step => chroma.hsl(h, s, l).luminance(base + step * upperstep).hex())

  return [ ...upper, ...lower ]
}

export function monochrome (color) {
  const [ h, s, l ] = chroma(color).hsl()
  const name = isNaN(h) ? 'gray' : huename(h)
  const hex = toHex([ h, s, l ])
  const text = isDark(hex) ? '#fff' : '#000'

  const result = {
    [name]: hex,
    text,
    shades: steps.map(createLum({ h, s, l })),
    // spread: spreadLum({ h, s, l })
  }

  return result
}


export function getColorShades(color, name) {
  const shades = monochrome(color).shades

  // Generate palette based on shades
  const primary = shades.reduce((acc, curr, i) => {
    acc[`${name}${i}`] = curr
    return acc
  }, { [name]: color })

  return primary
}

export function getPaletteShades(palette) {
  return Object.keys(palette)
    .map(p => getColorShades(palette[p], p))
    .reduce((acc, curr) => ({ ...acc, ...curr }))
}

export function colorListToMap(colors) {
  let palette = {}
  for (let color in colors) {
    if (typeof colors[color] === 'string') {
      palette[color] = colors[color]
    } else {
      const shades = colors[color].reduce((acc, curr, i) => {
        acc[`${color}${i}`] = curr
        return acc
      }, {})
      palette = { ...palette, ...shades }
    }
  }
  return palette
}
