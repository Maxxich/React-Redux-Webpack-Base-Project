import type { BuildOptions } from "./types/config"

export function buildLoaders (configL: BuildOptions) {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  return [
    tsLoader
  ]
}