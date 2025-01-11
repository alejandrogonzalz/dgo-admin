import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, type VariantType } from "@/components/ui/input";
import { useReducer } from "react";
import { UseFormReturn } from "react-hook-form";

type TextInputProps = {
	form: UseFormReturn<any>;
	name: string;
	label: string;
	placeholder: string;
	inputClassName?: string;
	formItemClassName?: string;
	variant?: VariantType;
};

const currencyFormatter = new Intl.NumberFormat("es-MX", {
	currency: "MXN",
	currencyDisplay: "symbol",
	currencySign: "standard",
	style: "currency",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

export default function CurrencyInput({
	form,
	name,
	label,
	placeholder,
	formItemClassName,
	inputClassName,
	variant,
}: TextInputProps) {
	const initialValue = form.getValues()[name] ? currencyFormatter.format(form.getValues()[name]) : "";

	const [value, setValue] = useReducer((_: any, next: string) => {
		const digits = next.replace(/\D/g, "");
		return currencyFormatter.format(Number(digits) / 100);
	}, initialValue);

	// Handles both real value and formatted value updates
	function handleChange(realChangeFn: Function, formattedValue: string) {
		const digits = formattedValue.replace(/\D/g, ""); // Extract only digits
		const realValue = Number(digits) / 100; // Convert to a numeric value
		realChangeFn(realValue); // Update the form's real value
	}

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => {
				field.value = value;
				const _change = field.onChange;

				return (
					<FormItem className={formItemClassName}>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input
								className={inputClassName}
								variant={variant}
								placeholder={placeholder}
								type="text"
								{...field}
								onChange={(ev) => {
									setValue(ev.target.value);
									handleChange(_change, ev.target.value);
								}}
								value={value}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				);
			}}
		/>
	);
}
