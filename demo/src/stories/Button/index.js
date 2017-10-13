import React from 'react'
import { Story, Demo, PropsTable } from 'react-story'
import { Button } from '../../../../src/components'
import ButtonRaw from '!raw-loader!../../../../src/components/Button'
import Markdown from '!raw-loader!./code.md'

const ButtonDemo = () => (
  <Demo
    name="Normal Button"
    desc="Normal Button"
    code={Markdown}
  >
    <Button>Hello</Button>
  </Demo>
)

const ButtonStory = () => (
  <Story>
    <ButtonDemo />
    <PropsTable
      demonstrating={Button}
      raw={ButtonRaw}
    />
  </Story>
)

export default {
  name: 'Button',
  component: ButtonDemo
}
