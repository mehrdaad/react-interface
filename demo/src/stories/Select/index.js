import React from "react"
import { Story, Demo, PropsTable } from "react-story"
import { Select } from '../../../../src/components'

class SelectExample extends React.Component {
  state = {}
  render () {
    return (
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
