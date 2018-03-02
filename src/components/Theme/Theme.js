import React from "react"
import Color from "color"
import { withTheme } from "styled-components"
import { Flex, Box } from "grid-styled"

const groupColorsByName = colors => {
  return Object.keys(colors).map(c => (
    <Box w={1 / 3} p={3} key={c}>
      {colors[c].map((p, i) => (
        <div
          key={`${p}-${i}`}
          style={{
            background: p,
            padding: 10,
            color: Color(p).light() ? "#000" : "#FFF"
          }}
        >
          {`${c}[${i}]`} ({p})
        </div>
      ))}
    </Box>
  ))
}

const Theme = props => (
  <Flex wrap="wrap" borderRadius={3}>
    {groupColorsByName(props.theme.colors)}
  </Flex>
)

export default withTheme(Theme)
