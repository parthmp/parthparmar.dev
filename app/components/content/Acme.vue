<template>
	<div  class="portfolio-content">
			<div>
				<a href="https://github.com/parthmp/acme-widget-co" target="_blank" class="primary-btn s-primary-btn btn-icon btn-icon lg:w-fit shadow-none!">
					<span>Source Code</span>
					<IconBrandGithub></IconBrandGithub>
				</a>
				<p class="mt-5">This project simulates a shopping basket system for an imaginary widget company - built entirely to demonstrate gold-standard software engineering practices. It focuses on clarity, maintainability, and correctness, showing how professional PHP codebases can be structured for real-world reliability and testability.</p>
			</div>

		<h2 class="mt-7 text-3xl poppins-medium leading-relaxed lg:leading-normal">Key Features</h2>
		<ul class="list-disc ml-7 mt-2">
			<li>Strongly typed PHP with integer-based currency precision</li>
			<li>Modular architecture with Strategy Pattern for offers and delivery rules</li>
			<li>Constructor-based dependency injection ensuring loose coupling</li>
			<li>Full PHPUnit test coverage across multiple pricing scenarios</li>
			<li>PHPStan static analysis for strict code quality</li>
			<li>Docker and Composer integration for reproducible environments</li>
		</ul>

		<h2 class="mt-7 text-3xl poppins-medium leading-relaxed lg:leading-normal">Architecture Highlights</h2>
		<ul class="list-disc ml-7 mt-2">
			<li><strong class="poppins-medium">Clean Architecture - </strong>Clear separation between domain logic and configuration</li>
			<li><strong class="poppins-medium">Strategy Pattern - </strong>Delivery and discount rules are easily replaceable strategies</li>
			<li><strong class="poppins-medium">Dependency Injection - </strong>Every dependency explicitly provided for easier testing</li>
			<li><strong class="poppins-medium">Interface Segregation - </strong>Small, purpose-specific contracts for clarity</li>
			<li><strong class="poppins-medium">Test-Driven Design - </strong>Includes multiple real-world test scenarios</li>

			
		</ul>

		<h2 class="mt-7 text-3xl poppins-medium leading-relaxed lg:leading-normal">What this demonstrates</h2>
		<ul class="list-disc ml-7 mt-2">
			<li>Advanced understanding of software architecture principles</li>
			<li>Ability to design clean, modular, and testable backend systems</li>
			<li>Solid grasp of object-oriented design and dependency management</li>
			<li>Proficiency with modern PHP tooling and CI-ready development setup</li>
			<li>Emphasis on correctness, code readability, and long-term maintainability</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>

	import ContentLayout from './ContentLayout.vue';
	import { IconBrandGithub } from '@tabler/icons-vue';
</script>