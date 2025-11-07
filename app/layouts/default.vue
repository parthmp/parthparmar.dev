<template>
  <div>
    <header class="p-4 bg-gray-800 text-white">
      <h1 class="text-xl font-bold">My Site Default</h1>
    </header>

      <main class="p-6" key="$route.fullPath">
		<Menu></Menu>
        <slot />
      </main>

    <footer class="p-4 bg-gray-100 text-center text-sm">
      © 2025 My Site
    </footer>
  </div>
</template>
