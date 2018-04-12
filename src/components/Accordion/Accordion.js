import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Show from 'react-show'
import styled from 'styled-components'
import {
  space,
  color,
  border,
  borderRadius,
  borderColor,
  fontSize,
  textAlign,
} from 'styled-system'

const DefaultLabel = styled.div`
  cursor: pointer;
  background: ${props => props.theme.colors.accordionLabelBackground};
  color: ${props => props.theme.colors.accordionLabelColor};
  margin: 5px 0;
  padding: 5px;
`

class Accordion extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIdx: props.selectedIdx,
    }
  }

  onClick = (idx) => {
    this.setState({
      selectedIdx: idx
    })
  }

  render () {
    const children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children]

    return children.map((child, idx) => {
      const {
        label = `Section ${idx + 1}`,
        trigger = <DefaultLabel>{label}</DefaultLabel>,
      } = child.props

      return (
        <div key={`accordion-${idx}`}>
          <span onClick={() => this.onClick(idx)}>
            {trigger}
          </span>

          <Show
            duration={200}
            show={idx === this.state.selectedIdx}
            styleHide={{ height: 0, opacity: 0 }}
            styleShow={{ height: 'auto', opacity: 1 }}
          >
            {child}
          </Show>
        </div>
      )
    })
  }
}

Accordion.propTypes = {
  selectedIdx: PropTypes.number,
  trigger: PropTypes.object,
}

Accordion.defaultProps = {
  selectedIdx: 0,
}

export default Accordion
