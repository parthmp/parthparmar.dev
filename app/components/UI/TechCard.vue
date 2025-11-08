<template>
	<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
		<slot name="image"></slot>
		<p class="mt-4 text-sm text-center"><slot name="text"></slot></p>
	</div>
</template>