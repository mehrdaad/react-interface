import styled from 'styled-components';
import { space, borderRadius } from 'styled-system';

const Menu = styled.ul`
  color: ${props => props.theme['menu.color']};
  background: ${props => props.theme['menu.background']};
  box-shadow: ${props => props.theme['menu.shadow']};
  border: 1px solid ${props => props.theme['menu.border.color']};
  ${borderRadius};
  ${space};
`;

Menu.defaultProps = {
  borderRadius: 4,
  p: 1,
  m: 0,
}

export default Menu
