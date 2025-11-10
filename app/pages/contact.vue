<template>
	<PageLayout>
		<PageHeader>Contact</PageHeader>
		<h2 class="text-2xl mt-2">Send me an email</h2>
		<p>You may send an email to parthparmaronline (at) gmail (dot) com , I read all emails there on a daily basis.</p>
		<h2 class="text-2xl mt-10">Via Social Media</h2>
		<div class="grid grid-cols-12 gap-5 mt-2">
			
			<div class="col-span-3 sm:col-span-2 lg:col-span-1 rounded-2xl">
				<a href="https://github.com/parthmp" class="block" target="_blank">
					<GithubSVG></GithubSVG>
				</a>
			</div>
	
		
			<div class="col-span-3 sm:col-span-2 lg:col-span-1 rounded-2xl">
				<a href="https://www.linkedin.com/in/parthmp/"  target="_blank">
					<LinkedinSVG></LinkedinSVG>
				</a>
			</div>
			
		
			<div class="col-span-3 sm:col-span-2 lg:col-span-1 rounded-2xl">
				<a href="https://x.com/logicalwebdev" class="block" target="_blank">
					<TwitterSVG></TwitterSVG>
				</a>
			</div>
		
		
			<div class="col-span-3 sm:col-span-2 lg:col-span-1 rounded-2xl">
				<a href="https://www.quora.com/profile/Parth-Parmar-2" class="block" target="_blank">
					<QuoraSVG></QuoraSVG>
				</a>
			</div>	
				
		</div>
		
		<a class="primary-link" href="https://www.upwork.com/freelancers/~01bed55ae9935fc4d2" target="_blank"><h2 class="text-2xl mt-10">Hire me on Upwork</h2></a>
		
	</PageLayout>
</template>
<script lang="ts" setup>

	import PageLayout from '../components/UI/PageLayout.vue';
	import PageHeader from '../components/UI/PageHeader.vue';

	import QuoraSVG from '~/assets/svg/brands/quora.svg';
	import LinkedinSVG from '~/assets/svg/brands/linkedin.svg';
	import GithubSVG from '~/assets/svg/brands/github.svg';
	import TwitterSVG from '~/assets/svg/brands/twitter.svg';

</script>