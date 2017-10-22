import React from 'react'
import { Story, Demo, PropsTable } from 'react-story'
import { Icon, Flex, Paragraph } from '../../../../src/components'
import Icons from '!raw-loader!./icons.md'

const IconStory = () => (
  <Story>
    <Demo
      name="Icons"
      desc={
        <Paragraph>
          Icons powered by feathers, view all options at
          <a href="https://feathericons.com/"> feathericons.com</a>
        </Paragraph>
      }
      code={Icons}
    >
      <Flex justify="space-around">
        <Icon type="camera" color='primary' mr={1} />
        <Icon type="activity" color='primary' mr={1} />
        <Icon type="bell" color='primary' mr={1} />
        <Icon type="cloud" color='primary' mr={1} />
        <Icon type="anchor" color='primary' mr={1} />
        <Icon type="battery" color='primary' mr={1} />
        <Icon type="box" color='primary' mr={1} />
        <Icon type="cast" color='primary' mr={1} />
        <Icon type="bar-chart" color='primary' mr={1} />
        <Icon type="activity" color='primary' mr={1} />
        <Icon type="alert-circle" color='primary' mr={1} />
        <Icon type="aperture" color='primary' mr={1} />
        <Icon type="align-left" color='primary' mr={1} />
        <Icon type="check" color='primary' mr={1} />
        <Icon type="chevron-down" color='primary' mr={1} />
        <Icon type="copy" color='primary' mr={1} />
      </Flex>
    </Demo>
  </Story>
)

export default {
  name: 'Icon',
  component: IconStory
}
