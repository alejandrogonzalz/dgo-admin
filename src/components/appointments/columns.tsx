import { joinWithAmpersand } from "@/lib/format";
import { AppointmentSchema } from "@/state/queries/appointments/schema";
import { ServiceSchema } from "@/state/queries/services/schema";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<AppointmentSchema>[] = [
	{
		accessorKey: "id",
		header: () => <div className="text-right">Id</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("id")}</div>;
		},
	},
	{
		accessorKey: "people",
		header: () => <div className="text-right">Paciente</div>,
		cell: ({ row }) => {
			const people = joinWithAmpersand(row.getValue("people"));
			return <div className="text-right font-medium">{people}</div>;
		},
	},
	{
		accessorKey: "mobile",
		header: () => <div className="text-right">Telefono celular</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("mobile")}</div>;
		},
	},
	{
		accessorKey: "location",
		header: () => <div className="text-right">Unidad</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("location")}</div>;
		},
	},
	{
		accessorKey: "description",
		header: () => <div className="text-right">Descripción</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("description")}</div>;
		},
	},
	{
		accessorKey: "start",
		header: () => <div className="text-right">Fecha de inicio</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("start")}</div>;
		},
	},
	{
		accessorKey: "end",
		header: () => <div className="text-right">Fecha de fin</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("end")}</div>;
		},
	},
	// {
	// 	accessorKey: "calendarId",
	// 	header: () => <div className="text-right">Descripción</div>,
	// 	cell: ({ row }) => {
	// 		return <div className="text-right font-medium">{row.getValue("description")}</div>;
	// 	},
	// },
];
