/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'dark-blue-sell': '#14293F',
				'light-blue-sell': '#3999D5',
				'green-sell': '#6EB858',
				'surface-sell': '#0a1e33'
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};
