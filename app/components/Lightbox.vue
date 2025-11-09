<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" @click.self="$emit('close')" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      
		<button @click="$emit('close')" class="cursor-pointer absolute top-4 right-4 text-white! text-4xl hover:text-gray-300 z-10">
			<IconX :size="32"></IconX>
		</button>
      
    
		<button v-if="currentIndex > 0" @click="$emit('prev')" class="cursor-pointer absolute left-4 translate-y-[-50%] text-white! text-4xl hover:text-gray-300 z-10 lg:p-5">
        	<IconChevronLeft :size="48"></IconChevronLeft>
      	</button>
      
		<div class="max-w-7xl max-h-[90vh] p-4 relative">
		
			<div v-if="imageLoading" class="absolute inset-0 flex items-center justify-center">
				<IconLoader2 :size="48" class="text-white animate-spin" />
			</div>
			
			<Transition name="slide" mode="out-in">
				<img 
					:key="images[currentIndex].src"
					:src="images[currentIndex].src" 
					:alt="images[currentIndex].alt" 
					class="max-w-full max-h-full object-contain rounded-lg"
					@load="imageLoading = false"
					@loadstart="imageLoading = true"
				>
			</Transition>
			
			<p class="text-white! text-center mt-4">
				{{ currentIndex + 1 }} / {{ images.length }}
			</p>
		</div>

		<button v-if="currentIndex < images.length - 1" @click="$emit('next')" class="cursor-pointer absolute right-4 translate-y-[-50%] text-white! text-4xl hover:text-gray-300 z-10 lg:p-5">
			<IconChevronRight :size="48"></IconChevronRight>
		</button>
    </div>
  </Teleport>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s ease;
}

.slide-enter-from {
	transform: translateX(100%);
	opacity: 0;
}

.slide-leave-to {
	transform: translateX(-100%);
	opacity: 0;
}
</style>

<script lang="ts" setup>

import { onMounted, onUnmounted, ref, watch } from 'vue';
import { IconX, IconChevronLeft, IconChevronRight, IconLoader2 } from '@tabler/icons-vue';

const props = defineProps({
	images: {
		type: Array,
		required: true
	},
	currentIndex: {
		type: Number,
		required: true
	}
})

const emit = defineEmits(['close', 'next', 'prev']);

const imageLoading = ref(true);

const touchStartX = ref(0);
const touchEndX = ref(0);
const minSwipeDistance = 50; // Minimum distance for swipe

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
}

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
}

const handleTouchEnd = () => {

	const swipeDistance = touchStartX.value - touchEndX.value;

	if(swipeDistance > minSwipeDistance && props.currentIndex < props.images.length - 1){
		emit('next');
	}

	if(swipeDistance < -minSwipeDistance && props.currentIndex > 0) {
		emit('prev');
	}

	touchStartX.value = 0;
	touchEndX.value = 0;

}


watch(() => props.currentIndex, () => {
	imageLoading.value = true;
})

onMounted(() => {

	const handleKeydown = (e) => {

		if(e.key === 'Escape'){
			emit('close');
		}

		if(e.key === 'ArrowLeft' && props.currentIndex > 0){
			emit('prev');
		}

		if(e.key === 'ArrowRight' && props.currentIndex < props.images.length - 1){
			emit('next');
		}
	}

	window.addEventListener('keydown', handleKeydown);
	onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
})
</script>