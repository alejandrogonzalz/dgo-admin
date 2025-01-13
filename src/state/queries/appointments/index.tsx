import { generateFakeData, sortByCreatedAt, STALE } from "#/state/queries";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";
import { RQKEYS as servicesKeys } from "./const";
import { generateFakeAppointments } from "./fake";
import { AppointmentListSchema, GetAppointmentsParamsSchema, zAppointmentListSchema } from "./schema";

export const useGetAppointments = (
	{ start, end }: GetAppointmentsParamsSchema,
	queryOptions: Omit<UseQueryOptions<AppointmentListSchema>, "queryKey"> = {},
) => {
	const fakeData = useMemo(() => {
		return generateFakeAppointments({
			count: 10,
			start,
			end,
		});
	}, [start, end]);

	const { data, ...rest } = useQuery({
		queryKey: servicesKeys.getAppointments(start, end).queryKey,
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
