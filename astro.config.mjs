// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
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
				{ icon: 'github', href: 'https://github.com/The-CerealDev', label: 'GitHub' },
			],
			editLink: {
				baseUrl: 'https://github.com/The-CerealDev/yizi-wang.github.io/edit/translate-teaching-notes/',
			},
			sidebar: [
				{
					label: 'About',
					translations: { zh: '关于我' },
					link: '/about',
				},
				{
					label: 'A-Level Notes',
					translations: { zh: 'A-Level 笔记' },
					autogenerate: { directory: 'further-math' },
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
					label: 'STEP',
					translations: { zh: 'STEP 题库' },
					autogenerate: { directory: 'step' },
				},
				{
					label: 'Teaching Blog',
					translations: { zh: '教学博客' },
					autogenerate: { directory: 'teaching-notes' },
				},
				{
					label: '🌐 English Translation by The-CerealDev',
					link: 'https://github.com/The-CerealDev',
					attrs: { target: '_blank', rel: 'noopener', style: 'color: var(--sl-color-text-accent); font-weight: bold; margin-top: 1rem;' },
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
		sitemap({
			i18n: {
				defaultLocale: 'root',
				locales: {
					root: 'en',
					zh: 'zh-CN',
				},
			},
			filter: (page) => !new URL(page).pathname.includes('/review-drafts/'),
		}),
		mdx(),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
