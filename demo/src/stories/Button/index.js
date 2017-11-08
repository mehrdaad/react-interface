import React from 'react'
import { Story, Demo, PropsTable } from 'react-story'
import { Button } from '../../../../src/components'
import ButtonRaw from '!raw-loader!../../../../src/components/Button'
import Sizes from '!raw-loader!./sizes.md'
import Variants from '!raw-loader!./variants.md'

const ButtonStory = () => (
  <Story>
    <Demo
      name="Button Sizes"
      desc="Button sizes desc"
      code={Sizes}
    >
      <Button size="sm" mr={1}>Small</Button>
      <Button size="md" mr={1}>Medium</Button>
      <Button size="lg" mr={1}>Large</Button>
    </Demo>
    <Demo
      name="Button Variants"
      desc="Button variants desc"
      code={Variants}
    >
      <Button color="primary" mr={1}>Primary</Button>
      <Button color="success" mr={1}>Success</Button>
      <Button color="info" mr={1}>Info</Button>
      <Button color="warning" mr={1}>Warning</Button>
      <Button color="danger" mr={1}>Danger</Button>
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
