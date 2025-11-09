<template>
  <div>
    <div class="container m-auto">
		<div class="m-2">
			<div v-if="data.isShowingPhoneMenu" class="overlay bg-primary-burnt/15 dark:bg-primary-burnt/10 fixed h-screen top-0 left-0 w-full z-10" @click="data.isShowingPhoneMenu = false"></div>
			<div class="launcher" @click.prevent="togglePhoneMenu">
				<span id="launcher-icon" v-if="!data.isShowingPhoneMenu">
					<IconMenu2 :size="22"></IconMenu2>
				</span>
				<span id="close-icon" v-if="data.isShowingPhoneMenu">
					<IconX :size="22"></IconX>
				</span>
			</div>
			<div ref="menuRef" id="menu" class="lg:flex pt-2 pb-1 lg:justify-between" :class="{'left-[-70%]': !data.isShowingPhoneMenu, 'left-[0%]': data.isShowingPhoneMenu, 'lg:bg-global-background!':data.isScrolled}">
				<ul class="left-menu lg:flex lg:gap-10 lg:items-center">
					<li><NuxtLink to="/" :class="{'active-menu-item': data.activeMenuItem === 'home'}" @click="handleMenuItemClick('home')">Home</NuxtLink></li>
					<li><NuxtLink to="/portfolio" :class="{'active-menu-item': data.activeMenuItem === 'portfolio'}" @click="handleMenuItemClick('portfolio')">Portfolio</NuxtLink></li>
					<li><NuxtLink to="/resume" :class="{'active-menu-item': data.activeMenuItem === 'resume'}" @click="handleMenuItemClick('resume')">Resume</NuxtLink></li>
					<li><NuxtLink to="/contact" :class="{'active-menu-item': data.activeMenuItem === 'contact'}" @click="handleMenuItemClick('contact')">Contact</NuxtLink></li>
				</ul>
				<ul class="lg:mt-[-5px] flex items-center gap-5 p-3 lg:p-0">
					<!---->
					<ThemeChanger @click="data.isShowingPhoneMenu = false"></ThemeChanger>
					
					<li><a href="https://x.com/logicalwebdev" target="_blank">
							<IconBrandX :size="24"></IconBrandX>
						</a>
					</li>
					<li><a href="https://www.linkedin.com/in/parthmp/" target="_blank">
							<IconBrandLinkedin :size="24"></IconBrandLinkedin>
						</a>
					</li>
					<li><a href="https://github.com/parthmp" target="_blank">
							<IconBrandGithub :size="24"></IconBrandGithub>
						</a>
					</li>
					<li class="hidden lg:inline-block">
						<NuxtLink to="/contact" @click="data.isShowingPhoneMenu = false" class="primary-btn flex justify-center items-center gap-1">Let's talk
							<IconArrowUpRight :size="24"></IconArrowUpRight>
						</NuxtLink>
					</li>
				</ul>
				<NuxtLink to="/contact" class="primary-btn flex gap-1 justify-center m-3 lg:hidden" @click="data.isShowingPhoneMenu = false">Let's talk
					<IconArrowUpRight :size="24"></IconArrowUpRight>
				</NuxtLink>
			</div>
			
			<main class="transition-main container container-content">
				
				<slot></slot>
					
			</main>
			<div class="footer text-center">
				<p>People who inspire me to do better everyday</p>
				<div class="w-fit m-auto">
					<div class="mt-2 flex flex-col lg:flex-row gap-5">
						<a href="https://en.wikipedia.org/wiki/Srinivasa_Ramanujan" class="text-primary! underline hover:text-primary-dark!" target="_blank">Srinivasa Ramanujan</a>
						<a href="https://en.wikipedia.org/wiki/Galileo_Galilei" class="text-primary! underline hover:text-primary-dark!" target="_blank">Galileo Galilei</a>
						<a href="https://en.wikipedia.org/wiki/Dennis_Ritchie" class="text-primary! underline hover:text-primary-dark!" target="_blank">Dennis Ritchie</a>
					</div>
				</div>
				<p class="mt-5">
					<span class="flex gap-1 items-center justify-center">
						<span>Made with </span>
						<span class="text-primary">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
						</span>
						<span>By Parth</span>
					</span>
				</p>
			</div>
			<br>
			<br>
			<div class="scroll-to-top cursor-pointer launcher" v-if="data.isScrolled > 100" @click.prevent="scrollToTop">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up-dashed"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5v6m0 3v1.5m0 3v.5" /><path d="M16 9l-4 -4" /><path d="M8 9l4 -4" /></svg>
			</div>
		</div>
	</div>
  </div>
</template>

<script lang="ts" setup>

	import { onMounted, onUnmounted, reactive, ref, watchEffect } from 'vue';
	import ThemeChanger from '../components/ThemeChanger.vue';
	// import { onClickOutside } from '@vueuse/core';
	import { IconMenu2, IconX, IconArrowUpRight, IconBrandX, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-vue';
	import { useRoute } from 'nuxt/app';

	const route = useRoute();

	type defaultLayoutType = {
		isShowingPhoneMenu : boolean,
		isScrolled : number,
		activeMenuItem:string
	};

	const menuRef = ref(null);
	

	const data = reactive<defaultLayoutType>({
		isShowingPhoneMenu : false,
		isScrolled : 0,
		activeMenuItem : ''
	});

	watchEffect(() => {
		
		const url = route.fullPath;
		if(url.includes('portfolio')){
			data.activeMenuItem = 'portfolio';
		}else if(url.includes('resume')){
			data.activeMenuItem = 'resume';
		}else if(url.includes('contact')){
			data.activeMenuItem = 'contact';
		}else{
			data.activeMenuItem = 'home';
		}
	});


	const togglePhoneMenu = () : void => {
		
		if(data.isShowingPhoneMenu){
			data.isShowingPhoneMenu = false;
		}else{
			data.isShowingPhoneMenu = true;
		}
		// data.isShowingPhoneMenu = !data.isShowingPhoneMenu;
		console.log(data.isShowingPhoneMenu);
	}

	// onClickOutside(menuRef, () => {
	// 	data.isShowingPhoneMenu = false;
	// });

	const scrollToTop = () : void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	const handleScroll = () : void => {
		data.isScrolled = window.scrollY;
	}

	const handleMenuItemClick = (item:string) : void => {
		data.isShowingPhoneMenu = false;
		data.activeMenuItem = item;
	}

	onMounted(() : void => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
	})

	
	onUnmounted(() : void => {
		window.removeEventListener('scroll', handleScroll);
	})

</script>