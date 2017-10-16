import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Btn = styled.button`
  padding: 1rem;
  outline: none;
  background: ${props => { console.log(props.theme); return props.theme.colors.primary; }};
  border-radius: 3px;
  border: none;
`

const Button = props => <Btn {...props} />

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
