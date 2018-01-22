import styled, { css } from 'styled-components';
import { borderRadius, spacing } from 'styled-system';

const MenuItem = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  display: block;
  padding: 7px;
  margin: .1rem 0;
  line-height: 16px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  cursor: pointer;
  ${borderRadius};
  ${spacing};

  &:hover {
    background: ${props => props.theme['menu.item.hover.background']};
    color: ${props => props.theme['menu.item.hover.color']};
  }

  ${props => props.active && css`
    background: ${props => props.theme['menu.item.active.background']};
    color: ${props => props.theme['menu.item.active.color']};
  `}

  ${props => props.large && css`
    font-size: ${props => props.theme.sizes.fonts.large};
  `}

  svg {
    height: 18px;
    width: 18px;
    margin-right: 5px;
  }
`

MenuItem.defaultProps = {
  br: 2,
}

export default MenuItem
