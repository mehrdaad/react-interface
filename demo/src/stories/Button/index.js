import React from 'react'
import { Story, Demo, PropsTable } from 'react-story'
import { Button } from '../../../../src/components'
import ButtonRaw from '!raw-loader!../../../../src/components/Button'
import Markdown from '!raw-loader!./code.md'

const ButtonStory = () => (
  <Story>
    <Demo
      name="Normal Button"
      desc="Normal Button"
      code={Markdown}
    >
      <Button>Hello</Button>
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
