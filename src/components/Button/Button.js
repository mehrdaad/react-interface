import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, width, color } from 'styled-system'

const Button = styled.button`
  cursor: pointer;
  padding: 1rem;
  outline: none;
  padding: ${props => props.theme.sizes.paddings[props.size]}rem;
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  border-radius: 3px;
  border: none;
  transition: all .2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${props => !props.palette && css`
    background: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors['primary1']};
  `}

  background: ${props => props.theme["button.background"]};
  border: 1px solid ${props => props.theme["button.border.color"]};
  color: ${props =>  props.theme["button.color"]};
  box-shadow: ${props =>  props.theme["button.shadow"]};

  ${props => props.palette && css`
    background: ${props => props.theme.colors[props.palette]};
    border: 1px solid ${props => props.theme.colors[props.palette]};
    color: ${props => props.theme.colors[`${props.palette}1`]};
  `}

  ${color}
  ${space}
  ${width}

  &:disabled {
    background: ${props => props.theme["button.disabled.background"]};
    color: ${props => props.theme["button.disabled.color"]};
  }
`

Button.propTypes = {
  /**
   * What type of component is this?
   */
  palette: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger', PropTypes.string]),
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
  size: 'md',
}

/** @component */
export default Button
