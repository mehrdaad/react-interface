import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'
import {
  borders,
  color,
  borderColor,
  boxShadow,
  borderRadius,
  space,
  width,
} from 'styled-system'
import resizeDetector from 'element-resize-detector'
import cx from 'classnames'
import { Manager, Target, Popper as Positioner, Arrow } from 'react-popper'
// import Show from 'react-show'
import { debounce } from '../../utils/browser'
import Portal from '../Portal'

const PopoverWrapper = styled.div`
  .popper {
    z-index: 99;
    overflow-y: scroll;
    max-height: ${props => props.maxHeight};
    display: ${props => (props.isOpen ? 'block' : 'none')};
    border-width: ${props => props.theme['popover.border.width']};
    border-style: ${props => props.theme['popover.border.style']};
    border-color: ${props => props.theme['popover.border.color']};
    box-shadow: ${props => props.theme['popover.shadow']};
    ${color}
    ${borders}
    ${borderColor}
    ${borderRadius}
    ${boxShadow}
    ${space}
    ${width}
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

  // .popper[data-x-out-of-boundaries] {
  //   display: none;
  // }
`

const animations = {
  scale: {
    default: { opacity: 0 },
    hide: {
      opacity: 0,
      transform: 'scale(.8) translateY(-30%)',
      pointerEvents: 'none',
    },
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
  },
}

const CustomTarget = ({ innerRef, ...props }) => (
  <div ref={innerRef} style={{ cursor: 'pointer' }} {...props} />
)

const CustomPopper = ({ innerRef, ...props }) => (
  <div ref={innerRef} {...props} style={{ ...props.style }} /> // left: 1 if needed
)

class Popper extends PureComponent {
  constructor(props) {
    super(props)

    this._handleResize = debounce(this._handleResize, 50, false)

    this.state = {
      isOpen: false,
      width: null,
    }
  }

  componentDidUpdate(lastProps, lastState) {
    if (!lastState.isOpen && this.state.isOpen) {
      setTimeout(() => this._setOutsideTap())
      setTimeout(() => this._setResizeDetector())
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._handleOutsideTap, true)
    if (this.detector) {
      this.detector.uninstall()
    }
  }

  _setOutsideTap = () => {
    document.addEventListener('click', this._handleOutsideTap, true)
  }

  _setResizeDetector = () => {
    this.detector = resizeDetector()

    if (this.target) {
      this.detector.listenTo(this.target, this._handleResize)
    }
  }

  _handleResize = el => {
    this.mostRecentWidth = this.state.width
    this.setState({
      width: el.offsetWidth,
    })
  }

  _handleOutsideTap = e => {
    const clickedPopper = e && this.popper && this.popper.contains(e.target)
    const clickedTarget = e && this.target && this.target.contains(e.target)

    if (!e || (!clickedPopper && !clickedTarget)) {
      this.close()
    }
  }

  close = () => {
    this.setState({ isOpen: false }, this.props.onClose)
  }

  _handleTargetClick = () => {
    if (this.state.isOpen) {
      this.close()
    } else {
      this.setState({ isOpen: true }, this.props.onOpen)
    }
  }

  _getPopperWidth() {
    if (this.target && this.props.fullWidth) {
      if (!this.state.width) {
        return this.target.getBoundingClientRect().width - 2
      } else {
        return this.state.width - 2
      }
    }

    if (this.props.width) {
      return this.props.width
    }
  }

  renderPositioner() {
    const {
      position,
      easing,
      duration,
      animation,
      children,
      modifiers,
      arrow,
      contentStyle,
    } = this.props

    const popperClasses = cx({
      popper: true,
      'has-arrow': arrow,
    })

    const popperStyle = {
      ...contentStyle,
      width: this._getPopperWidth(),
      zIndex: 99,
      display: this.state.isOpen ? 'block' : 'none',
    }

    const popperModifiers = {
      preventOverflow: {
        enabled: true,
        escapeWithReference: true,
        boundariesElement: 'scrollParent',
      },
      ...modifiers,
    }

    return (
      <Positioner
        key="popper"
        placement={position}
        modifiers={popperModifiers}
        className={popperClasses}
        offset="-100px"
        component={CustomPopper}
        innerRef={c => {
          this.popper = findDOMNode(c)
        }}
      >
        <div style={popperStyle}>
          {typeof children === 'function'
            ? children(this.close, this.state.isOpen)
            : children}
          {arrow && <Arrow className="popper__arrow" />}
        </div>
      </Positioner>
    )
  }

  render() {
    const { trigger, portal, ...rest } = this.props

    return (
      <PopoverWrapper {...rest} isOpen={this.state.isOpen}>
        <Manager>
          <Target
            innerRef={c => (this.target = findDOMNode(c))}
            component={CustomTarget}
            onClick={this._handleTargetClick}
          >
            {trigger}
          </Target>

          {portal
            ? <Portal>{this.renderPositioner()}</Portal>
            : this.renderPositioner()}
        </Manager>
      </PopoverWrapper>
    )
  }
}

// <Show
//   show={this.state.isOpen}
//   easing={easing}
//   duration={duration}
//   style={animations[animation].default}
//   styleHide={animations[animation].hide}
//   styleShow={animations[animation].show}
//   transitionOnMount
// >
//   <div style={popperStyle}>
//     {typeof children === 'function'
//       ? children(this._handleOutsideTap, this.state.isOpen)
//       : children}
//     {arrow && <Arrow className="popper__arrow" />}
//   </div>
// </Show>

Popper.propTypes = {
  arrow: PropTypes.bool,
  animation: PropTypes.oneOf(['fade', 'scale', 'slide']),
  duration: PropTypes.number,
  offset: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  fullWidth: PropTypes.bool,
  portal: PropTypes.bool,
  contentStyle: PropTypes.object,
  trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  on: PropTypes.oneOfType([
    PropTypes.oneOf(['hover', 'click', 'focus']),
    PropTypes.arrayOf(PropTypes.oneOf(['hover', 'click', 'focus'])),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  position: PropTypes.oneOf([
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
    'auto',
    'auto-start',
    'auto-end',
  ]),
}

Popper.defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  closeOnDocumentClick: true,
  defaultOpen: false,
  on: ['click'],
  portal: false,
  arrow: true,
  animation: 'slide',
  easing: 'easeOutQuint',
  duration: 250,
  position: 'bottom-start',
  fullWidth: false,
  contentStyle: {},
}

export default Popper
