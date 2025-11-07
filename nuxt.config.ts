// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
	css: ['~/assets/css/global.css'],

  compatibilityDate: '2025-07-15',

  ssr: true, // keep true for SSG
  devtools: { enabled: true },
	vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
	pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'My Nuxt Site',
      meta: [
        { name: 'description', content: 'A statically generated Nuxt site' },
      ],
    },
	
  },

  nitro: {
    preset: 'static', // required for SSG
  },
})
