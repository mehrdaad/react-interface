import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Show from 'react-show'

export default class Accordion extends PureComponent {
  static propTypes = {
    selectedIdx: PropTypes.number,
    trigger: PropTypes.object,
  }

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
      const { trigger, ...childProps } = child.props

      const styleHide = { opacity: 0, height: 0 }
      const styleShow = { opacity: 1, height: 'auto' }

      return (
        <div
          key={`accordion-${idx}`}
          style={this.props.style}
          className={this.props.className}
        >
          <span
            onClick={() => this.onClick(idx)}
          >
            {trigger}
          </span>

          <Show
            duration={200}
            show={idx === this.state.selectedIdx}
            styleHide={styleHide}
            styleShow={styleShow}
          >
            {child}
          </Show>
        </div>
      )
    })
  }
}
