// Thank you erikras: https://github.com/erikras/styled-components-theme
import Color from 'color'

const colorMethods = [
  'negate', // rgb(0, 100, 255) -> rgb(255, 155, 0)

  'lighten', // hsl(100, 50%, 50%) -> hsl(100, 50%, 75%)
  'darken', // hsl(100, 50%, 50%) -> hsl(100, 50%, 25%)

  'saturate', // hsl(100, 50%, 50%) -> hsl(100, 75%, 50%)
  'desaturate', // hsl(100, 50%, 50%) -> hsl(100, 25%, 50%)
  'grayscale', // #5CBF54 -> #969696

  'whiten', // hwb(100, 50%, 50%) -> hwb(100, 75%, 50%)
  'blacken', // hwb(100, 50%, 50%) -> hwb(100, 50%, 75%)

  'fade', // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 0.4)
  'opaquer', // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 1.0)

  'rotate', // hsl(60, 20%, 20%) -> hsl(330, 20%, 20%)

  'mix', // rgb(0, 0, 255) * 0.8 + rgb(0, 255, 0) * 0.2 -> rgb(0, 51, 204)
]

/**
 * Takes a selector that returns a color string and returns new decorated selector that calls the
 * original function to get the color and then modifies that color, ultimately returning another
 * color string.
 */
const addModifier = (fn, method, ...modifierArgs) => (...args) => {
  if (method === 'mix') {
    // Mix takes another selector. To run the underlying Color method,
    // convert the selector into a Color by evaluating it with the props.
    modifierArgs = [].concat(modifierArgs)
    modifierArgs[0] = new Color(modifierArgs[0](...args));
  }
  return new Color(fn(...args))[method](...modifierArgs).toString()
}

const decorateSelector = selector => {
  // add member functions to our selector
  colorMethods.forEach(method => {
    selector[method] = (...args) =>
      decorateSelector(addModifier(selector, method, ...args))()
  })

  // override toString method for usage without executing
  selector.prototype.toString = selector()

  return selector
}

export function enhanceColors(colors) {
  return Object.keys(colors).reduce((result, color) => {
    result[color] = decorateSelector(() => colors[color])
    return result
  }, {})
}
