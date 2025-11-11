export const useProjects = () => {
  const projects = {
		deskmint: {
			title: 'DeskMint',
			description: 'DeskMint is being developed to centralize client communication, manage invoices, and securely store documents in an encrypted vault, helping companies keep interactions and data organized and transparent.',
			tags: [
				{ type : 'success', text : 'In Development' },
				{ type : 'primary', text : 'Dependency Injection' },
				{ type : 'success', text : 'Vue' },
				{ type : 'primary', text : 'Laravel' },
				{ type : 'blue', text : 'MySQL' },
				{ type : 'light-blue', text : 'Tailwind' },
				{ type : 'primary', text : 'Capacitor' },
				{ type : 'success', text : 'PWA' },
				{ type : 'blue', text : 'TypeScript' }
			],
			images: [
				{ src: '/images/portfolio/deskmint/deskmint-1.png', alt: 'Deskmint dashboard showing clients' },
				{ src: '/images/portfolio/deskmint/deskmint-2.png', alt: 'Deskmint invoice creation functionality' },
				{ src: '/images/portfolio/deskmint/deskmint-3.png', alt: 'Deskmint various settings' },
				{ src: '/images/portfolio/deskmint/deskmint-4.png', alt: 'Deskmint dashboard showing custom fields arrangement allowing users to manage searchables and sorting of fields' }
			],
			content : 'DeskMint'
		},
		social: {
			title: 'Social Media PWA',
			description: 'A private community and social platform built with Laravel and Vue, designed to help the organization manage member profiles, posts, and internal interactions, while ensuring complete administrative oversight and financial transparency. The application is a Progressive Web App (PWA) and is also packaged for Android using Capacitor.',
			tags: [
				{ type: 'success', text: 'Vue' },
				{ type: 'primary', text: 'Laravel' },
				{ type: 'blue', text: 'Bootstrap' },
				{ type: 'light-blue', text: 'MySQL' },
				{ type: 'yellow', text: 'Firebase Cloud Messaging' },
				{ type: 'primary', text: 'Capacitor' },
				{ type: 'blue', text: 'PWA' },
				{ type: 'success', text: 'Android' }
			],
			images: [
				{ src: '/images/portfolio/social/social-2.png', alt: 'Dashboard' },
				{ src: '/images/portfolio/social/social-3.png', alt: 'Tasks' },
				{ src: '/images/portfolio/social/social-4.png', alt: 'Chat' },
				{ src: '/images/portfolio/social/social-5.png', alt: 'Chat' }
			],
			content: 'Social'
		},
		mproject: {
			title: 'Municipal Platform',
			description: 'A municipal communication and information platform built with Laravel and Angular, designed to help local administrations publish categorized posts, announcements, and updates directly to citizens through a native Android app with real-time notifications.',
			tags: [
				{ type: 'yellow', text: 'Angular' },
				{ type: 'primary', text: 'Laravel' },
				{ type: 'blue', text: 'Bootstrap' },
				{ type: 'light-blue', text: 'MySQL' },
				{ type: 'primary', text: 'Java' },
				{ type: 'yellow', text: 'MQTT' },
				{ type: 'primary', text: 'Android' }
			],
			images: [
				{ src: '/images/portfolio/mproject/mproject-1.png', alt: 'Dashboard' },
				{ src: 'https://www.youtube.com/embed/tpd4dn6LtRg', alt: '', video:true }
			],
			content: 'Mproject'
		},
		acme: {
			title: 'Gold Standard Programming Practices - PHP',
			description: 'A demonstration project written in PHP that simulates a shopping basket for an imaginary widget company. It focuses on clarity, modular design, and correctness - implementing realistic e-commerce logic such as pricing, delivery calculation, and discount offers - while adhering to modern software engineering standards',
			tags: [
				{ type: 'success', text: 'PHP' },
				{ type: 'primary', text: 'Composer' },
				{ type : 'blue', text : 'Dependency Injection' },
				{ type : 'yellow', text : 'Docker' },
				{ type : 'light-blue', text : 'Docker Compose' },
				{ type : 'success', text : 'PHPUnit' },
				{ type : 'primary', text : 'PHPStan' },
			],
			images: [
				{ src: '/images/portfolio/acme/acme-1.png', alt: 'Dashboard' }
			],
			content:'Acme'
		},
		refb2b: {
			title: 'Real Estate Referral Portal ',
			description: 'A real estate agent referral and discovery platform built with Laravel and Bootstrap, designed to connect real estate professionals through searchable profiles and an interactive map interface powered by OpenStreetMap, while providing administrators with complete control over platform data and operations.',
			tags: [
				{ type: 'primary', text: 'Laravel' },
				{ type: 'blue', text: 'Bootstrap' },
				{ type: 'primary', text: 'MySQL' },
				{ type: 'yellow', text: 'OpenStreetMap' },
				{ type: 'light-blue', text: 'Leaflet' }
			],
			images: [
				{ src: '/images/portfolio/refb2b/refb2b-2.png', alt: 'Dashboard' },
				{ src: '/images/portfolio/refb2b/refb2b-3.png', alt: 'Tasks' }
			],
			content: 'RefB2B'
		}
	}
  
	return {
		projects,
		getProject: (slug: string) => projects[slug]
	}
}