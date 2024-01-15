/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'alicatado':"url('/alicatado.webp')",
				'pladur':"url('/pladur.webp')",
				'tarima':"url('/tarima.webp')",
				'hero':"url('/hero.webp')"
			},
		},
	},
	plugins: [],
}
