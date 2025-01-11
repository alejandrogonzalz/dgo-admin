import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function UploadServices() {
	return (
		<div className="p-4">
			<Card variant="outline">
				<CardHeader className="text-xl">
					<CardTitle>Subir información de servicios dentales</CardTitle>
					<CardDescription className="text-secondary-foreground">
						Llenar el formulario con los campos correspondientes
					</CardDescription>
				</CardHeader>
				<CardContent></CardContent>
			</Card>
		</div>
	);
}
