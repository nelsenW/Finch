const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { dir } = require('console');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, './')
        },
        hot: true,
        port: 5500,
    },
    mode: "development",
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    path.resolve(__dirname, 'src', 'index.scss')
  ],
  output: {
    path: path.join(__dirname, 'dist'), 
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        use: ['babel-loader'], 
        exclude: /node_modules/, 
      },
      {
        test: /\.s?[ac]ss$/, 
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader', 
            options: { url: false } 
          },
          'sass-loader', 
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  , new MiniCssExtractPlugin()].filter(Boolean),
  target: 'web'
};
