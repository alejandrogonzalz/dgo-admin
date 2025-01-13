import { CalendarComponent } from "@/components/calendar";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { DATE_FORMAT, getCurrentWeekRange } from "@/lib/format";
import { useGetAppointments } from "@/state/queries/appointments";
import { GetAppointmentsParamsSchema, zGetAppointmentsParamsSchema } from "@/state/queries/appointments/schema";
import { CalendarEventExternal } from "@schedule-x/calendar";
import { format } from "date-fns";
import { useCallback, useState } from "react";
import { string } from "zod";

export function CalendarPage() {
	const [dateRange, setDateRange] = useState<GetAppointmentsParamsSchema>(() => getCurrentWeekRange());
	const { data } = useGetAppointments({ start: dateRange.start, end: dateRange.end });

	return (
		<div className="p-4">
			<CardHeader className="text-xl">
				<CardTitle>Calendario</CardTitle>
			</CardHeader>
			<CalendarComponent events={data} onRangeChange={setDateRange} />
		</div>
	);
}
