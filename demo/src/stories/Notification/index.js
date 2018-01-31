import React from 'react'
import { Story, Demo} from 'react-story'
import { Notification, Icon, Text } from '../../../../src/components'

const NotificationStory = () => (
  <Story>
    <Demo
      name="Notifications"
      desc=""
    >
      <Notification palette="primary" mb={1}>Primary</Notification>
      <Notification palette="success" mb={1}>Success</Notification>
      <Notification palette="info" mb={1}>Info</Notification>
      <Notification palette="warning" mb={1}>Warning</Notification>
      <Notification palette="danger" mb={1}>Danger</Notification>
    </Demo>
    <Demo
      name="Notification with Icons"
      desc=""
    >
      <Notification palette="warning" mb={1}>
        <Icon type="alert-circle" mr="auto" />
        <Text mr="auto">This is a warning to let users know what's going on.</Text>
      </Notification>
      <Notification palette="warning" mb={1} justify="start">
        <Icon mr={1} type="alert-circle" />
        This one is left aligned, which can be useful if you have a lot to say and may need two lines.
      </Notification>
    </Demo>
    <Demo
      name="Notification Alignment"
      desc=""
    >
      <Notification mb={1} justify="start"><span>Primary</span></Notification>
      <Notification mb={1} justify="center"><span>Primary</span></Notification>
      <Notification mb={1} justify="flex-end"><span>Primary</span></Notification>
    </Demo>
    <Demo
      name="Notification Solid Version"
      desc=""
    >
      <Notification palette="primary" mb={1} solid>Primary</Notification>
      <Notification palette="success" mb={1} solid>Success</Notification>
      <Notification palette="info" mb={1} solid>Info</Notification>
      <Notification palette="warning" mb={1} solid>Warning</Notification>
      <Notification palette="danger" mb={1} solid>Danger</Notification>
    </Demo>
  </Story>
)

export default {
  name: 'Notification',
  component: NotificationStory
}
