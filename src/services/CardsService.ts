import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPageCard } from "types/types";

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (build) => ({
    fetchAllItems: build.query<IPageCard, string>({
      query: (name: string) => ({
        url: "/character/?page=1",
        params: {
          name: name,
        },
      }),
    }),
  }),
});
