import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import merge from 'deepmerge'
import base from './themes/base'
import { getColorShades, colorListToMap } from './themes/utils/colors'
import palx from 'palx'

const Wrapper = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  background: ${props => props.theme.colors.background};
`

const Theme = ({ theme = {}, color, ...rest }) => {
  if (color) {
    const primary = getColorShades(color, 'primary')
    // Merge theme and primary color palette
    theme = merge(theme, {
      colors: { ...primary, ...colorListToMap(palx(color)) }
    })
  }

  // Merge base theme and theme with palette
  const merged = merge(base, theme)
  console.log(merged)

  return (
    <ThemeProvider theme={merged}>
      <Wrapper {...rest} />
    </ThemeProvider>
  )
}

export default Theme
