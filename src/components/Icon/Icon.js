import React from 'react'
import styled from 'styled-components'
import { space, width, alignSelf, color, hover, fontSize } from 'styled-system'
import * as feathers from 'react-feather'
import { Caret } from '../../icons'

const icons = {
  ...feathers,
  Caret: Caret,
}

const capitalize = type => type.charAt(0).toUpperCase() + type.substring(1)

const Wrapper = styled.div`
  // display: inline-flex;
  display: inline-block;
  ${space}
  ${width}
  ${alignSelf}
  ${color}
  ${fontSize}
`

const Icon = ({ type, size, color, ...rest }) => (
  <Wrapper className="ri-icon" size={size} color={color} {...rest}>
    {React.createElement(
      icons[
        type
          .split('-')
          .map(t => capitalize(t))
          .join('')
      ],
      { size, color }
    )}
  </Wrapper>
)

export default Icon
