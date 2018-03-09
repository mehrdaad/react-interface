/**
 *
 * React UI Base Theme
 *
 */

import colors from './colors'
import fonts from './fonts'
import sizes from './sizes'

export const createTheme = themeColors => {
  return {
    fonts,
    ...sizes,
    colors: { ...colors, ...themeColors },

    /* Checkbox */
    'checkbox.border.color': colors.primary[2],
    'checkbox.background': colors.primary[1],
    'checkbox.icon.color': colors.primary[3],
    'checkbox.label.color': colors.primary[3],

    /* Popover */
    'popover.border.color': colors.gray[4],

    /* Select */
    'select.background': colors.background,
    'select.placeholder.color': colors.background6,
    'select.border.color': colors.background6,
    'select.icon.color': colors.background6,

    /* MultiSelect */
    'multiselect.background': colors.background,
    'multiselect.placeholder.color': colors.background6,
    'multiselect.border.color': colors.background6,
    'multiselect.icon.color': colors.background6,

    /* Menus */
    'menu.background': colors.gray[0],
    'menu.divider.border.color': colors.background6,
    'menu.item.hover.background': colors.blue[0],
    'menu.item.hover.color': colors.blue[3],
    'menu.item.active.background': colors.primary,
    'menu.item.active.color': colors.primary9,
  }
}

export default createTheme(colors)
