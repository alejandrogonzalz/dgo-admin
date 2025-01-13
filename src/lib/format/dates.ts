import { endOfWeek, format, parse, startOfWeek } from "date-fns";
import { es } from "date-fns/locale";

export const DATE_FORMAT = "yyyy-MM-dd HH:mm" as const;

export const getCurrentWeekRange = (): { start: string; end: string } => {
	const today = new Date();

	const weekStart = startOfWeek(today, { weekStartsOn: 1 });
	const weekEnd = endOfWeek(today, { weekStartsOn: 1 });

	return {
		start: format(weekStart, DATE_FORMAT),
		end: format(weekEnd, DATE_FORMAT),
	};
};

export function formatDateRangeToString(start: string, end: string): string {
	const startDate = parse(start, DATE_FORMAT, new Date());
	const endDate = parse(end, DATE_FORMAT, new Date());

	const isSameDay = format(startDate, "yyyy-MM-dd") === format(endDate, "yyyy-MM-dd");

	if (isSameDay) {
		return `${format(startDate, "d 'de' MMMM 'de' yyyy", { locale: es })} ⋅ ${format(startDate, "HH:mm")} – ${format(endDate, "HH:mm")}`;
	} else {
		return `${format(startDate, "d 'de' MMMM 'de' yyyy, HH:mm", { locale: es })} – ${format(endDate, "d 'de' MMMM 'de' yyyy, HH:mm", { locale: es })}`;
	}
}
