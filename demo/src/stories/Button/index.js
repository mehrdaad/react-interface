import React from 'react'
import { Story, Demo, PropsTable } from 'react-story'
import { Button } from '../../../../src/components'
import ButtonRaw from '!raw-loader!../../../../src/components/Button'
import Markdown from '!raw-loader!./code.md'

const ButtonStory = () => (
  <Story>
    <Demo
      name="Button"
      desc="Button"
      code={Markdown}
    >
      <Button
        size="small"
        type="warning"
      >
        Small
      </Button>
      <Button ml={1}>Medium</Button>
      <Button size="large" ml={1}>Large</Button>
    </Demo>
    <PropsTable
      raw={ButtonRaw}
      demonstrating={Button}
    />
  </Story>
)

export default {
  name: 'Button',
  component: ButtonStory
}
