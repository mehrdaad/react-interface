import styled from 'styled-components'
import {
  space,
  width,
  borderRadius,
  borders,
  borderColor,
  color,
} from 'styled-system'

const Wrapper = styled.div`
  background: ${props => props.theme.colors['select.background']};
  border: 1px solid ${props => props.theme.colors['select.border']};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${space}
  ${width}
  ${borderRadius}
  ${borders}
  ${borderColor}
  ${color}

  svg {
    color: ${props => props.theme.colors['select.icon']};
  }

  &:focus {
    border: 1px solid ${props => props.theme.colors['select.focus.border']};
    outline: none;
  }
`

Wrapper.defaultProps = {
  p: 2,
  borderRadius: 2,
}

export default Wrapper
