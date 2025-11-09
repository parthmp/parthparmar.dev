<template>
	
	<div class="skills">
		<h2 class="second-header">Techologies I've Worked With</h2>
		<br>
		<h2 class="text-xl lg:text-2xl mb-2">Languages | Programming + Markup + Styling (Primary - Current)</h2>
		
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-4 lg:col-span-2" v-for="tech in techs.languages1" :key="tech.name">
				<TechCard>
					<template #image>
						<component :is="tech.icon" class="h-20 w-auto" />
					</template>
					<template #text>{{ tech.name }}</template>
				</TechCard>
			</div>
		</div>
		
		<br>
		<br>
		<h2 class="text-xl lg:text-2xl mb-2">Languages | Programming (I have worked with in past)</h2>
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-4 lg:col-span-2" v-for="tech in techs.languages2" :key="tech.name">
				<TechCard>
					<template #image>
						<component :is="tech.icon" class="h-20 w-auto" />
					</template>
					<template #text>{{ tech.name }}</template>
				</TechCard>
			</div>
		</div>

		<br>
		<br>
		<h2 class="text-xl lg:text-2xl mb-2">Databases</h2>
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-4 lg:col-span-2" v-for="tech in techs.db" :key="tech.name">
				<TechCard>
					<template #image>
						<component :is="tech.icon" class="h-20 w-auto" />
					</template>
					<template #text>{{ tech.name }}</template>
				</TechCard>
			</div>
		</div>

		<br>
		<br>
		<h2 class="text-2xl mb-2">Frameworks & Technologies (Not limited to)</h2>
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-4 lg:col-span-2" v-for="tech in techs.frameworks" :key="tech.name">
				<TechCard>
					<template #image>
						<component :is="tech.icon" class="h-20 w-auto" />
					</template>
					
					<template #text>{{ tech.name }}</template>
				</TechCard>
			</div>
		</div>

		<br>
		<br>
		<h2 class="text-2xl mb-2">Tools (Not limited to)</h2>
		
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-4 lg:col-span-2" v-for="tech in techs.tools" :key="tech.name">
				<TechCard>
					<template v-if="!tech.url" #image>
						<component :is="tech.icon" class="h-20 w-auto" />
					</template>
					<template v-if="tech.url" #image>
						<img :src="tech.url" alt="">
					</template>
					<template #text>{{ tech.name }}</template>
				</TechCard>
			</div>
		</div>

		<br>
		<br>
		<h2 class="text-2xl mb-2">Server & DevOps</h2>
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-4 lg:col-span-2" v-for="tech in techs.server" :key="tech.name">
				<TechCard>
					<template v-if="!tech.url" #image>
						<component :is="tech.icon" class="h-20 w-auto" />
					</template>
					<template v-if="tech.url" #image>
						<img :src="tech.url" alt="">
					</template>
					<template #text>{{ tech.name }}</template>
				</TechCard>
			</div>
		</div>

		<br>
		<br>
		<h2 class="text-2xl mb-2">Operating Systems</h2>
		
		<div class="grid grid-cols-12 gap-5">
			<div class="col-span-4 lg:col-span-2" v-for="tech in techs.os" :key="tech.name">
				<TechCard>
					<template v-if="!tech.url" #image>
						<component :is="tech.icon" class="h-20 w-auto" />
					</template>
					<template v-if="tech.url" #image>
						<img :src="tech.url" alt="">
					</template>
					<template #text>{{ tech.name }}</template>
				</TechCard>
			</div>
		</div>
		
		</div>
</template>

