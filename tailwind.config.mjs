/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'alicatado':"url('./src/img/alicatado.webp')",
				'pladur':"url('./src/img/pladur.webp')",
				'tarima':"url('./src/img/tarima.webp')",
				'hero':"url('./src/img/hero.webp')"
			},
			fontFamily: {
                custom: ['Raleway', 'sans-serif']
            }
		},
	},
	plugins: [],
}
