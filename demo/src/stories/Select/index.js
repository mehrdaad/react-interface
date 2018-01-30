import React from "react"
import styled from "styled-components"
import { Story, Demo } from "react-story"
import { Select } from '../../../../src/components'

// Override react-story ul styles
const Wrapper = styled.div`
  ul { margin: 0; padding: 0; }
`

class SelectExample extends React.Component {
  state = {}
  render () {
    return (
      <Wrapper>
        <Select
          placeholder="Select an option"
          options={[
            { label: 'First Option', value: 'first' },
            { label: 'Second Option', value: 'second' },
            { label: 'Third Option', value: 'third' }
          ]}
          onChange={value => this.setState({ value })}
          value={this.state.value}
        />
      </Wrapper>
    )
  }
}

const SelectStory = () => (
  <Story>
    <Demo name="Select Input" desc="">
      <SelectExample />
    </Demo>
  </Story>
)

export default {
  name: "Select",
  component: SelectStory
}
