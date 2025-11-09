export const useProjects = () => {
  const projects = {
	deskmint: {
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
	social: {
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