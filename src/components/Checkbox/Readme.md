Checkbox sizes:

```jsx
<div>
  <Checkbox
    size="sm"
    mr={1}
    value="sm"
    checked={state.sm}
    onChange={(e, value, checked) => setState({ [value]: checked })}
  />
  <Checkbox
    size="md"
    mr={1}
    value="md"
    checked={state.md}
    onChange={(e, value, checked) => setState({ [value]: checked })}
  />
  <Checkbox
    size="lg"
    mr={1}
    value="lg"
    checked={state.lg}
    onChange={(e, value, checked) => setState({ [value]: checked })}
  />
  <Checkbox
    size="xl"
    mr={1}
    value="xl"
    checked={state.xl}
    onChange={(e, value, checked) => setState({ [value]: checked })}
  />
</div>
```

Checkbox colors:

```jsx
<div>
  <Checkbox
    palette="primary"
    label="primary"
    mr={1}
    my={1}
    value="primary"
    checked={state.primary}
    onChange={(e, value, checked) => setState({ [value]: checked })}
  />
  <br />
  <Checkbox
    palette="red"
    label="red"
    mr={1}
    my={1}
    value="red"
    checked={state.red}
    onChange={(e, value, checked) => setState({ [value]: checked })}
  />
  <br />
  <Checkbox
    palette="green"
    label="green"
    mr={1}
    my={1}
    value="green"
    checked={state.green}
    onChange={(e, value, checked) => setState({ [value]: checked })}
  />
  <br />
  <Checkbox
    palette="orange"
    label="orange"
    mr={1}
    my={1}
    value="orange"
    checked={state.orange}
    onChange={(e, value, checked) => setState({ [value]: checked })}
  />
  <br />
</div>
```
