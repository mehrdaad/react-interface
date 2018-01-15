import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { space, size } from "styled-system"
import Icon from "../Icon"

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  cursor: pointer;

  > span {
    padding-left: ${props => props.theme.sizes.paddings[props.size] / 3}rem;
    color: ${props => props.theme['checkbox.label.color']};
  }

  ${space};
  ${size};
`

const Box = styled.div`
  box-sizing: border-box;
  background: ${props => props.theme["checkbox.background"] || props.theme.colors.primary};
  border: 1px solid ${props => props.theme["checkbox.border.color"] || props.theme.colors.primary5};
  color: ${props => props.theme["checkbox.icon.color"] || props.theme.colors.primary1};
  height: ${props => props.theme.sizes.dimensions[props.size]};
  width: ${props => props.theme.sizes.dimensions[props.size]};
  ${borderRadius};
  ${borderColor};
  ${color};

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
      size
    } = this.props

    return (
      <Wrapper {...this.props} onClick={this.onClick}>
        <Box {...this.props}>
          {checked && <Icon type="check" />}
        </Box>
        {label && <span onClick={this.onLabelClick}>{label}</span>}
      </Wrapper>
    )
  }
}

Checkbox.propTypes = {
  /**
   * What type of component is this?
   */
  color: PropTypes.oneOf([
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
