<template>
	<div class="portfolio-content">
		<p class="poppins-medium text-primary! text-shadow-primary! text-shadow-2xs">550+ commits so far across both repositories <span class="italic!">(And counting!)</span></p>
		<div class="flex flex-col lg:flex-row gap-5 mt-2">
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
			Sole developer of DeskMint, responsible for the full stack - designing and building the frontend with Vue.js, backend with Laravel, and implementing SPA and PWA functionality across all modules.
		</p>

		<h2 class="mt-7 text-3xl poppins-medium">Notable functionalities/code <span class="italic!">(Currently Present in the Codebase)</span></h2>
		<ul class="list-disc ml-7 mt-2">
			<li><strong class="poppins-medium">Dynamic custom fields with user-defined data types - </strong> Users can create their own data models on the fly, not just store data but define the structure itself</li>
			<li><strong class="poppins-medium">Bank grade authentication system - </strong> Custom secure login with access/refresh tokens and unique device fingerprinting</li>
			<li><strong class="poppins-medium">Custom frontend DataTable component - </strong> Handles both static and dynamic data with 3rd-party plugin-level sophistication</li>
			<li><strong class="poppins-medium">Dependency injection & traits - </strong> Modular, reusable, and loosely coupled codebase</li>
			<li><strong class="poppins-medium">Granular field visibility controls - </strong>Users can show/hide any field (including custom fields) across all functionalities</li>
			<li><strong class="poppins-medium">Advanced data querying - </strong>Users define which fields are searchable/non-searchable and configure sorting anywhere in the system, even with fully custom fields</li>
			<li><strong class="poppins-medium">Flexible invoicing system - </strong>Users define custom taxes and invoice fields that automatically reflect in generated documents</li>
			<li><strong class="poppins-medium">Custom Vue UI component library - </strong>Built from scratch including tabs, autocompletes, buttons, inputs, and more</li>
			<li><strong class="poppins-medium">Variable-based invoice numbering - </strong>Users generate custom invoice number formats using dynamic variables</li>
			<li><strong class="poppins-medium">Universal field ordering - </strong>Users can reorder fields for invoices, companies, clients, and any other entity as needed</li>
			
		</ul>
		<p class="mt-4 text-primary! poppins-medium text-shadow-primary! text-shadow-2xs">This is not a CRUD app but a complex application in active development with 550+ commits across frontend and backend repositories.</p>
		<h2 class="mt-7 text-3xl poppins-medium">What this demonstrates</h2>
		<ul class="list-disc ml-7 mt-2">
			<li><strong class="poppins-medium">Full-stack proficiency - </strong>Backend and frontend expertise across the entire application stack</li>
			<li><strong class="poppins-medium">Mobile-ready development - </strong>SPA architecture with PWA capabilities for mobile deployment</li>
			<li><strong class="poppins-medium">Advanced Vue.js skills - </strong>Complex frontend work using both Composition API and Options API</li>
			<li><strong class="poppins-medium">Enterprise Laravel development - </strong>Sophisticated backend architecture for complex business logic</li>
			<li><strong class="poppins-medium">Critical thinking and solid architecture - </strong>Well-planned system design with scalability in mind</li>
			<li><strong class="poppins-medium">Security-conscious development - </strong>Implementation of authentication best practices and secure patterns</li>
			<li><strong class="poppins-medium">Database design expertise - </strong>Complex relational schema supporting dynamic data structures</li>
			<li><strong class="poppins-medium">Comprehensive testing - </strong>Unit, integration, and end-to-end testing with PHPUnit for enterprise-grade reliability</li>
			
		</ul>

		<h2 class="mt-7 text-3xl poppins-medium">Key features</h2>
		<h3 class="text-xl mt-2">Completed</h3>
		<ul class="list-disc ml-7">
			<li>Clients module</li>
			<li>Products module</li>
			<li>Admins module</li>
			<li>Custom fields for clients and invoices, fully manageable by the user with different data types</li>
			<li>Invoice settings including company details (with custom fields), invoice configuration, email, and payment settings</li>
		</ul>

		<h3 class="text-xl mt-4">Planned</h3>
		<ul class="list-disc ml-7">
			<li>Tasks module</li>
			<li>Encrypted vault for secure document storage</li>
			<li>Recurring invoices</li>
			<li>Chat system</li>
			<li>Email integrations</li>
		</ul>

		<h2 class="mt-7 text-3xl poppins-medium">Why I wanted to build this?</h2>
		<p class="mt-2">Two primary motivations drove this project</p>
		<ul class="list-disc ml-7">
			<li>To showcase a complex SaaS application as a portfolio piece demonstrating real-world development capabilities</li>
			<li>To help people and companies worldwide manage their clients, communications, and documents more effectively</li>
		</ul>

		
		
	</div>
</template>

<script lang="ts" setup>

	import { IconBrandGithub } from '@tabler/icons-vue';

</script>