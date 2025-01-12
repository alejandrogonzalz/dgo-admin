import * as z from "zod";

export const zServiceSchema = () =>
	z.object({
		id: z.number(),
		service: z.string(),
		price: z.number(),
		description: z.string(),
		file: z.string(),
	});
export const zServiceListSchema = () => z.array(zServiceSchema());
export type ServiceSchema = z.infer<ReturnType<typeof zServiceSchema>>;
export type ServiceListSchema = z.infer<ReturnType<typeof zServiceListSchema>>;
