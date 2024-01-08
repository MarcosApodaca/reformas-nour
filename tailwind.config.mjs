/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'hero-pattern': "url('./src/img/reforma.jpg')",
				'main-bg': "url('./src/img/r.jpg')",
				'alicatado':"url('./src/img/alicatado.jpg')",
				'pladur':"url('./src/img/pladur.jpg')"
			},
			fontFamily: {
                custom: ['Raleway-ExtraBold', 'sans-serif']
            }
		},
	},
	plugins: [],
}
