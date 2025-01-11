"use client";

import type * as React from "react";

import { HydrationBoundary, QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			// Structural sharing between responses makes it impossible to rely on
			// "first seen" timestamps on objects to determine if they're fresh.
			// Disable this optimization so that we can rely on "first seen" timestamps.
			structuralSharing: false,
			// We don't want to retry queries by default, because in most cases we
			// want to fail early and show a response to the user. There are
			// exceptions, and those can be made on a per-query basis. For others, we
			// should give users controls to retry.
			retry: false,
			throwOnError: (error, query) => {
				if (error instanceof z.ZodError) {
					console.error(`ZodError: ${query?.queryHash}`, error?.issues);
					return false;
				}

				return typeof query.state.data === "undefined";
			},
		},
	},
});

export function ReactQueryClientProvider({ children }: React.PropsWithChildren): React.JSX.Element {
	return (
		<QueryClientProvider client={queryClient}>
			<HydrationBoundary>
				<QueryErrorResetBoundary>
					{({ reset }) => (
						<ErrorBoundary
							onReset={reset}
							fallbackRender={({ resetErrorBoundary }) => (
								<div className="h-screen w-screen flex justify-center items-center">
									<div className="flex flex-col gap-4 items-center">
										<h1 className="text-xl">¡Hubo un error!</h1>
										<Button variant="destructive" onClick={resetErrorBoundary}>
											Intentar otra vez
										</Button>
									</div>
								</div>
							)}
						>
							{children}
						</ErrorBoundary>
					)}
				</QueryErrorResetBoundary>
			</HydrationBoundary>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
