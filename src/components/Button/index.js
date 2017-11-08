import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

const Btn = styled.button`
  cursor: pointer;
  padding: 1rem;
  outline: none;
  background: ${props => props.theme.colors[props.color]};
  color: ${props => props.theme.colors[`${props.color}1`]};
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
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger']),
  /**
   * How big is it?
   */
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  /**
   * Style overrides
   */
  styles: PropTypes.shape({
    color: PropTypes.string,
    border: PropTypes.string
  })
}

Button.defaultProps = {
  color: 'primary',
  size: 'md',
}

export default Button
