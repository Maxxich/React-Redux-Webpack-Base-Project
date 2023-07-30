import { buildPlugins } from "./buildPlugins"
import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import type webpack from 'webpack'
import type { BuildOptions } from "./types/config"

export function buildWebpackConfig (config: BuildOptions): webpack.Configuration {
  const { isDev } = config
  return {
    mode: config.mode,
    entry: config.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: config.paths.build,
      clean: true
    },
    plugins: buildPlugins(config),
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(config)
    },
    resolve: buildResolvers(config)
  }
}