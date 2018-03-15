import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { style, space } from 'styled-system'

const onBackground = style({
  prop: 'onBg',
  cssProperty: 'backgroundColor',
  key: 'colors',
})

const offBackground = style({
  prop: 'offBg',
  cssProperty: 'backgroundColor',
  key: 'colors',
})

const knobBackground = style({
  prop: 'knobBg',
  cssProperty: 'backgroundColor',
  key: 'colors',
})

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  outline: 0;
  appearance: none;
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: ${props => props.theme.dimensions[props.theme.sizes[props.size]]}px;
  width: ${props => props.theme.dimensions[props.theme.sizes[props.size]] * 2}px;
  ${space}

  &:before, &:after {
    position: absolute;
    color: #ddd;
    top: 8px;
    font-size: 13px;
    font-weight: 700;
  }

  &:before {
    left: -19px;
    content: attr(data-text);
  }

  &:after {
    right: -17px;
    content: attr(data-text);
  }

  input {
    display: none;
  }

  input + label {
    display: block;
    position: absolute;
    cursor: pointer;
    user-select: none;
    height: 100%;
    width: ${props => props.theme.dimensions[props.theme.sizes[props.size]] * 2}px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      border-radius: 30px;
      transition: all 0.25s ease-in-out;
    }

    &:before {
      height: ${props => props.theme.dimensions[props.theme.sizes[props.size]]}px;
      width: ${props => props.theme.dimensions[props.theme.sizes[props.size]] * 2}px;
      ${offBackground};
    }

    &:after {
      width: ${props => props.theme.dimensions[props.theme.sizes[props.size]]}px;
      height: 90%;
      transform: translate(5%, 5%);
      ${knobBackground}
    }
  }

  input:checked + label:after {
    transition: all 0.25s ease-in-out;
    transform: translate(95%, 5%);
  }

  input:checked + label:before {
    ${onBackground}
  }
`

const Switch = ({ on, onChange, id, ...rest }) => (
  <Wrapper {...rest}>
    <input type="checkbox" id={id} checked={on} onChange={onChange} />
    <label htmlFor={id} />
  </Wrapper>
)

Switch.propTypes = {
  on: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string,
  size: PropTypes.string,
}

Switch.defaultProps = {
  id: 'ri-check',
  on: true,
  size: 'md',
  onBg: 'switchOnBackground',
  offBg: 'switchOffBackground',
  knobBg: 'switchKnobBackground',
}

export default Switch
