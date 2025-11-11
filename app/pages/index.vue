<template>
  <span>
		<Hero></Hero>
		
		<FeaturedWork class="mt-20"></FeaturedWork>
		
			
		<InputButton to="/portfolio" text="View Portfolio" add-classes="btn-lg btn-icon-inline mt-10"></InputButton>
		<!-- portfolio end -->

		<LatestMediumArticle class="mt-20"></LatestMediumArticle>
		
		
		<AboutMe class="mt-20"></AboutMe>
		
		<Technologies class="mt-22"></Technologies>
		
		<Reviews class="mt-22!"></Reviews>

		<InputButton to="/contact" text="Ready to Start Your Project?" add-classes="btn-lg btn-icon-inline mt-10"></InputButton>
	
  </span>
</template>


<script lang="ts" setup>
	
	import Hero from '../components/Hero.vue';
	import FeaturedWork from '../components/FeaturedWork.vue';
	import InputButton from '../components/UI/InputButton.vue';
	import AboutMe from '../components/AboutMe.vue';
	import Technologies from '../components/Technologies.vue';
	import Reviews from '../components/Reviews.vue';
	import LatestMediumArticle from '../components/LatestMediumArticle.vue';

	/**
	 * title and meta tags per page defined with useSeoMeta
	 * identity for json ld via nuxt config file
	 * og image for each page defined with defineOgImageComponent
	 * robots.txt generated automatically
	 * sitemap.xml generated automatically
	 * 
	*/

	const title = 'Parth Parmar - Web & Software Developer | Programmer';
	const description = 'Polyglot developer based in Surat, India, and working remotely worldwide. Experienced in Laravel, Vue, Tailwind, and PWA development.';
	
	defineOgImageComponent('OgImageForPages', {
		title: title,
		description : description
	});

	useSeoMeta({
		title: title,
		description: '',
		keywords: 'Laravel developer, Vue.js developer, Tailwind CSS, PWA, Web Developer India, Offshore developer, Offshore programmer, Software Engineer',
		author: 'Parth Parmar',
		robots: 'index, follow',
		ogTitle: title,
		ogDescription: description,
		ogType: 'website',
		ogUrl: 'https://parthparmar.dev',
		twitterCard: 'summary_large_image',
		twitterTitle: title,
		twitterDescription: description,
		twitterCreator: '@logicalwebdev',
		language: 'en',
		canonical: 'https://parthparmar.dev',
	});




</script>