import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textAreaVariants = cva(
	"flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
	{
		variants: {
			variant: {
				default: "",
				inverse: "border-inverse-input",
				secondary: "",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface TextAreaProps extends React.ComponentProps<"textarea">, VariantProps<typeof textAreaVariants> {
	asChild?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, variant, ...props }, ref) => {
	return <textarea className={cn(textAreaVariants({ variant, className }))} ref={ref} {...props} />;
});
Textarea.displayName = "Textarea";

export { Textarea };
