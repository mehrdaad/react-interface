import { Component } from 'react'
import canUseDom from 'dom-helpers/util/inDOM'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let portalContainer

export default class Portal extends Component {
  constructor() {
    super()

    // This fixes SSR
    if (!canUseDom) return

    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.setAttribute('ri-portal-container', '')
      document.body.appendChild(portalContainer)
    }

    this.el = document.createElement('div')
  }

  componentDidMount() {
    portalContainer.appendChild(this.el)
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el)
  }

  render() {
    if (!canUseDom) return null
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired
}

// import React from 'react'
// import ReactDOM from 'react-dom'
// class Portal extends React.Component {
//     render() {
//         const { children, target = document.body } = this.props;
//         return ReactDOM.createPortal(children, target);
//     }
// }

// export default Portal