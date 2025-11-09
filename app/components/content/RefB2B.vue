<template>
	<ContentLayout>
		<template #role>
			Sole developer responsible for architecture, backend logic, database design, interactive map integration, and all admin-side development.
		</template>
		<template #keyfunctionalities>
			<li>Agent registration and secure login</li>
			<li>Detailed agent profiles with areas of expertise and experience</li>
			<li>Interactive map search using OpenStreetMap and Leaflet</li>
			<li>Filtering by state, city, language, and expertise</li>
			<li>Responsive layout optimized for desktop and mobile</li>
			<li>Efficient search and discovery for real estate professionals</li>
			<li>Custom CMS</li>
		</template>
		<template #adminfunctionality>
			<li>Dashboard overview with metrics</li>
			<li>Management of States for map data</li>
			<li>Cities, Languages, and Areas of Expertise modules</li>
			<li>Referrals Paid, Years of Experience, and Current Positions tracking</li>
			<li>Agent management module</li>
			<li>Page and Menu management</li>
			<li>Media library for file uploads</li>
			<li>Admin management, Settings, and detailed Logs</li>
		</template>
		<template #demonstrates>
			<li>Full-stack proficiency in Laravel</li>
			<li>Integration of map-based spatial data with OpenStreetMap and Leaflet</li>
			<li>Secure authentication and structured data modeling</li>
			<li>Strong UI implementation using Bootstrap</li>
			<li>Experience designing scalable admin systems for business workflows</li>
		</template>
	</ContentLayout>
</template>

<script lang="ts" setup>

	import ContentLayout from './ContentLayout.vue';

</script>