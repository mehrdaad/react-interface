import styled from 'styled-components';
import { space, borderRadius } from 'styled-system';

const Menu = styled.ul`
  background: ${props => props.theme['menu.background']};
  box-shadow: ${props => props.theme['menu.shadow']};
  border: 1px solid ${props => props.theme['menu.border.color']};
  border-radius: 4px;
  ${borderRadius};
  ${space};
`;

Menu.defaultProps = {
  borderRadius: 4,
  p: 1,
}

export default Menu
