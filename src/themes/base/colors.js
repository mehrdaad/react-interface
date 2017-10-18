import palx from 'palx'
import { getPaletteShades, colorListToMap } from '../utils/colors'

const palette = {
  primary: '#07c',
  warning: '#FEBF2F',
  secondary: '#868E95',
  success: '#30A54A',
  danger: '#DA3849',
  info: '#25A2B6'
}

const colors = {
  ...getPaletteShades(palette),
  ...colorListToMap(palx(palette.primary)),
  background: '#FFF'
}

export default colors
