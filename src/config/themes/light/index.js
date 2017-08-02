/**
 *
 * Light Theme
 *
 */

import base from '../base'
import colors from './colors'

const theme = {}

theme.colors = colors

theme.fonts = {
  ...base.fonts,
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
}

theme.sizes = {
  ...base.sizes,
  maxWidth: '1100px'
}

export default theme
