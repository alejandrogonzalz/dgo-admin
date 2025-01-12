import * as Icons from "@/components/com/icons";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { routes } from "@/routes";
import { Calendar, Home, Inbox, LogOut, Settings, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme-provider";

// Menu items.
const items = [
	{
		title: "Inicio",
		url: routes.HOME,
		icon: Home,
	},
	{
		title: "Servicios",
		url: routes.SERVICES,
		icon: Inbox,
	},
	{
		title: "Cargar servicios",
		url: routes.UPLOAD_SERVICES,
		icon: Upload,
	},
	{
		title: "Calendario",
		url: routes.CALENDAR,
		icon: Calendar,
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
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link to={{ pathname: item.url }}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
