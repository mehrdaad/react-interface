```jsx
<div>
  <Notification palette="warning" mb={1}>
    <Icon type="alert-circle" mr="auto" />
    <Text mr="auto">This is a warning to let users know what's going on.</Text>
  </Notification>
  <Notification palette="warning" mb={1} justify="start">
    <Icon mr={1} type="alert-circle" />
    This one is left aligned, which can be useful if you have a lot to say and may
    need two lines.
  </Notification>
  <Notification mb={1} justify="start">
    <span>Primary</span>
  </Notification>
  <Notification mb={1} justify="center">
    <span>Primary</span>
  </Notification>
  <Notification mb={1} justify="flex-end">
    <span>Primary</span>
  </Notification>
  <Notification palette="primary" mb={1} solid>
    Primary
  </Notification>
  <Notification palette="green" mb={1} solid>
    Green
  </Notification>
  <Notification palette="blue" mb={1} solid>
    Blue
  </Notification>
  <Notification palette="orange" mb={1} solid>
    Orange
  </Notification>
  <Notification palette="red" mb={1} solid>
    Red
  </Notification>
</div>
```
