// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
			social: [
				{ icon: 'github', href: 'https://github.com/yizi-wang', label: 'GitHub' },
			],
			sidebar: [
				{
					label: 'About',
					translations: { zh: '关于我' },
					link: '/about',
				},
				{
					label: 'TMUA Handouts',
					translations: { zh: 'TMUA 讲义' },
					autogenerate: { directory: 'tmua' },
				},
				{
					label: 'Teaching Notes',
					translations: { zh: '教学笔记' },
					autogenerate: { directory: 'notes' },
				},
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/katex.min.css',
					},
				},
			],
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
