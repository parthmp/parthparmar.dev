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
				{ type : 'success', text : 'PWA' }
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
			description: 'A private community and social platform built with Laravel and Vue, designed to help organizations manage member profiles, posts, and internal interactions while maintaining complete administrative oversight and financial transparency. The application is built as a Progressive Web App (PWA) and also packaged for Android using Capacitor.',
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
			title: 'Real Estate Referral Portal',
			description: 'DeskMint is a modular productivity platform...',
			tags: [
				{ type: 'success', text: 'Vue' },
				{ type: 'primary', text: 'Laravel' }
			],
			images: [
				{ src: '/images/portfolio/deskmint/deskmint-1.png', alt: 'Dashboard' },
				{ src: '/images/portfolio/deskmint/deskmint-2.png', alt: 'Tasks' },
				{ src: '/images/portfolio/deskmint/deskmint-3.png', alt: 'Chat' }
			],
			content: `
				<p>Full project details here...</p>
				<h4>Key Features</h4>
				<ul>
				<li>Feature 1</li>
				<li>Feature 2</li>
				</ul>
			`
		},
		acme: {
			title: 'Gold Standard Programming Practices - PHP',
			description: 'DeskMint is a modular productivity platform...',
			tags: [
				{ type: 'success', text: 'Vue' },
				{ type: 'primary', text: 'Laravel' }
			],
			images: [
				{ src: '/images/portfolio/deskmint/deskmint-1.png', alt: 'Dashboard' },
				{ src: '/images/portfolio/deskmint/deskmint-2.png', alt: 'Tasks' },
				{ src: '/images/portfolio/deskmint/deskmint-3.png', alt: 'Chat' }
			],
			content: `
				<p>Full project details here...</p>
				<h4>Key Features</h4>
				<ul>
				<li>Feature 1</li>
				<li>Feature 2</li>
				</ul>
			`
		},
		refb2b: {
			title: 'Municipality Project',
			description: 'DeskMint is a modular productivity platform...',
			tags: [
				{ type: 'success', text: 'Vue' },
				{ type: 'primary', text: 'Laravel' }
			],
			images: [
				{ src: '/images/portfolio/deskmint/deskmint-1.png', alt: 'Dashboard' },
				{ src: '/images/portfolio/deskmint/deskmint-2.png', alt: 'Tasks' },
				{ src: '/images/portfolio/deskmint/deskmint-3.png', alt: 'Chat' }
			],
			content: `
				<p>Full project details here...</p>
				<h4>Key Features</h4>
				<ul>
				<li>Feature 1</li>
				<li>Feature 2</li>
				</ul>
			`
		}
	}
  
	return {
		projects,
		getProject: (slug: string) => projects[slug]
	}
}