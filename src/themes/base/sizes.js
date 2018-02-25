// https://tailwindcss.com/docs/spacing
const sizes = {
  breakpoints: ['40em', '52em', '64em'],
  // Use for convenience
  sizes: {
    xxs: 1,
    xs: 2,
    sm: 3,
    md: 4,
    lg: 8,
    xl: 16,
    xxl: 32,
    xxxl: 64,
  },
  // For height and width
  dimensions: {
    xxs: 1,
    xs: 2,
    sm: 3,
    md: 4,
    lg: 8,
    xl: 16,
    xxl: 32,
    xxxl: 64,
  },
  // Used for typographic scale
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  // Used for padding and margins
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // Line heights
  lineHeights: [1, 1.125, 1.25, 1.5],
  // Font weights
  fontWeights: {
    normal: 500,
    bold: 700,
  },
  // Letter spacing
  letterSpacings: {
    normal: 'normal',
    caps: '0.25em',
  },
  // Border radius
  radii: [0, 2, 3, 4, 8],
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
