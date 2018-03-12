// Could make a timber one: https://codepen.io/zsherman/pen/JMQzjJ for inspiration
import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { space, width, color } from 'styled-system'

const spin = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

function speedSwitch(speed) {
  if (speed === 'fast') return 600
  if (speed === 'slow') return 900
  return 750
}

const Wrapper = styled.div`
  ${space} svg {
    ${width} transition-property: transform;
    animation-name: ${spin};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    color: ${props => props.theme.colors.spinner};
    ${color};
  }
`

const Spinner = ({ color, speed, gap, thickness, size, style, ...rest }) => (
  <Wrapper color={color} speed={speed} style={style} fontSize={size} {...rest}>
    <svg
      style={{ animationDuration: `${speedSwitch(speed)}ms` }}
      role="img"
      aria-labelledby="title desc"
      viewBox="0 0 32 32"
      stroke="currentColor"
    >
      <circle
        role="presentation"
        cx={16}
        cy={16}
        r={14 - thickness / 2}
        fill="none"
        strokeWidth={thickness}
        strokeDasharray={Math.PI * 2 * (11 - gap)}
        strokeLinecap="round"
      />
    </svg>
  </Wrapper>
)

Spinner.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]).isRequired,
  gap: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  speed: PropTypes.oneOf(['fast', 'slow']),
  height: PropTypes.number,
  width: PropTypes.number,
}

Spinner.defaultProps = {
  color: 'spinner',
  gap: 4,
  thickness: 4,
  height: 20,
  width: 20,
  speed: 'fast',
}

export default Spinner
