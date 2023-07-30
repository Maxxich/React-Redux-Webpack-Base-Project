import { ProgressPlugin } from "webpack"
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as MiniCssExtractPlugin from "mini-css-extract-plugin"
import type { BuildOptions } from "./types/config"


export function buildPlugins (config: BuildOptions) {
  return [
    new HtmlWebpackPlugin({ template: config.paths.html }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin()
  ]
}