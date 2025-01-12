import CurrencyInput from "@/components/com/currency-input";
import { FilePicker } from "@/components/com/file-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { type UploadServicesSchema, zUploadServicesSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function UploadServices() {
	const form = useForm<UploadServicesSchema>({
		resolver: zodResolver(zUploadServicesSchema()),
	});

	function onSubmit(data: UploadServicesSchema) {
		toast({
			title: "Enviaste los siguientes valores:",
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
							<div className="mb-44 flex flex-row gap-5">
								<div className="flex w-full flex-col gap-12">
									<div className="flex flex-row gap-2">
										<FormField
											control={form.control}
											name="service"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>Servicio</FormLabel>
													<FormControl>
														<Input placeholder="Servicio" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<CurrencyInput
											form={form}
											label="Precio"
											name="price"
											placeholder="Precio"
											formItemClassName="w-full"
										/>
									</div>
									<FormField
										control={form.control}
										name="file"
										render={({ field }) => (
											<FormItem className="flex flex-col">
												<FormLabel>Imagen</FormLabel>
												<FilePicker
													label="Selecciona una imagen"
													helperTextBottom="Puedes arrastrar el archivo aquí o bien buscar en los archivos de tu ordenador."
													onDropLoaded={field.onChange}
													compFormMessage={<FormMessage />}
													hasError={Boolean(form.formState.errors.file)}
												/>
											</FormItem>
										)}
									/>
								</div>
								<div className="flex w-full flex-row gap-2">
									<FormField
										control={form.control}
										name="description"
										render={({ field }) => (
											<FormItem className="h-full w-full">
												<FormLabel>Descripción</FormLabel>
												<FormControl>
													<Textarea placeholder="Descripción" {...field} className="h-[calc(100%+100px)] resize-none" />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
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
