import styled from 'styled-components'
import { space, borders, borderColor } from 'styled-system'

const MenuDivider = styled.div`
  border-top: 1px solid ${props => props.theme['menu.divider.border.color']};
  ${borderColor}
  ${borders}
  ${space}
`

MenuDivider.defaultProps = {
  my: 1,
  mx: 2,
}

/** @component */
export default MenuDivider
