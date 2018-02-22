import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import merge from 'deepmerge'
import palx from './themes/utils/palx'
import base from './themes/base'
import { getColorShades, colorListToMap } from './themes/utils/colors'

// Check out https://github.com/jxnblk/styled-system/tree/master/system-components
const Wrapper = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.black};
  box-sizing: border-box;
  a { text-decoration: none  }
`

const Theme = ({ theme = {}, color, ...rest }) => {
  if (color) {
    const primary = getColorShades(color, 'primary')
    // Merge theme and primary color palette
    theme = merge(theme, {
      colors: {
        ...primary,
        ...colorListToMap(palx(color))
      }
    })
  }

  // Merge base theme and theme with palette
  const merged = merge(base, theme)

  return (
    <ThemeProvider theme={merged}>
      <Wrapper {...rest} />
    </ThemeProvider>
  )
}

export default Theme
