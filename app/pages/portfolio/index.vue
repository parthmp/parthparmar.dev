<template>
	<PageLayout>
		<PageHeader>
			Portfolio
		</PageHeader>
		<FeaturedWork :show-header="false"></FeaturedWork>
		<div class="mt-5! grid grid-cols-12 gap-5">
			<div class="col-span-12 lg:col-span-6">
				<Card>
					<PortfolioCard url="/portfolio/mproject" loading="eager" image="/images/portfolio/mproject/mproject-1.png" :image-attrs="{ class: 'w-full rounded-lg', alt: 'Real-time push notification example in two languages using MQTT' }" :tags="tags.potton">
						<template #header>
							Municipal Platform
						</template>
						<template #description>
							Developed a bilingual municipal communication platform with a native Java Android app and Angular frontend. Implemented MQTT for real-time push notifications, enabling administrators to publish announcements and posts in multiple languages with instant delivery to users.
						</template>
					</PortfolioCard>
				</Card>
			</div>
			<div class="col-span-12 lg:col-span-6">
				<Card>
					<PortfolioCard url="/portfolio/acme" loading="eager" image="/images/portfolio/acme/acme-1.png" :image-attrs="{ class: 'w-full rounded-lg', alt: 'Screenshot of PHP shopping basket application demonstrating gold standard architecture' }" :tags="tags.acme">
						<template #header>
							Gold Standard Programming Practices - PHP
						</template>
						<template #description>
							A demonstration project built to showcase gold-standard software engineering practices in PHP. The system simulates a shopping basket that emphasizes clean architecture, type safety, and test-driven design rather than end-user features.
						</template>
						<template #additional>
								<a href="https://github.com/parthmp/acme-widget-co" target="_blank" class="primary-btn s-primary-btn btn-icon btn-icon shadow-none! mt-2">
									<span>Source Code</span>
									<IconBrandGithub></IconBrandGithub>
								</a>
						</template>
					</PortfolioCard>
				</Card>
			</div>
			<div class="col-span-12">
				<Card>
					<h2 class="text-xl poppins-medium">The Portfolio Website You're Currently Viewing</h2>
					<p class="mt-2">Meta, right? This portfolio site is built with Nuxt 4 + Vue 3 using SSG. It showcases reusable component architecture, composable patterns, dynamic routing, and optimized image delivery with NuxtPicture - all wrapped in thoughtful UI/UX with excellent performance. The code itself is a portfolio piece.</p>
					<p class="tags mt-2!">
						<Tag type="success">Nuxt</Tag>
						<Tag type="yellow">Vue</Tag>
						<Tag type="blue">Tailwind</Tag>
						<Tag type="primary">Vite</Tag>
					</p>
					
					<a href="https://github.com/parthmp/parthparmar.dev" target="_blank" class="mt-4 primary-btn s-primary-btn btn-icon btn-icon-inline lg:w-fit shadow-none!">
						<span>Source Code</span>
						<IconBrandGithub></IconBrandGithub>
					</a>
				</Card>
			</div>
		</div>

		
		
	</PageLayout>

</template>
<script lang="ts" setup>

	import FeaturedWork from '../../components/FeaturedWork.vue';
	import PageLayout from '../../components/UI/PageLayout.vue';
	import PageHeader from '../../components/UI/PageHeader.vue';
	import Card from '../../components/UI/Card.vue';
	import PortfolioCard from '../../components/blocks/PortfolioCard.vue';
	import { IconBrandGithub } from '@tabler/icons-vue';

	import Tag from '../../components/UI/Tag.vue';

	type TagItem = {
		type: string,
		text: string	
	};

	type TagType = {
		potton : TagItem[],
		acme : TagItem[],
	};

	const tags : TagType = {
		potton : [
			{ type : 'success', text : 'Java' },
			{ type : 'primary', text : 'MQTT' },
			{ type : 'success', text : 'Angular' },
			{ type : 'primary', text : 'Laravel' },
			{ type : 'blue', text : 'MySQL' },
			{ type : 'light-blue', text : 'Firebase' }
		],
		acme : [ 
			{ type : 'success', text : 'Dependency Injection' },
			{ type : 'primary', text : 'Docker' },
			{ type : 'blue', text : 'Docker Compose' },
			{ type : 'light-blue', text : 'PHPUnit' },
			{ type : 'success', text : 'PHPStan' }
		]
	};

	const title = 'Portfolio | Parth Parmar - Web & Software Developer | Programmer';
	const description = 'Discover the portfolio of Parth Parmar, a full-stack developer creating high-performance web and PWA applications. Browse projects like DeskMint client dashboard, private social networks, real estate referral portals, municipal apps, and PHP architecture showcases - built with Laravel, Vue.js, Tailwind, Nuxt, and modern web technologies.';
	const url = 'https://parthparmar.dev/portfolio';
	
	defineOgImageComponent('OgImageForPages', {
		title: title,
		description : description
	});

	useSeoMeta({
		title: title,
		description: description,
		keywords: 'Full-stack developer, Laravel portfolio, Vue.js projects, Tailwind CSS development, PWA apps, PHP clean architecture, DeskMint dashboard, private social network, real estate portal, municipal communication platform, web app showcase, Nuxt 4 portfolio, high-performance web development, modern web technologies',
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