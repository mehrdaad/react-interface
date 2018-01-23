
import chroma from 'chroma-js'
import hueName from './hue-name'

const createHues = (length = 12) => {
  const hueLength = length
  const hueStep = 360 / hueLength
  return base => {
    const hues = Array.from({ length: hueLength })
      .map((n, i) => {
        return Math.floor((base + (i * hueStep)) % 360)
      })

    return hues
  }
}

const desat = n => hex => {
  const [ h, s, l ] = chroma(hex).hsl()
  return chroma.hsl(h, n, l).hex()
}

export const createBlack = hex => {
  const d = desat(1/8)(hex)
  return chroma(d).luminance(.05).hex()
}

export const createShades = (hex, steps) => {
  const lums = Array(steps)
    .fill()
    .map((a, i) => i)
    .reverse()
    .map(n => n + steps / (steps / .3))
    .map(n => n / steps)
  return lums.map(lum => {
    return chroma(hex).luminance(lum).hex()
  })
}

// Mappers
const toHex = ({ key, value }) => ({ key, value: value.hex() })

const keyword = hex => {
  const [ hue, sat ] = chroma(hex).hsl()
  if (sat < .5) {
    return 'gray'
  }
  const name = hueName(hue)
  return name
}

// Reducer
const toObj = (a = {}, color) => {
  const key = a[color.key] ? color.key + '2' : color.key
  a[key] = color.value
  return a
}

const palx = (hex, options = { steps: 10 }) => {
  const color = chroma(hex)
  const colors = []
  const [ hue, sat, lte ] = color.hsl()

  const hues = createHues(12)(hue)

  colors.push({
    key: 'black',
    value: createBlack('' + color.hex())
  })

  colors.push({
    key: 'gray',
    value: createShades(desat(1/8)('' + color.hex()), options.steps)
  })

  hues.forEach(h => {
    const c = chroma.hsl(h, sat, lte)
    const key = keyword(c)
    colors.push({
      key,
      value: createShades('' + c.hex(), options.steps)
    })
  })

  const obj = Object.assign({
    base: hex,
  }, colors.reduce(toObj, {}))

  return obj
}

export default palx
