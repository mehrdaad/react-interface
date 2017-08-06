module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactInterface',
      externals: {
        react: 'React'
      }
    }
  }
}
