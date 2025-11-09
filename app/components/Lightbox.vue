<template>
  <Teleport to="body">
    <div 
      class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center overflow-hidden" 
      @click.self="handleBackdropClick"
    >
      
      <button @click="$emit('close')" class="cursor-pointer absolute top-4 right-4 text-white! text-4xl hover:text-gray-300 z-10">
        <IconX :size="32"></IconX>
      </button>
      
      <button 
        v-if="currentIndex > 0" 
        @click="handlePrev" 
        class="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 text-white! text-4xl hover:text-gray-300 z-10 lg:p-5"
      >
        <IconChevronLeft :size="48"></IconChevronLeft>
      </button>
      
      <div class="w-full h-full flex items-center justify-center p-4 relative" >
        
        <div v-if="imageLoading" class="absolute inset-0 flex items-center justify-center z-20">
          <IconLoader2 :size="48" class="text-white animate-spin" />
        </div>
        
        <div 
          class="relative w-full h-full flex items-center justify-center overflow-hidden"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
		  @click.self="handleBackdropClick"
        >
          <Transition name="slide" mode="out-in">
            <img 
              :key="images[currentIndex].src"
              :src="images[currentIndex].src" 
              :alt="images[currentIndex].alt" 
              class="max-w-full max-h-full object-contain rounded-lg select-none touch-none"
              :style="{
                transform: `translate(${panX}px, ${panY}px) scale(${scale})`,
                transition: isAnimating ? 'transform 0.3s ease' : 'none',
                cursor: scale > 1 ? 'grab' : 'default'
              }"
              @load="imageLoading = false"
              @loadstart="imageLoading = true"
            >
          </Transition>
        </div>
        
        <p class="absolute bottom-4 text-white! text-center bg-black/50 px-4 py-2 rounded">
          {{ currentIndex + 1 }} / {{ images.length }}
          <span v-if="scale > 1" class="ml-2 text-sm">{{ Math.round(scale * 100) }}%</span>
        </p>
      </div>

      <button 
        v-if="currentIndex < images.length - 1" 
        @click="handleNext" 
        class="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-white! text-4xl hover:text-gray-300 z-10 lg:p-5"
      >
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

// Zoom and pan state
const scale = ref(1);
const panX = ref(0);
const panY = ref(0);
const isAnimating = ref(false);

// Touch state
const touchStartX = ref(0);
const touchStartY = ref(0);
const touchStartPanX = ref(0);
const touchStartPanY = ref(0);
const initialPinchDistance = ref(0);
const initialScale = ref(1);
const isSwiping = ref(false);
const isPanning = ref(false);

const minSwipeDistance = 50;

// Reset transform
const resetZoom = () => {
  scale.value = 1;
  panX.value = 0;
  panY.value = 0;
  isAnimating.value = true;
  setTimeout(() => isAnimating.value = false, 300);
};

// Calculate distance between two touch points
const getDistance = (touch1, touch2) => {
  const dx = touch1.clientX - touch2.clientX;
  const dy = touch1.clientY - touch2.clientY;
  return Math.sqrt(dx * dx + dy * dy);
};

const handleTouchStart = (e) => {
  if (e.touches.length === 1) {
    // Single touch - start tracking for swipe or pan
    touchStartX.value = e.touches[0].clientX;
    touchStartY.value = e.touches[0].clientY;
    
    if (scale.value > 1) {
      // If zoomed, prepare for panning
      isPanning.value = true;
      touchStartPanX.value = panX.value;
      touchStartPanY.value = panY.value;
    } else {
      // If not zoomed, prepare for swiping
      isSwiping.value = true;
    }
  } else if (e.touches.length === 2) {
    // Two fingers - pinch zoom
    e.preventDefault();
    isSwiping.value = false;
    isPanning.value = false;
    initialPinchDistance.value = getDistance(e.touches[0], e.touches[1]);
    initialScale.value = scale.value;
  }
};

const handleTouchMove = (e) => {
  if (e.touches.length === 1) {
    if (isPanning.value && scale.value > 1) {
      // Pan the zoomed image
      e.preventDefault();
      const deltaX = e.touches[0].clientX - touchStartX.value;
      const deltaY = e.touches[0].clientY - touchStartY.value;
      panX.value = touchStartPanX.value + deltaX;
      panY.value = touchStartPanY.value + deltaY;
    }
    // For swiping, we just track the position (handled in touchEnd)
  } else if (e.touches.length === 2) {
    // Pinch zoom
    e.preventDefault();
    const currentDistance = getDistance(e.touches[0], e.touches[1]);
    const scaleChange = currentDistance / initialPinchDistance.value;
    
    // Apply zoom with min/max limits
    const newScale = Math.max(1, Math.min(4, initialScale.value * scaleChange));
    scale.value = newScale;
    
    // Reset pan if zoomed out to minimum
    if (newScale === 1) {
      panX.value = 0;
      panY.value = 0;
    }
  }
};

const handleTouchEnd = (e) => {
  if (e.touches.length === 0) {
    // All fingers lifted
    
    if (isSwiping.value && scale.value === 1) {
      // Check for swipe gesture (only when not zoomed)
      const touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX.value - touchEndX;
      
      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0 && props.currentIndex < props.images.length - 1) {
          emit('next');
        } else if (swipeDistance < 0 && props.currentIndex > 0) {
          emit('prev');
        }
      }
    }
    
    // Reset flags
    isSwiping.value = false;
    isPanning.value = false;
  }
};

const handleBackdropClick = () => {
// 	console.log('fired');
//   if (scale.value > 1) {
//     resetZoom();
//   } else {
	resetZoom();
    emit('close');
 // }
};

const handlePrev = () => {
  if (scale.value > 1) {
    resetZoom();
  } else {
    emit('prev');
  }
};

const handleNext = () => {
  if (scale.value > 1) {
    resetZoom();
  } else {
    emit('next');
  }
};

watch(() => props.currentIndex, () => {
  imageLoading.value = true;
  resetZoom();
});

onMounted(() => {
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      if (scale.value > 1) {
        resetZoom();
      } else {
        emit('close');
      }
    }
    
    if (scale.value === 1) {
      if (e.key === 'ArrowLeft' && props.currentIndex > 0) {
        emit('prev');
      }
      
      if (e.key === 'ArrowRight' && props.currentIndex < props.images.length - 1) {
        emit('next');
      }
    }
  };
  
  window.addEventListener('keydown', handleKeydown);
  onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
});
</script>