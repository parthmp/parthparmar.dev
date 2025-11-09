<template>
	<!-- hero section start -->
	<div class="pt-0 lg:pt-[50px]">
		<br>
		
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-12 lg:col-span-9">
				<h1 class="text-center lg:text-left text-5xl/16 poppins-medium">I'm <span class="poppins-bold text-primary!">Parth</span>, building software from <span class="poppins-bold text-primary!">startup</span> ideas to <span class="poppins-bold text-primary!">enterprise</span> systems.</h1>
				<br>
				<p class="text-center lg:text-left text-xl">I design and build applications that are fast, scalable, and maintainable. From simple tools to complete complex business systems, I focus on clean architecture, efficient code, and solving real problems.</p>
				<br>
				<br>
				<div class="flex flex-col lg:flex-row gap-5">
					<InputButton to="/contact" text="Let's Talk" add-classes="btn-lg btn-icon" :center="false"></InputButton>
					<InputButton to="/resume" text="View Resume" add-classes="btn-lg btn-icon" :center="false" icon="IconFileCv"></InputButton>
				</div>
				
			</div>
			<div class="col-span-12 mt-8 lg:mt-0 lg:col-span-3">
				<NuxtPicture
					src="/images/parth-parmar-programmer-web-developer-surat-india.jpg"
					:img-attrs="{ class: 'w-full rounded-full', alt: 'parth parmar, programmer, surat, gujarat, india, web & software programmer, digitalsitara, deskmint' }"
					sizes="100vw sm:400px md:768px lg:1024px"
					format="webp"
					preload
				/>
				<!-- <img :src="parthImage" class="w-full max-w-xs lg:max-w-sm rounded-full border-0 border-solid border-primary shadow-xl m-auto" alt="parth parmar, programmer, surat, gujarat, india, web & software programmer, digitalsitara, deskmint"> -->
			</div>
		</div>
			
	</div>
	<!-- hero section end -->
</template>

<script lang="ts" setup>

	import InputButton from './UI/InputButton.vue';
	
	//import parthImage from '~/assets/images/parth.jpg';

</script>