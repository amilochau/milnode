const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|fr/)
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: true
        })
      ]
    }
  }
}
