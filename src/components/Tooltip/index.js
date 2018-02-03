import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Portal from '../Portal'
import Tip from './Tip'

export default class Tooltip extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }

    this.width = props.width || 256
    this.space = props.space || 16
  }

  show = () => {
    const { position = 'top', smart } = this.props
    const style = { width: this.width, zIndex: 9999 }
    const dimensions = this.el.getBoundingClientRect()
    const { x, y, width, height, left, right, top, bottom } = dimensions

    // center align the tooltip by taking both the target and tooltip widths into account
    if (position === 'bottom' || position === 'top') {
      style.left = (left + (width / 2)) - (this.width / 2)
      style.left = Math.max(this.space, style.left) // make sure it doesn't poke off the left side of the page
      style.left = Math.min(style.left, document.body.clientWidth - this.width - this.space) // or off the right
    }

    if (position === 'left') {
      style.left = left
    }

    if (position === 'top') {
      style.bottom = (window.innerHeight - top) + this.space
    }

    if (position === 'bottom') {
      style.top = top + height + this.space
    }

    // Use smart positioning to determine tooltip location
    if (smart) {
      if (top < window.innerHeight / 2) {
        style.top = top + height + this.space
        style.bottom = undefined
      } else {
        style.bottom = (window.innerHeight - top) + this.space
        style.top = undefined
      }
    }

    this.setState({
      visible: true,
      style,
    });
  }

  hide = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <span
        onMouseOver={this.show}
        onMouseOut={this.hide}
        className="tooltip-trigger-text"
        ref={el => this.el = el}
        style={{ cursor: this.props.cursor || 'pointer' }}
      >
        {this.props.children}
        {this.state.visible && (
          <Portal>
            <Tip
              className="tooltip-body"
              style={this.state.style}
            >
              {this.props.content}
            </Tip>
          </Portal>
        )}
      </span>
    );
  }
}