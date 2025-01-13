import { generateFakeData, sortByCreatedAt, STALE } from "#/state/queries";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";
import { RQKEYS as servicesKeys } from "./const";
import { generateFakeAppointments } from "./fake";
import { AppointmentListSchema, zAppointmentListSchema } from "./schema";
// import { ServiceListSchema, zServiceListSchema } from "./schema";
// export { generateFakeData } from "#/state/queries/index";

export const useGetAppointments = (queryOptions: Omit<UseQueryOptions<AppointmentListSchema>, "queryKey"> = {}) => {
	const fakeData = useMemo(() => {
		return generateFakeAppointments(5);
	}, []);
	const { data, ...rest } = useQuery({
		queryKey: servicesKeys.getAppointments().queryKey,
		queryFn: async () => {
			// const response = await axios.get<ServiceListSchema>("");
			// return zServiceListSchema().parse(response.data);
			return fakeData;
		},
		staleTime: STALE.SECONDS.FIFTEEN,
		...queryOptions,
	});

	return { data, ...rest };
};
