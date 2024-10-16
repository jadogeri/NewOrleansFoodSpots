import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl:"http://10.10.1.236/api" });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['User']
});