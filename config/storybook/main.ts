import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'

const config: StorybookConfig = {
	stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {
				sass: {
					implementation: require('sass'),
				},
			},
		},
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	async webpackFinal(config): Promise<webpack.Configuration> {
		const paths: BuildPaths = {
			build: '',
			entry: '',
			html: '',
			src: path.resolve(__dirname, '..', '..', 'src'),
			bundleAnalyzerReport: ''
		}

		config.resolve!.modules!.push(paths.src)
		config.resolve!.extensions!.push('.ts', '.tsx')
		// @ts-ignore
		config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i }
			}
			return rule
		})

		config.module?.rules?.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		})
		
		config.plugins!.push(new DefinePlugin({
			__IS_DEV__: true
		}))

		// if (configType === 'DEVELOPMENT') {

		// }
		// if (configType === 'PRODUCTION') {

		// }
		return config
	},
}
export default config
