/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'alicatado':"url('./public/alicatado.webp')",
				'pladur':"url('./public/pladur.webp')",
				'tarima':"url('./public/tarima.webp')",
				'hero':"url('./public/hero.webp')"
			},
			fontFamily: {
                custom: ['Raleway', 'sans-serif']
            }
		},
	},
	plugins: [],
}
