import styled, { css } from 'styled-components';
import { borderRadius, space } from 'styled-system';

const MenuItem = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  display: block;
  line-height: 16px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.sizes.fonts[props.size]};
  color: ${props => props.theme['menu.item.color']};
  cursor: pointer;
  ${borderRadius}
  ${space}

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

  a {
    color: inherit;
    text-decoration: none;
  }
`

MenuItem.defaultProps = {
  br: 2,
  p: 2,
}

/** @component */
export default MenuItem
