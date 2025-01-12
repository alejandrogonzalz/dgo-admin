import { format, parse } from "date-fns";
import { es } from "date-fns/locale";

export function formatInputToNumber(input: unknown): string {
	if (typeof input === "string") {
		const numericValue = input.replace(/[^0-9]/g, "");
		return numericValue;
	}

	if (typeof input === "number") {
		return input.toString();
	}

	return "";
}
export function joinWithAmpersand(strings: string[] | undefined): string {
	if (strings === undefined || strings.length === 0) return "";
	if (strings.length === 1) return strings[0];
	const allButLast = strings.slice(0, -1).join(", ");
	const last = strings[strings.length - 1];
	return `${allButLast} & ${last}`;
}

export function formatDateRange(start: string, end: string): string {
	const inputFormat = "yyyy-MM-dd HH:mm";

	const startDate = parse(start, inputFormat, new Date());
	const endDate = parse(end, inputFormat, new Date());

	const isSameDay = format(startDate, "yyyy-MM-dd") === format(endDate, "yyyy-MM-dd");

	if (isSameDay) {
		return `${format(startDate, "d 'de' MMMM 'de' yyyy", { locale: es })} ⋅ ${format(startDate, "HH:mm")} – ${format(endDate, "HH:mm")}`;
	} else {
		return `${format(startDate, "d 'de' MMMM 'de' yyyy, HH:mm", { locale: es })} – ${format(endDate, "d 'de' MMMM 'de' yyyy, HH:mm", { locale: es })}`;
	}
}
