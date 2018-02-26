import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import merge from 'deepmerge'
import base from './themes/base'
import { getColorShades, colorListToMap } from './themes/utils/colors'

// Check out https://github.com/jxnblk/styled-system/tree/master/system-components
// and https://github.com/pricelinelabs/design-system
const Wrapper = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.gray[8]};
  box-sizing: border-box;
  blockquote,
  dd,
  dl,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  ul {
    margin: 0;
  }
`

const Theme = ({ theme = {}, color, ...rest }) => {
  if (color) {
    const primaryShades = getColorShades(color, 'primary')
    // Merge theme and primary color palette
    theme = merge(theme, {
      colors: {
        primary: primaryShades,
      },
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
