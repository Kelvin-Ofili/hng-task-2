/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				custom: {
					"6B7280": "#6B7280",
				},
			},
			width: {
				
				"20": "20%",
				"30": "30%",
				"35": "35%",
				"50": "50%",
				"80": "80%",
			},
		},
	},
	plugins: [],
};

