<template>
	<div class="flex flex-col h-full">
		<NuxtLink :to="url" class="flex-grow" :class="{'mb-4': $slots.additional}">
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
		
		<slot v-if="$slots.additional" name="additional"></slot>

		<div class="mt-auto pt-4">
			<InputButton :to="url" :primary="false" icon="IconEye" add-classes="btn-icon shadow-none!" class="w-full!" text="View Details"></InputButton>
		</div>
	</div>
</template>

<script lang="ts" setup>
	
	import Tag from '../UI/Tag.vue';
	import InputButton from '../UI/InputButton.vue';
	
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