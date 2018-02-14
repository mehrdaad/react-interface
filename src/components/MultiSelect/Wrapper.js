import styled from 'styled-components'
import { space, width, borderRadius } from 'styled-system'

export default styled.div`
  background: ${props => props.theme['multiselect.background']};
  border: 1px solid ${props => props.theme['multiselect.border.color']};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${space};
  ${width};
  ${borderRadius};

  svg {
    color: ${props => props.theme['multiselect.icon.color']};
  }
`
