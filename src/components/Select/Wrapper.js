import styled from 'styled-components'
import {
  space,
  width,
  borderRadius,
  borders,
  borderColor,
  color,
  hover,
} from 'styled-system'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${space}
  ${width}
  ${borderRadius}
  ${borders}
  ${borderColor}
  ${color}
  ${hover}

  svg {
    color: ${props => props.theme.colors.selectIcon};
  }

  &:focus {
    border: 1px solid ${props => props.theme.colors.selectFocusBorder};
    outline: none;
  }
`

Wrapper.defaultProps = {
  p: 2,
  color: 'select',
  bg: 'selectBackground',
  borderColor: 'selectBorder',
  borderRadius: 2,
  border: '1px solid',
  hover: {
    color: 'selectHover',
    backgroundColor: 'selectHoverBackground',
  },
}

export default Wrapper
