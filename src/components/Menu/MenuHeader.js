import styled from 'styled-components';

export default styled.div`
  font-size: ${props => props.theme.sizes.fonts.small};
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  padding: .25rem .5rem;
`;
