const path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    // disable umd for now until https://github.com/insin/nwb/issues/391 is resolved
    // umd: {
    //   global: 'ReactInterface',
    //   externals: {
    //     react: 'React'
    //   }
    // }
  },
  webpack: {
		extra: {
			module: {
				rules: [
					{
						test: /\.md$/,
						use: [
              { loader: 'raw-loader' }
            ]
					}
				]
			}
		}
	}
}
