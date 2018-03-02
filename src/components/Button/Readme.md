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

Button colors:

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

Button colors inverse:

```jsx
<div>
  <Button inverse palette="gray" mr={1} mb={1}>
    Gray
  </Button>
  <Button inverse palette="red" mr={1} mb={1}>
    Red
  </Button>
  <Button inverse palette="orange" mr={1} mb={1}>
    Orange
  </Button>
  <Button inverse palette="yellow" mr={1} mb={1}>
    Yellow
  </Button>
  <Button inverse palette="green" mr={1} mb={1}>
    Green
  </Button>
  <Button inverse palette="teal" mr={1} mb={1}>
    Teal
  </Button>
  <Button inverse palette="blue" mr={1} mb={1}>
    Blue
  </Button>
  <Button inverse palette="indigo" mr={1} mb={1}>
    Indigo
  </Button>
  <Button inverse palette="purple" mr={1} mb={1}>
    Purple
  </Button>
  <Button inverse palette="pink" mr={1} mb={1}>
    Pink
  </Button>
</div>
```

Button icons:

```jsx
<Button>
  <Icon type="activity" mr={2} height={20} width={20} />
  <span>Primary</span>
</Button>
```

Transparent button:

```jsx
<Button color="gray.4" hover={{ color: 'gray.3' }} transparent>
  Cancel
</Button>
```

Disabled button:

```jsx
<Button disabled>Disabled</Button>
```
