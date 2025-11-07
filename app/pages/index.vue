<template>
  <div class="p-10 text-center">
	
    <h1 class="text-4xl font-bold text-green-600">Hello Nuxt!</h1>
    <p class="text-gray-500 mt-2">This is your first page.</p>
    <p class="text-gray-500 mt-2">Counter : {{ counter }} {{ data.some }}</p>
	<SampleComponent></SampleComponent>
  </div>
</template>


<script lang="ts" setup>
	
	import { reactive, ref } from 'vue';

	import SampleComponent from '../components/SampleComponent.vue';
	import Menu from '../components/Menu.vue';

	let counter = ref(15);

	interface Bla{
		some : boolean
	}

	const data = reactive<Bla>({
		some: false
	});

</script>