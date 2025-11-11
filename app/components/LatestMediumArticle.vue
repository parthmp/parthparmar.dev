<template>
	<div class="medium-article">
		<h2 class="second-header">Featured Security Research</h2>
		<br>
		<Card>
			<h3 class="text-xl poppins-medium leading-relaxed lg:leading-normal">The Gmail Bounce That Led Me Down a Phishing Rabbit Hole: Dissecting a Sophisticated Phishing Email Campaign</h3>
				<p class="mt-2">How a single delivery failure notification revealed a multi-stage phishing operation spanning across multiple cloud infrastructure providers, multiple domains, and advanced evasion techniques.</p>
				<p class="mt-3">A deep-dive analysis covering:</p>
				<ul class="list-disc ml-7 mt-1">
					<li>Email spoofing and backscatter attacks</li>
					<li>Multi-stage redirect chains across 4 domains</li>
					<li>JavaScript-based evasion techniques</li>
					<li>Cloud infrastructure abuse (AWS, Oracle, Alibaba, Cloudflare)</li>
					<li>Advanced anti-analysis measures</li>
				</ul>
				<div class="tags">
					<Tag type="primary">Security Research</Tag>
					<Tag type="success">Email Forensics</Tag>
					<Tag type="blue">Threat Intelligence</Tag>
					<Tag type="light-blue">7 min read</Tag>
				</div>
				
				<a href="https://medium.com/@parthparmaronline/the-gmail-bounce-that-led-me-down-a-phishing-rabbit-hole-dissecting-a-sophisticated-phishing-email-5bbe41ec989b" target="_blank" class="mt-6 grow primary-btn s-primary-btn btn-icon btn-icon-inline lg:w-fit shadow-none!">
					<span>Read on Medium</span>
					<IconArrowUpRight></IconArrowUpRight>
				</a>
			
		</Card>
	</div>
</template>
<script lang="ts" setup>

	import Card from './UI/Card.vue';
	import Tag from './UI/Tag.vue';

	import { IconArrowUpRight } from '@tabler/icons-vue';

</script>