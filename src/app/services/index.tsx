import { columns } from "@/components/services/columns";
import { DataTable } from "@/components/services/data-table";
import { useGetServices } from "@/state/queries/services";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
	const { data } = useGetServices();

	return (
		<div className="p-4">
			<Card variant="outline">
				<CardHeader className="text-xl">
					<CardTitle>Servicios</CardTitle>
					<CardDescription className="text-secondary-foreground">
						Lista de los servicios dentales registrados
					</CardDescription>
				</CardHeader>
				<CardContent className="mt-5">
					<DataTable columns={columns} data={data || []} />
				</CardContent>
			</Card>
		</div>
	);
}
