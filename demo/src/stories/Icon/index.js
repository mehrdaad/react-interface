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
        <Icon type="camera" color='primary' />
        <Icon type="activity" color='primary' />
        <Icon type="bell" color='primary' />
        <Icon type="cloud" color='primary' />
        <Icon type="anchor" color='primary' />
        <Icon type="battery" color='primary' />
        <Icon type="box" color='primary' />
        <Icon type="cast" color='primary' />
        <Icon type="bar-chart" color='primary' />
        <Icon type="activity" color='primary' />
        <Icon type="alert-circle" color='primary' />
        <Icon type="aperture" color='primary' />
        <Icon type="align-left" color='primary' />
        <Icon type="check" color='primary' />
        <Icon type="chevron-down" color='primary' />
        <Icon type="copy" color='primary'  />
      </Flex>
    </Demo>
  </Story>
)

export default {
  name: 'Icon',
  component: IconStory
}
