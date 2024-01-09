/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'hero-pattern': "url('./src/img/reforma.jpg')",
				'main-bg': "url('./src/img/r.jpg')",
				'alicatado':"url('./src/img/alicatado.jpg')",
				'pladur':"url('./src/img/pladur.jpg')",
				'tarima':"url('./src/img/tarima.jpg')",
				'hero':"url('./src/img/hero.jpg')"
			},
			fontFamily: {
                custom: ['Raleway', 'sans-serif']
            }
		},
	},
	plugins: [],
}
