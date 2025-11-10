<template>
	<div class="featured-work">
		<span v-if="props.showHeader">
			<h2 class="second-header">Featured Work</h2>
			<br>
		</span>
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-12 lg:col-span-12 xl:col-span-4">
				<Card>
					<PortfolioCard url="/portfolio/deskmint" loading="preload" image="/images/portfolio/deskmint/deskmint-1.png" :image-attrs="{ class: 'w-full rounded-lg', alt: 'DeskMint dashboard showing view of clients' }" :tags="tags.deskmint">
						<template #header>
							DeskMint
						</template>
						<template #description>
							Deskmint is being developed to centralize client communication, manage invoices, and securely store documents in an encrypted vault, helping companies keep interactions and data organized and transparent.
						</template>
						<template #additional>
							<div class="flex flex-col md:flex-row gap-5 mt-2.5">
								<a href="https://github.com/parthmp/deskmint-frontend" target="_blank" class="grow primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
									<span>Frontend</span>
									<IconBrandGithub></IconBrandGithub>
								</a>
								<a href="https://github.com/parthmp/deskmint-backend" target="_blank" class="grow primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
									<span>Backend</span>
									<IconBrandGithub></IconBrandGithub>
								</a>
							</div>
						</template>
					</PortfolioCard>
				</Card>
				
			</div>
			<div class="col-span-12 lg:col-span-6 xl:col-span-4">
				<Card>
					<PortfolioCard url="/portfolio/social" loading="preload" image="/images/portfolio/social/social-1.png" :image-attrs="{ class: 'w-full rounded-lg', alt: 'Profile view showing verified account details in closed community social network' }" :tags="tags.social">
						<template #header>
							Social Media PWA
						</template>
						<template #description>
							A private social network for a closed community, featuring OTP login, searchable profiles, verified accounts, and pages for companies and trusts.
						</template>
					</PortfolioCard>
				</Card>
				
			</div>
			<div class="col-span-12 lg:col-span-6 xl:col-span-4">
				<Card>
					<PortfolioCard url="/portfolio/refb2b" loading="preload" image="/images/portfolio/refb2b/refb2b-1.png" :image-attrs="{ class: 'w-full rounded-lg', alt: 'ReferralsB2B interactive map showing real estate agents and search functionality' }" :tags="tags.refb2b">
						<template #header>
							Real Estate Referral Portal
						</template>
						<template #description>
							ReferralsB2B is a platform that helps users find and connect with real estate agents through searchable profiles and an interactive map.
						</template>
					</PortfolioCard>
				</Card>
			</div>
	</div>
	</div>
</template>

<script lang="ts" setup>

	import Card from './UI/Card.vue';
	
	import { IconBrandGithub, IconEye } from '@tabler/icons-vue';

	import PortfolioCard from './blocks/PortfolioCard.vue';

	const props = defineProps({
		showHeader : {
			type : Boolean,
			default : () => true
		}
	});

	type TagItem = {
		
		type: string,
		text: string
			
	};

	type TagType = {
		deskmint : TagItem[],
		social : TagItem[],
		refb2b : TagItem[]
	};

	const tags : TagType = {
		deskmint : [
			{ type : 'success', text : 'In Development' },
			{ type : 'primary', text : 'Dependency Injection' },
			{ type : 'success', text : 'Vue' },
			{ type : 'primary', text : 'Laravel' },
			{ type : 'blue', text : 'MySQL' },
			{ type : 'light-blue', text : 'Tailwind' },
			{ type : 'success', text : 'PWA' }
		],
		social : [
			{ type : 'success', text : 'Vue' },
			{ type : 'primary', text : 'Laravel' },
			{ type : 'blue', text : 'MySQL' },
			{ type : 'light-blue', text : 'Bootstrap' },
			{ type : 'success', text : 'PWA' }
		],
		refb2b : [
			{ type : 'primary', text : 'Laravel' },
			{ type : 'blue', text : 'MySQL' },
			{ type : 'light-blue', text : 'Bootstrap' },
			{ type : 'yellow', text : 'Leaflet' },
			{ type : 'blue', text : 'OpenStreetMap' }
		]
	};

</script>