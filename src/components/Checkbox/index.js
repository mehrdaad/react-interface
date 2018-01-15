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
  }

  ${space};
  ${size};
`

const Box = styled.div`
  box-sizing: border-box;
  background: ${props => props.theme.colors[props.color] || props.theme["checkbox.background"]};
  border: 1px solid ${props => props.theme.colors[`${props.color}5`] || props.theme["checkbox.border.color"]};
  color: ${props => props.theme.colors[`${props.color}1`] || props.theme["checkbox.icon.color"]};
  height: ${props => props.theme.sizes.dimensions[props.size]};
  width: ${props => props.theme.sizes.dimensions[props.size]};
  border-radius: 2px;

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
    const { onLabelClick, onChange } = this.props

    // Allow for intercepting of label click if necessary
    if (onLabelClick) {
      onLabelClick(e, this.props.value, !this.props.checked)
    }

    // Trigger normal onChange event
    onChange(e, this.props.value, !this.props.checked)
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
  color: "primary",
  size: "md"
}

export default Checkbox
