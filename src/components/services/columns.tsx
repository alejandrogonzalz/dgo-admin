import { ServiceSchema } from "@/state/queries/services/schema";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ServiceSchema>[] = [
	{
		accessorKey: "id",
		header: () => <div className="text-right">Id</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("id")}</div>;
		},
	},
	{
		accessorKey: "service",
		header: () => <div className="text-right">Servicio</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("service")}</div>;
		},
	},
	{
		accessorKey: "price",
		header: () => <div className="text-right">Precio</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("price")}</div>;
		},
	},
	{
		accessorKey: "description",
		header: () => <div className="text-right">Descripción</div>,
		cell: ({ row }) => {
			return <div className="text-right font-medium">{row.getValue("description")}</div>;
		},
	},
];
