import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Pre = styled.pre`
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  ${space}
  ${color}
`

export default Pre
