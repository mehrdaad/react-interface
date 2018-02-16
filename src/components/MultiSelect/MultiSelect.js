import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import Icon from '../Icon'
import { MenuItem } from '../Menu'
import Checkbox from '../Checkbox'
import Popover from '../Popover'
import Popper from '../Popper'
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
    e.stopPropagation()
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

  handleOptionClick = (e, option) => {
    const { getValue, appendOnLabelClick } = this.props
    if (!appendOnLabelClick) {
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
    const { getLabel, getValue, optionStyles } = this.props
    return (
      <OptionWrapper borderRadius={0} p={0} m={0}>
        {this.props.options.map(o => {
          const label = getLabel(o)
          const value = getValue(o)
          return (
            <MenuItem
              key={value}
              onClick={e => this.handleOptionClick(e, o)}
              style={optionStyles}
            >
              <Checkbox
                className="checkbox"
                name={label}
                id={label}
                value={o}
                label={this.renderOption(o)}
                checked={this.props.selected.find(s => getValue(s) === value) !== undefined}
                onChange={this.handleChange}
                onLabelClick={e => {
                  e.stopPropagation()
                  this.handleOptionClick(e, o)
                }}
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

  renderTrigger () {
    return (
      <div>
        <Wrapper className="ri-multiselect" {...this.props}>
          {this.renderPlaceholder()}
          <Icon type="chevron-down" size={20} style={{ marginLeft: 'auto' }} />
        </Wrapper>
      </div>
    )
  }

  render () {
    return (
      <Popover
        trigger={this.renderTrigger()}
        animation="slide"
        position="bottom center"
        on="click"
        arrow={false}
        fullWidth
        contentStyle={{ marginTop: -1, maxHeight: 350, overflow: 'scroll' }}
      >
        {this.renderOptions()}
      </Popover>
    )
  }
}

MultiSelect.defaultProps = {
  selected: [],
  appendOnLabelClick: true,
  optionStyles: {
    padding: 10
  }
}

export default MultiSelect
