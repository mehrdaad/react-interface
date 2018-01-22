import styled from 'styled-components';
import { space } from 'styled-system'

const MenuHeader = styled.div`
  font-size: ${props => props.theme.sizes.fonts.small};
  color: ${props => props.theme['menu.header.color']};
  font-weight: bold;
  ${space};
`;

MenuHeader.defaultProps = {
  p: 1,
}

export default MenuHeader
