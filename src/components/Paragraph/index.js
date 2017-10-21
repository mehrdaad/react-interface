import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Paragraph = styled.p`
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  ${space}
  ${color}
`

Paragraph.defaultProps = {
  size: 'md'
}

export default Paragraph
