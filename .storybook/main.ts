import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'storybook-css-modules',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	core: {
		builder: {
			name: '@storybook/builder-webpack5',
			options: {
				fsCache: true,
				lazyCompilation: true,
			},
		},
	},
}
export default config
