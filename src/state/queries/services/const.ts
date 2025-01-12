import { createQueryKeys, type inferQueryKeys } from "@lukemorales/query-key-factory";

export const RQKEYS = createQueryKeys("servicesService", {
	getServices: () => ["getServices"],
});

export type OrdersKeys = inferQueryKeys<typeof RQKEYS>;
