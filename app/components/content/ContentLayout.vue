<template>
	<div class="portfolio-content">
		<h2 class="mt-7 text-3xl poppins-medium" v-if="$slots.role">My role</h2>
		<p class="mt-2" v-if="$slots.role">
			<slot name="role"></slot>
		</p>

		<h2 class="mt-7 text-3xl poppins-medium" v-if="$slots.keyfunctionalities">Key Functionalities</h2>
		<ul class="list-disc ml-7 mt-2" v-if="$slots.keyfunctionalities">
			<slot name="keyfunctionalities"></slot>
		</ul>

		<h2 class="mt-7 text-3xl poppins-medium" v-if="$slots.adminfunctionality">Admin-Side Functionalities</h2>
		<ul class="list-disc ml-7 mt-2" v-if="$slots.adminfunctionality">
			<slot name="adminfunctionality"></slot>
		</ul>

		<h2 class="mt-7 text-3xl poppins-medium" v-if="$slots.demonstrates">What this demonstrates</h2>
		<ul class="list-disc ml-7 mt-2" v-if="$slots.demonstrates">
			<slot name="demonstrates"></slot>
		</ul>
	</div>
</template>