let path = require("path"),
HtmlWebpackPlugin = require("html-webpack-plugin"),

config = {
  output: {
    path: path.join(__dirname, '/dist'), 
    filename: 'testBundle.js'
  },
  devServer: {
    port: 9090,
    historyApiFallback : true 
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: /nodeModules/,
          use: {
            loader: 'babel-loader'
          }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] 
}

module.exports = config;