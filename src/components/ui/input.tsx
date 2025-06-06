import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const variantConfig = {
	variant: {
		default: "",
		inverse: "border-inverse-input",
		secondary: "",
	},
};

const inputVariants = cva(
	"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
	{
		variants: variantConfig,
		defaultVariants: {
			variant: "default",
		},
	},
);

export type VariantType = keyof (typeof variantConfig)["variant"];

export interface InputProps extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {
	asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant, type, ...props }, ref) => {
	return <input type={type} className={cn(inputVariants({ variant, className }))} ref={ref} {...props} />;
});
Input.displayName = "Input";

export { Input };
