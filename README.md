# react-interface

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Quickly build interfaces that look great with your brand colors.

### Styling Components

```
// global theme
// good for DRYing up components, global defaults
'button.color' : colors.gray[4]
'button.color': darken(1/20, props.theme['button.background'])

// composition
// powerful way to add custom functionality built on top of react-interface
const CustomButton = Button.extend`
  color: ${props => darken(1/20, props.theme['button.color'])};
`

// component props
// convenient way to override props in specific cases
<Button color="gray.4">
<Button color="button">
<Button color="#fff">
<Button color={darken}>
```

Note that properties unrelated to color (radius, spacing, etc) are better served as props to the component or done through composition/defaults. Color properties are often better configured in the theme to reduce boilerplate and improve consistency. This is particularly true if you plan to offer multiple themes, such as a dark and light option.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
