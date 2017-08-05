import React, {Component} from 'react'
import {render} from 'react-dom'
import { ThemeProvider } from 'styled-components'

import components from '../../src/components'
import themes from '../../src/themes'
import icons from '../../src/icons'

const { Button, Menu, MenuItem, MenuHeader, MenuDivider } = components
const { Caret } = icons

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
        <div>
          {this.renderThemeSelector()}
          <Button>Button!</Button>
          <Caret rotate={90} />

          <Menu style={{ width: 200 }}>
            <MenuHeader>Account</MenuHeader>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Friends</MenuItem>
            <MenuItem>Notifications</MenuItem>
            <MenuDivider />
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>
      </ThemeProvider>
    )
  }
}


render(<Demo/>, document.querySelector('#demo'))
