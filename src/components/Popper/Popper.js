import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { findDOMNode } from 'react-dom'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'
import outy from 'outy'
import { Manager, Target, Popper as Positioner, Arrow } from 'react-popper'
import Show from 'react-show'

const PopoverWrapper = styled.div`
  .popper {
    width: ${props => props.width}px;
    z-index: 99;
  }

  .popper .popper__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }

  .popper[data-placement^="top"] {
    margin-bottom: 5px;
  }

  .popper[data-placement^="top"] .popper__arrow {
    border-width: 5px 5px 0 5px;
    border-color: #FFF transparent transparent transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
    bottom: -5px;
    // left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .popper[data-placement^="bottom"] {
    margin-top: 5px;
  }

  .popper[data-placement^="bottom"] .popper__arrow {
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent #FFF transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
    top: -5px;
    // left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .popper[data-placement^="right"] {
    margin-left: 5px;
  }

  .popper[data-placement^="right"] .popper__arrow {
    border-width: 5px 5px 5px 0;
    border-color: transparent #FFF transparent transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .popper[data-placement^="left"] {
    margin-right: 5px;
  }

  .popper[data-placement^="left"] .popper__arrow {
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #FFF;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .popper[data-x-out-of-boundaries] {
      display: none;
  }
`

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
}

const animation = 'slide'
const easing = 'easeOutQuint'

const animations = {
  scale: {
    default: { opacity: 0 },
    hide: { opacity: 0, transform: 'scale(.8) translateY(-30%)', pointerEvents: 'none' },
    show: { opacity: 1, transform: 'none', pointerEvents: 'auto' },
  },
  fade: {
    default: { opacity: 0 },
    hide: { opacity: 0 },
    show: { opacity: 1 },
  },
  slide: {
    default: { opacity: 0 },
    hide: { opacity: 0, transform: 'translateY(-2em)' },
    show: { opacity: 1, transform: 'translateY(0)' },
  }
}

const CustomTarget = ({ innerRef, ...props }) => (
  <span
    ref={innerRef}
    style={{ cursor: 'pointer' }}
    {...props}
  />
)

CustomTarget.propTypes = {
  innerRef: PropTypes.func,
}

const CustomPopper = ({ innerRef, style, ...props }) => (
  <div
    ref={innerRef}
    style={{
      ...style,
    }}
    {...props}
  />
)

CustomPopper.propTypes = {
  innerRef: PropTypes.func,
  style: PropTypes.object,
}

class Popper extends PureComponent {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    this._setOutsideTap()
  }

  componentDidUpdate(lastProps, lastState) {
    if (lastState.isOpen !== this.state.isOpen) {
      setTimeout(() => this._setOutsideTap())
    }
  }

  componentWillUnmount() {
    this.outsideTap.remove()
  }

  _setOutsideTap = () => {
    const elements = [this.target]

    if (this.popper) {
      elements.push(this.popper)
    }

    if (this.outsideTap) {
      this.outsideTap.remove()
    }

    this.outsideTap = outy(
      elements,
      ['click', 'touchstart'],
      this._handleOutsideTap,
    )
  }

  _handleOutsideTap = () => {
    this.setState({ isOpen: false })
  }

  _handleTargetClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  // check https://github.com/souporserious/react-popper/issues/57 for portal example
  render() {
    const { width } = this.props

    return (
      <Manager>
        <Target
          onClick={this._handleTargetClick}
          innerRef={c => (this.target = findDOMNode(c))}
          component={CustomTarget}
        >
          {this.props.trigger}
        </Target>
        <PopoverWrapper {...this.props}>
          <Positioner
            key="popper"
            placement="bottom-start"
            className="popper"
          >
            <Show
              show={this.state.isOpen}
              easing={easing}
              duration={duration}
              style={animations[animation].default}
              styleHide={animations[animation].hide}
              styleShow={animations[animation].show}
              transitionOnMount
            >
              {this.props.children}
              <Arrow className="popper__arrow" />
            </Show>
          </Positioner>
        </PopoverWrapper>
      </Manager>
    )
  }
}

export default Popper
