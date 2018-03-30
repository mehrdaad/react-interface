import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  space,
  borderRadius,
  color,
  alignSelf,
  fontWeight,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlign,
} from 'styled-system'

const Text = styled.span`
  display: inline-block;

  ${props =>
    props.max &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: ${props => props.max}px;
    `}

  ${color}
  ${space}
  ${alignSelf}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${fontSize}
  ${textAlign}
`

/** @component */
export default Text
