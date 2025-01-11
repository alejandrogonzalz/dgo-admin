/**
 * Formats the input to allow only numeric values.
 * If the input is not a valid number, it returns an empty string.
 *
 * @param input - The value to be formatted.
 * @returns The formatted numeric value or an empty string.
 */
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
