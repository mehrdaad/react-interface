import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color, borderColor, borderRadius, borderWidth } from 'styled-system'

const Title = styled.h2`
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${space}
  ${color}
  ${borderWidth}
  ${borderColor}
  ${borderRadius}
`

Title.defaultProps = {
  size: 'md'
}

export default Title
