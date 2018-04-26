import React, { Component } from 'react'
import styled from 'styled-components'
import { color, hover } from 'styled-system'
import Popper from '../Popper'
import { Menu, MenuItem } from '../Menu'
import Icon from '../Icon'
import Wrapper from './Wrapper'

const Placeholder = styled.span`
  color: ${props => props.theme.colors['selectPlaceholder']};
  ${color} ${hover};
`

Placeholder.defaultProps = {
  hover: {
    color: 'selectHover',
    bg: 'selectHoverBackground',
  },
}

class Select extends Component {
  renderPlaceholder() {
    const { placeholderColor } = this.props
    return (
      <Placeholder color={placeholderColor}>
        {this.props.placeholder}
      </Placeholder>
    )
  }

  renderSelectedValue() {
    const { value, options } = this.props
    return <span>{options.find(o => o.value === value).label}</span>
  }

  renderOptions(close) {
    const { menuProps, menuItemProps } = this.props

    return close => (
      <Menu {...menuProps}>
        {this.props.options.map(o => (
          <MenuItem
            key={o.value}
            onClick={() => {
              this.props.onChange(o.value)
              close()
            }}
            {...menuItemProps}
          >
            {o.label}
          </MenuItem>
        ))}
      </Menu>
    )
  }

  renderChildren() {
    const { value, placeholderColor, iconProps, ...rest } = this.props
    return (
      // Cannot assign ref to styled-component, so we must wrap it
      <div>
        <Wrapper {...rest} className="ri-select" tabIndex="0">
          {!value && this.renderPlaceholder()}
          {value && this.renderSelectedValue()}
          <Icon type="chevron-down" {...iconProps} />
        </Wrapper>
      </div>
    )
  }

  render() {
    const { maxHeight, popoverProps } = this.props
    return (
      <Popper
        trigger={this.renderChildren()}
        position="bottom"
        on="click"
        arrow={false}
        fullWidth
        {...popoverProps}
      >
        {this.renderOptions()}
      </Popper>
    )
  }
}

Select.defaultProps = {
  onChange: () => {},
  iconProps: {
    size: 20,
    color: 'selectIcon',
    style: { marginLeft: 'auto', display: 'inherit' },
  },
  popoverProps: {
    maxHeight: '150px',
    mt: '-1px',
    portal: false,
    color: 'select',
    bg: 'selectBackground',
    borderColor: 'selectBorder',
    borderRadius: 0,
  },
  menuProps: {
    borderRadius: 0,
    p: 0,
    m: 0,
    bg: 'selectBackground',
  },
  menuItemProps: {
    borderRadius: 0,
    color: 'select',
    hover: {
      color: 'selectItemHover',
      backgroundColor: 'selectItemHoverBackground',
    },
  },
}

export default Select
