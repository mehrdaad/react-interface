import React from "react"
import styled from "styled-components"
import { Story, Demo } from "react-story"
import { MultiSelect } from '../../../../src/components'

// Override react-story ul styles
const Wrapper = styled.div`
  ul { margin: 0; padding: 0; }
`

// renderMultiPlaceholder={this.renderMultiPlaceholder}
// renderOption={option => this.renderOption}

class MultiSelectExample extends React.Component {
  state = {
    selected: []
  }
  render () {
    return (
      <Wrapper>
        <MultiSelect
          onChange={selected => this.setState({ selected })}
          selected={this.state.selected}
          getLabel={a => a.label}
          getValue={a => a.value}
          placeholder="Select an option"
          options={[
            { label: 'First Option', value: 'first' },
            { label: 'Second Option', value: 'second' },
            { label: 'Third Option', value: 'third' }
          ]}
        />
      </Wrapper>
    )
  }
}

const MultiSelectStory = () => (
  <Story>
    <Demo name="Select Input" desc="">
      <MultiSelectExample />
    </Demo>
  </Story>
)

export default {
  name: "MultiSelect",
  component: MultiSelectStory
}
