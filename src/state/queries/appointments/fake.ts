import { DATE_FORMAT } from "@/lib/format";
import { faker } from "@faker-js/faker";
import { addDays, format, parse, setHours, setMinutes } from "date-fns"; // Import the format function
import { GetAppointmentsParamsSchema } from "./schema";

const TITLE_ENUM = ["Exodoncia", "Limpieza", "Empastes", "Valoración dental", "Extracción"];
const LOCATION_ENUM = ["Unidad 1", "Unidad 2"];
const CALENDAR_ID_ENUM = ["1", "2", "3"];

const generateRandomDateInRange = ({ start, end }: GetAppointmentsParamsSchema) => {
	const startDateFormatted = parse(start, DATE_FORMAT, new Date());
	const endDateFormattedd = parse(end, DATE_FORMAT, new Date());

	// Generate a random day within the range
	const randomDay = faker.date.between({ from: startDateFormatted, to: endDateFormattedd });

	// Set random hour between 8 AM and 4 PM (to allow for a 1-hour end time)
	const randomHour = faker.number.int({ min: 8, max: 16 });

	// Set minutes to either 0 or 30 for more realistic scheduling
	const randomMinutes = faker.helpers.arrayElement([0, 30]);

	const startTime = setMinutes(setHours(randomDay, randomHour), randomMinutes);
	const endTime = setMinutes(setHours(randomDay, randomHour + 1), randomMinutes);

	return { startDate: startTime, endDate: endTime };
};

export const generateFakeAppointment = ({ start, end }: GetAppointmentsParamsSchema) => {
	const { startDate, endDate } = generateRandomDateInRange({ start, end });

	return {
		id: faker.number.int({ max: 100 }),
		start: format(startDate, "yyyy-MM-dd HH:mm"),
		end: format(endDate, "yyyy-MM-dd HH:mm"),
		title: faker.helpers.arrayElement(TITLE_ENUM),
		people: Array.from({ length: 1 }, () => faker.person.fullName()),
		location: faker.helpers.arrayElement(LOCATION_ENUM),
		description: faker.lorem.sentence(),
		mobile: faker.phone.number({ style: "national" }),
		calendarId: faker.helpers.arrayElement(CALENDAR_ID_ENUM),
	};
};

interface GenerateFakeAppointmentsProps extends GetAppointmentsParamsSchema {
	count: number;
}

export const generateFakeAppointments = ({ count, start, end }: GenerateFakeAppointmentsProps) => {
	return Array.from({ length: count }, () => generateFakeAppointment({ start, end }));
};
