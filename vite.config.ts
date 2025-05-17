import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{ find: '!', replacement: path.resolve(__dirname) },
			{ find: '#/state', replacement: path.resolve(__dirname, 'src/state') }
		]
	},
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	server: {
		host: "0.0.0.0",
		port: 5173,
	},
});
