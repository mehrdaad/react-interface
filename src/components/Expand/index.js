import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Expand = styled.div`
  ${space}
`

Expand.defaultProps = {
  open: false
}

export default Expand
