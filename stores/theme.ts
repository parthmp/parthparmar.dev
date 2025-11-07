import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeoptions', {
	state: () => ({
		theme: 'light' // default for SSR
	}),
	getters: {
		getTheme: (state) => state.theme
	},
	actions: {
			initTheme() {
				if (process.client) {
					const saved = localStorage.getItem('theme');
					if (saved) this.theme = saved
				}
			},
			setTheme(theme: string) {
				this.theme = theme
				if (process.client) localStorage.setItem('theme', theme);
			}
		}
})
