import styled from 'styled-components'
import { space, fontSize } from 'styled-system'

const MenuHeader = styled.div`
  color: ${props => props.theme['menu.header.color']};
  font-weight: bold;
  ${space} ${fontSize};
`

MenuHeader.defaultProps = {
  p: 3,
}

/** @component */
export default MenuHeader
