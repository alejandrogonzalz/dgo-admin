import { createQueryKeys, type inferQueryKeys } from "@lukemorales/query-key-factory";

export const RQKEYS = createQueryKeys("userService", {
	getUsers: () => ["getUsers"],
});

export type OrdersKeys = inferQueryKeys<typeof RQKEYS>;
