The `Button` component is a simple and powerful way to render consistent buttons in your applications. They have access to the react-interface size, color and style defaults and are extremely customizable.

Button sizes:

```jsx
<div>
  <Button size="sm" mr={1}>
    Small
  </Button>
  <Button size="md" mr={1}>
    Medium
  </Button>
  <Button size="lg" mr={1}>
    Large
  </Button>
</div>
```

```jsx
<div>
  <Button palette="gray" mr={1} mb={1}>
    Gray
  </Button>
  <Button palette="red" mr={1} mb={1}>
    Red
  </Button>
  <Button palette="orange" mr={1} mb={1}>
    Orange
  </Button>
  <Button palette="yellow" mr={1} mb={1}>
    Yellow
  </Button>
  <Button palette="green" mr={1} mb={1}>
    Green
  </Button>
  <Button palette="teal" mr={1} mb={1}>
    Teal
  </Button>
  <Button palette="blue" mr={1} mb={1}>
    Blue
  </Button>
  <Button palette="indigo" mr={1} mb={1}>
    Indigo
  </Button>
  <Button palette="purple" mr={1} mb={1}>
    Purple
  </Button>
  <Button palette="pink" mr={1} mb={1}>
    Pink
  </Button>
</div>
```

```jsx
<Button>
  <Icon type="activity" mr={2} height={20} width={20} />
  <span>Primary</span>
</Button>
```

```jsx
<Button disabled>Disabled</Button>
```
