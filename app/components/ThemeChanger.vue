<template>
  <li class="theme-changer">
    <a href="javascript:;" @click.prevent="setCurrentTheme">
      <span id="sun-icon" v-if="themeName === 'light'">
        <IconSun :size="24" />
      </span>
      <span id="moon-icon" v-if="themeName === 'dark'">
        <IconMoon :size="24" />
      </span>
    </a>
  </li>
</template>

<script lang="ts" setup>

	import { IconSun, IconMoon } from '@tabler/icons-vue'
	import { computed, onMounted } from 'vue'
	import { useThemeStore } from '../../stores/theme'

	const theme = useThemeStore();

	// Computed value to reflect current theme
	const themeName = computed(() : string => theme.getTheme ?? 'light');

	// Initialize theme from localStorage
	onMounted(() : void => {
		theme.initTheme();
		applyThemeClass(theme.theme);
	})

	// Toggle theme
	const setCurrentTheme = () : void => {
		
		const newTheme = theme.theme === 'light' ? 'dark' : 'light';
		theme.setTheme(newTheme);
		applyThemeClass(newTheme);
	}

	// Helper to add/remove Tailwind dark class
	const applyThemeClass = (theme: string) : void => {
		if(process.client){
			document.documentElement.classList.toggle('dark', theme === 'dark')
		}
	}
</script>
