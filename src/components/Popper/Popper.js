import React, { PureComponent } from 'react'
import cx from 'classnames'
import Portal from '../Portal'
import styled from 'styled-components'
import { findDOMNode } from 'react-dom'
import resizeDetector from 'element-resize-detector'
import PropTypes from 'prop-types'
import outy from 'outy'
import { Manager, Target, Popper as Positioner, Arrow } from 'react-popper'
import Show from 'react-show'
import { debounce } from '../../utils/browser'

const PopoverWrapper = styled.div`
  .popper {
    // width: ${props => props.width};
    z-index: 99;
  }

  .popper .popper__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }

  .popper[data-placement^="top"].has-arrow {
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

  .popper[data-placement^="bottom"].has-arrow {
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

  .popper[data-placement^="right"].has-arrow {
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

  .popper[data-placement^="left"].has-arrow {
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
  <div
    ref={innerRef}
    style={{ cursor: 'pointer' }}
    {...props}
  />
)

CustomTarget.propTypes = {
  innerRef: PropTypes.func,
}

const CustomPopper = ({ innerRef, ...props }) => (
  <div
    ref={innerRef}
    {...props}
    // for some reason react-popper is off by one pixel so we subtract one
    style={{ ...props.style, left: 1 }}
  />
)

CustomPopper.propTypes = {
  innerRef: PropTypes.func,
  style: PropTypes.object,
}

class Popper extends PureComponent {
  constructor (props) {
    super(props)

    this._handleResize = debounce(this._handleResize, 250, false)

    this.state = {
      isOpen: false,
      width: null,
    }
  }

  componentDidMount() {
    this._setOutsideTap()
    this._setResizeDetector()
  }

  componentDidUpdate(lastProps, lastState) {
    if (lastState.isOpen !== this.state.isOpen) {
      setTimeout(() => this._setOutsideTap())
    }
  }

  componentWillUnmount() {
    this.outsideTap.remove()
    this.detector.uninstall()
  }

  _setOutsideTap = () => {
    const elements = [this.target, this.popper]

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

  _setResizeDetector = () => {
    this.detector = resizeDetector()
    this.detector.listenTo(this.target, this._handleResize)
  }

  _handleResize = el => {
    this.mostRecentWidth = this.state.width
    this.setState({
      width: el.offsetWidth
    })
  }

  _handleOutsideTap = () => {
    this.setState({ isOpen: false })
  }

  _handleTargetClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  _getPopperWidth () {
    if (this.target && this.props.fullWidth) {
      // return this.target.getBoundingClientRect().width
      return this.state.width
    }

    if (this.props.width) {
      return this.props.width
    }
  }

  renderPositioner () {
    const {
      position,
      easing,
      duration,
      animation,
      children,
      arrow,
      contentStyle
    } = this.props

    const popperClasses = cx({
      popper: true,
      'has-arrow': arrow
    })

    const popperStyle = {
      ...contentStyle,
      width: this._getPopperWidth(),
      zIndex: 99,
    }

    return (
      <Positioner
        key="popper"
        placement={position}
        className={popperClasses}
        offset="-100px"
        component={CustomPopper}
        innerRef={c => {
          this.popper = findDOMNode(c)
        }}
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
          <div style={popperStyle}>
            {typeof this.props.children === "function"
              ? this.props.children(this._handleOutsideTap, this.state.isOpen)
              : this.props.children}
            { arrow && <Arrow className="popper__arrow" /> }
          </div>
        </Show>
      </Positioner>
    )
  }

  render() {
    const { trigger, portal } = this.props

    return (
      <PopoverWrapper>
        <Manager>
          <Target
            onClick={this._handleTargetClick}
            innerRef={c => (this.target = findDOMNode(c))}
            component={CustomTarget}
          >
            {trigger}
          </Target>
          { portal && <Portal>{this.renderPositioner()}</Portal> }
          { !portal && this.renderPositioner() }
        </Manager>
      </PopoverWrapper>
    )
  }
}

Popper.propTypes = {
  arrow: PropTypes.bool,
  animation: PropTypes.oneOf(["fade", "scale", "slide"]),
  duration: PropTypes.number,
  offset: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  fullWidth: PropTypes.bool,
  portal: PropTypes.bool,
  contentStyle: PropTypes.object,
  trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  on: PropTypes.oneOfType([
    PropTypes.oneOf(["hover", "click", "focus"]),
    PropTypes.arrayOf(PropTypes.oneOf(["hover", "click", "focus"]))
  ]),
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  position: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "right",
    "right-start",
    "right-end",
    "left",
    "left-start",
    "left-end",
    "auto",
    "auto-start",
    "auto-end",
  ])
};

Popper.defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  closeOnDocumentClick: true,
  defaultOpen: false,
  on: ["click"],
  portal: false,
  arrow: true,
  animation: 'slide',
  easing: 'easeOutQuint',
  duration: 250,
  position: "bottom-start",
  fullWidth: false,
  contentStyle: {},
};

export default Popper
