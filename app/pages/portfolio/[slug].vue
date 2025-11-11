<template>
  <PageLayout>
    <PageHeader>{{ project.title }}</PageHeader>

		<div class="grid grid-cols-12 gap-5 portfolio-thumbs">
			<div class="col-span-6 lg:col-span-3" v-for="(image, index) in project.images" :key="index">
				<div @click="openLightbox(index)" class="cursor-pointer hover:opacity-80 transition-opacity" v-if="!image.video">
					<NuxtPicture
					class=" max-h-[150px]!"
						:src="image.src"
						:img-attrs="{ class: 'w-full rounded-lg', alt: image.alt }"
						format="webp"
						loading="lazy"
						sizes="100vw md:768px lg:1024px"
						/>
				</div>
				<div v-if="image.video">
					<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe :src="image.src" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" referrerpolicy="strict-origin"></iframe></div>
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
	import Social from '../../components/content/Social.vue';
	import RefB2B from '../../components/content/RefB2B.vue';
	import Mproject from '../../components/content/Mproject.vue';
	import Acme from '../../components/content/Acme.vue';

	const route = useRoute();

	const { getProject } = useProjects();

	const slug = route.params.slug;

	const pagesSlugs = ['deskmint', 'social', 'mproject', 'refb2b', 'acme'];

	const components : VueComponent = {
		DeskMint,
		Social,
		RefB2B,
		Mproject,
		Acme
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

	let title = '';
	let description = '';
	let url = '';
	let keywords = '';

	let lowerSlug = slug.toLowerCase();

	if(lowerSlug === 'deskmint'){
		title = 'DeskMint | SaaS Dashboard by Parth Parmar | Vue, Laravel & PWA';
		description = 'Discover DeskMint, an in-development full-stack SaaS dashboard showcasing advanced client management, dynamic custom fields and secure invoicing. Built with Vue.js, Laravel, Tailwind, and PWA-ready architecture, it demonstrates enterprise-grade web development in action.';
		keywords = 'DeskMint, SaaS dashboard, full-stack portfolio, Vue.js, Laravel, Tailwind CSS, PWA app, dynamic custom fields, secure invoicing, encrypted document storage, enterprise web development, scalable SaaS, web app showcase, source available project, in development';
		url = 'https://parthparmar.dev/portfolio/deskmint';
	}else if(lowerSlug === 'social'){
		title = 'Private Social Media PWA | Full-Stack Laravel & Vue App | Parth Parmar';
		description = 'Discover a private social platform built with Laravel and Vue, featuring member profiles, activity feeds, chat, admin dashboards, and financial tracking. Fully PWA-enabled and packaged for Android with Capacitor, showcasing end-to-end full-stack development.';
		keywords = 'Private social network, Social Media PWA, Laravel Vue app, Capacitor Android app, full-stack developer portfolio, admin dashboard, member management system, community platform, matrimony module, financial tracking, responsive PWA, Vue SPA, Parth Parmar';
		url = 'https://parthparmar.dev/portfolio/social';
	}else if(lowerSlug === 'refb2b'){
		title = '';
		description = '';
		keywords = '';
		url = 'https://parthparmar.dev/portfolio/refb2b';
	}else if(lowerSlug === 'mproject'){
		title = '';
		description = '';
		keywords = '';
		url = 'https://parthparmar.dev/portfolio/mproject';
	}else if(lowerSlug === 'acme'){
		title = '';
		description = '';
		keywords = '';
		url = 'https://parthparmar.dev/portfolio/acme';
	}
	
	defineOgImageComponent('OgImageForPages', {
		title: title,
		description : description
	});

	useSeoMeta({
		title: title,
		description: description,
		keywords: keywords,
		author: 'Parth Parmar',
		robots: 'index, follow',
		ogTitle: title,
		ogDescription: description,
		ogType: 'website',
		ogUrl: url,
		twitterCard: 'summary_large_image',
		twitterTitle: title,
		twitterDescription: description,
		twitterCreator: '@logicalwebdev',
		language: 'en',
		canonical: url,
	});

</script>