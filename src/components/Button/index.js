import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'

const Btn = styled.button`
  padding: 1rem;
  outline: none;
  background: ${props => props.theme.colors[props.type]};
  color: ${props => props.theme.colors[`${props.type}1`]};
  padding: ${props => props.theme.sizes.paddings[props.size]};
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  border-radius: 3px;
  border: none;
  ${space};
`

const Button = props => <Btn {...props} />

Button.propTypes = {
  /**
   * What type of component is this?
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger']),
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
  type: 'primary',
  size: 'medium',
}

export default Button
