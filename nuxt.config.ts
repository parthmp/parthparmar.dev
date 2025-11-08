// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgLoader from 'vite-svg-loader';



export default defineNuxtConfig({

	modules: [
    	'@nuxt/fonts',
    	'@nuxt/image',
		'@pinia/nuxt'
  	],
	fonts: {
			defaults: {
				weights: [400, 500, 700],
				styles: ['normal', 'italic'],
			},
	},
	css: ['~/assets/css/global.css'],
	
	// plugins: ['~/plugins/theme-preload.client.ts'],

  	compatibilityDate: '2025-07-15',

	ssr: true, // keep true for SSG
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
              if (!savedTheme) localStorage.setItem('theme', 'system');
              const { classList } = document.documentElement;
              if (savedTheme === 'system' || !savedTheme) {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (isDark) classList.add('dark');
              } else if (savedTheme === 'dark') {
                classList.add('dark');
              }
            })();
          `,
          tagPosition: 'bodyOpen' // Try this instead of head
        }
      ],
			title: 'My Nuxt Site',
			meta: [
			{ name: 'description', content: 'A statically generated Nuxt site' },
			],
		//   link: [
		// 		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		// 		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
		// 		{ 
		// 			rel: 'stylesheet', 
		// 			href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' 
		// 		}
		// 	]
		},

	},

	nitro: {
		preset: 'static', // required for SSG
	},
})