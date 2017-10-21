import React from 'react'
import styled from 'styled-components'
import { space, width } from 'styled-system'
import { Caret } from '../../icons'

const icons = {
  caret: Caret
}

const Wrapper = styled.div`
  ${space}
  ${width}

  svg path {
    fill: ${props => props.theme.colors[props.color]};
  }
`

const Icon = ({ type, color }) => (
  <Wrapper color={color}>
    {React.createElement(
      icons[type],
      { color }
    )}
  </Wrapper>
)

export default Icon
