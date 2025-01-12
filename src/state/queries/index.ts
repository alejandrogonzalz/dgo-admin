import { faker } from "@faker-js/faker";
import * as z from "zod";

export const STALE = {
	SECONDS: {
		/**
		 * 15 seconds
		 */
		FIFTEEN: 1e3 * 15,
		/**
		 * 30 seconds
		 */
		THIRTY: 1e3 * 30,
	},
	MINUTES: {
		/**
		 * 1 minute
		 */
		ONE: 1e3 * 60,
		/**
		 * 5 minutes
		 */
		FIVE: 1e3 * 60 * 5,
	},
	HOURS: {
		/**
		 * 1 hour
		 */
		ONE: 1e3 * 60 * 60,
	},
	/**
	 * 1 day
	 */
	INFINITY: Number.POSITIVE_INFINITY,
} as const;

export function sortByCreatedAt<T extends { createdAt?: string | null }>(
	data: T[],
	order: "asc" | "desc" = "desc",
): T[] {
	return data
		?.map((item) => ({
			...item,
			createdAt: item.createdAt || "1970-01-01T00:00:00Z",
		}))
		?.sort((currentItem, nextItem) => {
			const currentItemDate = new Date(currentItem?.createdAt).getTime();
			const nextItemDate = new Date(nextItem?.createdAt).getTime();

			return order === "desc" ? nextItemDate - currentItemDate : currentItemDate - nextItemDate;
		});
}

export function generateFakeData<T>(schema: z.ZodType<T, any, any>): T {
	if (schema instanceof z.ZodObject) {
		const shape = schema.shape;
		const generatedData: Record<string, any> = {};

		for (const key in shape) {
			const fieldSchema = shape[key];
			generatedData[key] = generateFakeData(fieldSchema);
		}

		return generatedData as T;
	}

	if (schema instanceof z.ZodString) {
		return faker.lorem.words(3) as any;
	}

	if (schema instanceof z.ZodNumber) {
		return parseFloat(faker.commerce.price({ min: 10, max: 100 })) as any;
	}

	if (schema instanceof z.ZodArray) {
		const itemSchema = schema.element;
		return Array.from({ length: 5 }, () => generateFakeData(itemSchema)) as any;
	}

	return {} as T;
}
