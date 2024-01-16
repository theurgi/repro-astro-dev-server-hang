import mdx from '@astrojs/mdx'
import { defineConfig, squooshImageService } from 'astro/config'
import icon from 'astro-icon'

import { remarkReadingTime } from './plugins/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
	image: {
		service: squooshImageService(),
	},
	integrations: [icon(), mdx()],
	markdown: {
		shikiConfig: {
			theme: 'css-variables',
		},
		remarkPlugins: [remarkReadingTime],
	},
	prefetch: true,
})
