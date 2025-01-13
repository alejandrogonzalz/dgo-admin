import * as z from "zod";

export const zUserSchema = () =>
	z.object({
		id: z.number(),
		name: z.string(),
		email: z.string().email(),
		password: z.string(),
	});

export const zUserListSchema = () => z.array(zUserSchema());
export type UserSchema = z.infer<ReturnType<typeof zUserSchema>>;
export type UserListSchema = z.infer<ReturnType<typeof zUserListSchema>>;
