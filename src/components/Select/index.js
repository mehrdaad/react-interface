import React from 'react'
import styled from 'styled-components'
import Popover from '../Popover'
import { Menu, MenuItem } from '../Menu'
import Icon from '../Icon'
import Wrapper from './Wrapper'

const Placeholder = styled.span`
  color: ${props => props.theme['select.placeholder.color']};
`

class Select extends React.Component {
  renderPlaceholder () {
    return <Placeholder>{this.props.placeholder}</Placeholder>
  }

  renderSelectedValue () {
    const { value, options } = this.props
    return <span>{options.find(o => o.value === value).label}</span>
  }

  renderOptions () {
    return (
      <Menu borderRadius={0} p={0} m={0}>
        {this.props.options.map(o => (
          <MenuItem
            key={o.value}
            borderRadius={0}
            onClick={() => this.props.onChange(o.value)}
          >
            {o.label}
          </MenuItem>
        ))}
      </Menu>
    )
  }

  render () {
    const { value, ...rest } = this.props
    return (
      <Popover content={this.renderOptions()} borderRadius={0} top="95%">
        <Wrapper {...rest} className="ri-select">
          {!value && this.renderPlaceholder()}
          {value && this.renderSelectedValue()}
          <Icon
            type="chevron-down"
            size={20}
            style={{ marginLeft: 'auto', display: 'inherit' }}
          />
        </Wrapper>
      </Popover>
    )
  }
}

export default Select
