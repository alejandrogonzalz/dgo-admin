import {
	CalendarEventExternal,
	createViewDay,
	createViewMonthAgenda,
	createViewMonthGrid,
	createViewWeek,
} from "@schedule-x/calendar";
import { createEventModalPlugin } from "@schedule-x/event-modal";

import { createEventsServicePlugin } from "@schedule-x/events-service";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";

import "@schedule-x/theme-shadcn/dist/index.css";
import "./index.css";

import { useEffect, useState } from "react";
import { useTheme } from "../theme-provider";

interface CalendarComponentProps {
	events: CalendarEventExternal[] | undefined;
}

export function CalendarComponent({ events }: CalendarComponentProps) {
	const { theme } = useTheme();
	const eventsService = useState(() => createEventsServicePlugin())[0];
	const eventModal = useState(() => createEventModalPlugin())[0];

	const calendar = useCalendarApp({
		views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
		events: events,
		plugins: [eventsService, eventModal],
		theme: "shadcn",
		locale: "es-ES",
	});

	useEffect(() => {
		eventsService.getAll();
	}, []);

	useEffect(() => {
		if (theme === "dark") calendar.setTheme("dark");
		if (theme === "light") calendar.setTheme("light");
	}, [theme]);

	return (
		<div className="mt-5">
			<ScheduleXCalendar calendarApp={calendar} />
		</div>
	);
}
