var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/DayPicker.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader', 'eslint-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|svg|jpg|gif|jpeg)$/,
      use: ['url-loader'],
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    moment: 'commonjs moment',
    'prop-types': 'commonjs prop-types'
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
}
