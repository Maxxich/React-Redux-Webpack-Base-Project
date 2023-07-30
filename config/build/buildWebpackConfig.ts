import { buildPlugins } from "./buildPlugins"
import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import type webpack from 'webpack'
import type { BuildOptions } from "./types/config"
import { buildDevServer } from "./buildDevServer"

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { isDev } = options
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    // @ts-ignore
    devServer: isDev ? buildDevServer(options) : undefined
  }
}