import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				clash: ["Clash"],
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
					"event-modal": "hsl(var(--event-modal))",
					"event-modal-foreground": "hsl(var(--event-modal-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				"inverse-input": "hsl(var(--inverse-input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
				violet: {
					main: "hsl(var(--violet-main))",
					container: "hsl(var(--violet-container))",
					onContainer: "hsl(var(--violet-on-container))",
				},
				green: {
					main: "hsl(var(--green-main))",
					container: "hsl(var(--green-container))",
					onContainer: "hsl(var(--green-on-container))",
				},
				blue: {
					main: "hsl(var(--blue-main))",
					container: "hsl(var(--blue-container))",
					onContainer: "hsl(var(--blue-on-container))",
				},
			},
			screens: {
				"375": "375px",
				"425": "425px",
				"500": "500px",
				"880": "880px",
				"1150": "1150px",
				"1750": "1750px",
				xxs: "320px",
				xs: "460px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1440px",
				"3xl": "1936px",
				"4xl": "2560px",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			boxShadow: {
				primary: "0px 4px 20px 0px rgba(0, 109, 185, 0.25)",
			},
			fontSize: {
				"header-xs": "45px",
				"header-sm": "55px",
				"header-md": "75px",
				"header-lg": "100px",
				"header-xl": "150px",
				"header-2xl": "110px",
				"header-3xl": "145px",
				"header-4xl": "230px",
			},
			height: {
				"navbar-height-lg": "var(--navbar-height-lg)",
				"header-xs": "45px",
				"header-sm": "40px",
				"header-md": "50px",
				"header-lg": "75px",
				"header-xl": "80px",
				"header-2xl": "95px",
				"header-3xl": "130px",
				"header-4xl": "190px",
			},
			margin: {
				"sidebar-open": "var(--sidebar-width)",
				"navar-height-lg": "var(--navbar-height-lg)",
			},
		},
	},
	plugins: [
		require("@tailwindcss/container-queries"),
		require("@tailwindcss/typography"),
		require("tailwindcss-animate"),
		require("tailwindcss-motion"),
	],
};
export default config;
