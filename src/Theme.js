import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import base from './themes/base'
import merge from 'deepmerge'

const Wrapper = styled.div`
  font-family: ${props => props.theme.fonts.primary};
`

const Theme = ({ theme = {}, color, ...rest }) => {
  return (
    <ThemeProvider theme={merge(base, theme)}>
      <Wrapper {...rest} />
    </ThemeProvider>
  )
}

export default Theme
