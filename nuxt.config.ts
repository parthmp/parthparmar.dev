// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineNuxtConfig({
	
	css: ['~/assets/css/global.css'],

  	compatibilityDate: '2025-07-15',

	ssr: true, // keep true for SSG
	devtools: { enabled: true },
	vite: {
	plugins: [
		tailwindcss(),
		ViteImageOptimizer({
		png: {
			quality: 80,
		},
		jpeg: {
			quality: 80,
		},
		jpg: {
			quality: 80,
		},
		webp: {
			quality: 80,
		},
	}),
	],
	},
	app: {
	pageTransition: { name: 'page', mode: 'out-in' },
	head: {
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
