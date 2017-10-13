import React, {Component} from 'react'
import {render} from 'react-dom'
import { ThemeProvider } from 'styled-components'
import ReactStory from 'react-story'

import { Button } from '../../src/components'
import themes from '../../src/themes'

import stories from './stories'


const themeMap = {
  base: themes.base,
  light: themes.light,
  dark: themes.dark
}

class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'base'
    }
  }

  getTheme() {
    return themeMap[this.state.theme]
  }

  renderThemeSelector() {
    const options = Object.keys(themeMap).map(key =>
      <Button
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
      <ThemeProvider theme={this.getTheme()}>
        <ReactStory stories={stories} />
      </ThemeProvider>
    )
  }
}


render(<Demo/>, document.querySelector('#demo'))
