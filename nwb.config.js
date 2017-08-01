module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactUI',
      externals: {
        react: 'React'
      }
    }
  }
}
