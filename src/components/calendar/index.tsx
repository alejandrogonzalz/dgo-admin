import {
	CalendarEventExternal,
	createViewDay,
	createViewMonthAgenda,
	createViewMonthGrid,
	createViewWeek,
} from "@schedule-x/calendar";
import { createCurrentTimePlugin } from "@schedule-x/current-time";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createScrollControllerPlugin } from "@schedule-x/scroll-controller";

import { createEventsServicePlugin } from "@schedule-x/events-service";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";

import "@schedule-x/theme-shadcn/dist/index.css";
import "./index.css";

import { format, sub } from "date-fns";
import { useEffect, useState } from "react";
import { useTheme } from "../theme-provider";
import { EventModal } from "./event-modal";

interface CalendarComponentProps {
	events: CalendarEventExternal[] | undefined;
}

export function CalendarComponent({ events }: CalendarComponentProps) {
	const { theme } = useTheme();
	const eventsService = useState(() => createEventsServicePlugin())[0];
	const eventModal = useState(() => createEventModalPlugin())[0];
	const scrollController = useState(() =>
		createScrollControllerPlugin({
			initialScroll: format(sub(new Date(), { hours: 4 }), "HH:mm"),
		}),
	)[0];
	const dragAndDropPlugin = useState(() => createDragAndDropPlugin())[0];

	const calendar = useCalendarApp({
		views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
		events,
		plugins: [eventsService, eventModal, createCurrentTimePlugin(), scrollController, dragAndDropPlugin],
		theme: "shadcn",
		locale: "es-ES",
		calendars: {
			1: {
				colorName: "violet",
				lightColors: {
					main: "#8b5cf6",
					container: "#ede9fe",
					onContainer: "#4c1d95",
				},
				darkColors: {
					main: "#c4b5fd",
					container: "#6d28d9",
					onContainer: "#f3e8ff",
				},
			},
			2: {
				colorName: "green",
				lightColors: {
					main: "#10b981",
					container: "#d1fae5",
					onContainer: "#065f46",
				},
				darkColors: {
					main: "#6ee7b7",
					container: "#047857",
					onContainer: "#ecfdf5",
				},
			},
			3: {
				colorName: "blue",
				lightColors: {
					main: "#3b82f6",
					container: "#dbeafe",
					onContainer: "#1e3a8a",
				},
				darkColors: {
					main: "#93c5fd",
					container: "#1d4ed8",
					onContainer: "#eff6ff",
				},
			},
		},
		callbacks: {
			onEventUpdate(event) {
				// console.log(event);
			},
		},
	});

	useEffect(() => {
		if (theme === "dark") calendar.setTheme("dark");
		if (theme === "light") calendar.setTheme("light");
	}, [theme]);

	return (
		<div className="mt-3">
			<ScheduleXCalendar calendarApp={calendar} customComponents={{ eventModal: EventModal }} />
		</div>
	);
}
