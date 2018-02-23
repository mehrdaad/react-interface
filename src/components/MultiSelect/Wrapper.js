import styled from 'styled-components'
import { space, width, borderRadius } from 'styled-system'

export default styled.div`
  background: ${props => props.theme['multiselect.background']};
  border: 1px solid ${props => props.theme['multiselect.border.color']};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  ${space}
  ${width}
  ${borderRadius}

  &:focus {
    border: 1px solid ${props => props.theme['multiselect.focus.border.color']};
    outline: none;
  }

  svg {
    color: ${props => props.theme['multiselect.icon.color']};
  }
`
