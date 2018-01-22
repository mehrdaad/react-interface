import styled from 'styled-components';
import { spacing, borderRadius } from 'styled-system';

export default styled.ul`
  background: ${props => props.theme['menu.background']};
  box-shadow: ${props => props.theme['menu.shadow']};
  border: 1px solid ${props => props.theme['menu.border.color']};
  border-radius: 4px;
  padding: .5rem;
  ${borderRadius};
  ${spacing};
`;
