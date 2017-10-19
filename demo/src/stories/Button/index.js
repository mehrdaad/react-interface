import React from 'react'
import { Story, Demo, PropsTable } from 'react-story'
import { Button } from '../../../../src/components'
import ButtonRaw from '!raw-loader!../../../../src/components/Button'
import Markdown from '!raw-loader!./code.md'

const ButtonStory = () => (
  <Story>
    <Demo
      name="Button Sizes"
      desc="Button sizes desc"
      code={Markdown}
    >
      <Button size="sm" mr={1}>Small</Button>
      <Button size="md" mr={1}>Medium</Button>
      <Button size="lg" mr={1}>Large</Button>
    </Demo>
    <Demo
      name="Button Variants"
      desc="Button variants desc"
      code={Markdown}
    >
      <Button type="primary" mr={1}>Primary</Button>
      <Button type="success" mr={1}>Success</Button>
      <Button type="info" mr={1}>Info</Button>
      <Button type="warning" mr={1}>Warning</Button>
      <Button type="danger" mr={1}>Danger</Button>
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
