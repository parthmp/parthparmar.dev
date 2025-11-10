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
	

</script>