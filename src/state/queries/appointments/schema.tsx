import { isValid, parse } from "date-fns";
import * as z from "zod";

export const zAppointmentSchema = () =>
	z.object({
		id: z.number(),
		start: z.string().refine(
			(val) => {
				const parsedDate = parse(val, "yyyy-MM-dd HH:mm", new Date());
				return isValid(parsedDate);
			},
			{
				message: 'Invalid start date format. Expected "YYYY-MM-DD HH:mm".',
			},
		),
		end: z.string().refine(
			(val) => {
				const parsedDate = parse(val, "yyyy-MM-dd HH:mm", new Date());
				return isValid(parsedDate);
			},
			{
				message: 'Invalid end date format. Expected "YYYY-MM-DD HH:mm".',
			},
		),
		title: z.string(),
		people: z.array(z.string()),
		location: z.string().optional(),
		description: z.string().optional(),
		mobile: z.string(),
		calendarId: z.string().optional(),
	});

export const zAppointmentListSchema = () => z.array(zAppointmentSchema());
export type AppointmentSchema = z.infer<ReturnType<typeof zAppointmentSchema>>;
export type AppointmentListSchema = z.infer<ReturnType<typeof zAppointmentListSchema>>;

export const zGetAppointmentsParamsSchema = () =>
	z.object({
		start: z.string().refine(
			(val) => {
				const parsedDate = parse(val, "yyyy-MM-dd HH:mm", new Date());
				return isValid(parsedDate);
			},
			{
				message: 'Invalid start date format. Expected "YYYY-MM-DD HH:mm".',
			},
		),
		end: z.string().refine(
			(val) => {
				const parsedDate = parse(val, "yyyy-MM-dd HH:mm", new Date());
				return isValid(parsedDate);
			},
			{
				message: 'Invalid end date format. Expected "YYYY-MM-DD HH:mm".',
			},
		),
	});
export type GetAppointmentsParamsSchema = z.infer<ReturnType<typeof zGetAppointmentsParamsSchema>>;
