/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	theme: {
		colors: {
			primary: {
				50: 'hsl(220, 100%, 98%)',
				100: 'hsl(220, 100%, 95%)',
				200: 'hsl(220, 100%, 90%)',
				300: 'hsl(220, 100%, 85%)',
				400: 'hsl(220, 100%, 80%)',
				500: 'hsl(220, 100%, 75%)',
				600: 'hsl(220, 100%, 70%)',
				700: 'hsl(220, 100%, 65%)',
				800: 'hsl(220, 100%, 60%)',
				900: 'hsl(220, 100%, 55%)',
			},
		},
		fontFamily: {
			'press-start': ['"Press Start 2P"', 'cursive'],
		},
		spacing: {
			'72': '18rem',
			'84': '21rem',
			'96': '24rem',
		},
		transitionProperty: {
			'all': 'all',
		},
		transitionDuration: {
			'1500': '1500ms',
		},
		transitionTimingFunction: {
			'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
		},
	},
	colorMode: 'dark',
	colorScheme: 'oklch',
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	plugins: [],
}

