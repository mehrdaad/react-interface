import styled from 'styled-components';

export default styled.div`
  border-top: 1px solid ${props => props.theme.colors.border.lighten(0.8)};
  margin: .5rem 7px;
`;
