import React from "react"
import styled from "styled-components"
import { space, width, alignSelf, color, hover } from "styled-system"
import * as feathers from "react-feather"
import { Caret } from "../../icons"

const icons = {
  ...feathers,
  Caret: Caret
}

const capitalize = type => type.charAt(0).toUpperCase() + type.substring(1)

const Wrapper = styled.div`
  display: inline-block;
  ${space}
  ${width}
  ${alignSelf}
  ${color}

  svg {
    stroke: ${props => props.theme.colors[props.color] || props.color}
  }

  &:hover svg {
    stroke: ${props => props.theme.colors[props.hoverColor] || props.hoverColor}
  }
`

const Icon = ({ type, size, color, ...rest }) => (
  <Wrapper
    className="ri-icon"
    size={size}
    color={color}
    {...rest}
  >
    {React.createElement(
      icons[
        type
          .split("-")
          .map(t => capitalize(t))
          .join("")
      ],
      { size, color }
    )}
  </Wrapper>
)

export default Icon
