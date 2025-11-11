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
	*/
	
	defineOgImageComponent('OgImageForPages', {
		title: 'Is this thing on? Is this thing on?Is this thing on?',
		description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id hic incidunt dicta autem perferendis, provident aliquid! Explicabo ipsum nostrum, numquam animi eligendi illum sint in perferendis laudantium cum ratione.'
	});

	useSeoMeta({
		title: 'Parth Parmar - Web & Software Developer',
		description: 'Polyglot developer based in Surat, India. Experienced in Laravel, Vue, Tailwind, and PWA development.',
		keywords: 'Laravel developer, Vue.js developer, Tailwind CSS, PWA, Web Developer India, Software Engineer',
		author: 'Parth Parmar',
		robots: 'index, follow',
		ogTitle: 'Parth Parmar - Web & Software Developer',
		ogDescription: 'Polyglot developer experienced in Laravel, Vue, Tailwind, and PWA development.',
		ogType: 'website',
		ogUrl: 'https://parthparmar.dev',
		ogImage: 'https://parthparmar.dev/images/parth-parmar-programmer-web-developer-surat-india.png',
		twitterCard: 'summary_large_image',
		twitterTitle: 'Parth Parmar - Web & Software Developer',
		twitterDescription: 'Experienced in Laravel, Vue, Tailwind, and PWA development.',
		twitterImage: 'https://parthparmar.dev/images/parth-parmar-programmer-web-developer-surat-india.png',
		twitterCreator: '@your_twitter_handle', // optional
		themeColor: '#0f172a', // matches your Tailwind dark bg
		language: 'en',
		canonical: 'https://parthparmar.dev',
	});




</script>