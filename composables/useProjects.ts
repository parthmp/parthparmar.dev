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
				{ src: '/images/portfolio/deskmint/deskmint-1.png', alt: 'Dashboard' },
				{ src: '/images/portfolio/deskmint/deskmint-2.png', alt: 'Tasks' },
				{ src: '/images/portfolio/deskmint/deskmint-3.png', alt: 'Chat' }
			],
			content : 'DeskMint'
		},
		social: {
			title: 'Social',
			description: 'Social is a modular productivity platform...',
			tags: [
				{ type: 'success', text: 'Vue' },
				{ type: 'primary', text: 'Laravel' }
			],
			images: [
				{ src: '/images/portfolio/social/social-1.png', alt: 'Dashboard' },
				{ src: '/images/portfolio/social/social-2.png', alt: 'Tasks' },
				{ src: '/images/portfolio/social/social-3.png', alt: 'Chat' }
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
		mproject: {
			title: 'DeskMint',
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
			title: 'DeskMint',
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
			title: 'DeskMint',
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