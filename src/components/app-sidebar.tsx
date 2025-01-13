import * as Icons from "@/components/com/icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { routes } from "@/routes";
import { Calendar, ChevronRight, Home, Inbox, LogOut, Settings, Upload } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme-provider";

// Menu items.

interface BaseItem {
	title: string;
	icon: React.ComponentType;
}

interface LinkItem extends BaseItem {
	url: string;
	items?: never;
}

interface CollapsibleItem extends BaseItem {
	items: Item[];
	url?: never;
}

type Item = LinkItem | CollapsibleItem;

const items: Item[] = [
	{
		title: "Inicio",
		url: routes.HOME,
		icon: Home,
	},
	{
		title: "Calendario",
		url: routes.CALENDAR,
		icon: Calendar,
	},
	{
		title: "Servicios",
		icon: Inbox,
		items: [
			{
				title: "Lista de servicios",
				url: routes.SERVICES,
				icon: Inbox,
			},
			{
				title: "Agregar servicio",
				url: routes.UPLOAD_SERVICES,
				icon: Upload,
			},
		],
	},
	{
		title: "Configuración",
		url: "",
		icon: Settings,
	},
	{
		title: "Cerrar sesión",
		url: "/login",
		icon: LogOut,
	},
];

function isLinkItem(item: Item): item is LinkItem {
	return "url" in item;
}

function isCollapsibleItem(item: Item): item is CollapsibleItem {
	return "items" in item;
}

export function AppSidebar() {
	const { theme } = useTheme();
	return (
		<Sidebar className="z-50 border-r-sidebar-border">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="my-3 flex items-center justify-center gap-2">
						<div className="flex items-center justify-center">
							<Icons.DentalGoLogo size={32} color={theme === "dark" ? "#F4F4F5" : "#000000"} />
						</div>
						<div className="flex items-center justify-center">
							<Icons.DentalGoText size={32} color={theme === "dark" ? "#F4F4F5" : "#000000"} />
						</div>
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => {
								if (isLinkItem(item)) {
									return <SidebarLinkItem key={item.title} title={item.title} url={item.url} icon={item.icon} />;
								} else
									return (
										<SidebarCollapsibleItem key={item.title} title={item.title} icon={item.icon} items={item.items} />
									);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}

const SidebarLinkItem = ({ title, url, icon: Icon }: LinkItem) => {
	return (
		<SidebarMenuItem key={title}>
			<SidebarMenuButton asChild>
				<Link to={{ pathname: url }}>
					<Icon />
					<span>{title}</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
};

const SidebarCollapsibleItem = ({ title, icon: Icon, items }: CollapsibleItem) => {
	const [open, setOpen] = useState(true);

	return (
		<Collapsible open={open} onOpenChange={setOpen}>
			<SidebarMenuItem>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton className="relative">
						<Icon />
						<span>{title}</span>
						<ChevronRight
							className={cn("absolute right-2 transform transition-transform duration-300", {
								"rotate-90": open,
							})}
						/>
					</SidebarMenuButton>
				</CollapsibleTrigger>

				<CollapsibleContent>
					<SidebarMenuSub>
						{items.map((item) => {
							if (isLinkItem(item)) {
								return <SidebarLinkItem key={item.title} title={item.title} url={item.url} icon={item.icon} />;
							} else return null;
						})}
					</SidebarMenuSub>
				</CollapsibleContent>
			</SidebarMenuItem>
		</Collapsible>
	);
};
