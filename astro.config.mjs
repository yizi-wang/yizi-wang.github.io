// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
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
					label: 'History of Math',
					translations: { zh: '数学史' },
					autogenerate: { directory: 'history-of-math' },
				},
				{
					label: 'Teaching Notes',
					translations: { zh: '教学笔记' },
					autogenerate: { directory: 'teaching-notes' },
				},
				{
					label: 'Further Math',
					translations: { zh: '进阶数学' },
					autogenerate: { directory: 'further-math' },
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
		mdx(),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
