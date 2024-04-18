import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-open-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				archivo: ['var(--font-archivo)', 'sans-serif'],
				serif: ['ui-serif', 'serif', 'Georgia'],
				mono: ['ui-monospace', 'SFMono-Regular'],
				display: ['Oswald'],
				body: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				main: '1.12146rem',
				'4xl': '2rem',
				'5xl': '2.5rem',
				'6xl': '2.875rem',
				'7xl': '4.2rem',
			},
			letterSpacing: {
				hti: '0.0785rem',
				tibtext: '0.3em',
				widest2: '0.125rem',
			},
			backgroundImage: {
				overlay: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%',
				head: 'linear-gradient(rgba(0, 0, 0, 0.468), rgba(0, 0, 0, 0))',
				'head-overlay':
					'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(10, 10, 10, 0.45))',
				'img-overlay':
					'linear-gradient(rgba(0, 0, 0, 0) 38%, rgba(0, 0, 0, 0.5))',
			},
			transitionProperty: {
				head: 'top, background-color',
			},
			borderRadius: {
				smd: '0.1985rem',
				xxl: '2.5rem',
				oval: '1.14265rem',
			},
			height: {
				head: '77px',
			},
			screens: {
				'2xs': '360px',
				xs: '420px',
				xxl: '1400px',
				'2md': '900px',
			},
			transitionDuration: {
				'360': '360ms',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			boxShadow: {
				head: '0 1px 7px rgba(41,37,36,0.85)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
