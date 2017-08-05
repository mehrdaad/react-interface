import styled from 'styled-components';

export default styled.ul`
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadow};
  font-family: ${props => props.theme.fonts.primary};
  padding: .5rem;
`;
