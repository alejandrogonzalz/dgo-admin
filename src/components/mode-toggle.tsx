import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className={cn("bg-transparent hover:bg-sidebar-foreground/10", className)}
				>
					<Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-sidebar-foreground transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>Modo claro</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Modo oscuro</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
