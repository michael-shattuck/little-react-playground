const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app.tsx',
  context: path.join(__dirname, 'src'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'development',
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /spec\.tsx?$/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html',
    compress: true,
    hot: true,
    inline: true,
    port: 9000
  },
  stats: {
    assets: true,
    modules: false,
    builtAt: false,
    warnings: false,
    children: false,
    chunks: false
  }
};