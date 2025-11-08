<template>
	<span>
		<NuxtLink :to="url">
			<NuxtPicture
				v-if="props.loading === 'preload'"
				:src="props.image"
				:img-attrs="props.imageAttrs"
				sizes="100vw md:768px lg:1024px"
				format="webp"
				preload
			/>

			<NuxtPicture
				v-if="props.loading !== 'preload'"
				:src="props.image"
				:img-attrs="props.imageAttrs"
				sizes="100vw md:768px lg:1024px"
				format="webp"
				:loading="props.loading"
			/>
			
			<h3 class="text-xl mt-3 poppins-medium">
				<slot name="header"></slot>
			</h3>
			<p class="mt-3">
				<slot name="description"></slot>
			</p>
			
			<p class="tags">
				<Tag v-for="(tag, index) in props.tags" :type="tag.type">{{ tag.text }}</Tag>
			</p>
		</NuxtLink>
		<br>
		<br>
		<NuxtLink :to="url" class="primary-btn s-primary-btn btn-icon btn-icon shadow-none!">
			<span>View Details</span>
			<IconEye></IconEye>
		</NuxtLink>
	</span>
</template>

<script lang="ts" setup>

	import { IconEye } from '@tabler/icons-vue';
	import Tag from '../UI/Tag.vue';
	import { computed } from 'vue';

	const props = defineProps({
		url : {
			type :String
		},
		image : {
			type : String
		},
		imageAttrs : {
			type : Object,
			default : () => ({ class: '', alt : '' })
		},
		tags : {
			type : Array<{ type:string, text: string }>
		},
		loading : {
			type : String,
			default : () => 'lazy'
		}
	});

</script>