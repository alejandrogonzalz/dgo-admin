import * as Icons from "@/components/com/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDateRangeToString, joinWithAmpersand } from "@/lib/format";
import { cn } from "@/lib/utils";
import { CalendarEventExternal } from "@schedule-x/calendar";
import { Pencil, Trash2 } from "lucide-react";

export function EventModal({ calendarEvent }: CalendarEventExternal) {
	return (
		<Card variant="calendar" className="scrollbar-thin relative max-h-[250px] overflow-y-scroll">
			<div className="absolute right-0 flex flex-row gap-2">
				<Button variant="destructive" size="icon">
					<Trash2 />
				</Button>
				<Button variant="outline" size="icon" className="bg-transparent hover:bg-sidebar-foreground/10">
					<Pencil />
				</Button>
			</div>

			<CardHeader className="mb-5 mr-[72px] grid grid-cols-[30px_1fr] items-start justify-start">
				<span className="mt-1 flex h-auto w-auto items-start">
					<div
						className={cn("aspect-square w-[18px] rounded-sm bg-foreground", {
							"bg-violet-main": calendarEvent?.calendarId === "1",
							"bg-green-main": calendarEvent?.calendarId === "2",
							"bg-blue-main": calendarEvent?.calendarId === "3",
						})}
					/>
				</span>

				<strong className="!m-0 text-lg font-medium">{calendarEvent?.title}</strong>
			</CardHeader>
			<CardContent>
				<EventItem
					icon={<Icons.CalendarClock />}
					label={formatDateRangeToString(calendarEvent?.start, calendarEvent?.end)}
					textSize="8px"
				/>
				<EventItem icon={<Icons.CalendarPerson />} label={joinWithAmpersand(calendarEvent?.people)} />
				<EventItem icon={<Icons.CalendarLocation />} label={calendarEvent?.location} />
				<EventItem icon={<Icons.CalendarNotes />} label={calendarEvent?.description} />
			</CardContent>
		</Card>
	);
}

interface EventItemProps {
	icon: React.ReactNode;
	label: string;
	className?: string;
	textSize?: string;
}
const EventItem = ({ icon, label, className, textSize }: EventItemProps) => {
	return (
		<div className={cn("mb-2 grid grid-cols-[30px_1fr] items-start", className)}>
			<span className="mt-[1px] flex w-auto items-start">{icon}</span>
			<span className={cn("flex items-start text-sm", `!text-[${textSize}]`)}>{label}</span>
		</div>
	);
};
