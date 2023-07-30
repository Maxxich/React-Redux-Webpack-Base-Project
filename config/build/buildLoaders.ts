import { buildCssLoader } from './loaders/buildCssLoader'
import type { BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions) {
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const cssLoader = buildCssLoader(options.isDev)

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack']
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	}
  
	return [
		tsLoader,
		cssLoader,
		fileLoader,
		svgLoader
	]
}