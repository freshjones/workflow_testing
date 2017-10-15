import path from 'path'
import webpack from 'webpack'
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

module.exports = {
    cache: true,
    entry: [
        "react-hot-loader/patch",
        "./src/client",
    ],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
    },
    module: {
      rules: [
        { 
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory:true
            }
          }
        },
      ],
    },
    devtool: isProd ? false : 'source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ["node_modules"]
    },
    devServer: {
      port: WDS_PORT,
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    plugins: [
      new webpack.DllReferencePlugin({
            manifest: require("./dll/vendor-manifest.json")
      }),
      new HardSourceWebpackPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
};
