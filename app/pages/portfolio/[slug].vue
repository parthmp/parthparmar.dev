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
					sizes="100vw md:768px lg:1024px"
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

		<p class="text-lg mb-8 mt-8">{{ project.description }}</p>
		
		<p class="poppins-bold">Technologies/Tech Stack</p>
		<div class="tags mb-8 mt-1!">
			<Tag v-for="tag in project.tags" :key="tag.text" :type="tag.type">{{ tag.text }}</Tag>
		</div>
		<p class="poppins-medium text-primary! text-shadow-primary! text-shadow-2xs">550+ commits so far across both repositories <span class="italic!">(And counting!)</span></p>
		<div class="mt-5 prose prose-lg dark:prose-invert">
			<component :is="contentComponent"></component>
		</div>
  </PageLayout>
</template>
<script lang="ts" setup>

import { computed, ref } from 'vue';
import Lightbox from '../../components/Lightbox.vue';
import PageLayout from '../../components/UI/PageLayout.vue';
import PageHeader from '../../components/UI/PageHeader.vue';
import Tag from '../../components/UI/Tag.vue';
import { useProjects } from '../../../composables/useProjects';
import { createError, useRoute } from 'nuxt/app';
import { Component as VueComponent } from 'vue';

import DeskMint from '../../components/content/DeskMint.vue';

const route = useRoute();

const { getProject } = useProjects();

const slug = route.params.slug;

const pagesSlugs = ['deskmint', 'social', 'mproject', 'refb2b', 'acme'];

const components : VueComponent = {
	DeskMint
};

if(!pagesSlugs.includes(slug)){
	throw createError({
		statusCode: 404,
		statusMessage: 'Page Not Found',
	});
}

const project = getProject(slug);

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

const contentComponent = computed(() : any => {
	return components[project.content];
});
</script>