<template>
	<!-- portfolio start -->
	<div class="featured-work">
		<h2 class="second-header">Featured Work</h2>
		<br>
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-12 lg:col-span-12 xl:col-span-4">
				<Card>
					<NuxtLink to="portfolio/deskmint">
						<!-- <img :src="DeskMintImage" class="rounded-lg w-full" alt=""> -->
						<NuxtPicture
							src="/images/portfolio/deskmint/deskmint-1.png"
							:img-attrs="{ class: 'w-full rounded-lg', alt: 'DeskMint Portfolio' }"
							sizes="100vw md:768px lg:1024px"
							format="webp"
							preload
						/>

						<h3 class="text-xl mt-3 poppins-medium">DeskMint</h3>
						<p class="mt-3">DeskMint is a modular productivity platform that unifies clients, tasks, chats, and invoicing into one smart, customizable workspace.</p>
						<p class="tags">
							<Tag type="success">In Development</Tag>
							<Tag type="primary">Dependency Injection</Tag>
							<Tag type="success">Vue</Tag>
							<Tag type="primary">Laravel</Tag>
							<Tag type="blue">MySQL</Tag>
							<Tag type="light-blue">Tailwind</Tag>
							<Tag type="success">PWA</Tag>
						</p>
					</NuxtLink>
					
					
					<br>
					<br>
					<div class="flex gap-5">
							<a href="https://github.com/parthmp/deskmint-frontend" target="_blank" class="grow primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
								<span>Frontend</span>
								<IconBrandGithub></IconBrandGithub>
								
							</a>
							<a href="https://github.com/parthmp/deskmint-backend" target="_blank" class="grow primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
								<span>Backend</span>
								<IconBrandGithub></IconBrandGithub>
							</a>

						</div>
					
							
						<NuxtLink to="/portfolio/deskmint" class="mt-4 primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
							<span>Details</span>
							<IconEye></IconEye>
							
						</NuxtLink>


				</Card>
				
			</div>
			<div class="col-span-12 lg:col-span-6 xl:col-span-4">
				<Card>
					<NuxtLink to="portfolio/social">
						<NuxtPicture
							src="/images/portfolio/social/social-1.png"
							:img-attrs="{ class: 'w-full rounded-lg', alt: 'DeskMint Portfolio' }"
							sizes="100vw md:768px lg:1024px"
							format="webp"
							loading="lazy"
						/>
						
						<h3 class="text-xl mt-3 poppins-medium">Social Media PWA</h3>
						<p class="mt-3">Private social network for a closed community, featuring OTP login, searchable profiles, verified accounts, and company pages.</p>
						
						<p class="tags">
							<span class="tag tag-success">Vue</span>
							<span class="tag tag-primary">Laravel</span>
							<span class="tag tag-blue">MySQL</span>
							<span class="tag tag-light-blue">Bootstrap</span>
							<span class="tag tag-success">PWA</span>
						</p>
					</NuxtLink>
					<br>
					<br>
					<NuxtLink to="/portfolio/social" class="primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
						<span>View Details</span>
						<IconEye></IconEye>
					</NuxtLink>

				</Card>
				
			</div>
			<div class="col-span-12 lg:col-span-6 xl:col-span-4">
				<Card>
					<NuxtLink to="portfolio/refb2b">
						<NuxtPicture
							src="/images/portfolio/refb2b/refb2b-1.png"
							:img-attrs="{ class: 'w-full rounded-lg', alt: 'DeskMint Portfolio' }"
							sizes="100vw md:768px lg:1024px"
							format="webp"
							loading="lazy"
						/>
						
						<h3 class="text-xl mt-3 poppins-medium">Real Estate Referral Portal</h3>
						<p class="mt-3">Referralsb2b is a platform that helps users find and connect with real estate agents through searchable profiles and an interactive map.</p>
						
						<p class="tags">
							
							<span class="tag tag-primary">Laravel</span>
							<span class="tag tag-blue">MySQL</span>
							<span class="tag tag-light-blue">Bootstrap</span>
							<span class="tag tag-yellow">Leaflet</span>
							<span class="tag tag-blue">OpenStreetMap</span>
						</p>
					</NuxtLink>
					<br>
					<br>
					<NuxtLink to="/portfolio/refb2b" class="primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
						<span>View Details</span>
						<IconEye></IconEye>
					</NuxtLink>

				</Card>
				
			</div>
	</div>
	</div>
</template>

<script lang="ts" setup>

	import Card from './UI/Card.vue';
	import Tag from './UI/Tag.vue';

	import { IconBrandGithub, IconEye } from '@tabler/icons-vue';

</script>