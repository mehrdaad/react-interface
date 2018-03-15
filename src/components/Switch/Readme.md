```jsx
<div>
  <Switch
    mr={2}
    size="sm"
    on={state.checked}
    onChange={e => setState({ checked: e.target.checked })}
    onBg="danger.3"
    offBg="danger.1"
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
    offBg="warning.1"
  />
  <Switch
    mr={2}
    on={state.checked}
    onChange={e => setState({ checked: e.target.checked })}
    onBg="success.4"
    offBg="success.1"
    size="xl"
  />
</div>
```
