```jsx
<div>
  <Switch
    mr={2}
    size="sm"
    on={state.checked}
    onChange={e => setState({ checked: e.target.checked })}
    onBg="danger.3"
  />
  <Switch
    mr={2}
    on={state.checked}
    onChange={e => setState({ checked: e.target.checked })}
  />
  <Switch
    mr={2}
    on={state.checked}
    onChange={e => setState({ checked: e.target.checked })}
    size="lg"
    onBg="warning.3"
  />
  <Switch
    mr={2}
    on={state.checked}
    onChange={e => setState({ checked: e.target.checked })}
    onBg="success.4"
    size="xl"
  />
</div>
```
