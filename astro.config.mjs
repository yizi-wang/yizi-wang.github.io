// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://yizi-wang.github.io',
	integrations: [
		starlight({
			title: "Yizi's Math Notes",
			description: 'Mathematics teaching resources and TMUA study materials',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				zh: { label: '中文', lang: 'zh-CN' },
			},
			social: {
				github: 'https://github.com/yizi-wang',
			},
			sidebar: [
				{ label: 'About', link: '/about' },
				{
					label: 'TMUA Handouts',
					autogenerate: { directory: 'tmua' },
				},
				{
					label: 'Teaching Notes',
					autogenerate: { directory: 'notes' },
				},
			],
		}),
	],
});
