import { CalendarComponent } from "@/components/calendar";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarEventExternal } from "@schedule-x/calendar";

export function CalendarPage() {
	const exampleEvent: CalendarEventExternal[] = [
		{
			id: "1",
			start: "2025-01-08 10:00",
			end: "2025-01-08 10:30",
			title: "Exodoncia",
			people: ["Christian Ruiz"],
			location: "Unidad 1",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, est! Non, iure consequatur perferendis delectus nam doloremque inventore deserunt accusamus vero pariatur, quo cupiditate fugiat iusto nostrum fugit corrupti doloribus! ",
			calendarId: "1",
		},
		{
			id: "8",
			start: "2025-01-07 12:00",
			end: "2025-01-07 13:00",
			title: "Empastes",
			people: ["Eduardo Diosdado"],
			location: "Unidad 2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, est! Non, iure consequatur perferendis delectus nam doloremque inventore deserunt accusamus vero pariatur, quo cupiditate fugiat iusto nostrum fugit corrupti doloribus!",
			calendarId: "2",
		},
		{
			id: "15",
			start: "2025-01-08 12:00",
			end: "2025-01-08 13:00",
			title: "Valoración dental",
			people: ["Alejandro Gonzalez"],
			location: "Unidad 2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, est! Non, iure consequatur perferendis delectus nam doloremque inventore deserunt accusamus vero pariatur, quo cupiditate fugiat iusto nostrum fugit corrupti doloribus!",
			calendarId: "3",
		},
		{
			id: "53",
			start: "2025-01-08 12:00",
			end: "2025-01-08 13:00",
			title: "Limpieza",
			people: ["Leonardo Orozco"],
			location: "Unidad 2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, est! Non, iure consequatur perferendis delectus nam doloremque inventore deserunt accusamus vero pariatur, quo cupiditate fugiat iusto nostrum fugit corrupti doloribus!",
			calendarId: "2",
		},
		{
			id: "31",
			start: "2025-01-08 14:00",
			end: "2025-01-08 15:00",
			title: "Limpieza",
			people: ["Isabella Orozco"],
			location: "Unidad 2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, est! Non, iure consequatur perferendis delectus nam doloremque inventore deserunt accusamus vero pariatur, quo cupiditate fugiat iusto nostrum fugit corrupti doloribus!",
			calendarId: "3",
		},
		{
			id: "123",
			start: "2025-01-08 14:00",
			end: "2025-01-08 15:00",
			title: "Limpieza",
			people: ["Leidy Guerrero"],
			location: "Unidad 2",
			description: "Lorem ipsum dolor",
			calendarId: "1",
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
