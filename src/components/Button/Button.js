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

  ${props =>
    !props.palette &&
    css`
      background: ${props => props.theme.colors.primary[4]};
      color: ${props => props.theme.colors.primary[0]};
      border-color: ${props => props.theme.colors.primary[4]};
    `}

  border-color: ${props => props.theme['button.border.color']};
  border-width: ${props => props.theme['button.border.width']};
  border-style: ${props => props.theme['button.border.style']};
  background: ${props => props.theme['button.background']};
  color: ${props => props.theme['button.color']};
  box-shadow: ${props => props.theme['button.shadow']};
  border-radius: ${props => props.theme['button.border.radius']};

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
}

/** @component */
export default Button
