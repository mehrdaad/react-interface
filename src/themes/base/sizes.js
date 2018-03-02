// https://tailwindcss.com/docs/spacing
const sizes = {
  breakpoints: ['40em', '52em', '64em'],
  // Use for convenience, maps semantic sizes to array indicies for other propertries
  sizes: {
    xxs: 0,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    xxl: 6,
    xxxl: 7,
  },
  // Used for typographic scale
  fontSizes: [
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
  ],
  // Used for padding and margins
  buttonPaddings: [
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // Line heights
  lineHeights: [1, 1.125, 1.25, 1.5, 1.75, 2, 2],
  // Font weights
  fontWeights: {
    regular: 400,
    normal: 500,
    semibold: 600,
    bold: 700,
  },
  // Letter spacing
  letterSpacings: {
    normal: 'normal',
    caps: '0.25em',
  },
  // Border radius
  radii: [0, 2, 3, 4, 6, 8, 10],
  // Borders
  borders: [0, '1px solid', '2px solid'],
  // Shadows
  shadows: [
    'none',
    '0 2px 4px 0 rgba(0,0,0,0.10)',
    '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
  ],
}

export default sizes
