The `Button` component is a simple and powerful way to render consistent buttons in your applications. They have access to the react-interface size, color and style defaults and are extremely customizable.

Button sizes:

```jsx
<div>
  <Button size="sm" mr={1}>Small</Button>
  <Button size="md" mr={1}>Medium</Button>
  <Button size="lg" mr={1}>Large</Button>
</div>
```

```jsx
<div>
  <Button palette="primary" mr={1}>Primary</Button>
  <Button palette="success" mr={1}>Success</Button>
  <Button palette="info" mr={1}>Info</Button>
  <Button palette="warning" mr={1}>Warning</Button>
  <Button palette="danger" mr={1}>Danger</Button>
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