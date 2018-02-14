import React from "react"
import { Story, Demo } from "react-story"
import { Tooltip } from '../../../../src/components'

const TooltipStory = () => (
  <Story>
    <Demo name="Tooltip" desc="Uses smart positioning!">
      <Tooltip position='top' content="My tooltip content. Lorem ipsum dolar set amet.">
        <span>Top</span>
      </Tooltip>
    </Demo>
    <Demo>
      <Tooltip smart content="My tooltip content. Lorem ipsum dolar set amet.">
        <span>Smart Positioning</span>
      </Tooltip>
    </Demo>
    <Demo>
      <Tooltip
        animation='fade'
        position='bottom'
        content="My tooltip content. Lorem ipsum dolar set amet."
      >
        <span>Bottom</span>
      </Tooltip>
    </Demo>
  </Story>
)

export default {
  name: "Tooltip",
  component: TooltipStory
}
