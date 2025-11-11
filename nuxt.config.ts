// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgLoader from 'vite-svg-loader';

import { definePerson } from 'nuxt-schema-org/schema';


export default defineNuxtConfig({

	modules: ['@nuxt/fonts', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/seo'],
	fonts: {
		defaults: {
			weights: [400, 500, 700],
			styles: ['normal', 'italic'],
		},
	},
	css: ['~/assets/css/global.css'],

	compatibilityDate: '2025-07-15',

	ssr: true,
	devtools: { enabled: true },
	vite: {
	plugins: [
			tailwindcss(),
			svgLoader()
		],
	},
	image: {
		quality: 80,
		format: ['webp'],
		screens: {
					xs: 320,
					sm: 640,
					md: 768,
					lg: 1024,
					xl: 1280,
					xxl: 1536
				}
		},
		app: {
			pageTransition: { name: 'page', mode: 'out-in' },
			head: {
					htmlAttrs: {
     								'data-theme-preload': true
								},script: [
									{
									innerHTML: `
										(function() {
										const savedTheme = localStorage.getItem('theme');
										if (!savedTheme) localStorage.setItem('theme', 'light');
										const { classList } = document.documentElement;
										if (savedTheme === 'system' || !savedTheme) {
											const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
											if (isDark){
																											localStorage.setItem('theme', 'dark');
																											classList.add('dark');
																							}
										} else if (savedTheme === 'dark') {
																						localStorage.setItem('theme', 'dark');
											classList.add('dark');
										}
										})();
									`,
									tagPosition: 'bodyOpen'
									}
								],
																			
								},

				},

				nitro: {
					preset: 'static',
				},

				schemaOrg: {
					identity: definePerson({
					name: 'Parth Parmar',
					givenName: 'Parth',
					familyName: 'Parmar',
					image: '/images/parth-parmar-programmer-web-developer-surat-india.png',
					description: 'Polyglot Web and Software Developer based in Surat, India - experienced in Laravel, Vue, Tailwind, PWA development, and other modern technologies.',
					jobTitle: 'Web & Software Developer',
					url: 'https://parthparmar.dev',
					sameAs: [
						'https://github.com/parthmp',
						'https://www.linkedin.com/in/parthmp/',
						'https://x.com/logicalwebdev'
					]
				})
  }
})