import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  space,
  borderRadius,
  color,
  justifyContent,
  width,
  fontSize,
  borders,
} from 'styled-system'

const Notification = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  line-height: 1rem;
  border-width: 1px;
  border-style: solid;
  ${borderRadius}
  ${borders}
  ${color}
  ${space}
  ${justifyContent}
  ${width}
  ${fontSize}

  ${props =>
    props.palette &&
    css`
      background: ${props => props.theme.colors[props.palette][0]};
      color: ${props => props.theme.colors[props.palette][4]};
      border-color: ${props => props.theme.colors[props.palette][2]};
    `}

  ${props =>
    props.palette &&
    props.solid &&
    css`
      background: ${props => props.theme.colors[props.palette][3]};
      color: ${props => props.theme.colors[props.palette][0]};
      border-color: ${props => props.theme.colors[props.palette][4]};
    `}
`

Notification.defaultProps = {
  borderRadius: 4,
  p: 3,
  solid: false,
  bg: 'notificationBackground',
  color: 'notificationColor',
  borderColor: 'notificationBorder',
}

/** @component */
export default Notification
