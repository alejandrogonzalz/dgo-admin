import { generateFakeData, sortByCreatedAt, STALE } from "#/state/queries";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";
import { RQKEYS as servicesKeys } from "./const";
import { ServiceListSchema, zServiceListSchema } from "./schema";
export { generateFakeData } from "#/state/queries/index";

export const useGetServices = (queryOptions: Omit<UseQueryOptions<ServiceListSchema>, "queryKey"> = {}) => {
	const fakeData = useMemo(() => {
		return generateFakeData<ServiceListSchema>(zServiceListSchema());
	}, []);
	const { data, ...rest } = useQuery({
		queryKey: servicesKeys.getServices().queryKey,
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
