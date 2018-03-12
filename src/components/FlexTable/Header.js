import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, borders, borderColor, borderRadius } from 'styled-system'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  ${space}
  ${borders}
  ${borderColor}
  ${borderRadius}
`

const Header = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

Header.propTypes = {
  children: PropTypes.node,
}

Header.defaultProps = {
  borderBottom: '1px solid',
  borderColor: 'border',
}

export default Header