<script lang="ts" setup>


	import TechCard from './UI/TechCard.vue';

	import JsSvg from '~/assets/svg/tech/js.svg';
	import TsSvg from '~/assets/svg/tech/typescript.svg';
	import PHPSvg from '~/assets/svg/tech/php.svg';
	import CSSSvg from '~/assets/svg/tech/css.svg';
	import HTMLSvg from '~/assets/svg/tech/html.svg';
	import JavaSvg from '~/assets/svg/tech/java.svg';
	import CSharpSvg from '~/assets/svg/tech/csharp.svg';
	import CppSvg from '~/assets/svg/tech/cpp.svg';
	import CLangSvg from '~/assets/svg/tech/c.svg';
	import VBSvg from '~/assets/svg/tech/vb.svg';
	import PerlSvg from '~/assets/svg/tech/perl.svg';
	import MySQLSvg from '~/assets/svg/tech/mysql.svg';
	import SQLiteSvg from '~/assets/svg/tech/sqlite.svg';
	import MongoDBSvg from '~/assets/svg/tech/mongodb.svg';
	import LaravelSvg from '~/assets/svg/tech/laravel.svg';
	import VueSvg from '~/assets/svg/tech/vue.svg';
	import NuxtSvg from '~/assets/svg/tech/nuxt.svg';
	import CapacitorSvg from '~/assets/svg/tech/capacitor.svg';
	import TailwindSvg from '~/assets/svg/tech/tailwind.svg';
	import BoostrapSvg from '~/assets/svg/tech/bootstrap.svg';
	import NodeSvg from '~/assets/svg/tech/node.svg';
	import ExpressSvg from '~/assets/svg/tech/express.svg';
	import WordpressSvg from '~/assets/svg/tech/wordpress.svg';
	import jQuerySvg from '~/assets/svg/tech/jquery.svg';
	import ViteSvg from '~/assets/svg/tech/vite.svg?url';
	import GitSvg from '~/assets/svg/tech/git.svg';
	import FigmaSvg from '~/assets/svg/tech/figma.svg';
	import DOSvg from '~/assets/svg/tech/digitalocean.svg';
	import VultrSvg from '~/assets/svg/tech/vultr.svg';
	import CloudflareSvg from '~/assets/svg/tech/cloudflare.svg';
	import LinuxSvg from '~/assets/svg/tech/linux.svg';
	import WindowsSvg from '~/assets/svg/tech/windows.svg';
	import { Component as VueComponent } from 'vue';

	type TechItem = {
		name: string,
		icon: VueComponent,
		url?: string
	};

	type TechType = {
		languages1: TechItem[],
		languages2: TechItem[],
		db: TechItem[],
		frameworks: TechItem[],
		tools: TechItem[],
		server: TechItem[],
		os: TechItem[]
	};

	const techs : TechType = {
		languages1 : [
			{ name: 'JavaScript', icon: JsSvg },
			{ name: 'TypeScript', icon: TsSvg },
			{ name: 'PHP', icon: PHPSvg },
			{ name: 'CSS', icon: CSSSvg },
			{ name: 'HTML', icon: HTMLSvg },
		],
		languages2 : [
			{ name: 'Java', icon: JavaSvg },
			{ name: 'C#', icon: CSharpSvg },
			{ name: 'C++', icon: CppSvg },
			{ name: 'C', icon: CLangSvg },
			{ name: 'Visual Basic', icon: VBSvg },
			{ name: 'Perl', icon: PerlSvg },
		],
		db : [
			{ name: 'MySQL', icon: MySQLSvg },
			{ name: 'SQLite', icon: SQLiteSvg },
			{ name: 'MongoDB', icon: MongoDBSvg }
		],
		frameworks : [
			{ name: 'Laravel', icon: LaravelSvg },
			{ name: 'Vue', icon: VueSvg },
			{ name: 'Nuxt', icon: NuxtSvg },
			{ name: 'Capacitor', icon: CapacitorSvg },
			{ name: 'Tailwind', icon: TailwindSvg },
			{ name: 'Boostrap', icon: BoostrapSvg },
			{ name: 'Node', icon: NodeSvg },
			{ name: 'Express', icon: ExpressSvg },
			{ name: 'Wordpress', icon: WordpressSvg },
			{ name: 'jQuery', icon: jQuerySvg }

		],
		tools : [
			{ name: 'Vite', icon: {}, url: ViteSvg },
			{ name: 'Git', icon: GitSvg },
			{ name: 'Figma', icon: FigmaSvg }
		],
		server : [
			{ name: 'DigitalOcean', icon: DOSvg},
			{ name: 'Vultr', icon: VultrSvg },
			{ name: 'Cloudflare', icon: CloudflareSvg }
		],
		os : [
			{ name: 'Linux', icon: LinuxSvg},
			{ name: 'Windows', icon: WindowsSvg }
		],
		
	};

</script>