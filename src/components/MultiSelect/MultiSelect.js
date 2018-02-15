import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import Icon from '../Icon'
import { MenuItem } from '../Menu'
import Checkbox from '../Checkbox'
import Popover from '../Popover'
import Wrapper from './Wrapper'
import OptionWrapper from './OptionWrapper'

const Tag = styled.div`
  border-radius: 12px;
  padding: 3px 6px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  ${space}
`

class MultiSelect extends PureComponent {
  handleChange = (e, option, checked) => {
    const { getValue, allowEmpty = true } = this.props
    const value = getValue(option)

    // Add or remove the value
    const combined = checked
      ? this.props.selected.concat(option)
      : this.props.selected.filter(s => getValue(s) !== value)

    // Don't allow empty selection unless explicitly allowed
    if (!combined.length && allowEmpty) {
      return this.props.onChange([])
    }

    if (!combined.length && !allowEmpty) {
      return false
    }

    // Trigger the onChange prop and ensure unique values
    this.props.onChange(Array.from(new Set(combined)))
  }

  handleLabelClick = (e, option) => {
    const { getValue } = this.props
    if (!this.props.appendOnLabelClick) {
      e.stopPropagation()
      this.props.onChange([option])
    } else {
      const value = getValue(option)
      const isSelected = this.props.selected.find(
        s => getValue(s) === value
      ) !== undefined
      this.handleChange(e, option, !isSelected)
    }
  }

  renderOption (option) {
    const { renderOption } = this.props

    // If option renderer is provided, use that
    if (renderOption) {
      return renderOption(option)
    }

    // Use a simple span to render options
    return <span>{option.label}</span>
  }

  // This gets rendered every time even if the content is not shown, don't do that
  renderOptions () {
    const { getLabel, getValue } = this.props
    return (
      <OptionWrapper borderRadius={0} p={0} m={0}>
        {this.props.options.map(o => {
          const label = getLabel(o)
          const value = getValue(o)
          return (
            <MenuItem
              key={value}
              borderRadius={0}
              onClick={e => this.handleLabelClick(e, o)}
            >
              <Checkbox
                className="checkbox"
                name={label}
                id={label}
                value={o}
                label={this.renderOption(o)}
                checked={this.props.selected.find(s => getValue(s) === value) !== undefined}
                onChange={this.handleChange}
                borderRadius={3}
                mr={1}
              />
            </MenuItem>
          )
        })}
      </OptionWrapper>
    )
  }

  renderPlaceholder () {
    const {
      selected,
      renderMultiPlaceholder,
      placeholder,
      getLabel
    } = this.props

    if (selected.length === 0) {
      return <span>{placeholder || 'Select Options'}</span>
    }

    if (selected.length === 1 || !renderMultiPlaceholder) {
      return selected.map(s =>
        <Tag
          mr={1}
          key={getLabel(s)}
        >
          <span>{this.renderOption(s)}</span>
        </Tag>
      )
    }

    if (selected.length > 1) {
      return renderMultiPlaceholder(selected)
    }
  }

  renderContent () {

  }

  renderTrigger () {
    const style = {
      display: 'flex',
      alignItems: 'center',
      padding: 10,
      height: '100%',
      justifyContent: 'center',
    }

    return (
      // Cannot assign ref to styled-component, so we must wrap it
      <div>
        <Wrapper style={style} className="ri-multiselect">
          {this.renderPlaceholder()}
          <Icon type="chevron-down" size={20} style={{ marginLeft: 'auto' }} />
        </Wrapper>
      </div>
    )
  }

  render () {
    return (
      <Popper
        trigger={this.renderTrigger()}
        animation="slide"
        position="bottom"
        on="click"
        arrow={false}
        fullWidth
        contentStyle={{ marginTop: -2 }}
      >
        {this.renderOptions()}
      </Popper>
    )
  }
}

MultiSelect.defaultProps = {
  selected: [],
  appendOnLabelClick: true,
}

export default MultiSelect
