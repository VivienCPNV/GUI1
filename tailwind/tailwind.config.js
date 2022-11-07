/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../src/**/*.{html,js}"],
  theme: {
    extend: {
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		'roman-silver': '#85839C',
		'jacarta': '#343350',
		'space-cadet': '#252549',
		'irresistible': '#BF3C6B',
		'max-red-purple': '#AD3172',
		'violet-red': '#831940',
		'peach-orange': '#FFC89B',
		'salmon': '#FF8B70',
		'pastel-red': '#FF5D65',

	}
    },
  },
  plugins: [
	require('@tailwindcss/forms'),
	require('@tailwindcss/typography'),
  ],
}
