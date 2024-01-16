const postcssCustomMedia = require('postcss-custom-media')
const postcssPresetEnv = require('postcss-preset-env')
// const stylelint = require('stylelint')
// const { loadEnv } = require('vite')

// const stylelintConfig = require('./stylelint.config.cjs')

// const { NODE_ENV } = loadEnv(process.env.NODE_ENV, process.cwd(), '')
// const DEVELOPMENT = NODE_ENV === 'development'

module.exports = {
	plugins: [
		// DEVELOPMENT ? null : stylelint({ ...stylelintConfig }),
		postcssPresetEnv({ stage: 2 }),
		postcssCustomMedia({}),
	],
}
