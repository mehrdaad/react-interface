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
    colors: {
      /* Base Colors */
      ...colors,

      /* Theme Colors */
      ...themeColors,

      /* Select */
      select: colors.gray[7],
      selectHover: colors.gray[6],
      selectHoverBackground: colors.gray[1],
      selectBackground: colors.gray[0],
      selectPlaceholder: colors.gray[5],
      selectBorder: colors.gray[5],
      selectFocusBorder: colors.gray[6],
      selectIcon: colors.gray[5],
      selectItemHoverBackground: colors.blue[0],
      selectItemHover: colors.blue[3],

      /* Notifications */
      notificationBackground: colors.primary[0],
      notificationColor: colors.primary[3],
      notificationBorder: colors.primary[4],

      /* Spinner */
      spinner: colors.primary[4],

      /* Switch */
      switchOnBackground: colors.primary[4],
      switchOffBackground: colors.primary[1],
      switchKnobBackground: colors.gray[0],
    },

    /* Checkbox */
    'checkbox.border.color': colors.primary[2],
    'checkbox.background': colors.primary[1],
    'checkbox.icon.color': colors.primary[3],
    'checkbox.label.color': colors.primary[3],

    /* Popover */
    'popover.border.color': colors.gray[4],
    'popover.border.style': 'solid',
    'popover.border.width': '1px',

    /* MultiSelect */
    'multiselect.background': colors.gray[0],
    'multiselect.placeholder.color': colors.gray[5],
    'multiselect.border.color': colors.gray[5],
    'multiselect.icon.color': colors.gray[5],

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
