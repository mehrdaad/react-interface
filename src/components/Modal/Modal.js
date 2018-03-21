import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PageClick from 'react-page-click'
import { fadeIn, slideIn } from '../../utils/animations'
import {
  space,
  size,
  maxWidth,
  color,
  borders,
  borderRadius,
  borderColor,
  boxShadow,
  fontSize,
  fontWeight,
  zIndex
} from 'styled-system'

const Backdrop = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  transform-origin: 50% 0;
  animation: ${fadeIn} 200ms linear;

  ${color}
  ${zIndex}
`

const Body = styled.div`
  width: 100%;
  margin: 10% auto 5%;
  animation: ${slideIn} 300ms ease-out;

  ${space}
  ${size}
  ${maxWidth}
  ${color}
  ${borders}
  ${borderRadius}
  ${borderColor}
  ${boxShadow}
  ${fontSize}
  ${fontWeight}
`

class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  componentDidMount () {
    this.props.closeWithEsc &&
      document.addEventListener('keydown', this.keydown, false)
  }

  componentWillUnmount () {
    this.props.closeWithEsc &&
      document.removeEventListener('keydown', this.keydown, false)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: nextProps.isOpen })
    }
  }

  keydown = (evt) => {
    if (this.props.closeWithEsc && evt.keyCode === 27) {
      this.closeModal()
    }
  }

  openModal = () => {
    if (document.body) {
      document.body.style.overflow = 'hidden'
    }

    this.props.onOpen()
    this.setState({ isOpen: true })
  }

  closeModal = () => {
    if (document.body) {
      document.body.style.overflow = 'auto'
    }

    this.props.onClose()
    this.setState({ isOpen: false })
  }

  render () {
    const {
      closeWithBackdrop,
      trigger,
      backdropProps,
      containerProps,
      children
    } = this.props

    return (
      <div>
        <span onClick={this.openModal}>
          {trigger}
        </span>

        {this.state.isOpen &&
          <Backdrop {...backdropProps}>
            <PageClick
              outsideOnly
              notify={() => closeWithBackdrop && this.closeModal()}>
              <Body {...containerProps}>
                {children}
              </Body>
            </PageClick>
          </Backdrop>}
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeWithEsc: PropTypes.bool,
  closeWithBackdrop: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  trigger: PropTypes.object,
  backdropProps: PropTypes.object,
  containerProps: PropTypes.object
}

Modal.defaultProps = {
  isOpen: false,
  closeWithEsc: true,
  closeWithBackdrop: true,
  onOpen: () => {},
  onClose: () => {},
  trigger: <button>Open Modal</button>,
  backdropProps: {
    bg: 'rgba(0, 0, 0, 0.8)',
    zIndex: 11
  },
  containerProps: {
    bg: '#ffffff',
    borderRadius: '4px',
    maxWidth: '700px',
    p: '25px'
  }
}

export default Modal
