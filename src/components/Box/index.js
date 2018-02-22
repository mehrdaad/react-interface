import styled from 'styled-components'
import { Box } from 'grid-styled'
import {
  borders,
  borderRadius,
  borderColor,
  borderWidth,
  space,
  color,
  width,
  justifyContent,
  alignItems,
  flexDirection,
} from 'styled-system'
import { flex } from '../../utils/styled-system-enhancers'

export default Box.extend`
  ${borders}
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${color}
  ${space}
  ${width}
  ${flex}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`
