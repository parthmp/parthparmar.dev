<template>
  <div>
    <div class="container m-auto">
		<div class="m-2">
			<div class="launcher">
				<span id="launcher-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-baseline-density-medium"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h16" /><path d="M4 12h16" /><path d="M4 4h16" /></svg>
				</span>
				<span id="close-icon" class="hidden">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
				</span>
			</div>
			<div id="menu" class="lg:flex pt-2 pb-1 lg:justify-between left-[-70%]">
				<ul class="left-menu lg:flex lg:gap-10 lg:items-center">
					<li><NuxtLink to="/" class="active-menu-item">Home</NuxtLink></li>
					<li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
					<li><a href="resume" data-swup-preload>Resume</a></li>
					<li><a href="contact" data-swup-preload>Contact</a></li>
				</ul>
				<ul class="lg:mt-[-5px] flex items-center gap-5 p-3 lg:p-0">
					<!---->
					<ThemeChanger></ThemeChanger>
					
					<li><a href="https://x.com/logicalwebdev" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
						</a>
					</li>
					<li><a href="https://www.linkedin.com/in/parthmp/" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
						</a>
					</li>
					<li><a href="https://github.com/parthmp" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
						</a>
					</li>
					<li class="hidden lg:inline-block"><a href="contact" class="primary-btn flex justify-center items-center gap-1">Let's talk
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lets-talk-icon icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
						</a>
					</li>
				</ul>
				<a href="contact" class="primary-btn flex gap-1 justify-center m-3 lg:hidden">Let's talk
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lets-talk-icon icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
				</a>
			</div>
			
			<main class="transition-main container container-content">
				<!-- hero section start -->
				<div class="pt-0 lg:pt-[50px]">
					<br>
					
					<div class="grid grid-cols-12 gap-5">
						<div class="col-span-12 lg:col-span-9">
							<h1 class="text-center lg:text-left text-5xl/16 poppins-medium">I'm <span class="poppins-bold text-primary!">Parth</span>, building software from <span class="poppins-bold text-primary!">startup</span> ideas to <span class="poppins-bold text-primary!">enterprise</span> systems.</h1>
							<br>
							<p class="text-center lg:text-left text-xl">I design and build applications that are fast, scalable, and maintainable. From simple tools to complete complex business systems, I focus on clean architecture, efficient code, and solving real problems.</p>
							<br>
							<br>
							<div class="flex flex-col lg:flex-row gap-5">
								<a href="contact" class="primary-btn btn-lg btn-icon">Let's Talk
									
									<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lets-talk-icon icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
								</a>
								<a href="resume" class="primary-btn btn-lg btn-icon">View Resume
									<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lets-talk-icon icon icon-tabler icons-tabler-outline icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg>
								</a>
							</div>
							
						</div>
						<div class="col-span-12 mt-8 lg:mt-0 lg:col-span-3">
							<img src="./src/images/parth.jpg" class="w-full max-w-xs lg:max-w-sm rounded-full border-0 border-solid border-primary shadow-xl m-auto" alt="parth parmar, programmer, surat, gujarat, india, web & software programmer, digitalsitara, deskmint">
						</div>
					</div>
					
				</div>
				<!-- hero section end -->
				<br>
				<br>
				<br>
				<br>
				<!-- portfolio start -->
				<div class="featured-work">
					<h2 class="second-header">Featured Work</h2>
					<br>
					<div class="grid grid-cols-12 gap-5">
						<div class="col-span-12 lg:col-span-4">
							<div class="card flex flex-col h-full justify-between">
								<a href="portfolio/deskmint" data-swup-preload>
									<img src="./src/images/portfolio/deskmint/deskmint-500x300.png" class="rounded-lg w-full" alt="">
									<h3 class="text-xl mt-3 poppins-medium">DeskMint</h3>
									<p class="mt-3">DeskMint is a modular productivity platform that unifies clients, tasks, chats, and invoicing into one smart, customizable workspace.</p>
									<p class="tags">
										<span class="tag tag-success"><strong>In Development</strong></span>
										<span class="tag tag-primary">Dependency Injection</span>
										<span class="tag tag-success">Vue</span>
										<span class="tag tag-primary">Laravel</span>
										<span class="tag tag-blue">MySQL</span>
										<span class="tag tag-light-blue">Tailwind</span>
										<span class="tag tag-success">PWA</span>
									</p>
								</a>
								
								
								<br>
								<br>
								<div class="flex gap-5">
										<a href="https://github.com/parthmp/deskmint-frontend" target="_blank" class="grow primary-btn s-primary-btn btn-icon btn-icon shadow-none!" data-swup-preload>
											<span>Frontend</span>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
											
										</a>
										<a href="https://github.com/parthmp/deskmint-backend" target="_blank" class="grow primary-btn s-primary-btn btn-icon btn-icon shadow-none!" data-swup-preload>
											<span>Backend</span>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
										</a>

									</div>
								
										
										<a href="portfolio/deskmint" class="mt-4 primary-btn s-primary-btn btn-icon btn-icon shadow-none!" data-swup-preload>
											<span>Details</span>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
											
										</a>


							</div>
							
						</div>
						<div class="col-span-12 lg:col-span-4">
							<div class="card flex flex-col h-full justify-between">
								<a href="portfolio/social" data-swup-preload>
									<img src="./src/images/portfolio/social/social_500x300.png" class="rounded-lg w-full" alt="">
									<h3 class="text-xl mt-3 poppins-medium">Social Media PWA</h3>
									<p class="mt-3">Private social network for a closed community, featuring OTP login, searchable profiles, verified accounts, and company pages.</p>
									
									<p class="tags">
										<span class="tag tag-success">Vue</span>
										<span class="tag tag-primary">Laravel</span>
										<span class="tag tag-blue">MySQL</span>
										<span class="tag tag-light-blue">Bootstrap</span>
										<span class="tag tag-success">PWA</span>
									</p>
								</a>
								<br>
								<br>
								<a href="portfolio/social" class="primary-btn s-primary-btn btn-icon btn-icon shadow-none!" data-swup-preload>
									<span>View Details</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
								</a>

							</div>
							
						</div>
						<div class="col-span-12 lg:col-span-4">
							<div class="card flex flex-col h-full justify-between">
								<a href="portfolio/refb2b" data-swup-preload>
									<img src="./src/images/portfolio/refb2b/refb2b_500x300.png" class="rounded-lg w-full" alt="">
									<h3 class="text-xl mt-3 poppins-medium">Real Estate Referral Portal</h3>
									<p class="mt-3">Referralsb2b is a platform that helps users find and connect with real estate agents through searchable profiles and an interactive map.</p>
									
									<p class="tags">
										
										<span class="tag tag-primary">Laravel</span>
										<span class="tag tag-blue">MySQL</span>
										<span class="tag tag-light-blue">Bootstrap</span>
										<span class="tag tag-yellow">Leaflet</span>
										<span class="tag tag-blue">OpenStreetMap</span>
									</p>
								</a>
								<br>
								<br>
								<a href="portfolio/refb2b" class="primary-btn s-primary-btn btn-icon btn-icon shadow-none!" data-swup-preload>
									<span>View Details</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
								</a>

							</div>
							
						</div>
					</div>
					<br>
					<div class="w-fit m-auto">
						<a href="contact" class="primary-btn btn-lg btn-icon btn-icon-inline m-auto">View Portfolio
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lets-talk-icon icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
						</a>
					</div>
					
				</div>
				<!-- portfolio end -->
				<br>
				<br>
				<br>
				<br>
				<div class="about-me text-center lg:text-left">
					<h2 class="second-header">About me</h2>
					<br>
					<p>I'm a fullstack programmer with over 10 years of experience building web applications and software solutions for clients worldwide. I specialize in creating robust, scalable systems using modern technologies like Laravel & Vue.js.</p>
					<br>
					<p>Throughout my career, I've worn many hats: leading development teams, architecting complex applications, and working directly with clients to turn their ideas into reality. I've built everything from social media platforms and real estate portals to government-regulated systems and custom WordPress themes. My approach combines technical expertise with a strong focus on security, code quality, and user experience.</p>
					<br>
					<p>When I'm not coding, I'm either learning new technologies or diving into science and educational content. I'm a firm believer in facts, evidence-based thinking, and continuous learning.</p>
				</div>
				<br>
				<br>
				<br>
				<br>
				<div class="skills text-center lg:text-left">
					<h2 class="second-header">Techologies I've Worked With</h2>
					<br>
					<h2 class="text-xl lg:text-2xl mb-2">Languages | Programming + Markup + Styling (Primary - Current)</h2>
					<div class="grid grid-cols-12 gap-5">
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-ful rounded-lg p-4 shadow">
							<img src="./src/images/tech/js.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">JavaScript</p>
							</div>
						</div>

						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/typescript.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">TypeScript</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/php.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">PHP</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-ful rounded-lg p-4 shadow">
							<img src="./src/images/tech/css.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">CSS</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/html.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">HTML</p>
							</div>
						</div>
						<!-- <div class="col-span-1">
							<div class="card-tech flex flex-col items-center justify-between h-full bg-white rounded-lg p-4 shadow">
							<img src="./src/images/tech/vite.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Vite</p>
							</div>
						</div> -->

						<!-- 
						
						-->
					</div>
					<br>
					<br>
					<h2 class="text-xl lg:text-2xl mb-2">Languages | Programming (I have worked with in past)</h2>
					<div class="grid grid-cols-12 gap-5">
						
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-ful rounded-lg p-4 shadow">
							<img src="./src/images/tech/java.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Java</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/csharp.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">C#</p>
							</div>
						</div>
						
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-ful rounded-lg p-4 shadow">
							<img src="./src/images/tech/cpp.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">C++</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/c.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">C</p>
							</div>
						</div>
						
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/vb.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Visual Basic</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/perl.svg" alt="" class="h-20 w-20!">
							<p class="mt-4 text-sm text-center">Perl</p>
							</div>
						</div>
						
					</div>

					<br>
					<br>
					<h2 class="text-xl lg:text-2xl mb-2">Databases</h2>
					<div class="grid grid-cols-12 gap-5">
						
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/mysql.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">MySQL</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/sqlite.svg" alt="" class="h-auto mt-5 w-auto">
							<p class="mt-4 text-sm text-center">SQLite</p>
							</div>
						</div>

						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/mongodb.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">MongoDB</p>
							</div>
						</div>
					</div>

					<br>
					<br>
					<h2 class="text-2xl mb-2">Frameworks & Technologies (Not limited to)</h2>
					<div class="grid grid-cols-12 gap-5">
						
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/laravel.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Laravel</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/vue.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Vue</p>
							</div>
						</div>

						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/capacitor.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Capacitor</p>
							</div>
						</div>
						 
						<!-- <div class="col-span-4 lg:col-span-1">
							<div class="card-tech flex flex-col items-center justify-between h-full bg-white rounded-lg p-4 shadow">
							<img src="./src/images/tech/angular.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Angular</p>
							</div>
						</div> -->
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/tailwind.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Tailwind</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/bootstrap.svg" alt="" class="h-auto w-auto">
							<p class="mt-4 text-sm text-center">Bootstrap</p>
							</div>
						</div>

						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/node.svg" alt="" class="h-auto mt-5 w-auto">
							<p class="mt-4 text-sm text-center">Nodejs</p>
							</div>
						</div>

						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/express.svg" alt="" class="h-auto w-auto">
							<p class="mt-4 text-sm text-center">Expressjs</p>
							</div>
						</div>

						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/wordpress.svg" alt="" class="h-auto w-auto">
							<p class="mt-4 text-sm text-center">WordPress</p>
							</div>
						</div>

						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/jquery.svg" alt="" class="h-auto w-auto">
							<p class="mt-4 text-sm text-center">jQuery</p>
							</div>
						</div>
					</div>

					<br>
					<br>
					<h2 class="text-2xl mb-2">Tools (Not limited to)</h2>
					<div class="grid grid-cols-12 gap-5">
						
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/vite.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Vite</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/git.svg" alt="" class="h-20 w-20!">
							<p class="mt-4 text-sm text-center">Git</p>
							</div>
						</div>

						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/figma.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Figma</p>
							</div>
						</div>
					</div>

					<br>
					<br>
					<h2 class="text-2xl mb-2">Server & DevOps</h2>
					<div class="grid grid-cols-12 gap-5">
						
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/digitalocean.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">DigitalOcean</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/vultr.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Vultr</p>
							</div>
						</div>	
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/cloudflare.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Cloudflare</p>
							</div>
						</div>						 
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/apache.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Apache</p>
							</div>
						</div>
					</div>

					<br>
					<br>
					<h2 class="text-2xl mb-2">Operating Systems</h2>
					
					<div class="grid grid-cols-12 gap-5">
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/linux.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Linux</p>
							</div>
						</div>
						<div class="col-span-4 lg:col-span-2">
							<div class="card-tech flex flex-col items-center justify-between h-full rounded-lg p-4 shadow">
							<img src="./src/images/tech/windows.svg" alt="" class="h-20 w-auto">
							<p class="mt-4 text-sm text-center">Windows</p>
							</div>
						</div>	
					</div>

					<br>
					<br>
					<br>
					<br>
					<div class="reviews text-center lg:text-left">
						<h2 class="second-header">Verified Reviews From <a href="https://www.upwork.com/freelancers/~01bed55ae9935fc4d2" _target="_blank" class="text-primary! underline hover:text-primary-dark!">Upwork</a></h2>
						<br>
						<div class="card rounded-lg p-4 shadow">
									<p class="text-xl">Parth is very friendly and technically savvy and seems to work all hours of the day and night! He gave a great bid and did everything I'd asked for and more. I'll be using his services again for sure.</p>
									<p class="mt-3 text-xl italic!">~Niki Singh , Nationstores LLC (TX, USA)</p>
								</div>
							<br>
						<div class="grid grid-cols-12 gap-5">
							<div class="col-span-12 lg:col-span-4">
								<div class="card rounded-lg p-4 shadow h-full">
									<p class="text-xl">Parth was extremely professional from A to Z. Recommended. Thanks Parth!</p>
									<p class="mt-3 text-xl italic!">~Kieran Duffey , (Brisbane, Australia)</p>
								</div>
							</div>
							
							<div class="col-span-12 lg:col-span-4">
								<div class="card rounded-lg p-4 shadow h-full">
									<p class="text-xl">Job was done in timely manner with high quality. Thank you!</p>
									<p class="mt-3 text-xl italic!">~Andrew Mar , (Chicago, USA)</p>
								</div>
							</div>

							<div class="col-span-12 lg:col-span-4">
								<div class="card rounded-lg p-4 shadow h-full">
									<p class="text-xl">I appreciate Parth's hard work and quick turnaround! Looking forward to the next project</p>
									<p class="mt-3 text-xl italic!">~John Verd , (USA)</p>
								</div>
							</div>
							
						</div>
						</div>
						
						<br>
						<div class="">
							<div class="card rounded-lg p-4 shadow">
								<p class="text-xl">I highly recommend Parth for your next project. He listened to my needs and did all that was asked. He actually finished ahead of schedule.
