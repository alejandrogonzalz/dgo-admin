import { columns } from "@/components/appointments/columns";
import { DataTable } from "@/components/appointments/data-table";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAppointments } from "@/state/queries/appointments";

export function Home() {
	const { data } = useGetAppointments();

	return (
		<div className="p-4">
			<Card variant="outline">
				<CardHeader className="text-xl">
					<CardTitle>Bandeja de entrada</CardTitle>
					<CardDescription className="text-secondary-foreground">Lista de todas las citas por aprobar</CardDescription>
				</CardHeader>
				<CardContent className="mt-5">
					<DataTable columns={columns} data={data || []} />
				</CardContent>
			</Card>
		</div>
	);
}
