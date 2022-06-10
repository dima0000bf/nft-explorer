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
    proxy: {
      '/api-everscan': {
        target: 'https://api.everscan.io',
        pathRewrite: { '^/api-everscan': '/v1' },
        // changeOrigin: true,
        secure: false,
        agent: '',
        // {
        //   Accept: 'application/json, text/plain, */*',
        //   'Content-Type': 'application/json',
        //   'User-Agent': 'axios/0.27.2',
        //   'Content-Length': 100
        // }

        // {
        //   host: 'localhost:8080',
        //   connection: 'keep-alive',
        //   'content-length': '100',
        //   'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
        //   'sec-ch-ua-mobile': '?0',
        //   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36',
        //   'sec-ch-ua-platform': '"macOS"',
        //   'content-type': 'text/plain;charset=UTF-8',
        //   accept: '*/*',
        //   origin: 'http://localhost:8080',
        //   'sec-fetch-site': 'same-origin',
        //   'sec-fetch-mode': 'cors',
        //   'sec-fetch-dest': 'empty',
        //   referer: 'http://localhost:8080/account/0:fd59a2ebf73dbca36e737dcf5b7caa306d192214bb8403740e3c272d8ff0cb73',
        //   'accept-encoding': 'gzip, deflate, br',
        //   'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ru;q=0.7'
        // }

        onProxyReq(r, rr) {
          console.log(rr.headers)

          Object.keys(headersToRemove).forEach((header) => r.removeHeader(header))

          r.setHeader('accept', 'application/json, text/plain, */*')
          r.setHeader('content-type', 'application/json')
          r.setHeader('user-agent', 'axios/0.27.2')
          // r.setHeader('content-length', 100)
        },
      },
    },
  },
}

const headersToRemove = {
  host: 'localhost:8080',
  connection: 'keep-alive',
  'content-length': '100',
  'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
  'sec-ch-ua-mobile': '?0',
  'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36',
  'sec-ch-ua-platform': '"macOS"',
  'content-type': 'text/plain;charset=UTF-8',
  accept: '*/*',
  origin: 'http://localhost:8080',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  referer:
    'http://localhost:8080/account/0:fd59a2ebf73dbca36e737dcf5b7caa306d192214bb8403740e3c272d8ff0cb73',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ru;q=0.7',
}

export default config
