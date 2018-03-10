import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import Popper from '../Popper'
import { Menu, MenuItem } from '../Menu'
import Icon from '../Icon'
import Wrapper from './Wrapper'

const Placeholder = styled.span`
  color: ${props => props.theme['select.placeholder.color']};
  ${color};
`

class Select extends React.Component {
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
    const { menuItemProps } = this.props

    return close => (
      <Menu borderRadius={0} p={0} m={0}>
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
          <Icon
            type="chevron-down"
            style={{ marginLeft: 'auto', display: 'inherit' }}
            {...iconProps}
          />
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
  borders: 1,
  iconProps: {
    size: 20,
  },
  popoverProps: {
    maxHeight: '150px',
    mt: '-1px',
    portal: false,
    bg: 'select.background',
    color: 'select.color',
    borderColor: 'select.border',
    borderRadius: 0,
  },
  menuItemProps: {
    borderRadius: 0,
  },
}

export default Select
