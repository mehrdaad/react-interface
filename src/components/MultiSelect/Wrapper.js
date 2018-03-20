import styled from 'styled-components'
import {
  space,
  width,
  borderRadius,
  color,
  borders,
  borderColor,
  hover,
  focus,
} from 'styled-system'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.multiSelectBackground};
  border: 1px solid ${props => props.theme.colors.multiSelectBorder};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 100%;
  padding: 10px;
  position: relative;
  ${space}
  ${width}
  ${borderRadius}
  ${color}
  ${borders}
  ${borderColor}

  &:focus {
    border: 1px solid ${props => props.theme.colors.multiSelectFocusBorder};
    outline: none;
  }

  ${focus}
  ${hover}

  svg {
    color: ${props => props.theme.colors.multiSelectIcon};
  }
`

Wrapper.defaultProps = {
  p: 2,
  color: 'multiSelect',
  bg: 'multiSelectBackground',
  borderColor: 'multiSelectBorder',
  borderRadius: 2,
  border: '1px solid',
  hover: {
    color: 'multiSelectHover',
    backgroundColor: 'multiSelectHoverBackground',
  },
}

export default Wrapper