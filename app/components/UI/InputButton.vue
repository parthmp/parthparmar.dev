<template>
	<div class="lg:w-fit" :class="{'m-auto' : center}">
		<NuxtLink :to="to" class="btn-icon m-auto" :class="[addClasses, {'primary-btn' : primary, 'primary-btn s-primary-btn' : !primary}]">
			{{ text }}
			<component :is="iconComponent"></component>
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { IconArrowUpRight, IconFileCv } from '@tabler/icons-vue';

const components = {
	IconArrowUpRight,
	IconFileCv
};

const props = defineProps({
	to: {
		type: String,
		default: '/'
	},
	text: {
		type: String,
		default: 'Button'
	},
	icon: {
		type: String,
		default: () => 'IconArrowUpRight'
	},
	addClasses: {
		type: String,
		default: () => ''
	},
	center : {
		type:Boolean,
		default : () => true
	},
	primary : {
		type:Boolean,
		default: () => true
	}
});

const iconComponent = computed(() => {
	return components[props.icon] || IconArrowUpRight;
});
</script>