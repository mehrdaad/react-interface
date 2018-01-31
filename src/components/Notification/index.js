import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, borderRadius, color, justifyContent, width } from 'styled-system'

const Notification = styled.div`
  padding: ${props => props.theme.sizes.paddings[props.size]}rem;
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  display: flex;
  align-items: center;
  justify-content: start;

  ${props => !props.palette && css`
    background: ${props => props.theme.colors['primary1']};
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  `}

  background: ${props => props.theme["notification.background"]};
  border: 1px solid ${props => props.theme["notification.border.color"]};
  color: ${props =>  props.theme["notification.color"]};

  ${props => props.palette && css`
    background: ${props => props.theme.colors[`${props.palette}1`]};
    border: 1px solid ${props => props.theme.colors[props.palette]};
    color: ${props => props.theme.colors[props.palette]};
  `}

  ${props => props.palette && props.solid && css`
    background: ${props => props.theme.colors[props.palette]};
    border: 1px solid ${props => props.theme.colors[props.palette]};
    color: ${props => props.theme.colors[`${props.palette}1`]};
  `}

  ${borderRadius}
  ${color}
  ${space}
  ${justifyContent}
  ${width}
`

Notification.defaultProps = {
  borderRadius: 4,
  p: 2,
  solid: false,
}

export default Notification
