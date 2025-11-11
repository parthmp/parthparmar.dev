<template>
  <div class="relative flex flex-col justify-between h-full w-full bg-[#181614] text-[#f3f2ee] p-12 py-6">
    <!-- Decorative accent -->
   	
    <!-- Main content -->
    <div>
      <h1 class="text-6xl font-extrabold leading-[1.1] mb-6">
        {{ title }}
      </h1>
      <p class="text-2xl max-w-4xl opacity-90">
        {{ description }}
      </p>
    </div>

    <div class="flex flex-row items-center gap-5">
		<img src="/images/parth-200.png" class="w-[70px] h-[70px]  rounded-full border-2 border-solid border-[#e35336]" alt="">
		 <div class="text-[#d4b37f]">
			<p class="text-xl font-semibold">Parth Parmar - parthparmar.dev</p>
			<p class="text-xl mt-[-10px] p-0 opacity-80">Web & Software Developer</p>
		</div>
	</div>
   
  </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Default title',
  description: 'Default description for this page.'
})
</script>
