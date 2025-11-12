<template>
  <div class="text-center">
	<br>
	<br>
	<br>
	<br>
	<br>
    <p style="font-size: 100px;" class="mt-[1500px]">
      Error: {{ error.statusCode }}
	</p>
    <NuxtLink to="/" class="mt-6 text-3xl text-primary! hover:text-primary-dark! underline!">
      Go back home
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

// optional: reset error on navigation
const handleError = () => clearError({ redirect: '/' })
</script>
