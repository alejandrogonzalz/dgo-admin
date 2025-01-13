import { faker } from "@faker-js/faker";
import { format } from "date-fns"; // Import the format function

export const generateFakeAppointment = () => {
	return {
		id: faker.number.int(),
		start: format(faker.date.future(), "yyyy-MM-dd HH:mm"),
		end: format(faker.date.future(), "yyyy-MM-dd HH:mm"),
		title: faker.lorem.words(3),
		people: Array.from({ length: 1 }, () => faker.person.fullName()),
		location: faker.address.city(),
		description: faker.lorem.sentence(),
		mobile: faker.phone.imei(),
	};
};

export const generateFakeAppointments = (count: number) => {
	return Array.from({ length: count }, generateFakeAppointment);
};
