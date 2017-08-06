import styled, { css } from 'styled-components';

export default styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  display: block;
  border-radius: 2px;
  padding: 7px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.sizes.fonts.medium};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.background.darken(.25)};
  }

  ${props => props.active && css`
    background: ${props => props.theme.colors.background.darken(.25)};
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
