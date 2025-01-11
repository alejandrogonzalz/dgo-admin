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

const ACCEPTED_MIME_TYPES_IMG = ["image/png", "image/jpeg"];
const MB_BYTES = 1024 * 1024;

const imgSuperRefine = (file: File, ctx: z.RefinementCtx) => {
	if (!ACCEPTED_MIME_TYPES_IMG.includes(file.type)) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: "El archivo debe ser una imagen en formato PNG o JPEG.",
		});
	}
	if (file.size > 3 * MB_BYTES) {
		ctx.addIssue({
			code: z.ZodIssueCode.too_big,
			type: "array",
			message: `El archivo no puede ser mayor a 3 MB. Tamaño actual: ${(file.size / MB_BYTES).toFixed(2)} MB`,
			maximum: 3 * MB_BYTES,
			inclusive: true,
		});
	}
};

export const zUploadServicesSchema = () =>
	z.object({
		file: z.instanceof(File, { message: "Debe ser un archivo válido." }).superRefine(imgSuperRefine),
		service: z
			.string({ message: "Debe ingresar el nombre del servicio." })
			.min(5, { message: "El título debe ser mayor a 5 caracteres." }),
		price: z
			.number({ message: "El precio debe ser un número." })
			.min(100, { message: "El precio debe ser mayor a $100." }),
		description: z
			.string({ message: "La descripción es obligatoria." })
			.min(100, { message: "La descripción debe ser de al menos 100 caracteres." })
			.max(500, { message: "La descripción no puede exceder los 500 caracteres." }),
	});

export type UploadServicesSchema = z.infer<ReturnType<typeof zUploadServicesSchema>>;
