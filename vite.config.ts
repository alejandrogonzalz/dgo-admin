import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
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
