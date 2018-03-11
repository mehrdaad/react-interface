import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, hover } from 'styled-system'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  ${space} ${hover};
`

const Row = ({ children, className, ...rest }) => (
  <Wrapper className={className} {...rest}>
    {children}
  </Wrapper>
)

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Row
