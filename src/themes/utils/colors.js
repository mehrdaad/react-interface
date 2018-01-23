// Thank you erikras: https://github.com/erikras/styled-components-theme
// and jxnblk: https://github.com/jxnblk/monochrome/blob/master/src/palette.js
import chroma from 'chroma-js'

const isDark = color => chroma(color).luminance() < .5

export function getColorShades(color, colorName, steps = 10) {
  const colorList = {}
  var scaleSourceHex = color;

  // Prepare color scale.
  var colors = ['#fff', scaleSourceHex, '#000'];
  var scale = chroma.scale(colors).mode('lab')
  // Output source color.
  for(var i = 0, steps = steps; i < steps; i++) {
    var point = i / steps;
    // Convert point to numbering system value.
    var name = Math.round(point * 1000);
    // Generate RGB color from luminance location along scale.
    var hex = scale(point).hex();
    colorList[`${colorName}${i}`] = hex
  }

  colorList[colorName] = color
  return colorList
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
