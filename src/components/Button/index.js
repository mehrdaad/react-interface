import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Stylish = styled.button`
  padding: 1rem;
`

const Button = () => (
  <Stylish />
)

Button.propTypes = {
  /**
   * What type of component is this?
   */
  primary: PropTypes.bool.isRequired,
  /**
   * How big is it?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Style overrides
   */
  styles: PropTypes.shape({
    color: PropTypes.string,
    border: PropTypes.string
  })
}

Button.defaultProps = {
  primary: true,
  size: 'small'
}

export default Button
