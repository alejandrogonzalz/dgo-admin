import { generateFakeData, sortByCreatedAt, STALE } from "#/state/queries";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";
import { RQKEYS as servicesKeys } from "./const";
import { UserListSchema, zUserListSchema } from "./schema";
export { generateFakeData } from "#/state/queries/index";

export const useGetServices = (queryOptions: Omit<UseQueryOptions<UserListSchema>, "queryKey"> = {}) => {
	const fakeData = useMemo(() => {
		return generateFakeData<UserListSchema>(zUserListSchema());
	}, []);
	const { data, ...rest } = useQuery({
		queryKey: servicesKeys.getUsers().queryKey,
		queryFn: async () => {
			return fakeData;
		},
		staleTime: STALE.SECONDS.FIFTEEN,
		...queryOptions,
	});

	return { data, ...rest };
};
