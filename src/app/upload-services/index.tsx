import { FilePicker } from "@/components/com/file-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { type UploadServicesSchema, zUploadServicesSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function UploadServices() {
	const form = useForm<UploadServicesSchema>({
		resolver: zodResolver(zUploadServicesSchema()),
		// defaultValues: {
		// 	username: "",
		// 	password: "",
		// },
	});

	function onSubmit(data: UploadServicesSchema) {
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
		<div className="p-4">
			<Card variant="outline">
				<CardHeader className="text-xl">
					<CardTitle>Subir información de servicios dentales</CardTitle>
					<CardDescription className="text-secondary-foreground">
						Llenar el formulario con los campos correspondientes
					</CardDescription>
				</CardHeader>
				<CardContent className="mt-5">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col space-y-6">
							<div>
								<FormField
									control={form.control}
									name="service"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Servicio</FormLabel>
											<FormControl>
												<Input placeholder="Servicio" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="price"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Precio</FormLabel>
											<FormControl>
												<Input placeholder="Precio" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="price"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Precio</FormLabel>
											<FormControl>
												<Input placeholder="Precio" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="file"
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FilePicker
												label="Selecciona un archivo"
												// helperTextBottom="Drag and drop"
												onDropLoaded={field.onChange}
												compFormMessage={<FormMessage />}
												hasError={Boolean(form.formState.errors.file)}
											/>
										</FormItem>
									)}
								/>
							</div>

							<Button type="submit" variant="secondary" className="justify-self-end">
								Enviar
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
