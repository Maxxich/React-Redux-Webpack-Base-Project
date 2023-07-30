import { ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from "webpack"
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as MiniCssExtractPlugin from "mini-css-extract-plugin"
import * as ReactRefreshHotModulePlugin from "@pmmmwh/react-refresh-webpack-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

import type { BuildOptions } from "./types/config"


export function buildPlugins (options: BuildOptions) {
  const { isDev, paths } = options

  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    })
  ]

  if (isDev) {
    plugins.push(new ReactRefreshHotModulePlugin())
    plugins.push(new HotModuleReplacementPlugin())
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  } else {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: true,
      analyzerMode: 'static',
      reportFilename: options.paths.bundleAnalyzerReport
    }))
  }

  return plugins
}