import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, borders, borderColor, borderRadius } from 'styled-system'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: .8rem;
  margin: 0.5rem;
  line-height: 1.5;
  flex: 1 1 auto;
  ${space}
  ${borders}
  ${borderColor}
  ${borderRadius}
`

const Table = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

Table.propTypes = {
  children: PropTypes.node,
}

export default Table
