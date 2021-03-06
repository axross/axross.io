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
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.json', '.jsx', '.js'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'axross.io',
      template: './src/index.html',
      hash: true,
      config,
    }),
  ],
  devServer: {
    port: 8000,
    contentBase: './public',
    historyApiFallback: true,
  },
};
