import React from 'react'
import { Story, Demo } from 'react-story'
import { Button, Icon } from '../../../../src/components'
import ButtonRaw from '!raw-loader!../../../../src/components/Button'
import Sizes from '!raw-loader!./sizes.md'
import Variants from '!raw-loader!./variants.md'
import Icons from '!raw-loader!./icons.md'

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
      <Button palette="primary" mr={1}>Primary</Button>
      <Button palette="success" mr={1}>Success</Button>
      <Button palette="info" mr={1}>Info</Button>
      <Button palette="warning" mr={1}>Warning</Button>
      <Button palette="danger" mr={1}>Danger</Button>
    </Demo>
    <Demo
      name="Button Icons"
      desc="You can put icons in your buttons!"
      code={Icons}
    >
      <Button>
        <Icon type="activity" mr={1} height={20} width={20} />
        <span>Primary</span>
      </Button>
    </Demo>
  </Story>
)

export default {
  name: 'Button',
  component: ButtonStory
}
