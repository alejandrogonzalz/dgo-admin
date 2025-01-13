import { createQueryKeys, type inferQueryKeys } from "@lukemorales/query-key-factory";

export const RQKEYS = createQueryKeys("appointmentsService", {
	getAppointments: () => ["getAppointments"],
});

export type OrdersKeys = inferQueryKeys<typeof RQKEYS>;
