import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mapGetMatchesResponse } from "../model/mappers";
import { GetMatchesResponse } from "./types";
import { ApiResponse } from "#shared/model";
import { Match } from "../model";

const matchesApi = createApi({
  reducerPath: "matches",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app.ftoyd.com/fronttemp-service",
  }),
  endpoints: (builder) => ({
    getMatches: builder.query<Match[], void>({
      query: () => ({
        url: "/fronttemp",
        method: "GET",
      }),
      transformResponse: (response: ApiResponse<GetMatchesResponse>) =>
        mapGetMatchesResponse(response),
    }),
  }),
});

export default matchesApi;

export const { useGetMatchesQuery, useLazyGetMatchesQuery } = matchesApi;
