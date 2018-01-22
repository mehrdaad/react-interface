import styled from 'styled-components';

export default styled.ul`
  background: ${props => props.theme['menu.background']};
  box-shadow: ${props => props.theme['menu.shadow']};
  padding: .5rem;
`;
