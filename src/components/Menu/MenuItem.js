import styled, { css } from 'styled-components';

export default styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  display: block;
  border-radius: 2px;
  padding: 7px;
  margin: .1rem 0;
  line-height: 16px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.gray};
  }

  ${props => props.active && css`
    background: ${props => props.theme.colors.background};
  `}

  ${props => props.large && css`
    font-size: ${props => props.theme.sizes.fonts.large};
  `}

  svg {
    height: 18px;
    width: 18px;
    margin-right: 5px;
  }
`;
