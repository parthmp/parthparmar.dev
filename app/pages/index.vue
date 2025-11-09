<template>
  <span>
		<Hero></Hero>
		<br>
		<br>
		<br>
		<br>
		<FeaturedWork></FeaturedWork>
		<br>
		
			
		<InputButton to="/portfolio" text="View Portfolio" add-classes="btn-lg btn-icon-inline"></InputButton>
		<!-- portfolio end -->
		<br>
		<br>
		<br>
		<br>
		<AboutMe></AboutMe>
		<br>
		<br>
		<br>
		<br>
		<Technologies></Technologies>
		<br>
		<br>
		<br>
		<br>
		<Reviews></Reviews>
		
		<br>
		<br>
		<br>
		<InputButton to="/contact" text="Ready to Start Your Project?" add-classes="btn-lg btn-icon-inline"></InputButton>
	
  </span>
</template>


<script lang="ts" setup>
	
	import Hero from '../components/Hero.vue';
	import FeaturedWork from '../components/FeaturedWork.vue';
	import InputButton from '../components/UI/InputButton.vue';
	import AboutMe from '../components/AboutMe.vue';
	import Technologies from '../components/Technologies.vue';
	import Reviews from '../components/Reviews.vue';
	

</script>