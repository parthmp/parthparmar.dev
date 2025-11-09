<template>
	<div class="mb-20">
		
		<div class="flex flex-col lg:flex-row gap-5">
			<a href="https://github.com/parthmp/deskmint-frontend" target="_blank" class="primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
				<span>View Frontend Source Code</span>
				<IconBrandGithub></IconBrandGithub>
			</a>
			<a href="https://github.com/parthmp/deskmint-backend" target="_blank" class="primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
				<span>View Backend Source Code</span>
				<IconBrandGithub></IconBrandGithub>
			</a>
		</div>

		<h2 class="mt-7 text-3xl poppins-medium">My role</h2>
		<p class="mt-2">
			Sole developer of DeskMint, responsible for the full stack, designing and building the frontend with Vue.js, backend with Laravel, and implementing SPA and PWA functionality across all modules.
		</p>

		<h2 class="mt-7 text-3xl poppins-medium">Key features</h2>
		<h3 class="text-xl mt-2">Completed</h3>
		<ul class="list-disc ml-7">
			<li>Clients module</li>
			<li>Products module</li>
			<li>Admins module</li>
			<li>Custom fields for clients and invoices, fully manageable by the user with different data types</li>
			<li>Invoice settings including company details (with custom fields), invoice configuration, email, and payment settings</li>
		</ul>

		<h3 class="text-xl mt-2">Planned</h3>
		<ul class="list-disc ml-7">
			<li>Tasks module</li>
			<li>Encrypted Vault for secure document storage</li>
			<li>Recurring invoices</li>
			<li>Chat system</li>
			<li>Email integrations</li>
		</ul>
		
	</div>
</template>

<script lang="ts" setup>

	import { IconBrandGithub } from '@tabler/icons-vue';

</script>