import React from 'react'
import Color from 'color'
import { Story, Demo } from 'react-story'
import { withTheme } from 'styled-components'
import { Theme } from '../../../../src'
import { Flex, Box } from 'grid-styled'
import ThemeRaw from '!raw-loader!../../../../src/Theme'
import Sizes from '!raw-loader!./theme.md'

const desc = `
  The theme component is a thin wrapper around styled-components' ThemeProvider.
  It will automatically pass colors and styles down through your components, and
  automatically generate a customizable color palette for you to use.
`

const groupColorsByName = colors => {
  const grouped = Object.keys(colors)
    .filter(c => /\d/.test(c))
    .map(c => ({ name: c, color: colors[c] }))
    .reduce((acc, curr) => {
      const group = curr.name.match(/[a-zA-Z]+/g)[0]
      acc[group] = acc[group] ? [...acc[group], curr] : [curr]
      return acc
    }, {})

  return Object.keys(grouped).map(g => (
    <Box w={1/3} p={1}>
      {grouped[g].map(p => (
        <div
          style={{
            background: p.color,
            padding: 10,
            color: Color(p.color).light() ? '#000' : '#FFF'
          }}
        >
          {p.name}
        </div>
      ))}
    </Box>
  ))
}

const ThemeStory = props => (
  <Story>
    <Demo
      name="Color Palette"
      desc={desc}
      code=''
    >
      <Flex wrap='wrap'>
        {groupColorsByName(props.theme.colors)}
      </Flex>
    </Demo>
  </Story>
)

export default {
  name: 'Theme',
  component: withTheme(ThemeStory)
}
