import styled from 'styled-components'
import { space, borders } from 'styled-system'

const MenuDivider = styled.div`
  border-top: 1px solid ${props => props.theme['menu.divider.border.color']};
  ${borders} ${space};
`

MenuDivider.defaultProps = {
  my: 1,
}

/** @component */
export default MenuDivider
