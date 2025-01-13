import { CalendarComponent } from "@/components/calendar";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentWeekRange } from "@/lib/format";
import { useGetAppointments } from "@/state/queries/appointments";
import { GetAppointmentsParamsSchema } from "@/state/queries/appointments/schema";
import { useState } from "react";

export function CalendarPage() {
	const [dateRange, setDateRange] = useState<GetAppointmentsParamsSchema>(() => getCurrentWeekRange());
	const { data } = useGetAppointments({ start: dateRange.start, end: dateRange.end });

	return (
		<div className="p-4">
			<CardHeader className="text-xl">
				<CardTitle>Calendario</CardTitle>
			</CardHeader>
			<CalendarComponent events={data || []} onRangeChange={setDateRange} />
		</div>
	);
}
