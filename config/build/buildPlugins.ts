import { ProgressPlugin, DefinePlugin } from "webpack"
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as MiniCssExtractPlugin from "mini-css-extract-plugin"
import type { BuildOptions } from "./types/config"


export function buildPlugins (options: BuildOptions) {
  const { isDev, paths } = options
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    })
  ]
}