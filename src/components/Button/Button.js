import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'
import {
  space,
  width,
  color,
  borders,
  borderRadius,
  borderColor,
  fontWeight,
  fontSize,
  hover,
  boxShadow,
} from 'styled-system'

const Button = styled.button`
  font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  transition: all .2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  ${color}
  ${space}
  ${width}
  ${borders}
  ${borderRadius}
  ${borderColor}
  ${fontWeight}
  ${fontSize}
  ${hover}
  ${boxShadow}

  ${props =>
    props.palette &&
    css`
      background: ${props => props.theme.colors[props.palette][3]};
      color: ${props => props.theme.colors[props.palette][0]};
      border-color: ${props => props.theme.colors[props.palette][4]};
    `}

  ${props =>
    props.inverse &&
    props.palette &&
    css`
      background: ${props => props.theme.colors[props.palette][0]};
      color: ${props => props.theme.colors[props.palette][4]};
      border-color: ${props => props.theme.colors[props.palette][1]};
    `}

  ${props =>
    props.transparent &&
    css`
      background: none;
      color: ${props =>
        props.palette ? props.theme.colors[props.palette][4] : 'inherit'};
      border: none;
    `}

  ${props =>
    props.size &&
    css`
      font-size: ${props =>
        props.theme.fontSizes[props.theme.sizes[props.size]]};
      padding: ${props =>
        props.theme.buttonPaddings[props.theme.sizes[props.size]]};
    `}

  &:disabled {
    opacity: .25;
    background: ${props => props.theme['button.disabled.background']};
    color: ${props => props.theme['button.disabled.color']};
  }
`

Button.propTypes = {
  /**
   * What type of component is this?
   */
  palette: PropTypes.oneOf([
    'primary',
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'pink',
    'info',
    'danger',
    'warning',
    'success',
    PropTypes.string,
  ]),
  /**
   * How big is it?
   */
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  /**
   * Style overrides
   */
  styles: PropTypes.shape({
    color: PropTypes.string,
    border: PropTypes.string,
  }),
  /**
   * Inverse colors
   */
  inverse: PropTypes.bool,
  /**
   * Transparent
   */
  transparent: PropTypes.bool,
}

Button.defaultProps = {
  size: 'md',
  borderRadius: 3,
  inverse: false,
  transparent: false,
  color: 'button',
  bg: 'buttonBackground',
  borderColor: 'buttonBorder',
  border: '1px solid'
}

/** @component */
export default Button
