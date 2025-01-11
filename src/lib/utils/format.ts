interface PesoFormatterProps {
	amount: number;
	minimumFractionDigits?: number;
	maximumFractionDigits?: number;
}

export function formatToMXNPeso({ amount, minimumFractionDigits = 0, maximumFractionDigits = 0 }: PesoFormatterProps) {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		minimumFractionDigits,
		maximumFractionDigits,
	}).format(amount);
}

export function truncateString(str: string, maxLength: number): string {
	if (str.length <= maxLength) {
		return str;
	}

	const ellipsis = "...";
	const truncatedLength = maxLength - ellipsis.length;

	return str.slice(0, truncatedLength) + ellipsis;
}
