import React, { Component } from 'react'
import { render } from 'react-dom'
import themes from '../../src/themes'
import Theme from '../../src/Theme'

const themeMap = {
  light: themes.light,
  dark: themes.dark
}

export default class Styleguide extends Component {
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
      <Theme>
        {this.props.children}
      </Theme>
    )
  }
}