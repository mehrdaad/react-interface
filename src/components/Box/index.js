import styled from 'styled-components'
import { Box } from 'grid-styled'
import { borderRadius, borderColor, borderWidth, space, color, width } from 'styled-system'

export default Box.extend`
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${color}
  ${space}
  ${width}
`
