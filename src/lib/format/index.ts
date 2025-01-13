export * from "./dates";

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
