import { createQueryKeys, type inferQueryKeys } from "@lukemorales/query-key-factory";

export const RQKEYS = createQueryKeys("appointmentsService", {
	getAppointments: (start: string, end: string) => [start, end],
});

export type OrdersKeys = inferQueryKeys<typeof RQKEYS>;
