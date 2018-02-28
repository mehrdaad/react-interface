import styled from 'styled-components'
import { space, borderRadius } from 'styled-system'

const Menu = styled.ul`
  color: ${props => props.theme['menu.color']};
  background: ${props => props.theme['menu.background']};
  ${borderRadius} ${space};
`

Menu.defaultProps = {
  borderRadius: 4,
  p: 2,
}

/** @component */
export default Menu
