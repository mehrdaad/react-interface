import React, {Component} from 'react'
import { render } from 'react-dom'
import ReactStory from 'react-story'

import { Button, Box, Title, Expand, Pre, Icon } from '../../src/components'
import themes from '../../src/themes'
import { Theme } from '../../src'
import stories from './stories'


const themeMap = {
  light: themes.light,
  dark: themes.dark
}

class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light'
    }
  }

  getTheme() {
    return themeMap[this.state.theme]
  }

  renderThemeSelector() {
    const options = Object.keys(themeMap).map(key =>
      <Button
        size="sm"
        key={`theme-${key}`}
        onClick={() => this.setState({ theme: key })}
      >
        {key}
      </Button>
    )

    return <ul>{options}</ul>
  }

  render() {
    return (
      <Theme theme={this.getTheme()}>
        <Box
          borderColor='#D8E2EA'
          borderWidth={1}
          borderRadius={3}
        >
          <Title
            p={2}
            borderBottom
            borderWidth={1}
            borderColor='#D8E2EA'
          >
            <span>Hello</span>
            <Icon type='caret' color='primary' />
          </Title>
          <Expand>
            <Pre p={2} m={0} bg='#FCFDFE'>
              Some stuff here
            </Pre>
          </Expand>
        </Box>
        <ReactStory
          stories={stories}
          sidebarContent={<div>{this.renderThemeSelector()}</div>}
          useTheme={false}
        />
      </Theme>
    )
  }
}


render(<Demo/>, document.querySelector('#demo'))
