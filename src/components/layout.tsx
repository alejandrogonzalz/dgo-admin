"use client";

import * as React from "react";

import { cn } from "@/lib/utils/cn";
import { Outlet } from "react-router";

import * as Icons from "@/components/com/icons";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { AppSidebar } from "./app-sidebar";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";

export function Layout() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="flex h-full w-full flex-col">
			<SidebarProvider className="relative m-0 w-full p-0">
				<NavbarSmallDevices isScrolled={isScrolled} />
				<NavbarLargeDevices isScrolled={isScrolled} />
				<AppSidebar />
				<main className={cn("mt-navar-height-lg w-full bg-background text-foreground")}>
					<Outlet />
				</main>
			</SidebarProvider>
		</div>
	);
}

const NavbarSmallDevices = ({ isScrolled }: { isScrolled: boolean }) => {
	return (
		<nav
			className={cn(
				"absolute top-0 z-40 flex h-[45px] w-full items-center justify-between px-5 py-3 md:hidden",
				"duration-400 border border-l-0 border-r-0 border-t-0 border-b-sidebar-border transition-colors sm:h-[60px]",
				{
					"bg-sidebar": !isScrolled,
					"bg-sidebar/70 backdrop-blur-sm": isScrolled,
				},
			)}
		>
			<SidebarTrigger className="text-sidebar-foreground" />
			<ModeToggle />
		</nav>
	);
};

const NavbarLargeDevices = ({ isScrolled }: { isScrolled: boolean }) => {
	const { open } = useSidebar();
	const { theme } = useTheme();

	return (
		<nav
			className={cn(
				"top-0 z-40 hidden h-navbar-height-lg w-full border border-l-0 border-r-0 border-t-0 border-b-sidebar-border md:absolute md:flex",
				"transition-colors duration-200 ease-linear",
				{ "border-sidebar-border": theme === "light" },
			)}
		>
			<div
				className={cn(
					"flex h-auto w-full items-center justify-between px-4 transition-[margin,opacity] duration-200 ease-linear",
					{
						"bg-sidebar": !isScrolled,
						"bg-sidebar/70 backdrop-blur-sm": isScrolled,
						"ml-sidebar-open": open,
					},
				)}
				style={{
					marginLeft: open ? "var(--sidebar-width)" : "0",
				}}
			>
				<SidebarTrigger className="text-sidebar-foreground" />
				<ModeToggle />
			</div>
		</nav>
	);
};
