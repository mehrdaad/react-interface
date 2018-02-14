```jsx
<MultiSelect
  onChange={selected => setState({ selected })}
  selected={state.selected}
  getLabel={a => a.label}
  getValue={a => a.value}
  placeholder="Select an option"
  options={[
    { label: 'First Option', value: 'first' },
    { label: 'Second Option', value: 'second' },
    { label: 'Third Option', value: 'third' }
  ]}
/>
```