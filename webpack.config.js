const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config();

const config = ['FIREBASE_PROJECT_ID', 'FIREBASE_API_KEY'].reduce(
  (whole, key) => ({ ...whole, [key]: process.env[key] }),
  {},
);

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.json', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Document',
      template: './src/index.html',
      config,
    }),
  ],
  devServer: {
    port: 8000,
    contentBase: './public',
    historyApiFallback: true,
  },
};
