import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  space,
  borderRadius,
  color,
  alignSelf,
  fontWeight,
  letterSpacing,
  lineHeight
} from 'styled-system'

const Text = styled.span`
  padding: ${props => props.theme.sizes.paddings[props.size]}rem;
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  display: inline-block;

  ${props => props.max && css`
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
`

export default Text
