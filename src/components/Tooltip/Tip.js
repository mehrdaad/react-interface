import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Box from '../Box'
import Text from '../Text'

const Wrapper = Box.extend`
  position: fixed;
  padding: 8px;
  background: #333;
  color: white;
  box-shadow: 2px 2px 3px rgba(0 ,0, 0, 0.3);
  text-align: center;
  font-size: 16px;
  color: ${props => props.theme.colors['tooltip.color']};
  background: ${props => props.theme.colors['tooltip.background']};
  ${color}
`

export default class Tip extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children, style } = this.props

    return (
      <Wrapper style={style}>
        {children}
      </Wrapper>
    )
  }
}
