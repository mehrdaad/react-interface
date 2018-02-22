import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { space, size, borderColor, borderRadius, color } from "styled-system"
import Icon from "../Icon"

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  cursor: pointer;

  > .checkbox-label {
    padding-left: ${props => props.theme.sizes.paddings[props.size] / 2}rem;
    color: ${props => props.theme['checkbox.label.color']};
    color: ${props => props.theme.colors[props.palette]};
  }

  ${space};
  ${size};
`

const Box = styled.div`
  ${borderRadius};
  ${borderColor};
  ${color};
  ${space};
  box-sizing: border-box;
  height: ${props => props.theme.sizes.dimensions[props.size]};
  width: ${props => props.theme.sizes.dimensions[props.size]};

  ${props => !props.palette && css`
    background: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors['primary1']};
  `}

  background: ${props => props.theme["checkbox.background"]};
  border: 1px solid ${props => props.theme["checkbox.border.color"]};
  color: ${props =>  props.theme["checkbox.icon.color"]};

  &:hover {
    border-color: ${props => props.theme["checkbox.hover.border.color"]};
    background: ${props => props.theme["checkbox.hover.background"]};
  }

  ${props => props.palette && css`
    background: ${props => props.theme.colors[`${props.palette}1`]};
    border: 1px solid ${props => props.theme.colors[props.palette]};
    color: ${props => props.theme.colors[props.palette]};
  `}

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
        {
          label &&
          <span onClick={this.onLabelClick} className="checkbox-label">
            {label}
          </span>
        }
      </Wrapper>
    )
  }
}

Checkbox.propTypes = {
  /**
   * What type of component is this?
   */
  palette: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    PropTypes.string
  ]),
  /**
   * How big is it?
   */
  size: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"])
}

Checkbox.defaultProps = {
  size: "md"
}

export default Checkbox
