/**
 *
 * React UI Base Theme
 *
 */

import palx from '../utils/palx'
import { getPaletteShades, colorListToMap } from '../utils/colors'
import defaultColors from "./colors"
import fonts from "./fonts"
import sizes from "./sizes"

export const createTheme = themeColors => {
  const mergedColors = { ...defaultColors, ...themeColors }
  const colors = {
    ...getPaletteShades(mergedColors),
    ...colorListToMap(palx(mergedColors.primary)),
  }

  return {
    sizes,
    fonts,
    colors,

    /* Checkbox */
    "checkbox.border.color": colors.primary2,
    "checkbox.background": colors.primary1,
    "checkbox.icon.color": colors.primary,
    "checkbox.label.color": colors.primary,

    /* Popover */
    "popover.border.color": 'transparent',

    /* Select */
    'select.background': colors.background,
    'select.placeholder.color': colors.background6,
    'select.border.color': colors.background6,
    'select.icon.color': colors.background6,

    /* Menus */
    'menu.background': colors.background,
    'menu.border.color': colors.background6,
    'menu.divider.border.color': colors.background6,
    'menu.item.hover.background': colors.primary1,
    'menu.item.hover.color': colors.primary,
    'menu.item.active.background': colors.primary,
    'menu.item.active.color': colors.primary9,
  }
}

export default createTheme(defaultColors)
