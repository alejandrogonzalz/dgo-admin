import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ScreenWidthProvider } from "@/lib/providers/ScreenWidthProvider";
import { ReactQueryClientProvider } from "@/lib/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import Router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
	<StrictMode>
		<ReactQueryClientProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<ScreenWidthProvider>
					<Toaster />
					<Router />
				</ScreenWidthProvider>
			</ThemeProvider>
		</ReactQueryClientProvider>
	</StrictMode>,
);
