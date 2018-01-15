import React from "react"
import styled from "styled-components"
import { space, width } from "styled-system"
import * as feathers from "react-feather"
import { Caret } from "../../icons"

const icons = {
  ...feathers,
  Caret: Caret
}

const capitalize = type => type.charAt(0).toUpperCase() + type.substring(1)

const Wrapper = styled.div`
  display: inline-block;

  ${space} ${width} svg {
    stroke: ${props => props.theme.colors[props.color] || props.color};
  }
`

const Icon = ({ type, ...rest }) => (
  <Wrapper {...rest}>
    {React.createElement(
      icons[
        type
          .split("-")
          .map(t => capitalize(t))
          .join("")
      ],
      { ...rest }
    )}
  </Wrapper>
)

export default Icon
