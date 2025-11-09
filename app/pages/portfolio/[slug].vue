<template>
  <PageLayout>
    <PageHeader>{{ project.title }}</PageHeader>

		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-6 lg:col-span-3" v-for="(image, index) in project.images" :key="index">
				<div @click="openLightbox(index)" class="cursor-pointer hover:opacity-80 transition-opacity">
				<NuxtPicture
					:src="image.src"
					:img-attrs="{ class: 'w-full rounded-lg', alt: image.alt }"
					format="webp"
					loading="lazy"
					/>
				</div>
			</div>
			
		</div>
		
		<Lightbox 
			v-if="lightboxOpen" 
			:images="project.images"
			:current-index="currentImageIndex"
			@close="lightboxOpen = false"
			@next="nextImage"
			@prev="prevImage"
		/>

		<p class="text-lg mb-8">{{ project.description }}</p>
		
		<div class="tags mb-8">
			<Tag v-for="tag in project.tags" :key="tag.text" :type="tag.type">{{ tag.text }}</Tag>
		</div>

		<div class="mt-12 prose prose-lg dark:prose-invert">
			<h3>About This Project</h3>
			<p v-html="project.content"></p>
		</div>
  </PageLayout>
</template>
<script setup>

import { ref } from 'vue';
import Lightbox from '../../components/Lightbox.vue';
import PageLayout from '../../components/UI/PageLayout.vue';
import PageHeader from '../../components/UI/PageHeader.vue';
import Tag from '../../components/UI/Tag.vue';
import { useProjects } from '../../../composables/useProjects';

const route = useRoute();

const { getProject } = useProjects();


const project = getProject(route.params.slug);

const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const openLightbox = (index) => {
	currentImageIndex.value = index;
	lightboxOpen.value = true;
}

const nextImage = () => {
	currentImageIndex.value = (currentImageIndex.value + 1) % project.images.length;
}

const prevImage = () => {
	currentImageIndex.value = (currentImageIndex.value - 1 + project.images.length) % project.images.length;
}
</script>