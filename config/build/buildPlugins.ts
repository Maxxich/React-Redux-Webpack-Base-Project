import { ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ReactRefreshHotModulePlugin from "@pmmmwh/react-refresh-webpack-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

import type { BuildOptions } from "./types/config"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"


export function buildPlugins (options: BuildOptions) {
	const { isDev, paths } = options

	const plugins = [
		new HtmlWebpackPlugin({ template: paths.html }),
		new ProgressPlugin(),
		new MiniCssExtractPlugin(),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
			  diagnosticOptions: {
				semantic: true,
				syntactic: true,
			  },
			  mode: "write-references",
			},
		  }),
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
			analyzerMode: "static",
			reportFilename: options.paths.bundleAnalyzerReport
		}))
	}

	return plugins
}