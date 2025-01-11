import * as React from "react";

import { cn } from "@/lib/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("rounded-md border bg-card p-5 text-card-foreground shadow lg:rounded-lg", {
	variants: {
		variant: {
			default: "rounded-md border bg-card p-3 text-card-foreground shadow lg:rounded-lg",
			outline: "bg-transparent border-sidebar-border text-foreground shadow-none",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
	asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, ...props }, ref) => (
	<div ref={ref} className={cn(cardVariants({ variant, className }))} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col space-y-1.5", className)} {...props} />,
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
	),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
	),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn("p-2", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
	),
);
CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
