import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

//const BASE_URL = "http://localhost:4000/api"
const BASE_URL =  process.env.REACT_APP_NOFS_SERVER_URL
console.log("base url ==================================",BASE_URL)


const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  refetchOnFocus: true,
  invalidationBehavior:"immediately",
  refetchOnMountOrArgChange:true,
  endpoints: () => ({}),
  tagTypes: ['User','Test', 'Business']
});
