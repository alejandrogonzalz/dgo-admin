import * as Icons from "@/components/com/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { LoginSchema, zLoginSchema } from "@/lib/validation";
import { LogIn } from "lucide-react";

export function Login() {
	const { theme } = useTheme();
	const form = useForm<LoginSchema>({
		resolver: zodResolver(zLoginSchema()),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	function onSubmit(data: LoginSchema) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<div className="relative grid h-[100vh] w-[100vw] place-content-center bg-background">
			<ModeToggle className="absolute right-0 m-6" />
			<Card className="min-w-96 bg-foreground/90 text-background backdrop-blur-sm">
				<CardHeader className="flex-row items-center justify-center gap-2">
					<div className="flex items-center justify-center">
						<Icons.DentalGoLogo size={38} color={theme === "light" ? "#F4F4F5" : "#000000"} />
					</div>
					<div className="flex items-center justify-center">
						<Icons.DentalGoText size={38} color={theme === "light" ? "#F4F4F5" : "#000000"} />
					</div>
				</CardHeader>

				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col space-y-6">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Usuario</FormLabel>
										<FormControl>
											<Input placeholder="Usuario" {...field} variant="inverse" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Contraseña</FormLabel>
										<FormControl>
											<Input placeholder="Contraseña" {...field} variant="inverse" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit" variant="inverse" className="justify-self-end">
								Iniciar sesión <LogIn />
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
