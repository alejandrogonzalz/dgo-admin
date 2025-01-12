import { CalendarComponent } from "@/components/calendar";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarEventExternal } from "@schedule-x/calendar";

export function CalendarPage() {
	const exampleEvent: CalendarEventExternal[] = [
		{
			id: "1",
			start: "2025-01-11 10:05",
			end: "2025-01-11 10:55",
			title: "Team Meeting",
			people: ["Alice"],
			location: "Conference Room A",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, est! Non, iure consequatur perferendis delectus nam doloremque inventore deserunt accusamus vero pariatur, quo cupiditate fugiat iusto nostrum fugit corrupti doloribus!",
		},
	];

	return (
		<div className="p-4">
			<CardHeader className="text-xl">
				<CardTitle>Calendario</CardTitle>
			</CardHeader>
			<CalendarComponent events={exampleEvent} />
		</div>
	);
}
