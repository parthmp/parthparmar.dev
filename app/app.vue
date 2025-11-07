<template>
	<NuxtLayout>
  		<NuxtPage />
  	</NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<script setup lang="ts">
// import { useHead } from 'nuxt/app';

// useHead({
//   script: [
//     {
//       children: `
//         (function() {
//           const savedTheme = localStorage.getItem('theme');
//           if (!savedTheme) localStorage.setItem('theme', 'system');
//           const { classList } = document.documentElement;
//           if (savedTheme === 'system' || !savedTheme) {
//             const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//             if (isDark) classList.add('dark');
//           } else if (savedTheme === 'dark') {
//             classList.add('dark');
//           }
//         })();
//       `,
//       type: 'text/javascript'
//     }
//   ]
// })
</script>