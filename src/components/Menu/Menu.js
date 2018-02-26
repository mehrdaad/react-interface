import styled from 'styled-components'
import { space, borderRadius } from 'styled-system'

const Menu = styled.ul`
  color: ${props => props.theme['menu.color']};
  background: ${props => props.theme['menu.background']};
  padding: 0 !important;
  ${borderRadius} ${space};
`

Menu.defaultProps = {
  borderRadius: 4,
  p: 1,
  m: 0,
}

/** @component */
export default Menu
