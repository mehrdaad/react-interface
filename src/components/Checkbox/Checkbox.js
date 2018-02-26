import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  space,
  size,
  borderColor,
  borderRadius,
  color,
  fontSize,
} from 'styled-system'
import Icon from '../Icon'

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > .checkbox-label {
    color: ${props => props.theme['checkbox.label.color']};
    color: ${props => props.theme.colors[props.palette][3]};
  }

  ${fontSize}
  ${space}
  ${size}
`

const Box = styled.div`
  box-sizing: border-box;
  height: ${props => props.theme.fontSizes[props.theme.sizes[props.size]]};
  width: ${props => props.theme.fontSizes[props.theme.sizes[props.size]]};
  background: ${props => props.theme['checkbox.background']};
  border: 1px solid ${props => props.theme['checkbox.border.color']};
  color: ${props => props.theme['checkbox.icon.color']};

  ${props =>
    props.palette &&
    css`
      background: ${props => props.theme.colors[props.palette][0]};
      color: ${props => props.theme.colors[props.palette][3]};
      border-color: ${props => props.theme.colors[props.palette][1]};
    `}

  ${borderRadius}
  ${borderColor}
  ${color}
  ${space}

  &:hover {
    border-color: ${props => props.theme['checkbox.hover.border.color']};
    background: ${props => props.theme['checkbox.hover.background']};
  }

  svg,
  div {
    display: inherit;
    height: 100%;
    width: 100%;
  }
`

class Checkbox extends PureComponent {
  onClick = e => {
    this.props.onChange(e, this.props.value, !this.props.checked)
  }

  onLabelClick = e => {
    const { onLabelClick, onChange, value, checked } = this.props

    // Allow for intercepting of label click if necessary
    if (onLabelClick) {
      onLabelClick(e, value, !checked)
    } else {
      onChange(e, value, !checked)
    }
  }

  render() {
    const {
      id,
      label,
      name,
      value,
      disabled,
      checked,
      onChange,
      ...rest
    } = this.props

    return (
      <Wrapper {...rest} className="checkbox-wrapper">
        <Box {...this.props} className="checkbox" onClick={this.onClick}>
          {checked && <Icon type="check" />}
        </Box>
        {label && (
          <span onClick={this.onLabelClick} className="checkbox-label">
            {label}
          </span>
        )}
      </Wrapper>
    )
  }
}

Checkbox.propTypes = {
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
    PropTypes.string,
  ]),
  /**
   * How big is it?
   */
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
}

Checkbox.defaultProps = {
  size: 'md',
  palette: 'primary',
}

export default Checkbox
