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
		site: {
			url: 'https://parthparmar.dev',
			name: 'Parth Parmar',
			description: 'Full-stack web and software developer specializing in Laravel, Vue.js, Nuxt, Tailwind CSS, Progressive Web Apps and Other modern technologies. Available for international remote work and freelance projects.',
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

				runtimeConfig: {
					public: {
						siteUrl: 'https://parthparmar.dev'
					}
				},

				schemaOrg: {
					identity: definePerson({
					name: 'Parth Parmar',
					givenName: 'Parth',
					familyName: 'Parmar',
					image: 'https://parthparmar.dev/_ipx/w_1024&f_webp&q_80/images/parth-parmar-programmer-web-developer.jpg',
					description: 'Full-stack web and software developer specializing in Laravel, Vue.js, Nuxt, Tailwind CSS, Progressive Web Apps and Other modern technologies. Available for international remote work and freelance projects.',
					jobTitle: 'Web & Software Developer',
					url: 'https://parthparmar.dev',
						knowsAbout: [
							'JavaScript',
							'TypeScript',
							'PHP',
							'CSS',
							'HTML',
							'Java',
							'C#',
							'C++',
							'C',
							'Visual Basic',
							'Perl',
							'Python',
							'MySQL',
							'SQLite',
							'MongoDB',
							'Laravel',
							'Vue.js',
							'Nuxt.js',
							'Capacitor',
							'Tailwind CSS',
							'Bootstrap',
							'Node.js',
							'Express.js',
							'WordPress',
							'jQuery',
							'Vite',
							'Git',
							'Figma',
							'DigitalOcean',
							'Vultr',
							'Cloudflare',
							'Linux',
							'Windows',
							'Progressive Web Apps',
							'PWA Development',
							'Full-Stack Development',
							'Web Development',
							'Software Development',
							'Android Development'
						],
					knowsLanguage: ['English', 'Gujarati', 'Hindi'],
					sameAs: [
						'https://github.com/parthmp',
						'https://www.linkedin.com/in/parthmp/',
						'https://x.com/logicalwebdev'
					]
				})
  }
})