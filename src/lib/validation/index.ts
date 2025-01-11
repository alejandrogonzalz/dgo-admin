import * as z from "zod";

export const zLoginSchema = () =>
	z.object({
		username: z.string().min(1, {
			message: "Usuario inválido.",
		}),
		password: z.string().min(1, {
			message: "Contraseña inválida.",
		}),
	});

export type LoginSchema = z.infer<ReturnType<typeof zLoginSchema>>;
