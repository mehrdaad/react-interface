import React, {Component} from 'react'
import {render} from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Button, themes } from '../../src'

const themeMap = {
  light: themes.light
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

  render() {
    return (
      <ThemeProvider theme={this.getTheme()}>
        <Button>Button!</Button>
      </ThemeProvider>
    )
  }
}


render(<Demo/>, document.querySelector('#demo'))