I have farmed a few jobs to Upwork and this experience was by far the most pleasant.
For my next job, Parth will be my first choice if he is available.
5 of 5 stars</p>
								<p class="mt-3 text-xl italic!">~Gary Byrd , (Malvern, USA)</p>
							</div>
							<br>
							<div class="card rounded-lg p-4 shadow">
								<p class="text-xl">It was simply great from beginning to end. Parth was very good at keeping me in the loop. He even did more than was asked of him. I was very very glad with his work. Strongly recommend to anyone.</p>
								<p class="mt-3 text-xl italic!">~Michael Laplume , (Mansonville, Canada)</p>
							</div>
						</div>
					</div>
					<br>
					<br>
					<br>
					<div class="w-fit m-auto">
						<a href="contact" class="primary-btn btn-lg btn-icon btn-icon-inline m-auto">Ready to Start Your Project?</a>
					</div>
					<br>
					<br>
					<br>
					<br>
					<br>
					
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
				<p class="mt-3">
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
			<div class="scroll-to-top cursor-pointer launcher">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up-dashed"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5v6m0 3v1.5m0 3v.5" /><path d="M16 9l-4 -4" /><path d="M8 9l4 -4" /></svg>
			</div>
		</div>
	</div>
  </div>
</template>

<script lang="ts" setup>

	
	import { onMounted, reactive } from 'vue';
	import ThemeChanger from '../components/ThemeChanger.vue';


	// const data = reactive({

	// });

	

</script>