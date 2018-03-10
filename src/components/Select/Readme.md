```jsx
<Select
  placeholder="Select an option"
  options={[
    { label: 'First Option', value: 'first' },
    { label: 'Second Option', value: 'second' },
    { label: 'Third Option', value: 'third' },
    { label: 'Fourth Option', value: 'fourth' },
    { label: 'Fifth Option', value: 'fifth' },
    { label: 'Sixth Option', value: 'sixth' },
  ]}
  onChange={value => setState({ value })}
  value={state.value}
/>
```
