<template>
	<PageLayout>
		<PageHeader>Contact</PageHeader>
		<h2 class="text-2xl mt-2">Send me an email</h2>
		<p>You may send an email to <a class="primary-link underline! hover:text-primary-dark!" href="mailto:parthparmaronline@gmail.com">parthparmaronline@gmail.com</a> , I read all emails there very frequently.</p>
		<h2 class="text-2xl mt-10">Via Social Media</h2>
		<div class="grid grid-cols-16 gap-5 mt-2">
			
			<div class="col-span-4 sm:col-span-3 lg:col-span-2 xl:col-span-1 rounded-2xl">
				<a href="https://github.com/parthmp" class="block" target="_blank">
					<GithubSVG></GithubSVG>
				</a>
			</div>
	
		
			<div class="col-span-4 sm:col-span-3 lg:col-span-2 xl:col-span-1 rounded-2xl">
				<a href="https://www.linkedin.com/in/parthmp/"  target="_blank">
					<LinkedinSVG></LinkedinSVG>
				</a>
			</div>
			
		
			<div class="col-span-4 sm:col-span-3 lg:col-span-2 xl:col-span-1 rounded-2xl">
				<a href="https://x.com/logicalwebdev" class="block" target="_blank">
					<TwitterSVG></TwitterSVG>
				</a>
			</div>
		
			<div class="col-span-4 sm:col-span-3 lg:col-span-2 xl:col-span-1 rounded-2xl">
				<a href="https://www.quora.com/profile/Parth-Parmar-2" class="block" target="_blank">
					<QuoraSVG></QuoraSVG>
				</a>
			</div>	
				
		</div>
		
		<a class="primary-link hover:text-primary-dark!" href="https://medium.com/@parthparmaronline" target="_blank"><h2 class="text-2xl mt-10">View Articles on Medium</h2></a>
		<a class="primary-link hover:text-primary-dark!" href="https://www.upwork.com/freelancers/~01bed55ae9935fc4d2" target="_blank"><h2 class="text-2xl mt-10">Hire me on Upwork</h2></a>
		
	</PageLayout>
</template>
<script lang="ts" setup>

	import PageLayout from '../components/UI/PageLayout.vue';
	import PageHeader from '../components/UI/PageHeader.vue';

	import QuoraSVG from '~/assets/svg/brands/quora.svg';
	import LinkedinSVG from '~/assets/svg/brands/linkedin.svg';
	import GithubSVG from '~/assets/svg/brands/github.svg';
	import TwitterSVG from '~/assets/svg/brands/twitter.svg';

	const title = 'Contact Parth Parmar | Freelance & Full-Time Opportunities';
	const description = 'Get in touch with Parth Parmar via email, social media, or Upwork for freelance projects, collaborations, or full-time job opportunities.';
	const keywords = 'Contact Parth Parmar, hire Parth Parmar, freelance developer, full-time developer, Upwork Parth Parmar, portfolio contact, developer inquiries, web developer job opportunities, deskmint';
	const url = 'https://parthparmar.dev/contact';

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