<template>
	<span class="tag" :class="applyClasses">
		<strong>
			<slot></slot>
		</strong>
	</span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
	type: {
		type: String,
		default: 'primary'
	}
})

const applyClasses = computed(() => ({
	'tag-primary': props.type === 'primary', 
	'tag-blue': props.type === 'blue', 
	'tag-light-blue': props.type === 'light-blue', 
	'tag-yellow': props.type === 'yellow', 
	'tag-success': props.type === 'success'
}));
</script>