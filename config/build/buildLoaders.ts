import { buildCssLoader } from "./loaders/buildCssLoader"
import type { BuildOptions } from "./types/config"

export function buildLoaders (options: BuildOptions) {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = buildCssLoader(options.isDev)
  
  return [
    tsLoader,
    cssLoader
  ]
}