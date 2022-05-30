import webpack from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'

type WebpackConfig = webpack.Configuration & { devServer?: DevServerConfiguration }

const config: WebpackConfig = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src/index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    new HtmlPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],

  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    liveReload: false,
    hot: true,
    proxy: {},
  },
}

export default config
